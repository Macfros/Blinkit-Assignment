"use client"

import {useSession} from "next-auth/react";
import SubNavbar from "./../components/subNavbar/SubNavbar";
import Sidebar from "./../components/sidebar/Sidebar";
import BaseLayout from "./../components/BaseLayout";
import { CldUploadWidget } from 'next-cloudinary';

const Dashbboard = () => {
    const {data: session, status} =useSession();
    console.log(session);
    return (
        <BaseLayout>
        <div className="flex">
        <Sidebar />
        <div className="w-screen flex justify-center">
                <div className="flex flex-col justify-center align-middle ">
<CldUploadWidget uploadPreset="h9u8miok">
  {({ open }) => {
    return (
      <button className="border-4 bg-yellow-300 p-5 text-2xl font-semibold border-none" onClick={() => open()}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>
            </div>
            </div>
        </div>
        </BaseLayout>
        )
}

export default Dashbboard;