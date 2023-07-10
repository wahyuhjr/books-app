import React from 'react'
import { GrNotification } from 'react-icons/gr';
import { BiUser } from 'react-icons/bi';
import UserImg from '../../assets/images/jungkook.jpg';


const ContentRight = () => {
  return (
    <section className="w-96 bg-gray-100 rounded-tl-2xl overflow-hidden">
        <div className="pt-12 flex justify-end space-x-9 items-center px-9">
            <GrNotification size={20} />
            <BiUser size={20} />
            <img src={UserImg} alt="user" className="h-9 w-9 object-cover rounded-full" />
        </div>
    </section>
  )
}

export default ContentRight;