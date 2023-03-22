import React from 'react'

const FamilyMem = ({ isMobile }) => {
    return (
        <div className='bg-[#F5F6F8] rounded-md p-3 w-full'>
            <div className='flex items-center justify-between'>
                <h2 className='text-lg font-medium'>{isMobile && 'My '}Family</h2>
                <div className='flex items-center gap-3'>
                    <img src="/Images/search.svg" alt="" />
                    <button className='bg-[#0C611A] rounded text-white px-4 py-1 text-sm'>Add New</button>
                </div>
            </div>

            <div className='relative'>
                <div className={`flex flex-col gap-2 my-4 ${!isMobile && ' border-r-[3px] border-[#E8E8E8] pr-5'}`}>

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
                    {!isMobile &&
                        <>
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
                        </>
                    }
                </div>

                {!isMobile &&
                    <div className="bg-[#232E3E] w-5 h-5 rounded-full absolute -right-2 top-4 opacity-50" />
                }
            </div>

        </div>)
}

export default FamilyMem