import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/solid";

function HomeDetails({ post }) {
  const router = useRouter()
 
  return (
    <div className="bg-gray-100 container mx-auto  mt-20 max-w-6xl p-6 shadow-xl rounded-2xl w-full bg-green-100  ">
        <button onClick={()=>router.push("/")}>
           <ArrowLeftIcon className="h-8 w-8 text-green-500 z-100 mx-0 text-4xl cursor-pointer" />
        </button>
        <div
          key={post.id}
          className={
            "h-screen bg-gray-50 rounded flex flex-col md:flex-row  items-center rounded-lg px-4"
          }
        >
        
            <div className="w-full md:w-1/2 rounded h-full flex items-center justify-center bg-contain bg-center relative">
             
            <div className=" h-full w-full bg-contain bg-no-repeat bg-center" 
              style={{
              backgroundImage: `url(${post.images.url})`,
            }}>
                
               </div>
            </div>
            <div className=" w-full md:w-1/2 h-full flex flex-col justify-center items-start space-y-4  px-0">
           
                
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
