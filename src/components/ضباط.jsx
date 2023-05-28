import React from 'react'
import SearchBar from './SearchBar'
import { Box } from '@mui/material'
const ضباط = () => {
  const searchLabel = "إبحث بالإسم / رقم الأقدمية ( ضباط ) :"
  const searchPlaceholder = "إبحث ( ضباط ) ..."
  const api = "ضباط"

  return (
    <Box>
      <SearchBar searchLabel={searchLabel} searchPlaceholder={searchPlaceholder} api={api} />
    </Box>
    
  )
}

export default ضباط