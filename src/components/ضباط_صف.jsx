import React from 'react'
import SearchBar from './SearchBar'
import { Box } from '@mui/material'

const ضباط_صف = () => {
  const searchLabel = "إبحث بالإسم / الرقم العسكرى ( ضباط صف ) :"
  const searchPlaceholder = "إبحث ( ضباط صف ) ..."
  const api = "dobat_saf"

  return (
    <Box>
      <SearchBar searchLabel={searchLabel} searchPlaceholder={searchPlaceholder} api={api} />

    </Box>
  )
}

export default ضباط_صف