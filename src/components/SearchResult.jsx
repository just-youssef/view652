import React from 'react'
import { Stack } from '@mui/material';
import ProfileCard from './ProfileCard';

const SearchResult = ({searchData, api}) => {
  // if(!searchData) return <Typography variant="h7">جارى التحميل...</Typography>;
  // console.log(searchData);

  return (
    <Stack direction="row" flexWrap="wrap" gap={2}>
      {
        searchData.map((item, idx) => (
          <ProfileCard key={idx} item={item} api={api} />
        ))
      }
    </Stack>

  )
}

export default SearchResult