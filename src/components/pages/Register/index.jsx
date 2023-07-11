import React from 'react'
import LoginImg from '../../../assets/images/login.png';
import InputForm from '../../Input';
import { Link } from 'react-router-dom';

const Register = () => {
  
  return (
    <section className=" min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 rounded-2xl flex shadow-lg max-w-3xl p-5">
            <div className="w-1/2 px-16 py-16">
               <h2 className="font-bold text-2xl">Register</h2>
               <p className="text-sm mt-7">
                you already a member, easily login
               </p>
               <form action="" className=" flex flex-col gap-2 mt-7">
                <InputForm
                  label="Fullname"
                  type="text"
                  placeholder="Alex Slamet"
                  name="name"
                />
                <InputForm
                  label="Email"
                  type="email"
                  placeholder="example@gmail.com"
                  name="email"
                />
                <InputForm
                  label="Password"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <button className="bg-[#002D74] text-white py-2 rounded-lg hover:shadow-2xl">Register</button>
               </form>
               <div className="pt-4">
                  <p className="text-sm text-center">Already have a account?{""} <Link to="/login" className="text-[#002D74] font-semibold">Sign in</Link></p>
               </div>
            </div>
            <div className="w-1/2 p-5">
               <img className="rounded-xl" src={LoginImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Register;