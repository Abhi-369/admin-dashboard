import React, { useState } from 'react'
import { MdLocationPin } from 'react-icons/md'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

const MobileDashBoard = () => {

    const [active, setActive] = useState("profile")

    return (
        <div className='sm:hidden block px-4 py-3'>
            <div className='flex justify-between'>
                <h2 className='text-xl font-medium'>My Account</h2>
                <HiOutlineDotsHorizontal className='text-2xl' />
            </div>

            <div>
                <div className='flex items-center justify-around mt-5 mb-4 font-medium child:pb-1'>
                    <span onClick={() => setActive("profile")} className={`${active === "profile" ? 'text-[#F8991F] text-base border-b-[3px] rounded-sm border-[#F8991F]' : 'text-[#7D7D7D] text-sm'}`}>Profile</span>
                    <span onClick={() => setActive("wallet")} className={`${active === "wallet" ? 'text-[#F8991F] text-base border-b-[3px] rounded-sm border-[#F8991F]' : 'text-[#7D7D7D] text-sm'}`}>Wallet</span>
                    <span onClick={() => setActive("activities")} className={`${active === "activities" ? 'text-[#F8991F] text-base border-b-[3px] rounded-sm border-[#F8991F]' : 'text-[#7D7D7D] text-sm'}`}>Activities</span>
                    <span onClick={() => setActive("invitations")} className={`${active === "invitations" ? 'text-[#F8991F] text-base border-b-[3px] rounded-sm border-[#F8991F]' : 'text-[#7D7D7D] text-sm'}`}>Invitaions</span>
                </div>

                <hr className="mb-3" />

                {
                    active === "profile" &&
                    <>
                        <div className='bg-[#F5F6F8] rounded-md p-2'>
                            <div className='flex items-center justify-between mt-2'>
                                <h2 className='text-lg font-medium'>My Family</h2>
                                <div className='flex items-center gap-4'>
                                    <img src="/Images/search.svg" alt="" />
                                    <button className='bg-[#0C611A] rounded text-white px-4 py-1.5 text-xs'>Add New</button>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2 mt-4 mb-2'>
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
                                        <h3 className='font-medium text-sm'>John Smith</h3>
                                    </div>

                                    <button className='bg-[#CAD7F5] px-3 py-1 rounded-sm text-[#232E3E] text-xs font-medium'>MEMBER</button>
                                </div>
                                <div className='child:flex child:items-center child:gap-3 flex justify-between items-center bg-[#DEE8FF] rounded-md px-3 py-2'>
                                    <div>
                                        <img src="/Images/User-Img.png" alt="" />
                                        <h3 className='font-medium text-sm'>John Smith</h3>
                                    </div>

                                    <button className='bg-[#CAD7F5] px-3 py-1 rounded-sm text-[#232E3E] text-xs font-medium'>MEMBER</button>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#F5F6F8] rounded-md p-2 mt-3'>
                            <div className='flex items-center gap-4'>
                                <div className='relative'>
                                    <img src="/Images/User-ImgX2.png" alt="" />
                                    <img src="/Images/Camera.svg" alt="" className='absolute top-[72%] left-[50px] w-5 h-5 bg-white rounded-full p-[2px] border' />
                                </div>
                                <div>
                                    <h2 className="text-xl font-medium">John Smith</h2>
                                    <div className="flex items-center gap-px -ml-1">
                                        <MdLocationPin className='text-[#818181]' /><p className="text-xs text-[#818181]">Main St. Farmington, CA 123</p>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-5 flex flex-col gap-3'>
                                <div className='child:flex child:flex-col flex text-sm gap-2'>
                                    <div>
                                        <label className='text-[#202020]'>First Name:</label>
                                        <input type="text" placeholder="First Name" defaultValue="John" className='outline-none border border-[#F1F1F1] max-w-[200px] w-full font-medium rounded p-1 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                                    </div>
                                    <div>
                                        <label className='text-[#202020]'>Last Name:</label>
                                        <input type="text" placeholder="Last Name" defaultValue="Smith" className='outline-none border border-[#F1F1F1] max-w-[200px] w-full font-medium rounded p-1 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                                    </div>
                                </div>

                                <div className='child:flex child:flex-col flex text-sm gap-2'>
                                    <div>
                                        <label className='text-[#202020]'>Phone</label>
                                        <input type="text" placeholder="Phone" defaultValue="+1 (324) 234-2342" className='outline-none border border-[#F1F1F1] max-w-[200px] w-full font-medium rounded p-1 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                                    </div>
                                    <div>
                                        <label className='text-[#202020]'>Graduation Year:</label>
                                        <input type="text" placeholder="Graduation Year" defaultValue="1988" className='outline-none border border-[#F1F1F1] max-w-[200px] w-full font-medium rounded p-1 placeholder:text-sm' style={{ boxShadow: 'inset 0px 0px 2px #00000012' }} />
                                    </div>
                                </div>
                            </div>

                            <button className="bg-[#232E3E] text-white w-36 h-8 rounded text-sm mt-5">Edit Profile</button>

                        </div>
                    </>
                }

                {
                    active === "wallet" &&
                    <div className='flex flex-col gap-3'>
                        <div className="flex items-center justify-between bg-[#F5F6F8] rounded px-3 py-1">
                            <div className="flex items-center gap-3">
                                <img src="/Images/card.png" alt="" />
                                <div className='flex flex-col'>
                                    <span className='font-medium text-sm'>**** **** **** 5967</span>
                                    <span className='text-[#C7C7C7] text-xs -mt-1.5'>Expires 09/27</span>
                                </div>
                            </div>
                            <button className='bg-[#0C611A] text-white text-sm rounded px-4 py-1'>Edit</button>
                        </div>

                        <div className="flex items-center justify-between bg-[#F5F6F8] rounded px-3 py-1">
                            <div className="flex items-center gap-5">
                                <img src="https://www.freepnglogos.com/uploads/visa-card-logo-9.png" alt="" className='h-12 w-12 object-contain' />
                                <div className='flex flex-col'>
                                    <span className='font-medium text-sm'>**** **** **** 5967</span>
                                    <span className='text-[#C7C7C7] text-xs -mt-1.5'>Expires 09/27</span>
                                </div>
                            </div>
                            <button className='bg-[#0C611A] text-white text-sm rounded px-4 py-1'>Edit</button>
                        </div>

                        <div className="flex items-center justify-between bg-[#F5F6F8] rounded px-3 py-3">
                            <div className="flex items-center gap-[34px]">
                                <img src="https://cdn-icons-png.flaticon.com/512/1018/1018197.png" alt="" className='h-8 w-8 object-contain' />
                                <div className='flex flex-col'>
                                    <span className='font-medium text-sm'>**** **** **** 5967</span>
                                    <span className='text-[#C7C7C7] text-xs -mt-1.5'>Peter Moscone</span>
                                </div>
                            </div>
                            <button className='bg-[#0C611A] text-white text-sm rounded px-4 py-1'>Edit</button>
                        </div>
                    </div>
                }

                {
                    active === "activities" &&
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-[#DEE8FF] rounded-full p-1'>
                                    <img src="/Images/users-cog.svg" alt="" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-sm font-medium">
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
                                    <div className="text-sm font-medium">
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
                                    <div className="text-sm font-medium">
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
                                    <div className="text-sm font-medium">
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
                                    <div className="text-sm font-medium">
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
                                    <div className="text-sm font-medium">
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
                                    <div className="text-sm font-medium">
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
                                    <div className="text-sm font-medium">
                                        <span>Leslie Alexander updated her</span> <span className="text-[#F8991F]">Account Type</span>
                                    </div>
                                    <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {
                    active === "invitations" &&
                    <div className="">

                        <div className='flex items-center justify-between'>
                            <h2 className='text-lg font-medium'>Invitations</h2>
                            <div className='flex items-center gap-3 rounded-full bg-[#DBDBDB] pl-4'>
                                <span className='text-[#232E3E] text-xs font-medium'>Sent (15)</span>
                                <span className='bg-[#F8991F] text-white text-xs px-4 py-2 rounded-full font-medium'>Received (5)</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="flex flex-col gap-2 mt-3 child:flex child:justify-between child:items-center child:bg-[#DEE8FF] child:rounded-md child:px-3 child:py-1">
                                <div className='child:flex child:items-center child:gap-3'>
                                    <div>
                                        <img src="/Images/User-Img.png" alt="" />
                                        <div className='font-medium text-sm'>
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
                                        <div className='font-medium text-sm'>
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
                                        <div className='font-medium text-sm'>
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
                                        <div className='font-medium text-sm'>
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
                                        <div className='font-medium text-sm'>
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

                        </div>
                    </div>
                }


            </div>

        </div>
    )
}

export default MobileDashBoard