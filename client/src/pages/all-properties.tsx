import React from 'react'
import { Add } from '@mui/icons-material'
import { useList } from '@pankod/refine-core'
import { Box, Typography, Stack } from '@pankod/refine-mui'
import { useNavigate } from '@pankod/refine-react-router-v6'
import { CustomButton, PropertyCard } from 'components'

const AllProperties = () => {
  const navigate = useNavigate()
  return (
<Box>

 <Stack 
direction={'row'}
justifyContent={'space-between'}
alignItems={'center'}
 >
  
  <Typography fontSize={28} color="#111438" fontWeight={400}>
    All Properties
  </Typography>
  <CustomButton
  title="Add Properties"
  handleClick={()=>{
  navigate('/properties/create')
  }}
backgroundColor="#475be8"
color="#FFFFFF"
icon={<Add/>}
  
/>

 </Stack>

</Box>
  )
}

export default AllProperties
