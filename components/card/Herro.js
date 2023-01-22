import React from 'react'

function Herro() {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className=" flex flex-col md:flex-row max-w-screen-xl py-2 mb-4 ">
        <div className="mr-auto items-center justify-center w-full">
            <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center  p-2 ">Welcome To BaliJava</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">Garment And Manufactures</p>
           
           
            <div className='w-full flex items-center justify-center' >
                <div className=" px-5 py-3 text-base font-medium text-gray-900 rounded-lg  text-center">Bali Hai Cruises is your one-stop getaway destination for trips around Nusa Lembongan and Nusa Penida Islands. Whether you’re dreaming of a sunset cruise, a day trip to the famous Kelingking Beach, or a week-long stay in our lush beach resort, we have something for everyone.</div>
                
            </div> 
        </div>
        <div className="w-full flex items-center justify-center lg:items-start md:justify-end bg-contain">
            <img src="https://greengarment.id/wp-content/uploads/2021/11/Perbedaan-Penjahit-Konveksi-dan-Garment.jpg" alt="mockup" className='bg-contain'/>
        </div>                
    </div>
</section>




  )
}

export default Herro