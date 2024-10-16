
import React, { useState } from 'react';
import './Order.css'; // Import the merged CSS

const Order = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        count: '',
        order: '',
        address: '',
    });

    // Handler for input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();

    
        if (!formData.name || !formData.email || !formData.order) {
            alert('Please fill in all required fields.');
            return;
        }
        console.log('Order Submitted:', formData);

       
        setFormData({
            name: '',
            email: '',
            number: '',
            count: '',
            order: '',
            address: '',
        });

        alert('Order has been placed successfully!');
    };

    return (
        <div className="order-container"> {/* Added a wrapper div for styling if needed */}
            <h1 className="order-title">Order Now</h1> {/* Added a class name here */}
            <div className="order" id="Order">
                <div className="order_main">
                    <div className="order_image">
                        <img src="\image\great.jpg" alt="Delicious food" className="img-fluid" />
                    </div>

                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="number" className="form-label">Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="number"
                                placeholder="Your Number"
                                value={formData.number}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="count" className="form-label">Count</label>
                            <input
                                type="number"
                                className="form-control"
                                id="count"
                                placeholder="How many orders"
                                value={formData.count}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="order" className="form-label">Your Order</label>
                            <input
                                type="text"
                                className="form-control"
                                id="order"
                                placeholder="Food Name"
                                value={formData.order}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                placeholder="Your Address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" id="submit">Order Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;
