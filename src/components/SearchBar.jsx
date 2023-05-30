import React, { useState } from 'react'
import { Stack, Typography, IconButton, Paper, InputBase, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchResult from './SearchResult';
import searchAPI from '../utils/searchAPI';
import formatStr from '../utils/formatStr';

const SearchBar = ({searchLabel, searchPlaceholder, api}) => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchData, setSearchData] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();

    searchTerm.trim().length !== 0 ? searchAPI(api, formatStr(searchTerm))
    .then(data => setSearchData(data)) : setSearchData([])
  }

  return (
  <Stack direction="column">
    <Typography fontSize={{xs: 15, sm: 20}} component="div" mb={2}>{searchLabel}</Typography>
    <Paper
    component="form"
    onSubmit={handleSubmit}
    elevation={0}
    sx={{
        border: 2,
        borderColor: "divider",
        p: 1,
        pr: 3,
        display: 'flex', 
        borderRadius: 20, 
    }}
    >
    <InputBase
      fullWidth
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      placeholder={searchPlaceholder}
      aria-label="search"
    />
    <IconButton type="submit" sx={{ p: 1.5 }} aria-label="search" size='large'>
        <SearchIcon />
    </IconButton>
    </Paper>
    <Typography mt={1} fontSize={{xs: 10, sm: 15}} component="div" color="text.secondary" mr={3}>ملاحظة : الرجاء مراعاة إستخدم الحروف  ( أ ، إ ، ه ، ى )</Typography>
    
    <Divider sx={{my: 4}} />

    {searchData.length > 0 && (<SearchResult searchData={searchData} api={api} />)}
    {/* <Typography variant="h7">لا يوجد نتائج بحث عن "{searchTerm}"</Typography> */}
  </Stack>
  
  )
}

export default SearchBar