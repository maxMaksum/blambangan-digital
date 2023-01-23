import PostDeail from "../../components/posts/PostDeail";
import { getAlbumDetails, graphCmsRequest } from "../../lib/services";
import {picturesQuery } from "../../lib/graphql";
import HomeDetails from "../../components/posts/HomeDetails";


function product({  myServicesDetails}) {
 
  const newProducts=myServicesDetails.album123
  return <div><HomeDetails post={newProducts}/></div>;
}

export default product;

export async function getStaticPaths() {
  const myPictures = await graphCmsRequest(picturesQuery );
  const myService = myPictures.images123
  const paths = myService?.map((p) => ({
    params: { product: p.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { product } = params;

  const myServicesDetails = await getAlbumDetails(product);

  return {
    props: {
      myServicesDetails,
    },
  };
}
