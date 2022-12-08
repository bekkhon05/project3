import { Box, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import Rasm from "./home-bg.jpg"
import Rasmq from "./tm-lumino-logo.png"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import "./style.css"
import Rasm1 from "./tm-600x300-01.jpg"


function Home() {
    return (
      
        <Box id="hh">
            <Box>


                <Box sx={{ textAlign: "center", marginTop: "4%" }}>
                    <Grid container justifyContent="center" spacing={4} >
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}   >
                            <CardContent sx={{ width: "93%", paddingLeft: "30px" }}>
                                <Typography gutterBottom component="div" sx={{ fontSize: "30px", color: "#fff", fontWeight: "bold", marginTop: "5px", marginBottom: "10px" }}>
                                    <img style={{
                                        width: "150px",
                                    }} src={Rasmq} alt="" />


                                </Typography>
                                <Typography sx={{ fontSize: "44px", margin: "0 0 5px", display: "block", marginBlockStart: "0.2em", marginBlockEnd: "0.5em", marginInlineStart: "0px", marginInlineEnd: "0px" }} >
                                    Lunimo
                                </Typography>
                                <Typography sx={{ fontSize: "24px", margin: "0 0 10px", display: "block", marginBlockStart: "1em", marginBlockEnd: "1.5em", marginInlineStart: "0px", marginInlineEnd: "0px" }} >
                                    Free Bootstrap 4.0 Website Template
                                </Typography>
                                <Typography  >
                                    <button className='btn' >Begin</button>

                                </Typography>

                            </CardContent>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>

    )
}

export default Home