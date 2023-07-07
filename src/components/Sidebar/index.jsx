import React from 'react';
import Logo from '../../assets/images/logo.png';

const Sidebar = () => {
  const menu =[
    {name: "Home", icon: ""},
    {name: "Account", icon: ""},
    {name: "Book", icon: ""},
    {name: "Author", icon: ""},
  ];

  return (
    <div className="h-screen border-r border-gray-200 w-64 bg-gray px-9">
      <div className="flex flex-row items-center py-9">
        <img src={Logo} alt="Logo" className="w-14 h-14"/>
        <h3 className="font-semibold ">DedSec Books</h3>
      </div>
      <div>
        <ul>
        <div className="mb-6 font-semibold text-lg">Menu</div>
        {menu.map((val, index) => {
          return(
            <li key={index} className="mb-7">
              {val.name}
            </li>
          );
        })}
        </ul>
      </div>
    </div>
    )
}

export default Sidebar;