import React from 'react'
import LoginImg from '../../../assets/images/login.png';
import { useState } from 'react';


const Login = () => {
  const [inputValue, setInputValue, inputValuePass, setInputValuePass] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    // Lakukan tindakan dengan nilai inputValue
    
    // Reset nilai input setelah form dikirim
    setInputValue('');
  }
  


  return (
    <section className=" min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 rounded-2xl flex shadow-lg max-w-3xl p-5">
            <div className="w-1/2 px-16 py-16">
               <h2 className="font-bold text-2xl">Login</h2>
               <p className="text-sm mt-7">
                you already a member, easily login
               </p>
               <form onSubmit={handleSubmit} className=" flex flex-col gap-4 mt-7">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                  className="rounded-lg py-2 px-2 shadow-md"
                  placeholder="Email"
                />
                <input
                  type="text"
                  value={inputValuePass}
                  onChange={handleChange}
                  className="rounded-lg py-2 px-2  shadow-md"
                  placeholder="Password"
                />
                <button className="bg-[#002D74] text-white py-2 rounded-lg hover:shadow-2xl">Login</button>
               </form>
               <div className="pt-4">
                  <p className="text-sm">Don't have a account? <span className="text-[#002D74]">Sign up</span></p>
               </div>
            </div>
            <div className="w-1/2 p-5">
               <img className="rounded-xl" src={LoginImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Login