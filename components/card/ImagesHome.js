import Masonry from "react-masonry-css";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function PostDetails({ myGalery}) {
  const [showImage, setShowImage] = useState(false);
  const [imageCover, setImageCover] = useState({ id: "ckvdhcmeg4sh30b88mezh0vd1", url: "/background.png", width: 740, height: 1600 });

 
  return (
    <div className="bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center mx-auto">
          {myGalery?.map((p) => (
            <div key={p.id}
              className=" h-96 w-full  rounded-xl shadow-lg relative bg-blue-50"
            >
              <Link href={`/products/${p.id}`}>
                <a>
             <div className="h-full w-full rounded space-y-2 flex flex-col items-center justify-center bg-contain bg-center relative">
             
              <div className=" h-64 w-full bg-contain bg-no-repeat bg-center" 
                style={{
                backgroundImage: `url(${p.images.url})`,
              }}>
                 
                </div>

                <div className="h-32">
                  <h2 className="text-lg font-bold italic text-green-900">{p.title}</h2>
                  <p className="line-clamp-2 p-2">{p.description}</p>
                </div>
             </div>
             </a>
             </Link >
                
            </div>
          ))}
        </div>
    </div>
  );
}

export default PostDetails;
