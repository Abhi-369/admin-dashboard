import React from 'react'
import { MdLocationPin } from 'react-icons/md'

const DashBoard = () => {
    return (
        <div className="px-6 py-4 sm:block hidden">

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
                                <div className='flex items-center gap-1'>
                                    <MdLocationPin className='text-[#818181]' />
                                    <p className='text-[#818181] text-xs'>Main St. Farmington, CA 123</p>
                                </div>
                            </div>
                        </div>

                        <div className='h-40 bg-slate-200 w-[1.5px]' />

                        <div className='child:flex child:items-center child:justify-between child:gap-3 flex flex-col gap-2 text-sm text-[#202020]'>
                            <div>
                                <label className=''>First Name:</label>
                                <input type="text" placeholder="First Name" defaultValue="John" className='outline-none border border-[#C7C7C7] font-medium rounded p-1 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                            </div>
                            <div>
                                <label className=''>Last Name:</label>
                                <input type="text" placeholder="Last Name" defaultValue="Smith" className='outline-none border border-[#C7C7C7] font-medium rounded p-1 placeholder:text-sm' />
                            </div>
                            <div>
                                <label className=''>Email:</label>
                                <input type="email" placeholder="Email" defaultValue="johnsmith@yahoo.com" className='outline-none border border-[#C7C7C7] font-medium rounded p-1 placeholder:text-sm' />
                            </div>
                        </div>

                        <div className='child:flex child:items-center child:justify-between child:gap-3 flex flex-col gap-2 text-sm text-[#202020]'>
                            <div>
                                <label>Phone</label>
                                <input type="text" placeholder="Phone" defaultValue="+1 (324) 234-2342" className='outline-none border border-[#C7C7C7] font-medium rounded p-1 placeholder:text-sm' />
                            </div>
                            <div>
                                <label>Graduation Year:</label>
                                <input type="text" inputMode='numeric' placeholder="Graduation Year" defaultValue="1988" className='outline-none border border-[#C7C7C7] font-medium rounded p-1 placeholder:text-sm' />
                            </div>
                            <div>
                                <label>Date of Birth:</label>
                                <input type="email" placeholder="Date of Birth" defaultValue="08/03/1960" className='outline-none border border-[#C7C7C7] font-medium rounded p-1 placeholder:text-sm' />
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

                        <div className='w-full bg-[#F5F6F8] rounded-md px-4 py-3'>
                            <div className='flex items-center justify-between mb-4'>
                                <h2 className='text-lg font-medium'>Activities</h2>
                                <button className="rounded bg-[#0C611A] text-white px-5 py-1.5 text-sm">View All</button>
                            </div>

                            <div className='flex flex-col gap-5'>
                                <div className='flex items-center gap-4'>
                                    <div className='bg-[#DEE8FF] rounded-full p-1'>
                                        <img src="/Images/users-cog.svg" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className=" font-medium">
                                            <span>Leslie Alexander updated her</span> <span className="text-[#F8991F]">Account Type</span>
                                        </div>
                                        <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='bg-[#DEE8FF] rounded-full p-1'>
                                        <img src="/Images/users-cog.svg" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className=" font-medium">
                                            <span>John Smith removed Mark Fleix from</span> <span className="text-[#F8991F]">Family member</span>
                                        </div>
                                        <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='bg-[#DEE8FF] rounded-full p-1'>
                                        <img src="/Images/users-cog.svg" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className=" font-medium">
                                            <span>Leslie Alexander updated her</span> <span className="text-[#F8991F]">Account Type</span>
                                        </div>
                                        <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='bg-[#DEE8FF] rounded-full p-1'>
                                        <img src="/Images/users-cog.svg" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className=" font-medium">
                                            <span>John Smith removed Mark Fleix from</span> <span className="text-[#F8991F]">Family member</span>
                                        </div>
                                        <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='bg-[#DEE8FF] rounded-full p-1'>
                                        <img src="/Images/users-cog.svg" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className=" font-medium">
                                            <span>Leslie Alexander updated her</span> <span className="text-[#F8991F]">Account Type</span>
                                        </div>
                                        <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='bg-[#DEE8FF] rounded-full p-1'>
                                        <img src="/Images/users-cog.svg" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className=" font-medium">
                                            <span>John Smith removed Mark Fleix from</span> <span className="text-[#F8991F]">Family member</span>
                                        </div>
                                        <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='bg-[#DEE8FF] rounded-full p-1'>
                                        <img src="/Images/users-cog.svg" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className=" font-medium">
                                            <span>Leslie Alexander updated her</span> <span className="text-[#F8991F]">Account Type</span>
                                        </div>
                                        <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='bg-[#DEE8FF] rounded-full p-1'>
                                        <img src="/Images/users-cog.svg" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className=" font-medium">
                                            <span>Leslie Alexander updated her</span> <span className="text-[#F8991F]">Account Type</span>
                                        </div>
                                        <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='flex-[0.3] flex flex-col gap-3'>
                    <div className='bg-[#F5F6F8] rounded-md p-3'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-lg font-medium'>Family</h2>
                            <div className='flex items-center gap-3'>
                                <img src="/Images/search.svg" alt="" />
                                <button className='bg-[#0C611A] rounded text-white px-4 py-1 text-sm'>Add New</button>
                            </div>
                        </div>

                        <div className='relative'>
                            <div className='flex flex-col gap-2 my-4 border-r-[3px] border-[#E8E8E8] pr-5'>
                                <div className='child:flex child:items-center child:gap-3 flex justify-between items-center bg-[#F8991F] rounded-md px-3 py-2'>
                                    <div>
                                        <img src="/Images/User-Img.png" alt="" />
                                        <h3 className='text-white font-medium'>John Smith</h3>
                                    </div>

                                    <div>
                                        <button className='bg-white px-3 py-1 rounded-sm text-[#232E3E] text-xs font-medium'>ADMIN</button>
                                        <div className='bg-white p-1.5 rounded-sm'>
                                            <img src="/Images/two-users.svg" alt="" />
                                        </div>
                                    </div>

                                </div>
                                <div className='child:flex child:items-center child:gap-3 flex justify-between items-center bg-[#DEE8FF] rounded-md px-3 py-2'>
                                    <div>
                                        <img src="/Images/User-Img.png" alt="" />
                                        <h3 className='font-medium'>Lisa Smith</h3>
                                    </div>

                                    <button className='bg-[#CAD7F5] px-3 py-1 rounded-sm text-[#232E3E] text-xs font-medium'>MEMBER</button>
                                </div>
                                <div className='child:flex child:items-center child:gap-3 flex justify-between items-center bg-[#DEE8FF] rounded-md px-3 py-2'>
                                    <div>
                                        <img src="/Images/User-Img.png" alt="" />
                                        <h3 className='font-medium'>Dianne Russell</h3>
                                    </div>

                                    <button className='bg-[#CAD7F5] px-3 py-1 rounded-sm text-[#232E3E] text-xs font-medium'>MEMBER</button>
                                </div>
                                <div className='child:flex child:items-center child:gap-3 flex justify-between items-center bg-[#DEE8FF] rounded-md px-3 py-2'>
                                    <div>
                                        <img src="/Images/User-Img.png" alt="" />
                                        <h3 className='font-medium'>John Smith</h3>
                                    </div>

                                    <button className='bg-[#CAD7F5] px-3 py-1 rounded-sm text-[#232E3E] text-xs font-medium'>MEMBER</button>
                                </div>
                                <div className='child:flex child:items-center child:gap-3 flex justify-between items-center bg-[#DEE8FF] rounded-md px-3 py-2'>
                                    <div>
                                        <img src="/Images/User-Img.png" alt="" />
                                        <h3 className='font-medium'>Sean Michaletz</h3>
                                    </div>

                                    <button className='bg-[#CAD7F5] px-3 py-1 rounded-sm text-[#232E3E] text-xs font-medium'>MEMBER</button>
                                </div>
                            </div>

                            <div className="bg-[#232E3E] w-5 h-5 rounded-full absolute -right-2 top-4 opacity-50" />
                        </div>

                    </div>

                    <div className="bg-[#F5F6F8] rounded-md p-3">
                        <div className='flex items-center justify-between'>
                            <h2 className='text-lg font-medium'>Invitations</h2>
                            <div className='flex items-center gap-3 rounded-full bg-[#DBDBDB] pl-4'>
                                <span className='text-[#232E3E] text-xs font-medium'>Sent (15)</span>
                                <span className='bg-[#F8991F] text-white text-xs px-4 py-2 rounded-full font-medium'>Received (5)</span>
                            </div>
                        </div>


                        <div className="relative">
                            <div className="flex flex-col gap-2 mt-3 border-r-[3px] border-[#E8E8E8] pr-5 child:flex child:justify-between child:items-center child:bg-[#DEE8FF] child:rounded-md child:px-3 child:py-1">
                                <div className='child:flex child:items-center child:gap-3'>
                                    <div>
                                        <img src="/Images/User-Img.png" alt="" />
                                        <div className='font-medium'>
                                            <span className="text-[#F8991F]">John Smith</span> have invited you to become his family member.
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-2 child:flex child:items-center child:justify-center child:rounded child:w-6 child:h-6'>
                                        <div className='bg-[#0C611A]'>
                                            <img src="/Images/check.svg" alt="" />
                                        </div>
                                        <div className='bg-[#FF3A3A]'>
                                            <img src="/Images/close.svg" alt="" />
                                        </div>
                                    </div>

                                </div>
                                <div className='child:flex child:items-center child:gap-3'>
                                    <div>
                                        <img src="/Images/User-Img.png" alt="" />
                                        <div className='font-medium'>
                                            <span className="text-[#F8991F]">John Smith</span> have invited you to become his family member.
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-2 child:flex child:items-center child:justify-center child:rounded child:w-6 child:h-6'>
                                        <div className='bg-[#0C611A]'>
                                            <img src="/Images/check.svg" alt="" />
                                        </div>
                                        <div className='bg-[#FF3A3A]'>
                                            <img src="/Images/close.svg" alt="" />
                                        </div>
                                    </div>

                                </div>
                                <div className='child:flex child:items-center child:gap-3'>
                                    <div>
                                        <img src="/Images/User-Img.png" alt="" />
                                        <div className='font-medium'>
                                            <span className="text-[#F8991F]">Dianne Russell</span> have invited you to become his family member.
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-2 child:flex child:items-center child:justify-center child:rounded child:w-6 child:h-6'>
                                        <div className='bg-[#0C611A]'>
                                            <img src="/Images/check.svg" alt="" />
                                        </div>
                                        <div className='bg-[#FF3A3A]'>
                                            <img src="/Images/close.svg" alt="" />
                                        </div>
                                    </div>

                                </div>
                                <div className='child:flex child:items-center child:gap-3'>
                                    <div>
                                        <img src="/Images/User-Img.png" alt="" />
                                        <div className='font-medium'>
                                            <span className="text-[#F8991F]">John Smith</span> have invited you to become his family member.
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-2 child:flex child:items-center child:justify-center child:rounded child:w-6 child:h-6'>
                                        <div className='bg-[#0C611A]'>
                                            <img src="/Images/check.svg" alt="" />
                                        </div>
                                        <div className='bg-[#FF3A3A]'>
                                            <img src="/Images/close.svg" alt="" />
                                        </div>
                                    </div>

                                </div>
                                <div className='child:flex child:items-center child:gap-3'>
                                    <div>
                                        <img src="/Images/User-Img.png" alt="" />
                                        <div className='font-medium'>
                                            <span className="text-[#F8991F]">Dianne Russell</span> have invited you to become his family member.
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-2 child:flex child:items-center child:justify-center child:rounded child:w-6 child:h-6'>
                                        <div className='bg-[#0C611A]'>
                                            <img src="/Images/check.svg" alt="" />
                                        </div>
                                        <div className='bg-[#FF3A3A]'>
                                            <img src="/Images/close.svg" alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="bg-[#232E3E] w-5 h-5 rounded-full absolute -right-2 top-4 opacity-50" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;
