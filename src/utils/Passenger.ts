import Seat from "./Seat";
import { v4 as uuidv4 } from 'uuid';

class Passenger {
    static PASSENGER_LIST: any = [];

    static getPassengerList() {
        const list = localStorage.getItem('PASSENGER_LIST');
        if (list) {
            Passenger.PASSENGER_LIST = JSON.parse(list);
        } else {
            Passenger.PASSENGER_LIST = [];
        }
        return Passenger.PASSENGER_LIST;
    }

    static updatePassenger(item: any) {
        Passenger.getPassengerList().push({ pid: uuidv4(), firstName: item.firstName, lastName: item.lastName, email: item.email, gender: item.gender, seatNumber: item.seatNumber, id: item.id, dateOfBooking: item.dateOfBooking })
        localStorage.setItem('PASSENGER_LIST', JSON.stringify(Passenger.PASSENGER_LIST))
        Seat.updateSeat(item.id, item.gender);
    }

    static updatePassengerList(list:any[]){
        Passenger.PASSENGER_LIST = list;
        localStorage.setItem('PASSENGER_LIST', JSON.stringify(Passenger.PASSENGER_LIST))
    }
}

export default Passenger;