import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getById from '../utils/getById';
import { Stack, Box, Typography, Grid } from '@mui/material';

const ProfilePage = () => {
  const { id, api } = useParams();
  const [person, setPerson] = useState({});
  
  useEffect(()=>{
    getById(api, id).then(data => setPerson(data))
  }, [api, id])

  return (
    <Stack direction={{md: "row"}} my={5} dir="ltr">
      <Stack direction="column" dir="rtl">
        <Box
          width={400}
          height={400}
          borderRadius={200}
          border={3}
          borderColor="divider"
          component="img"
          src={person.صورة_شخصية}
          alt={`${person.اسم} profile`}
          mb={5}
          alignSelf="center"
        />

        {/* CONTINUE HERE */}
      </Stack>

      <Stack direction="column" dir="rtl" flexGrow={1} ml={{lg: 20, md: 5}}>
        <Grid container rowGap={5} p={2} border={3} borderColor="divider" borderRadius={2} >
          <Grid item xs={6}><Typography variant='h5' component="div">{api==="ضباط" ? "الــرتـبــــة :" : "الدرجة :"}</Typography></Grid>
          <Grid item xs={6}><Typography variant='h5' component="div">{person.رتبة || person.درجة}</Typography></Grid>

          <Grid item xs={6}><Typography variant='h5' component="div">الأســـــم :</Typography></Grid>
          <Grid item xs={6}><Typography variant='h5' component="div">{person.اسم}</Typography></Grid>

          <Grid item xs={6}><Typography variant='h5' component="div">{api==="ضباط" ? "رقم الأقدمية :" : "الرقم العسكرى :"}</Typography></Grid>
          <Grid item xs={6}><Typography variant='h5' component="div">{person.رقم_الأقدمية || person.رقم_عسكرى}</Typography></Grid>
          
          {/* CONTINUE HERE */}
        </Grid>
      </Stack>
    </Stack>
  )
}

export default ProfilePage