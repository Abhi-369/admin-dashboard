import React, { useState } from 'react'
import { MdLocationPin } from 'react-icons/md'
import Activity from './Activity'
import FamilyMem from './FamilyMem'
import Invite from './Invite'

const DashBoard = () => {

    const [showReq, setShowReq] = useState("received")

    return (
        <div className="px-6 py-4 xl:block hidden">

            <div className='flex items-center justify-between mb-4'>
                <h2 className="text-2xl font-medium">My Account</h2>
                <button className="bg-[#232E3E] px-5 rounded py-1.5 text-white">View Button</button>
            </div>

            <div className='flex gap-5'>
                <div className='flex-[0.7] flex flex-col gap-5'>

                    <div className='flex items-center max-h-[167px] h-full px-3 bg-[#F5F6F8] gap-5 rounded-md whitespace-nowrap'>
                        <div className='flex items-center gap-3'>
                            <div className='relative'>
                                <img src="/Images/User-ImgX2.png" alt="" />
                                <img src="/Images/Camera.svg" alt="" className='absolute top-[70%] right-[-2px] w-5 h-5 bg-white rounded-full p-[2px] border' />
                            </div>

                            <div>
                                <h2 className='text-2xl font-medium'>John Smith</h2>
                                <div className='flex items-center gap-1 -ml-px'>
                                    <MdLocationPin className='text-[#818181]' />
                                    <p className='text-[#818181] text-xs'>Main St. Farmington, CA 123</p>
                                </div>
                            </div>
                        </div>

                        <div className='h-40 bg-slate-200 w-[1.5px]' />

                        <div className='child:flex child:items-center child:justify-between child:gap-3 flex flex-col gap-2 text-sm text-[#202020]'>
                            <div>
                                <label className=''>First Name:</label>
                                <input type="text" placeholder="First Name" defaultValue="John" className='outline-none border border-[#C7C7C7] font-medium rounded p-1 px-2.5 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                            </div>
                            <div>
                                <label className=''>Last Name:</label>
                                <input type="text" placeholder="Last Name" defaultValue="Smith" className='outline-none border border-[#C7C7C7] font-medium rounded p-1 px-2.5 placeholder:text-sm' />
                            </div>
                            <div>
                                <label className=''>Email:</label>
                                <input type="email" placeholder="Email" defaultValue="johnsmith@yahoo.com" className='outline-none border border-[#C7C7C7] font-medium rounded p-1 px-2.5 placeholder:text-sm' />
                            </div>
                        </div>

                        <div className='child:flex child:items-center child:justify-between child:gap-3 flex flex-col gap-2 text-sm text-[#202020]'>
                            <div>
                                <label>Phone:</label>
                                <input type="text" placeholder="Phone" defaultValue="+1 (324) 234-2342" className='outline-none border border-[#C7C7C7] font-medium rounded p-1 px-2.5 placeholder:text-sm' />
                            </div>
                            <div>
                                <label>Graduation Year:</label>
                                <input type="text" inputMode='numeric' placeholder="Graduation Year" defaultValue="1988" className='outline-none border border-[#C7C7C7] font-medium rounded p-1 px-2.5 placeholder:text-sm' />
                            </div>
                            <div>
                                <label>Date of Birth:</label>
                                <input type="email" placeholder="Date of Birth" defaultValue="08/03/1960" className='outline-none border border-[#C7C7C7] font-medium rounded p-1 px-2.5 placeholder:text-sm' />
                            </div>
                        </div>

                        <div className='child:rounded text-white child:px-6 child:py-1.5 text-xs flex flex-col gap-2 ml-10'>
                            <button className='bg-[#0C611A]'>Save Chanegs</button>
                            <button className='bg-[#232E3E]'>Change Password</button>
                            <button className='bg-[#FF3A3A]'>Leave Family</button>
                        </div>


                    </div>

                    <div className='flex gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='bg-[#F5F6F8] rounded-md py-2 px-4 h-[189px]'>
                                <h2 className='font-medium text-lg'>Bank Account</h2>
                                <div className="flex items-center gap-2 mt-3 child:px-3 child:gap-2 child:rounded child:bg-white child:flex child:items-center">
                                    <div className=''>
                                        <img src="/Images/card.png" alt="" />
                                        <div className='flex flex-col'>
                                            <span className='font-medium'>**** **** **** 5967</span>
                                            <span className='text-[#C7C7C7] text-xs -mt-1.5'>Expires 09/27</span>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <img src="/Images/card.png" alt="" />
                                        <div className='flex flex-col'>
                                            <span className='font-medium'>**** **** **** 5967</span>
                                            <span className='text-[#C7C7C7] text-xs -mt-1.5'>Expires 09/27</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='rounded-md bg-[#F5F6F8] p-4'>
                                <h2 className='text-lg font-medium'>Billing Address</h2>

                                <div className='flex items-center gap-2 mt-5'>
                                    <input type="checkbox" defaultChecked={true} />
                                    <span className='text-sm font-medium'>Same as Home Address</span>
                                </div>

                                <div className='flex gap-3 flex-col mt-4'>
                                    <div className='flex gap-5 child:max-w-[380px]'>
                                        <div className='flex flex-col gap-4 child:flex font-medium'>
                                            <div className='flex-col gap-1'>
                                                <label className='text-xs'>First Name:</label>
                                                <input type="text" placeholder="First Name" defaultValue="John" className='outline-none px-3 border border-[#C7C7C7] rounded p-1 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                                            </div>
                                            <div className='flex-col gap-1'>
                                                <label className='text-xs'>Address Line 1:</label>
                                                <input type="text" placeholder="Address Line 1" defaultValue="123 fredline street" className='outline-none px-3 border border-[#C7C7C7] rounded p-1 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                                            </div>

                                            <div className="justify-between gap-4">
                                                <div className='font-medium flex flex-col gap-1'>
                                                    <label className='text-xs'>Country:</label>
                                                    <input type="text" defaultValue="US" placeholder='country' className='bg-[#F5F5F5] w-32 p-1 px-3 rounded pr-5 shadow-sm border outline-none' />
                                                </div>

                                                <div className='flex flex-col gap-1'>
                                                    <label className='font-medium -mt-1'>State/Province/Region:</label>
                                                    <select name="location" className='outline-none px-3 p-1'>
                                                        <option value="" disabled>Select</option>
                                                        <option value="value 1">Value 1</option>
                                                        <option value="value 2">Value 2</option>
                                                        <option value="value 3">Value 3</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='flex flex-col gap-4 child:flex font-medium'>
                                            <div className='flex-col gap-1'>
                                                <label className='text-xs'>Last Name:</label>
                                                <input type="text" placeholder="Last Name" defaultValue="Smith" className='outline-none border px-3 border-[#C7C7C7] rounded p-1 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                                            </div>
                                            <div className='flex-col gap-1'>
                                                <label className='text-xs'>Address Line 2:</label>
                                                <input type="text" defaultValue="" className='outline-none border px-3 border-[#C7C7C7] rounded p-1 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                                            </div>

                                            <div className="child:flex child:flex-col gap-4 items-center child:gap-1 child:w-[181px]">
                                                <div>
                                                    <label className='text-xs'>City:</label>
                                                    <input type="text" placeholder="Enter city name" defaultValue="" className='outline-none border px-3 border-[#C7C7C7] rounded p-1 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                                                </div>

                                                <div>
                                                    <label className='text-xs'>Zip Code:</label>
                                                    <input type="text" placeholder="Enter zip code" defaultValue="" className='outline-none border px-3 border-[#C7C7C7] rounded p-1 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center justify-end mt-10'>
                                    <button className='text-white bg-[#232E3E] text-xs font-medium px-4 py-1.5 rounded'>Edit Details</button>
                                </div>
                            </div>
                        </div>

                        <Activity />

                    </div>

                </div>

                <div className='flex-[0.3] flex flex-col gap-3'>

                    <FamilyMem />

                    <Invite />

                </div>
            </div>
        </div>
    )
}

export default DashBoard;
