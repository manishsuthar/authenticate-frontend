import React, { useState } from 'react';
import PassengerList from './PassengerList';
import Passenger from '../utils/Passenger';
import EditPassenger from './EditPassenger';
import Seat from '../utils/Seat';

const DashboardView = () => {
  const [passengers, setPassengers] = useState<any[]>(Passenger.getPassengerList());
  const [editItem, setEditItem] = useState<any>(null);

  const onEdit = (e: any) => {
    setEditItem(e);
  }

  const onDelete = (pid: string) => {
    const index = passengers.findIndex((e: any) => e.pid === pid);
    Seat.updateState(passengers[index].id)
    passengers.splice(index, 1);
    setPassengers([...passengers]);
    Passenger.updatePassengerList(passengers);
  }

  const onSave = (updateItem: any) => {
    const passenger = passengers.find((e: any) => e.pid === editItem.pid);
    if (passenger) {
      passenger.firstName = updateItem.firstName;
      passenger.lastName = updateItem.lastName;
      passenger.email = updateItem.email;
      passenger.gender = updateItem.gender;
      setPassengers([...passengers]);
    }
    Passenger.updatePassengerList(passengers);
    setEditItem(null);
  }


  return (
    <div>
      <h2>Passenger Dashboard</h2>
      <PassengerList passengers={passengers} onEdit={onEdit} onDelete={onDelete} />
      {editItem && <EditPassenger passenger={editItem} onClose={() => setEditItem(null)} onSave={onSave} />}
    </div>
  );
};

export default DashboardView;
