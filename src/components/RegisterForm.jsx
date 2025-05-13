import React, { useState } from 'react';

function RegisterForm() {

    const [loading, setLoading] = useState(false);

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


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true); // Start loading

        const data = { name, email, mobile, reason };

        try {
            const res = await fetch('http://localhost:5000/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await res.json();
            alert(result.message);

            // Reset form
            setName('');
            setEmail('');
            setMobile('');
            setReason('');
            setErrors({});
        } catch (err) {
            alert('Something went wrong. Please try again later.' , err);
        } finally {
            setLoading(false); // Stop loading
        }
    };
    
    

    return (
        <div className="w-full bg-white py-8 px-4 flex justify-center items-center"> {/* Removed min-h-screen and centering */}
            <div className="w-full max-w-md">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                    {/* Embedded Image */}
                    <div className="w-full h-40 md:h-48 overflow-hidden">
                        <img
                            src="src/assets/img/apex/apex-form-logo.png" // Replace with your actual path
                            alt="Contact Us"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Form Content */}
                    <div className="p-5 md:p-6 space-y-5">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                            Get in Touch With Us
                        </h2>

                        {/* Name */}
                        <div>
                            <label className="block text-gray-700 font-medium text-sm mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-medium text-sm mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Email address"
                                className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Mobile */}
                        <div>
                            <label className="block text-gray-700 font-medium text-sm mb-1">Mobile</label>
                            <input
                                type="tel"
                                placeholder="Phone number"
                                className={`w-full px-3 py-2 border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                        </div>

                        {/* Reason */}
                        <div>
                            <label className="block text-gray-700 font-medium text-sm mb-1">Reason</label>
                            <select
                                className={`w-full px-3 py-2 border ${errors.reason ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="student">Student</option>
                                <option value="university">University Rep</option>
                                <option value="partnership">Partnership</option>
                            </select>
                            {errors.reason && <p className="text-red-500 text-xs mt-1">{errors.reason}</p>}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                                    } text-white font-semibold py-2 px-6 rounded-md text-sm transition`}
                            >
                                {loading ? 'Sending...' : 'Submit'}
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
      );


}

export default RegisterForm;