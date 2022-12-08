import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Rasm1 from "./tm-450x300-03.jpg"
import Rasm2 from "./tm-450x300-05.jpg"
import Rasm3 from "./tm-450x300-06.jpg"
import Rasm4 from "./tm-450x300-07.jpg"
import Rasm5 from "./tm-450x300-08.jpg"
import Rasm6 from "./tm-450x300-09.jpg"
import Rasm7 from "./tm-450x300-10.jpg"
import Rasm8 from "./tm-450x300-12.jpg"
import Rasm9 from "./tm-450x300-01.jpg"
import Rasm10 from "./tm-700x350-01.jpg"
import Rasm11 from "./tm-450x300-11.jpg"
import Rasm12 from "./tm-450x300-02.jpg"


export default function Gallary() {
  return (
    <Box sx={{ width: '100%,' }}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        <Grid item xs={6} lg={3} sm={4} md={3}>
            <img style={{width:"109%", height:"100%"}} src={Rasm1} alt="" />
          </Grid>
          <Grid item xs={6} lg={3} sm={4} md={3}>
            <img style={{width:"109%", height:"100%"}} src={Rasm2} alt="" />
          </Grid>
          <Grid item xs={6} lg={3} sm={4} md={3}>
            <img style={{width:"109%", height:"100%"}} src={Rasm3} alt="" />
          </Grid>
          <Grid item xs={6} lg={3} sm={4} md={3}>
            <img style={{width:"109%", height:"100%"}} src={Rasm4} alt="" />
          </Grid>
          <Grid item xs={6} lg={3} sm={4} md={3} sx={{marginTop:"-0.7%"}}>
            <img style={{width:"109%", height:"100%"}} src={Rasm5} alt="" />
          </Grid>
          <Grid item xs={6} lg={3} sm={4} md={3} sx={{marginTop:"-0.7%"}}>
            <img style={{width:"109%", height:"100%"}} src={Rasm6} alt="" />
          </Grid>
          <Grid item xs={6} lg={3} sm={4} md={3} sx={{marginTop:"-0.7%"}}>
            <img style={{width:"109%", height:"100%"}} src={Rasm7} alt="" />
          </Grid>
          <Grid item xs={6} lg={3} sm={4} md={3} sx={{marginTop:"-0.7%"}}>
            <img style={{width:"109%", height:"100%"}} src={Rasm8} alt="" />
          </Grid>
          <Grid item xs={6} lg={3} sm={4} md={3} sx={{marginTop:"-0.7%"}}>
            <img style={{width:"109%", height:"100%"}} src={Rasm9} alt="" />
          </Grid>
          <Grid item xs={6} lg={3} sm={4} md={3} sx={{marginTop:"-0.7%"}}>
            <img style={{width:"109%", height:"100%"}} src={Rasm10} alt="" />
          </Grid>
          <Grid item xs={6} lg={3} sm={4} md={3} sx={{marginTop:"-0.7%"}}>
            <img style={{width:"109%", height:"100%"}} src={Rasm11} alt="" />
          </Grid>
          <Grid item xs={6} lg={3} sm={4} md={3} sx={{marginTop:"-0.7%"}}>
            <img style={{width:"109%", height:"100%"}} src={Rasm12} alt="" />
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
}