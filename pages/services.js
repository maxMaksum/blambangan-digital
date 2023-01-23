import React, {useContext} from "react";
import Profile from "../components/card/Profile";
import MyBanner from "../components/card/Banner";
import {newService } from "../lib/graphql";
import { graphCmsRequest } from "../lib/services";
import { UserContext } from "../components/card/Layout";
import { RichText } from '@graphcms/rich-text-react-renderer';

function MyService({ newService }) {
  const { smallMenu, setSmallMenu } = useContext(UserContext);
  const services222 = newService.service222[0]
 

  return (
    <div className="mt-20 mx-auto" onClick= {() => setSmallMenu(false)} >
      <div className="bg-gray-50 p-4 my-2 rounded shadow-lg max-w-6xl mx-auto space-y-4 h-100">
      <p className="text-2xl font-semibold text-gay-900 text-center uppercase p-2 space-y-4">{services222.title}</p>
      {/* <div  className=" mx-auto text-center cmsContent"dangerouslySetInnerHTML={{__html:description.html}} /> */}
      <RichText content={services222.description.raw} />
    </div>

     
    </div>
  );
}

export default MyService;

export async function getStaticProps() {
  const myProfile = await graphCmsRequest(newService);

  
  return {
    props: {
      newService:myProfile,
      
     
    },
  };
}
