import React from "react";
import { RichText } from '@graphcms/rich-text-react-renderer';

function Profile({ title, description }) {
  console.log(description)
  return (
    <div className="bg-gray-50 p-4 my-2 rounded shadow-lg max-w-6xl mx-auto space-y-4">
      <p className="text-2xl font-semibold text-gay-900 text-center uppercase p-2">{title}</p>
      {/* <div  className=" mx-auto text-center cmsContent"dangerouslySetInnerHTML={{__html:description.html}} /> */}
      <RichText content={description.raw} />
    </div>
  );
}

export default Profile;
