import React from 'react'

function Herro() {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className=" flex flex-col md:flex-row  py-2">
        <div className="mr-auto items-center justify-center w- bg-tail-100 p-2">
            <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center  p-2 text-green-800 ">Welcome To BaliJava</h1>
            <p className="max-w-2xl mb-6 font-light text-green-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center font-bold text-2xl italic">Garment And Manufactures</p>
           
           
            <div className='w-full flex items-center justify-center' >
                <div className=" px-5 py-3 text-base font-medium text-gray-900 rounded-lg  text-center">CV. BALIJAVA CASA BUSANA is smalll bussiness for Garment and Manufacture based on in Ubud Bali and Banyuwangi East Java. We are one-stop solution services for our customers. Our servicess includes designing the products, choosing material, coloring, sewing, handloom, embroidery, packaging etc. Our motto is our customer satisfaction is our goal.
                </div>
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