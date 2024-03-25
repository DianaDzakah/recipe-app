import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {" "}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography color='white' to="/recipes" variant="h6" component={Link} sx={{ flexGrow: 1 }}>
            Recipe-App
          </Typography>
          <Button to="/add recipe" variant="contained"  component={Link} color="primary">Add New Recipe</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
