import React, { useState } from 'react';

function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [reason, setReason] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        let isValid = true;
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        if (!mobile.trim()) {
            newErrors.mobile = 'Mobile number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(mobile)) {
            newErrors.mobile = 'Invalid mobile number (10 digits required)';
            isValid = false;
        }

        if (!reason) {
            newErrors.reason = 'Please select a reason';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            // Simulate form submission
            console.log('Form submitted:', { name, email, mobile, reason });
            // You would typically send this data to your backend
            alert('Form submitted successfully!');
            setName('');
            setEmail('');
            setMobile('');
            setReason('');
            setErrors({});
        }
    };

    return (
        <div className="w-full bg-gray-200 py-12 px-4 md:px-10 flex justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-lg p-8 md:p-10 w-full max-w-2xl space-y-6"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
                    Get in Touch With Us
                </h2>

                {/* Name */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'
                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Mobile Number */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className={`w-full px-4 py-3 border ${errors.mobile ? 'border-red-500' : 'border-gray-300'
                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                </div>

                {/* Reason */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Reason for Contact</label>
                    <select
                        className={`w-full px-4 py-3 border ${errors.reason ? 'border-red-500' : 'border-gray-300'
                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                    >
                        <option value="">Select a reason</option>
                        <option value="student">Student</option>
                        <option value="university">University Representative</option>
                        <option value="partnership">Looking for Partnership</option>
                    </select>
                    {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;