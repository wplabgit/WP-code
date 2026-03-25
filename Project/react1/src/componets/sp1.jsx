import React, { useState } from 'react'; 
 
function RegistrationForm() { 
    const [formData, setFormData] = useState({ 
        name: '', 
        password: '', 
        email: '', 
        phone: '' 
    }); 
     
    const [errors, setErrors] = useState({}); 
 
    const validateForm = () => { 
        const namePattern = /^[A-Za-z]{6,}$/; 
        const phonePattern = /^[0-9]{10}$/; 
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
         
        let newErrors = {}; 
 
        if (!namePattern.test(formData.name)) { 
            newErrors.name = "Name must contain only alphabets and minimum 6 characters"; 
        } 
 
        if (formData.password.length < 6) { 
            newErrors.password = "Password must be at least 6 characters"; 
        } 
 
        if (!phonePattern.test(formData.phone)) { 
            newErrors.phone = "Phone number must contain exactly 10 digits"; 
        } 
 
        if (!emailPattern.test(formData.email)) { 
            newErrors.email = "Enter a valid email address"; 
        } 
 
 
 
        setErrors(newErrors); 
 
        if (Object.keys(newErrors).length > 0) { 
            return false; 
        } 
 
        alert("Registration Successful"); 
        return true; 
    }; 
 
    const handleChange = (e) => { 
        setFormData({ 
            ...formData, 
            [e.target.name]: e.target.value 
        }); 
        // Clear error when user starts typing 
        if (errors[e.target.name]) { 
            setErrors({ 
                ...errors, 
                [e.target.name]: '' 
            }); 
        } 
    }; 
 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        validateForm(); 
    }; 
 
    const handleReset = () => { 
        setFormData({ name: '', password: '', email: '', phone: '' }); 
        setErrors({}); 
    }; 
 
    return ( 
        <div> 
            <h3>Registration Form</h3> 
            <form onSubmit={handleSubmit}> 
                <div> 
                    Name:  
                    <input  
                        type="text"  
                        name="name"  
                        value={formData.name} 
                        onChange={handleChange} 
                    /> 
                    {errors.name && <span style={{color:'red'}}>{errors.name}</span>} 
                </div><br/> 
                 
 
 
                <div> 
                    Password:  
                    <input  
                        type="password"  
                        name="password"  
                        value={formData.password} 
                        onChange={handleChange} 
                    /> 
                    {errors.password && <span style={{color:'red'}}>{errors.password}</span>} 
                </div><br/> 
                 
                <div> 
                    Email:  
                    <input  
                        type="text"  
                        name="email"  
                        value={formData.email} 
                        onChange={handleChange} 
                    /> 
                    {errors.email && <span style={{color:'red'}}>{errors.email}</span>} 
                </div><br/> 
                 
                <div> 
                    Phone:  
                    <input  
                        type="text"  
                        name="phone"  
                        value={formData.phone} 
                        onChange={handleChange} 
                    /> 
                    {errors.phone && <span style={{color:'red'}}>{errors.phone}</span>} 
                </div><br/> 
                 
                <input type="submit" value="Submit" /> 
                <input type="button" value="Reset" onClick={handleReset} /> 
            </form> 
        </div> 
    ); 
} 
 
export default RegistrationForm;