import React from 'react';
import Logo from '../../../assets/images/logo.png';
import {
  BiHomeAlt,
  BiUser,
  BiBook,
  BiPencil
} from 'react-icons/bi';

const Sidebar = () => {
  const menu =[
    {name: "Home", icon: <BiHomeAlt />},
    {name: "Account", icon: <BiUser/>},
    {name: "Book", icon: <BiBook/>},
    {name: "Author", icon: <BiPencil/>},
  ];

  return (
    <div className="h-screen border-r border-gray-200 w-64 bg-gray px-9">
      <div className="flex flex-row items-center py-9">
        <img src={Logo} alt="Logo" className="w-14 h-14"/>
        <h3 className="font-semibold ">DedSec Books</h3>
      </div>
      <div>
        <ul>
        <div className="mb-6 font-bold text-lg">Menu</div>
        {menu.map((val, index) => {
          return(
            <li key={index} className="mb-7 flex flex-row items-center">
              <div className=" mr-2 text-xl">{val.icon}</div>
              <div className="">{val.name}</div>
            </li>
          );
        })}
        </ul>
      </div>
    </div>
    )
}

export default Sidebar;