import Link from "next/link";
import { useState } from "react";

function HeaderRight({ navigation, categories }) {
  // categories ? console.log(categories) : console.log("ok");
  const [cat, setCat] = useState(true);

  return (
    <div className=" flex items-center  justify-end w-full  text-green-900 text-s space-x-8">
      <div className="">
      </div>
      <div className="flex items-center ">
        {!navigation?"":navigation.map((p) => (
          <div key={p.id} className="cursor-pointer">
            <Link href={`/${p.title.toLowerCase()}`}>
              <a>
              <p className=" p-2 font-bold uppercase ">{p.title}</p>
              </a>
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderRight;
