import React from 'react'
import ContentLeft from '../../Contents/ContentLeft';
import ContentRight from '../../Contents/ContentRight';
import Sidebar from '../Sidebar';

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
        <Sidebar/>
        <ContentLeft/>
        <ContentRight/>
    </div>
  )
}

export default Dashboard;