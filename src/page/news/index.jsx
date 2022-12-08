import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rasm1 from "./tm-600x300-01.jpg"
import Rasm2 from "./tm-600x300-02.jpg"
import Rasm3 from "./tm-600x300-03.jpg"
import { Container, Typography } from '@mui/material';

export default function News() {
  return (
    <Box sx={{ flexGrow: 1 , backgroundColor:"#F3F3F3" }} >
      <Container sx={{
     
    }}>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} md={6} sx={{
            width:{lg:"100%"},
            marginTop:{lg:"5%", md:"5%", sm:"5%",xs:"5%"}

          }}>
            <img style={{
              width:  "100%",
              height: "100%"
            }} src={Rasm1} alt="" />


          </Grid>
          <Grid item xs={12} lg={6} md={6} sx={{
            width:{lg:"450px",},
            height:{lg:"300px", sm:"250px", xs:"50vh"},
            background:"white  ",
            // marginTop:"1.3%",
            marginTop:{lg:"6.2%", md:"6.5%"}



          }}>
            <Typography sx={{fontSize:{lg:"32px", sm:"29px"},
          padding:"10px"
          }}>
            Nulla molestie euismod
            </Typography>
            <Typography sx={{fontSize:{lg:"19px"},
          padding:"20px"
          }}>
            Lumino theme is a Bootstrap 4.0 mobile compatible layout for your website. Check "columns" page for one, two, three columns and tables.
            </Typography>
            <Typography sx={{
                    position: "absolute",
                    fontSize: "29px",
                    color: "red",
                    marginLeft:{lg:"24%", md:"28%", sm:"66%",xs:"47%"},
                    
                    
                }}>
                    <button style={{
                      width:"150px",
                      height:"50px",
                      borderRadius:"50px",
                      fontSize:"20px",
                      border:" 2px solid #4EA7FF",
                      color:"#4EA7FF",
                      background:"none"
                      
                      
                    }} >Read</button>

                </Typography>





          </Grid>












        </Grid>
        <Grid container spacing={2}>
          
          <Grid item xs={12} lg={6 } md={6} sx={{
            width:{lg:"450px"},
            height:{lg:"300px",sm:"250px",xs:"300px"},
            background:"white  ",
            // marginLeft:"0.1%",
            marginTop:{lg:"6.2%", md:"6.5%", sm:"56%",xs:"68%"}



          }}>
            <Typography sx={{fontSize:{lg:"32px", sm:"29px"},
          padding:"10px"
          }}>
            Nulla molestie euismod
            </Typography>
            <Typography sx={{fontSize:{lg:"19px"},
          padding:"20px"
          }}>
            Lumino theme is a Bootstrap 4.0 mobile compatible layout for your website. Check "columns" page for one, two, three columns and tables.
            </Typography>
            <Typography sx={{
                    position: "absolute",
                    fontSize: "29px",
                    color: "red",
                    marginLeft:{lg:"24%", md:"28%", sm:"66%",xs:"47%"},
                    
                    
                }}>
                    <button style={{
                      width:"150px",
                      height:"50px",
                      borderRadius:"50px",
                      fontSize:"20px",
                      border:" 2px solid #4EA7FF",
                      color:"#4EA7FF",
                      background:"none"
                      
                      
                    }} >Read</button>

                </Typography>





          </Grid>
          <Grid item xs={12} lg={6} md={6} sx={{
            width:{lg:"100%"},
            marginTop:{lg:"5%", md:"5%", sm:"-86%", xs:"-158%"},
            marginLeft:{md:"-1.6%"}  ,
            height:{sm:"100%", xs:"100%"}

          }}>
            <img style={{
              width:  "100%",
              height: "100%"
            }} src={Rasm2} alt="" />


          </Grid>











        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} md={6} sx={{
            width:{lg:"100%", md:"100%"},
            marginTop:{lg:"5%", md:"5%",sm:"5% " ,xs:"5%"},
            marginBottom:{lg:"5%",md:"5%" }

          }}>
            <img style={{
              width:  "100%",
              height: "100%"
            }} src={Rasm3} alt="" />


          </Grid>
          <Grid item xs={12} lg={6} md={6} sx={{
            width:{lg:"450px"},
            height:{lg:"300px",sm:"250px",xs:"300px"},
            background:"white  ",
            // marginTop:"1.3%",
            marginTop:{lg:"6.2%", md:"6.5%",xs:"0%"},
            marginBottom:{lg:"5%",md:"5%", xs:"5%" }




          }}>
            <Typography sx={{fontSize:{lg:"32px", sm:"29px"},
          padding:"10px"
          }}>
            Nulla molestie euismod
            </Typography>
            <Typography sx={{fontSize:{lg:"19px",},
          padding:"20px"
          }}>
            Lumino theme is a Bootstrap 4.0 mobile compatible layout for your website. Check "columns" page for one, two, three columns and tables.
            </Typography>
            <Typography sx={{
                    position: "absolute",
                    fontSize: "29px",
                    color: "red",
                    marginLeft:{lg:"24%", md:"28%",sm:"66%",xs:"47%"},
                    
                    
                }}>
                    <button style={{
                      width:"150px",
                      height:"50px",
                      borderRadius:"50px",
                      fontSize:"20px",
                      border:" 2px solid #4EA7FF",
                      color:"#4EA7FF",
                      background:"none"
                      
                      
                    }} >Read</button>

                </Typography>





          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}