import React, { useEffect, useState } from 'react';
import BusLayout from './BusLayout';
import ReservationForm from './ReservationForm';
import { v4 as uuidv4 } from 'uuid';
import Passenger from '../utils/Passenger';
import Seat from '../utils/Seat';
import { useNavigate } from 'react-router-dom';



const ReservationView = () => {
    const [seats, setSeats] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        setSeats(Seat.getSeats());
    }, [])

    const handleSeatSelect = (e: any) => {
        if (!e.available) return;
        setSelectedSeat(e.id)
    };

    const onReservation = ({ firstName, lastName, email, gender }: any) => {
        if(!selectedSeat) return;
        const currentSeat: any = seats.find((s: any) => s.id === selectedSeat);
        if (currentSeat) {
            if (!currentSeat.available) return;
            currentSeat.available = false;
            setSeats([...seats])
            Passenger.updatePassenger({ firstName, lastName, email, gender,dateOfBooking:new Date(), seatNumber: currentSeat.seatNumber, id: currentSeat.id })
            navigate('/');
        }
    }

    return (
        <div>
            <h2>Bus Seat Reservation</h2>
            <BusLayout seats={seats} onSeatSelect={handleSeatSelect} selectedSeat={selectedSeat} />
            <ReservationForm onReservation={onReservation} />
        </div>
    );
};

export default ReservationView;
