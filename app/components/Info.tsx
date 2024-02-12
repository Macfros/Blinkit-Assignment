"use client";

import FadeIn from "./FadeIn";

const Info = () => {
    return (
        <FadeIn>
        <h1 className="text-6xl font-bold transition duration-150  title">Blinkit Assignment</h1>
           <div className="italic p-2 md:p-5 lg:p-10 leading-relaxed tracking-wide merriweather">
         Here is an app with basic authentication functionality done using next-auth. This is a full stack applicaiton using mongodb as databaseprovider, prisma as ORM and using jwt for authentication. I've
           </div>
        </FadeIn>
        )
}

export default Info;