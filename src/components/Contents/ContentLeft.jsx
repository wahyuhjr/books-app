import React from 'react'
import { BiCreditCard, BiDoughnutChart, BiHome, BiSearch, BiUser } from 'react-icons/bi';

const Card = (props) => {
    return(
        <div className={`rounded-xl ${props.txtColor} ${props.bgColor} bg-opacity-10 p-5 w-40 h-40`}>
            {props.icon}
            {props.label}
        </div>  
    );
}

const ContentLeft = () => {
  return (
    <section className="flex-1 px-14 pt-11">
        <div className="border border-gray-300 rounded-lg w-full flex py-3 px-3 items-center space-x-3">
            <BiSearch/>
            <input type={"text"} className="flex-1" placeholder="Search" />
        </div>
        <div className="Title">
            <h3 className="font-semibold pt-7 text-indigo-700">Welcome back, Wahyu</h3>
        </div>
        <div className="card pt-7 flex flex-row space-x-8">
            <Card
                bgColor={"bg-green-600"}
                txtColor={"text-green-600"}
                icon={<BiCreditCard size={35} className="mb-4"/>}
                label={
                    <span className="text-sm">Transfer via credit card</span>
                }
            />
            <Card
                bgColor={"bg-indigo-600"}
                txtColor={"text-indigo-600"}
                icon={<BiDoughnutChart size={35} className="mb-4"/>}
                label={
                    <span className="text-sm">Transfer via credit card</span>
                }
            />
            <Card
                bgColor={"bg-orange-600"}
                txtColor={"text-oranfe-600"}
                icon={<BiUser size={35} className="mb-4"/>}
                label={
                    <span className="text-sm">Transfer via credit card</span>
                }
            />
            <Card
                bgColor={"bg-teal-600"}
                txtColor={"text-teal-600"}
                icon={<BiHome size={35} className="mb-4"/>}
                label={
                    <span className="text-sm">Transfer via credit card</span>
                }
            />
        </div>
    </section>
  )
}

export default ContentLeft;