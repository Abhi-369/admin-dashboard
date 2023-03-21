import React from 'react'
import DashBoard from './components/DashBoard';
import MobileDashBoard from './components/MobileDashBoard';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <DashBoard />
        <MobileDashBoard />
      </div>
    </div>
  )
}

export default App;
