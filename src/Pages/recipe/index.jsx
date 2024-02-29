import { Container } from "@mui/material";
import { useParams } from "react-router-dom"
import useSWR from "swr";
import loadingIcon from "../../Components/Assets/images/spinning-dots.svg"

const getRecipe = (...args) => {
    // console.log(args);
    // prepare URL
    const url = new URL(args[0]);
    url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
    //fetch and return recipe
    return fetch(url).then(response => response.json());

}

export default function Recipe() {
    const { id } = useParams();
    const { data, isLoading } = useSWR(
        `https://api.spoonacular.com/recipes/${id}/information`, getRecipe
    );
    return (
        <>
            {isLoading ? <img src={loadingIcon} /> : (
                <Container>
                    <h1>{data.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: data.summary }} />
                    <img src={data.image} />
                </Container>
            )}
        </>
    )
}