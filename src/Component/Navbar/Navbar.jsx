import 
{Container,Box , Toolbar  , AppBar 
} from '@mui/material'
function Navbar() {
    return ( 
        <div className="nav"> 
            <Box sx={{ flexGrow: 3 }}>
      <AppBar position="static">
      <Container>
        <Toolbar>
            <div variant="h5" component="span"  sx={{ flexGrow: 1 }}>
            Weather App
          </div> 
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
        </div>
     );
}

export default Navbar;