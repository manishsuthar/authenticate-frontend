import { v4 as uuidv4 } from 'uuid';

class Seat {
    static SEATS: any = [];

    static getSeats() {
        Seat.SEATS = [];
        const storeSeats = localStorage.getItem('SEATS');
        if (!storeSeats) {
            for (let i = 0; i < 33; i++) {
                Seat.SEATS.push({ available: true, gender: null, seatNumber: i, id: uuidv4() })
            };
        } else {
            Seat.SEATS = JSON.parse(storeSeats);
        }
        return Seat.SEATS;
    }

    static updateSeat(seatId: string, gender: string) {
        const currentSeat = Seat.SEATS.find((s: any) => s.id === seatId);
        if (currentSeat) {
            currentSeat.available = false;
            currentSeat.gender = gender;
            localStorage.setItem('SEATS', JSON.stringify(Seat.SEATS));
        }
    }

    static updateState(id: string) {
        const currentSeat = Seat.SEATS.find((s: any) => s.id === id);
        if (currentSeat) {
            currentSeat.available = true;
            localStorage.setItem('SEATS', JSON.stringify(Seat.SEATS));
        }
    }
}

export default Seat;