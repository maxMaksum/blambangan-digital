import Image from "next/image";
import Link from "next/link";

function HomeDetails({ post }) {
 
  console.log(post)
  return (
    <div className="bg-gray-100 container mx-auto  mt-20 max-w-6xl p-6 shadow-xl rounded-2xl">
        <div
          key={post.id}
          className={
            "h-screen cursor-pointer bg-gray-50 rounded flex flex-col md:flex-row  items-center rounded-lg px-4"
          }
        >
            <div className="w-full md:w-1/2 rounded h-full flex items-center justify-center bg-contain bg-center relative">
             
            <div className=" h-full w-full bg-contain bg-no-repeat bg-center" 
              style={{
              backgroundImage: `url(${post.images.url})`,
            }}>
                
               </div>
            </div>
            <div className=" w-1/2 h-full flex flex-col justify-center items-start space-y-4  px-8">
           
                
                <h1 className="uppercase  text-lg my-2 font-bold text-center">{post.title}</h1> 
           
                <h2>Type : {post.fabric}</h2>
                <p>Cost : {post.price}</p>
                <div className="text-md"> 
                <span className="italic">Description</span>
                <p className="italic"> {post.description}</p>
               
                </div>
              
            </div>
         
          </div>
      
     
    </div>
  );
}

export default HomeDetails;
