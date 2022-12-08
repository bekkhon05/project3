import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';



export default function Contact() {
  return (
    <Box sx={{ width: '100%', background:"#F4F4F4",    }}>
      <Container >
        <Typography sx={{
          position:"absolute",
          marginLeft:{lg:"30%", md:"35%", sm:"30%", xs:"10%"},
          marginTop:{lg:"10%", md:"4%", sm:"3%", xs:"3%"},
          fontSize:"45px",
          color:"#006699"
        }}>
          Contact Us
        </Typography>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} lg={7} md={7} sm={7}>

            <Grid item lg={6} sx={{
              marginTop: { lg: "37%", md: "20%", sm: "20%" ,xs:"29%"}
            }}>



              <Typography sx={{
                width: { lg: "100%", md: "50%", sm: "50%", xs: '97%' },
                // marginLeft:{lg:"55%"},
                marginTop: { lg: "-0.3%", sm: "25%", xs: "15%", md: "10%" },
                marginBottom: { sm: "-24%", md: "0%" , lg:"-10%", },

              }} >

                <input placeholder='Name' style={{ width: "105%", height: "55px", border:"none" }} type="text" />
              </Typography>




              <Typography sx={{
                width: { lg: "105%", md: "50%", sm: "50%", xs: '100%' },
                marginLeft: { lg: "120%", md: "58%", sm: "60%" },
                marginTop: { lg: "-16.5%", md: "-10.3%", sm: "-55.3", xs: "10%" }
              }}  >
                <input placeholder='Gmail' style={{ width: "100%", height: "55px", border:"none" }} type="text" /> <br />

              </Typography>


              <Typography sx={{
                width: { lg: "200%", xs: '91%', md: "98%", sm: "98%" },
                marginTop: { lg: "12%", md: "5%", sm: "5%", xs: "10%" }


              }}>

                <input placeholder='Subject' style={{ width: "112.2%", height: "55px", border:"none" }} type="text" /> <br />
              </Typography>

              <Typography sx={{
                width: { lg: "225%", md: "110%", sm: "110%" },
                marginTop: { lg: "12%", md: "5%", sm: "5%", xs: "10%" },
                height: { lg: "15%" }


              }}>

                <textarea placeholder='Massenge' style={{ width: "100%", height: "100%", border:"none" }} name="Messenge" id="" cols="22" rows="10"></textarea>
              </Typography>
              <Typography sx={{
                width: { lg: "100px", md: "30%", sm: "30%", xs: "35%" },
                marginLeft: { lg: "180% ", md: "80%", sm: "80%", xs: "50%" },
                marginTop: { lg: "10%", md: "5%", sm: "5%", xs: "10%" },

              }} >


                <button style={{ 
                      width:"150px",
                height:"50px",
                borderRadius:"50px",
                fontSize:"20px",
                border:" 2px solid #4EA7FF",
                color:"#4EA7FF",
                background:"none"
                      
                      
                     }} >Submite</button>
            </Typography>

          </Grid>


        </Grid>
        <Grid item xs={12} lg={5} md={4} sm={5}>

          <Typography sx={{
            fontSize: { lg: "25px", md: "24px", sm: "24px", xs: "25px" },
            marginTop: { lg: "51%", md: "35%", sm: "35%", xs: "15%" },
            marginLeft: { lg: "25%", md: "25%", sm: "25%" },
            color: "#4EA7FF"
          }}>
            Etiam at rhoncus nisl
          </Typography>


          <Typography sx={{
            fontSize: { lg: "19px", md: "16px", sm: "16px", xs: "18px" },
            marginTop: { lg: "9%", md: "12%", sm: "12%" },
            marginLeft: { lg: "25%", md: "25%", sm: "25%" },
            color:"rgb(124, 120, 124)"
          }}>

            Nunc rutrum ac ante euismod cursus. Suspendisse imperdiet feugiat massa nec iaculis
            <br />
            <br />

            Tel: 010-020-0340
            Email: <span style={{color:"#4EA7FF"}}> info@company.com</span>
          </Typography>

        </Grid>

      </Grid>
      <Typography sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: { md: "8%", sm: "10%", xs: "15%" },
        color:"rgb(124, 120, 124)",

      }}>
        Copyright © 2016 Company Name
      </Typography>
    </Container>
    </Box >
  );
}