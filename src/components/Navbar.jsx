import React, { useState } from 'react'
import { IoIosArrowUp, IoMdClose, IoMdNotificationsOutline } from 'react-icons/io'
import { MdLocationPin } from 'react-icons/md'
import { TfiMenu } from 'react-icons/tfi'

const Navbar = () => {

    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <div className="flex items-center h-[60px] text-white px-6" style={{
            background: '#232E3E 0% 0% no-repeat padding-box', boxShadow: '0px 3px 6px #00000029'
        }}>
            <div className="flex-[0.2] flex items-center gap-2">
                <TfiMenu className='text-[#F8991F] text-xl sm:hidden block' onClick={() => setShowSidebar(true)} />
                <h2 className="sm:mt-0 mt-1">LOGO</h2>
            </div>
            <div className='flex child:items-center sm:justify-between justify-end items-center flex-[0.8]'>
                <div className="gap-12 text-sm sm:flex hidden">
                    <span>Menu 1</span>
                    <span>Menu 2</span>
                    <span>Menu 3</span>
                </div>
                <div className="gap-5 flex">
                    <IoMdNotificationsOutline className='text-xl' />
                    <img src="/Images/User-Img.png" alt="" className='w-[37px] h-[37px] object-cover' />
                </div>
            </div>


            {showSidebar &&
                <div className='fixed inset-0 bg-[#232E3E] z-10 p-4'>
                    <div className='flex items-center justify-between mb-7'>
                        <h2 className='text-lg font-medium'>LOGO</h2>
                        <div className='p-1 bg-[#F7F7F7] text-[#818181] rounded' onClick={() => setShowSidebar(false)}>
                            <IoMdClose />
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='relative'>
                            <img src="/Images/User-ImgX2.png" alt="" />
                            <img src="/Images/Camera.svg" alt="" className='absolute top-[72%] left-[50px] w-5 h-5 bg-white rounded-full p-[2px] border' />
                        </div>
                        <div>
                            <h2 className="text-xl font-medium">John Smith</h2>
                            <div className="flex items-center gap-px -ml-1">
                                <MdLocationPin className='' /><p className="text-xs">Main St. Farmington, CA 123</p>
                            </div>
                        </div>
                    </div>

                    <div className='child:flex child:items-center child:gap-4 flex flex-col gap-5 mt-12 px-4'>
                        <div className='justify-between'>
                            <div className='flex items-center gap-5'>
                                <img src="/Images/menu.svg" alt="" />
                                <span className="text-[#F8991F] font-medium">MENU 1</span>
                            </div>
                            <IoIosArrowUp />
                        </div>
                        <div>
                            <img src="/Images/profit.png" alt="" />
                            <span>Menu 2</span>
                        </div>
                        <div>
                            <img src="/Images/teamwork.png" alt="" />
                            <span>Menu 3</span>
                        </div>
                        <div className='ml-1'>
                            <img src="/Images/logout.png" alt="" />
                            <span>Logout</span>
                        </div>
                    </div>

                </div>
            }

        </div>
    )
}

export default Navbar;
