import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import emptyIcon from "../../Components/Assets/images/spinning-dots.svg";
import loadingIcon from "../../Components/Assets/images/undraw_Empty_re_opql.png";
import Navbar from "../../Components/Navbar";


export default function Recipes() {
const [recipes, setRecipes] = useState([]);
const [keyword, setKeyword] = useState("");
const [loading, setLoading] = useState("false");


const getRecipes =() => {
  setLoading(true);
    // prepare URL
    // const url = new URL ("https://api.spoonacular.com/recipes/complexSearch");
    const url = new URL (`${process.env.REACT_APP_RECIPE_API}/recipes`);
    // url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
    // url.searchParams.append('query', keyword);
   
   
    // fetch recipes from API 
    fetch(url)
    
    .then(response => response.json())
    .then (data => {
        //update recipes state
        // setRecipes(data.results);
        setRecipes(data);
        // console.log(data);
    })
   .catch(error => {
    console.log(error);
   }
    )
    .finally(()=> setLoading(false))
}  
 useEffect(getRecipes,[keyword]);

  return (
    <>
    <Navbar/>
    
    <Container sx={{ my: "2rem" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Enter a keyword to search Recipes and press enter"
        variant="outlined"
        onKeyDown={event => event.key === 'Enter' && setKeyword(event.target.value)}
      />

      <Grid sx={{ mt: "1rem", justifyContent:"center"}} container spacing={3}>
      { loading ? <img src= {loadingIcon} width="100%" alt="Preloader"/> : recipes.length > 0 ? 
          recipes.map(recipe =>
      (<Grid key={recipe._id}item xs={4}>
          <Card sx={{ maxWidth: 345, height: '100%' }}>
            <CardActionArea sx={{height: '100%' }}>

              <CardMedia
                component="img"
                height="140"
                image={recipe.image}
                alt={recipe.title}
              />
              <CardContent sx={{height: '100%' }}>


                <Link to={`/recipes/${recipe._id}`}>
                <Typography gutterBottom variant="h5" component="div">
                 {recipe.title}
                </Typography>
                </Link>
                </CardContent>
            </CardActionArea>

          </Card>
        </Grid>
        )) : <img src={emptyIcon} width="30%" alt="Search not found"/>
      }   
    </Grid>
         
    </Container>
    </>
  );
}
