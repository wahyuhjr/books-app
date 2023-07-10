import React from 'react'
import Sidebar from './components/pages/Sidebar';
import ContentRight from './components/Contents/ContentRight';
import ContentLeft from './components/Contents/ContentLeft';


const App = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <Sidebar/>
        <ContentLeft/>
        <ContentRight/>
    </div>
  )
}

export default App;