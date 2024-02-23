import { AppBar,Toolbar,IconButton,Typography } from "@mui/material"
import{Menu as MenuIcon} from "@mui/icons-material"


const Navbar = () => {
  return (
    <div> <AppBar position="static">
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
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Recipe-App
      </Typography>
      {/* <Button color="inherit">Login</Button> */}
    </Toolbar>
  </AppBar>
  </div>
  )
}

export default Navbar