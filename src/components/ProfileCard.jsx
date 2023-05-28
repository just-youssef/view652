import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfileCard = ({item, api}) => {
  const navigate = useNavigate();

  return (
      <Stack direction="column" alignItems="center" ml={6}>
        <Box
          width={150}
          height={150}
          borderRadius={75}
          border={3}
          borderColor="divider"
          component="img"
          src={item.صورة_شخصية}
          alt={`${item.اسم} avatar`}
          className="avatar"
          onClick={() => {navigate(`/profile/${api}/${item.رقم_الأقدمية || item.رقم_عسكرى}`)}}
        />
        
        <Typography variant='h7' component="div" mt={2}>{item.درجة || item.رتبة} / {item.اسم}</Typography>
        <Typography variant='h7' component="div">{item.رقم_الأقدمية || item.رقم_عسكرى}</Typography>
      </Stack>
  )
}

export default ProfileCard