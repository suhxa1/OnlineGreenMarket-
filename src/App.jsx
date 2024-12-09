import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [orderNumber, setOrderNumber] = useState('');
    const [productId, setProductId] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [complaintType, setComplaintType] = useState('');
    const [email, setEmail] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [errors, setErrors] = useState({});

    // Generate a simple CAPTCHA when the component mounts
    const generateCaptcha = () => {
        const randomCaptcha = Math.random().toString(36).substring(2, 7);
        setCaptcha(randomCaptcha);
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    // Validate form fields
    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (orderNumber.trim().length < 6) {
            tempErrors.orderNumber = "Order Number must be at least 6 characters long.";
            isValid = false;
        }

        if (productId.trim().length < 4) {
            tempErrors.productId = "Product ID must be at least 4 characters long.";
            isValid = false;
        }

        if (!purchaseDate) {
            tempErrors.purchaseDate = "Please select a date of purchase.";
            isValid = false;
        }

        if (!complaintType) {
            tempErrors.complaintType = "Please select a complaint type.";
            isValid = false;
        }

        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            tempErrors.email = "Please enter a valid email address.";
            isValid = false;
        }

        if (captchaInput !== captcha) {
            tempErrors.captcha = "CAPTCHA verification failed.";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log({
                orderNumber,
                productId,
                purchaseDate,
                complaintType,
                email,
            });

            alert('Complaint submitted successfully!');
            // Optionally reset form after submission
            setOrderNumber('');
            setProductId('');
            setPurchaseDate('');
            setComplaintType('');
            setEmail('');
            setCaptchaInput('');
            generateCaptcha();
        }
    };

    const handleReturn = () => {
        // Logic to handle the return action, e.g., redirecting to a return page
        alert('Returning to return page...');
    };

    return (
        <div className="form-container">
            <h2>Complaint Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Order Number:</label>
                    <input 
                        type="text" 
                        value={orderNumber} 
                        onChange={(e) => setOrderNumber(e.target.value)} 
                        required
                    />
                    {errors.orderNumber && <div className="error">{errors.orderNumber}</div>}
                </div>

                <div className="form-group">
                    <label>Product ID:</label>
                    <input 
                        type="text" 
                        value={productId} 
                        onChange={(e) => setProductId(e.target.value)} 
                        required
                    />
                    {errors.productId && <div className="error">{errors.productId}</div>}
                </div>

                <div className="form-group">
                    <label>Date of Purchase:</label>
                    <input 
                        type="date" 
                        value={purchaseDate} 
                        onChange={(e) => setPurchaseDate(e.target.value)} 
                        required
                    />
                    {errors.purchaseDate && <div className="error">{errors.purchaseDate}</div>}
                </div>

                <div className="form-group">
                    <label>Complaint Type:</label>
                    <select 
                        value={complaintType} 
                        onChange={(e) => setComplaintType(e.target.value)} 
                        required
                    >
                        <option value="">--Select Complaint Type--</option>
                        <option value="Damaged Product">Damaged Product</option>
                        <option value="Wrong Product Delivered">Wrong Product Delivered</option>
                        <option value="Late Delivery">Late Delivery</option>
                        <option value="Product Not As Described">Product Not As Described</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.complaintType && <div className="error">{errors.complaintType}</div>}
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>

                <div className="form-group">
                    <label>CAPTCHA: {captcha}</label>
                    <input 
                        type="text" 
                        value={captchaInput} 
                        onChange={(e) => setCaptchaInput(e.target.value)} 
                        required
                    />
                    {errors.captcha && <div className="error">{errors.captcha}</div>}
                </div>

                <div className="button-group">
                    <button type="button" className="return-button" onClick={handleReturn}>Return</button>
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default App;

