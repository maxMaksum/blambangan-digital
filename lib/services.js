import { useState, useEffect } from "react";
import { headerQuery } from "./graphql";
import { request, GraphQLClient, gql } from "graphql-request";
import useSWR from "swr";

const url = process.env.URL;

export const graphQLClient = new GraphQLClient(url, {
  headers: {
    authorization: process.env.TOKEN,
  },
});

export const getAlbumDetails = async (id) => {
  const query = gql`
    query MyQuery($id: ID) {
      album123(where: {id: $id}) {
        id
        description
        images {
          height
          url
          width
        }
        title
        fabric
        price
      }
    }
  `;

  const variables = {
    id: id,
  };
  const dataG = await graphQLClient.request(query, variables);
  return dataG;
};




export const getCategoriesDetails = async (id) => {
  const query = gql`
    query MyQuery($id: ID) {
      services(where: { newCategory: { id_contains: $id } }) {
        id
        image {
          id
          url
          width
          height
        }
        title
        description

        newCategory {
          id
          title
        }
      }
    }
  `;

  const variables = {
    id: id,
  };
  const dataG = await graphQLClient.request(query, variables);
  return dataG;
};

export const getServicesDetails = async (id) => {
  const query = gql`
    query ($id: ID) {
      service(where: { id: $id }) {
        title
        id
        videoUrl
        description
        newCategory {
          title
        }
        images {
          url
          width
          height
          id
        }
        image {
          url
          height
          width
        }
      }
    }
  `;

  const variables = {
    id: id,
  };
  const dataG = await graphQLClient.request(query, variables);
  return dataG;
};

export const GraphCmsFether = (query) => {
  const myFetcher = async (query) => await graphQLClient.request(query);
  const { data, error } = useSWR(query, myFetcher);
  if (data) return data;
  if (error) return error;
};

export const graphCmsRequest = async (query) => {
  const myFetcher = await graphQLClient.request(query);
  return myFetcher;
};

