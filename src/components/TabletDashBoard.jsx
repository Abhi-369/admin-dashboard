import React from 'react'
import { MdLocationPin } from 'react-icons/md'
import Activity from './Activity'
import FamilyMem from './FamilyMem'
import Invite from './Invite'

const TabletDashBoard = () => {
    return (
        <div className="sm:flex hidden xl:hidden m-5 mt-12 flex-col gap-5">
            <div className="flex gap-3">
                <div className="flex-[0.6] relative px-3 py-3 flex flex-col gap-6 bg-[#F5F6F8] rounded-md">
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

                    <div className='flex flex-col gap-3'>
                        <div className="child:flex child:flex-col flex text-sm gap-4 child:flex-1">
                            <div>
                                <label className='text-[#202020]'>First Name:</label>
                                <input type="text" placeholder="First Name" defaultValue="John" className='outline-none border border-[#F1F1F1] max-w-[200px] w-full font-medium rounded p-1 px-2.5 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                            </div>
                            <div>
                                <label className='text-[#202020]'>Last Name:</label>
                                <input type="text" placeholder="Last Name" defaultValue="Smith" className='outline-none border border-[#F1F1F1] max-w-[200px] w-full font-medium rounded p-1 px-2.5 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                            </div>
                            <div>
                                <label className='text-[#202020]'>Graduation Year:</label>
                                <input type="text" placeholder="Graduation Year" defaultValue="1988" className='outline-none border border-[#F1F1F1] max-w-[200px] w-full font-medium rounded p-1 px-2.5 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                            </div>
                        </div>

                        <div className='child:flex child:flex-col text-sm flex items-center gap-5 child:flex-1'>
                            <div>
                                <label className='text-[#202020]'>Phone:</label>
                                <input type="text" placeholder="Phone" defaultValue="+1 (324) 234-2342" className='outline-none border border-[#F1F1F1] w-full font-medium rounded p-1 px-2.5 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                            </div>
                            <div>
                                <label className='text-[#202020]'>DOB:</label>
                                <input type="text" placeholder="DOB" defaultValue="08/03/1960" className='outline-none border border-[#F1F1F1] w-full font-medium rounded p-1 px-2.5 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                            </div>
                        </div>
                    </div>

                    <div className='child:rounded absolute bottom-5 left-4 flex items-center gap-4 text-white text-sm'>
                        <button className="bg-[#0C611A] w-20 h-8">Save</button>
                        <button className="bg-[#232E3E] w-[133px] h-8">Change Password</button>
                        <button className="bg-[#FF3A3A] w-[100px] h-8">Leave Family</button>
                    </div>

                </div>

                <div className='flex-[0.4]'>
                    <FamilyMem />
                </div>
            </div>

            <div className='flex gap-3'>

                <div className='flex-[0.5] bg-[#F5F6F8] rounded-md py-2 px-4'>
                    <h2 className='font-medium text-lg'>Bank Accounts</h2>
                    <div className="flex flex-col gap-4 mt-4 child:px-3 child:max-w-[300px] child:gap-2 child:rounded child:bg-white child:flex child:items-center">
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

                <div className="flex-[0.5]">
                    <div className='rounded-md bg-[#F5F6F8] p-4'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-lg font-medium'>Billing Address</h2>
                            <button className='text-white bg-[#232E3E] text-xs font-medium px-4 py-1.5 rounded'>Edit Details</button>
                        </div>

                        <div className='flex items-center gap-2 mt-5'>
                            <input type="checkbox" defaultChecked={true} />
                            <span className='text-sm font-medium'>Same as Home Address</span>
                        </div>

                        <div className='flex gap-3 flex-col mb-5'>
                            <div className='flex gap-5'>
                                <div className='flex flex-col gap-4 child:flex font-medium'>
                                    <div className='items-center gap-4'>
                                        <div className='flex-col gap-1'>
                                            <label className='text-xs'>First Name:</label>
                                            <input type="text" placeholder="First Name" defaultValue="John" className='outline-none px-3 border border-[#C7C7C7] rounded p-1 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                                        </div>

                                        <div className='flex-col gap-1'>
                                            <label className='text-xs'>Last Name:</label>
                                            <input type="text" placeholder="Last Name" defaultValue="Smith" className='outline-none border px-3 border-[#C7C7C7] rounded p-1 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                                        </div>
                                    </div>

                                    <div className='flex-col gap-1'>
                                        <label className='text-xs'>Address Line 1:</label>
                                        <input type="text" placeholder="Address Line 1" defaultValue="123 fredline street" className='outline-none px-3 border border-[#C7C7C7] rounded p-1 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                                    </div>

                                    <div className="justify-between gap-4">
                                        <div className='font-medium flex flex-col gap-1'>
                                            <label className='text-xs'>Country:</label>
                                            <input type="text" defaultValue="US" placeholder='country' className='bg-[#F5F5F5] p-1 px-3 rounded shadow-sm border outline-none' />
                                        </div>

                                        <div className='flex flex-col gap-1 w-full'>
                                            <label className='font-medium text-xs'>State/Province/Region:</label>
                                            <select name="location" className='outline-none px-3 p-2 text-sm'>
                                                <option value="" disabled>Select</option>
                                                <option value="value 1">Value 1</option>
                                                <option value="value 2">Value 2</option>
                                                <option value="value 3">Value 3</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="child:flex child:flex-col gap-4 items-center child:gap-1">
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


                    </div>
                </div>
            </div>

            <div className="flex gap-3 child:bg-[#F5F6F8] child:rounded-md">
                <div className="flex-[0.5]">
                    <Activity isTablet={true} />
                </div>
                <div className="flex-[0.5]">
                    <Invite />
                </div>
            </div>

        </div>
    )
}

export default TabletDashBoard;
