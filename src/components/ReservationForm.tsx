import React, { useState } from 'react';

const ReservationForm = ({ onReservation }: any) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', gender: '' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onReservation(formData);
  };

  return (
    <div className='row'>
      <div className='col-12'>
        <h2>Reservation Form</h2>
      </div>
      <div className='col-12'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select className="form-select" id="gender" name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Reserve</button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
