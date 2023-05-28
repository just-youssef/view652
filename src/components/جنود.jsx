import React from 'react'
import SearchBar from './SearchBar'
import { Box } from '@mui/material'

const جنود = () => {
  const searchLabel = "إبحث بالإسم / الرقم العسكرى ( جنود ) :"
  const searchPlaceholder = "إبحث ( جنود ) ..."
  const api = "جنود"

  return (
    <Box>
      <SearchBar searchLabel={searchLabel} searchPlaceholder={searchPlaceholder} api={api} />
    </Box>
  )
}

export default جنود