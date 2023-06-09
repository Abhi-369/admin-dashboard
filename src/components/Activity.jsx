import React from 'react'
import { FaUsersCog } from 'react-icons/fa'

const Activity = ({ isTablet, isMobile }) => {
    return (
        <div className={`w-full ${!isMobile && 'bg-[#F5F6F8]'} rounded-md px-4 py-3`}>

            {!isMobile &&
                <div className='flex items-center justify-between mb-4'>
                    <h2 className='text-lg font-medium'>Activities</h2>
                    <button className="rounded bg-[#0C611A] text-white px-5 py-1.5 text-sm">View All</button>
                </div>
            }

            <div className='flex flex-col gap-4 sm:whitespace-nowrap child:relative sm:text-base text-sm'>
                <div className='flex items-center gap-5'>
                    <div className='bg-[#DEE8FF] rounded-full w-8 h-8 p-2 flex items-center justify-center'>
                        <FaUsersCog className='w-4 h-4' />
                    </div>
                    <div className="flex flex-col">
                        <div className=" font-medium">
                            <span>Leslie Alexander updated her</span> <span className="text-[#F8991F]">Account Type</span>
                        </div>
                        <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                    </div>
                    <div className='absolute hidden sm:block h-4 w-[2px] bottom-0 left-[15.5px] top-[39px] bg-slate-200' />
                </div>
                <div className='flex items-center gap-5'>
                    <div className='bg-[#DEE8FF] rounded-full w-8 h-8 p-2 flex items-center justify-center'>
                        <FaUsersCog className='w-4 h-4' />
                    </div>
                    <div className="flex flex-col">
                        <div className=" font-medium">
                            <span>John Smith removed Mark Fleix from</span> <span className="text-[#F8991F]">Family member</span>
                        </div>
                        <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                    </div>
                    <div className='absolute hidden sm:block h-4 w-[2px] bottom-0 left-[15.5px] top-[39px] bg-slate-200' />
                </div>
                <div className='flex items-center gap-5'>
                    <div className='bg-[#DEE8FF] rounded-full w-8 h-8 p-2 flex items-center justify-center'>
                        <FaUsersCog className='w-4 h-4' />
                    </div>
                    <div className="flex flex-col">
                        <div className=" font-medium">
                            <span>Leslie Alexander updated her</span> <span className="text-[#F8991F]">Account Type</span>
                        </div>
                        <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                    </div>
                    <div className='absolute hidden sm:block h-4 w-[2px] bottom-0 left-[15.5px] top-[39px] bg-slate-200' />
                </div>
                <div className='flex items-center gap-5'>
                    <div className='bg-[#DEE8FF] rounded-full w-8 h-8 p-2 flex items-center justify-center'>
                        <FaUsersCog className='w-4 h-4' />
                    </div>
                    <div className="flex flex-col">
                        <div className=" font-medium">
                            <span>John Smith removed Mark Fleix from</span> <span className="text-[#F8991F]">Family member</span>
                        </div>
                        <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                    </div>
                    <div className='absolute hidden sm:block h-4 w-[2px] bottom-0 left-[15.5px] top-[39px] bg-slate-200' />
                </div>
                <div className='flex items-center gap-5'>
                    <div className='bg-[#DEE8FF] rounded-full w-8 h-8 p-2 flex items-center justify-center'>
                        <FaUsersCog className='w-4 h-4' />
                    </div>
                    <div className="flex flex-col">
                        <div className=" font-medium">
                            <span>Leslie Alexander updated her</span> <span className="text-[#F8991F]">Account Type</span>
                        </div>
                        <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                    </div>
                    <div className='absolute hidden xl:block h-4 w-[2px] bottom-0 left-[15.5px] top-[39px] bg-slate-200' />
                </div>

                {!isTablet &&
                    <>
                        <div className='flex items-center gap-5'>
                            <div className='bg-[#DEE8FF] rounded-full w-8 h-8 p-2 flex items-center justify-center'>
                                <FaUsersCog className='w-4 h-4' />
                            </div>
                            <div className="flex flex-col">
                                <div className=" font-medium">
                                    <span>John Smith removed Mark Fleix from</span> <span className="text-[#F8991F]">Family member</span>
                                </div>
                                <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                            </div>
                            <div className='absolute hidden sm:block h-4 w-[2px] bottom-0 left-[15.5px] top-[39px] bg-slate-200' />
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='bg-[#DEE8FF] rounded-full w-8 h-8 p-2 flex items-center justify-center'>
                                <FaUsersCog className='w-4 h-4' />
                            </div>
                            <div className="flex flex-col">
                                <div className=" font-medium">
                                    <span>Leslie Alexander updated her</span> <span className="text-[#F8991F]">Account Type</span>
                                </div>
                                <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                            </div>
                            <div className='absolute hidden sm:block h-4 w-[2px] bottom-0 left-[15.5px] top-[39px] bg-slate-200' />
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='bg-[#DEE8FF] rounded-full w-8 h-8 p-2 flex items-center justify-center'>
                                <FaUsersCog className='w-4 h-4' />
                            </div>
                            <div className="flex flex-col">
                                <div className=" font-medium">
                                    <span>Leslie Alexander updated her</span> <span className="text-[#F8991F]">Account Type</span>
                                </div>
                                <span className='text-[#C7C7C7] font-medium text-xs'>5 October 11:46 AM</span>
                            </div>
                        </div>
                    </>
                }

            </div>
        </div>)
}

export default Activity