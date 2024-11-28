import React from "react";

function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Form handling logic goes here
        console.log("Form submitted");
    };

    return (
        <div className="form-container">
            <form id="registerForm" onSubmit={handleSubmit}>
                <h2>Daily Register</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                />
                <input
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    required
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                />
                <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    required
                />
                <select name="Gender" required>
                    <option value="" disabled selected>
                        Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <label htmlFor="reason">Reason for Visit</label>
                <select name="reason" id="reason" required>
                    <option value="" disabled selected>
                        Select a reason
                    </option>
                    <option value="ICTage">ICTAGE</option>
                    <option value="Clubhouse">Clubhouse</option>
                    <option value="Design Squad">Design Squad</option>
                    <option value="Sewing">Sewing</option>
                    <option value="Educational Support Programme">
                        Educational Support Programme
                    </option>
                    <option value="Other">Other</option>
                </select>
                <input
                    className="register-input"
                    type="text"
                    name="timein"
                    placeholder="Time In"
                />
                <input
                    className="register-input"
                    type="text"
                    name="timeout"
                    placeholder="Time Out"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Register;
