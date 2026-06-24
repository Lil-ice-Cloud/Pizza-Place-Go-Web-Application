
export default function Home() {
    return (
     <div className="
     flex
     flex-col
     justify-center
     items-center
     h-screen
     text-center
     px-4
     ">
       <h1 className="
       font-bold
       text-[30px]
       sm:text-[40px]
       md:text-[50px]
       mb-6
       ">
         Pizza Place GO
       </h1>

       <div className="
       flex
       gap-4
       ">
           <button className="
            rounded-full
            px-5
            py-5
            sm:px-8
            sm:py-6
            lg:px-10
            lg:py-6
            text-lg
            ">
               Get Started
           </button>
       </div>
     </div>
    )
};