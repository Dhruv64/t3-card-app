import React from 'react';
import { IoArrowBack } from "react-icons/io5";
import { useForm } from 'react-hook-form';
// import { DevTool } from "@hookform/devtools"
import Selectors from "~/components/selectors"
import Link from 'next/link';


type FormValues = {
    firstname: string
    middlename: string
    lastname: string
    title: string
    department: string
    companyname: string

}

const New = () => {
    const form = useForm<FormValues>()
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const onSubmit = (data: FormValues) => {
        console.log('Form Submitted', data)
    }

    return (
        <div>
            <div className='my-5'>
                <div className=' px-3'>
                    <Link href='/app/cards'><button className='bg-blue-500 hover:bg-blue-400 text-white rounded-full font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 '><IoArrowBack size={30} /></button></Link>
                    <label className="text-gray-500 font-bold pl-5">
                        Cards Details
                    </label>
                </div>

            </div>
            <div className='text-center p-8 mx-auto flex ' >
                <div className='border border-dashed p-5 rounded mx-10'>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div>
                            <div className=''>
                                <label className='font-bold flex mb-3' htmlFor="firstname">First Name</label>
                                <input className='block w-auto py-1.5 px-3 text-sm leading-snug border border-white border-x border-solid rounded' type="text" id="firstname" {...register("firstname", {
                                    required: {
                                        value: true,
                                        message: "First Name is required"
                                    }

                                })} />
                                <p className='text-red-600 text-[12px] text-left'>{errors.firstname?.message}</p>
                            </div>

                            <div>
                                <label className='font-bold flex mb-3' htmlFor="middlename">Middle Name</label>
                                <input className='block w-auto py-1.5 px-3 text-sm leading-snug border border-white border-x border-solid rounded' type="text" id="middlename" {...register("middlename")} />
                            </div>

                            <div className=''>
                                <label className='font-bold flex mb-3' htmlFor="lastname">Last Name</label>
                                <input className='block w-auto py-1.5 px-3 text-sm leading-snug border border-white border-x border-solid rounded' type="text" id="lastname" {...register("lastname", {
                                    required: "Last Name is required"
                                })} />
                                <p className='text-red-600 text-[12px] text-left'>{errors.lastname?.message}</p>
                            </div>
                            <div className='flex-col'>
                                <label className='font-bold flex mb-3' htmlFor="title">Title</label>
                                <textarea className='block w-auto py-1.5 px-3 text-sm leading-snug border border-white border-x border-solid rounded' id="title" {...register("title")} />

                            </div>
                            <div>
                                <label className='font-bold flex mb-3' htmlFor="department">Department</label>
                                <input className='block w-auto py-1.5 px-3 text-sm leading-snug border border-white border-x border-solid rounded' type="text" id="department" {...register("department")} />

                            </div>
                            <div>
                                <label className='font-bold flex mb-3' htmlFor="companyname">Company Name</label>
                                <input className='block w-auto py-1.5 px-3 text-sm leading-snug border border-white border-x border-solid rounded' type="text" id="companyname" {...register("companyname")} />

                            </div>
                        </div>
                        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Save
                        </button>
                    </form>
                </div>

                {/* <DevTool control={control} /> */}
                <Selectors />
            </div>

        </div>
    )
}

export default New

{/* <div className='px-3 py-1'>
         <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  h-10 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Card Name' />
    </div> 
*/}
{/* 
display:block;
width:400px;
padding :6px 12px;
font-size:14px;
line-height: 1.42857143;
color:#fff;
background—image:none;
border: 1px solid #ccc;
border—radius: 4px;
*/}