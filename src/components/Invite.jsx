import React, { useState } from 'react'

const Invite = ({ isMobile }) => {

    const [showReq, setShowReq] = useState("received")

    return (
        <div className={`${!isMobile && 'bg-[#F5F6F8]'} rounded-md p-3`}>
            <div className='flex items-center justify-between'>
                <h2 className='text-lg font-medium'>Invitations</h2>
                <div className='flex items-center gap-3 rounded-full bg-[#DBDBDB] child:cursor-pointer'>

                    <div className={`relative ${showReq === "sent" ? 'bg-[#F8991F] text-white' : 'bg-[#DBDBDB] text-[#232E3E]'} text-xs px-4 py-2 rounded-full font-medium`} onClick={() => setShowReq("sent")}>
                        Sent (15)
                        {showReq === "sent" &&
                            <span className='absolute -bottom-1 left-9 bg-[#F8991F] w-3 h-3 rotate-45'></span>
                        }
                    </div>

                    <div className={`relative ${showReq === "received" ? 'bg-[#F8991F] text-white' : 'bg-[#DBDBDB] text-[#232E3E]'} text-xs px-4 py-2 rounded-full font-medium`} onClick={() => setShowReq("received")}>
                        Received (5)
                        {showReq === "received" &&
                            <span className='absolute -bottom-1 left-11 bg-[#F8991F] w-3 h-3 rotate-45'></span>
                        }
                    </div>
                </div>
            </div>

            <div className="relative">
                {
                    showReq === "received" &&
                    <div className={`flex flex-col gap-2 mt-3 ${!isMobile && 'border-r-[3px] border-[#E8E8E8] pr-5'} child:flex child:justify-between child:items-center child:bg-[#DEE8FF] child:rounded-md child:px-3 child:py-1`}>
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
                }

                {
                    showReq === "sent" &&
                    <div className={`child:rounded-md font-medium flex flex-col gap-2 mt-3 ${!isMobile && 'border-r-[3px] border-[#E8E8E8] pr-5'} child:bg-[#DEE8FF] child:py-1 child:px-7`}>
                        <div>
                            <span className="text-[#F8991F]">You</span> have invited johnsmith@gmail.com to become <br /> family member.
                        </div>
                        <div>
                            <span className="text-[#F8991F]">You</span> have invited johnsmith@gmail.com to become <br /> family member.
                        </div>
                        <div>
                            <span className="text-[#F8991F]">You</span> have invited johnsmith@gmail.com to become <br /> family member.
                        </div>
                        <div>
                            <span className="text-[#F8991F]">You</span> have invited johnsmith@gmail.com to become <br /> family member.
                        </div>
                        <div>
                            <span className="text-[#F8991F]">You</span> have invited johnsmith@gmail.com to become <br /> family member.
                        </div>
                    </div>
                }
                {!isMobile &&
                    <div className="bg-[#232E3E] w-5 h-5 rounded-full absolute -right-2 top-4 opacity-50" />
                }

            </div>
        </div>)
}

export default Invite