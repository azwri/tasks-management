'use client'

import React, { useState } from 'react';

export default function Signup() {

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const full_name = document.getElementById('full_name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // send data to the server
        const response = await fetch('http://127.0.0.1:8001/api/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ full_name, email, password })
        });

        const responseData = await response.json();

        if (response.ok) {
            setSuccess("User created successfully");
            setError(null);
        } else {
            setSuccess(null);
            let errorMessages = Object.values(responseData).flat().join(', ');
            if (errorMessages.includes('custom user with this email address already exists')) {
            errorMessages = 'Email address already exists';
            }
            setError(errorMessages);
        }
    }
        
    return (
        <main>
            <h3>Signup</h3>
            <form onSubmit={handleSubmit}>
                <div style={{ minHeight: '50px' }}>
                    {success && <div className="alert alert-success">{success}</div>}
                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="full_name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="full_name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" required />
                </div>

                <button type="submit" className="btn btn-dark">Signup</button>
            </form>
        </main>
    );
}