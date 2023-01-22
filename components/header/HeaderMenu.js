import { useState, useContext } from 'react';
import Link from 'next/link'
import { UserContext } from '../card/Layout';

function HeaderMenu({changeMenu, navigation, categories}) {
  
 

  const [showCategories, setShowCategories]=useState(false)

    return (
      <div
        className={` w-64  flex flex-col  ml-4 text-gray-900 text-s z-50`
        }
      >
           <div className="mt-8">
          <div className='flex flex-col'>
            {navigation.map((p) => (
              <div key={p.id}>
                <Link href={`/${p.title.toLowerCase()}`}>
                  <a>
                  <p className=" p-2 uppercase cursor-pointer link">
                    {p.title}
                  </p>
                  </a>
                </Link>
              </div>
            ))}
            <p onClick ={()=>setShowCategories(!showCategories)}className=" p-2 uppercase cursor-pointer link">Category</p>
          </div>

          
        </div>
      </div>
    );
}7

export default HeaderMenu