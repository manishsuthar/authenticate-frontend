import React from 'react';
import moment from 'moment';

const PassengerList = ({ passengers, onEdit, onDelete }:any) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Seat Number</th>
            <th>Date of Booking</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map((passenger:any) => (
            <tr key={passenger.id}>
              <td>{passenger.firstName} {passenger.lastName}</td>
              <td>{passenger.email}</td>
              <td>{passenger.seatNumber}</td>
              <td>{moment(passenger.dateOfBooking).format("DD/MM/YYYY hh:mm")}</td>
              <td>
                <button className="btn btn-primary" onClick={() => onEdit(passenger)}>Edit</button>
                <button className="btn btn-danger" onClick={() => onDelete(passenger.pid)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PassengerList;
