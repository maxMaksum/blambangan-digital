import React from "react";


function Profile({ title, description }) {
  
  return (
    <div className="bg-gray-50 p-4 my-2 rounded shadow-lg max-w-6xl mx-auto">
      <p className="text-4xl font-bold italic text-green-900 text-center uppercase p-2">{title}</p>
      <div  className=" mx-auto text-center cmsContent"dangerouslySetInnerHTML={{__html:description.html}} />
    </div>
  );
}

export default Profile;
