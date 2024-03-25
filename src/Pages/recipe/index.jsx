import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import loadingIcon from "../../Components/Assets/images/spinning-dots.svg";
import { Container } from "@mui/material";

const getRecipe = (...args) => {
  // console.log(args);
  // prepare URL
  const url = new URL(args[0]);
  url.searchParams.append("apiKey", process.env.REACT_APP_RECIPE_API_URL);
  //fetch and return recipe
  return fetch(url).then((response) => response.json());
};

export default function Recipe() {
  const { id } = useParams();
  const { data, isLoading } = useSWR(
    `${process.env.REACT_APP_RECIPE_API}/recipes/${id}`,
    getRecipe
  );

  return (
    <>
      {isLoading ? (
        <img src={loadingIcon} alt="Preloader" />
      ) : (
        <Container>
          <h1>{data.title}</h1>
          <div dangerouslySetInnerHTML={{__html: data.summary }} />
          <img src={data.image} alt="Preloader" />
        </Container>
      )}
    </>
  );
}

