import React, { useState } from 'react'

const From = () => {
    const [name,setName] = useState("");
    
    const [email,setEmail] = useState("");
    const [password,setpassword] = useState("");
    const [error,setError] = useState("");
    // console.log({name,email,password})
    const handlesubmit = (e)=> {

        e.preventDefault();
        alert(' hi &{name} Email: &{email}  submitted successfully!);} ');
        // Validation();
        setName("");
        setEmail("");
        setpassword("");
    }
    const Validation = () => {


const newErrors = {};
if (!name) {newErrors.name ="please enter a valid name"};
if (!email) {newErrors.email ="please enter a valid name"};
if (!password || password.length < 6)
    newErrors.password = "password must be at least 6 characters long";
    setError(newErrors);
    return object.keys(newErrors).length === 0;

    };

  return (
    <div>
        <h1 className=' text-4xl font-bold mb-4 text-green-500 mx-auto text-center'>From Validation</h1>

        <form onSubmit={handlesubmit}  className='shadow-blue-200  max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded shadow-lg space-y-4' action="">

        <div className='flex flex-col space-y-2'>
            <label className=' italic text-3xl font-bold shadow text-orange-300' htmlFor="name"> Name:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className='border border-gray-300 p-2 rounded ' type="text" name="text" id="name" />
            {
                error.email && (
                    <p className='text-amber-700 italic text-sm'>{error.email}</p>
                )
            }
        </div>
        <div className='flex flex-col space-y-2'>
            <label className=' italic text-3xl font-bold shadow text-orange-300' htmlFor="email"> Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='border border-gray-300 p-2 rounded ' type="email" name="email" id="" />






        </div>
        <div className='flex flex-col space-y-2'>
            <label className=' italic text-3xl font-bold shadow text-orange-300' htmlFor="password"> password:</label>
            <input value={password} onChange={(e) => setpassword (e.target.value)} className='border border-gray-300 p-2 rounded ' type="password" name="password" id="" />








        </div>
        <button   className=' bg-blue-600 text-white px-4 py-2 rounded block mx-auto hover:bg-amber-600'>Submit</button>











        </form>











    </div>
  )
}

export default From