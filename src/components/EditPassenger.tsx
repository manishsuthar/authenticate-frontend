import React, { useState } from "react";

const EditPassenger = ({ passenger, onClose, onSave }: any) => {
    const [editedPassenger, setEditedPassenger] = useState(passenger);
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setEditedPassenger((prevState: any) => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <div className="modal" style={{display:'block'}} >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Passenger</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <div className="mb-3">
                                <label htmlFor="editFirstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="editFirstName" name="firstName" defaultValue={editedPassenger.firstName} onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="editLastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="editLastName" name="lastName" defaultValue={editedPassenger.lastName} onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="editEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="editEmail" name="email" defaultValue={editedPassenger.email} onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <select className="form-select" id="gender" name="gender" value={editedPassenger.gender} onChange={handleChange}>
                                    <option value="">Select Gender</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="O">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose} data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => onSave(editedPassenger)}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPassenger;