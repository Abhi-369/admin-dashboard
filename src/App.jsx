import React from 'react'
import DashBoard from './components/DashBoard';
import MobileDashBoard from './components/MobileDashBoard';
import Navbar from './components/Navbar';
import TabletDashBoard from './components/TabletDashBoard';

const App = () => {
  return (
    <div className='my-14'>
      <Navbar />
      <div>
        <DashBoard />
        <MobileDashBoard />
        <TabletDashBoard />
      </div>
    </div>
  )
}

export default App;
