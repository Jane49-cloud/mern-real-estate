import React from 'react'
import { useList } from '@pankod/refine-core'
import{
  PieChart,
  TopAgents,
  TotalRevenue,
  PropertyCard,
  PropertyReferral


} from 'components'
import { Stack, Typography } from '@pankod/refine-mui'
import { Box } from '@mui/system'

const home = () => {
  return (
   <Box>
    <Typography fontSize={"25"} fontWeight={700} color='#11142d'>
       Dashboard
    </Typography>
    <Box mt='20px' display={'flex'} flexWrap="wrap" gap={4}>



    <PieChart 
      title = 'Our properties'
      value={600}
      series={[75, 25]}
      colors={['#475be8', '#e4e8ef']}
       />

      <PieChart 
      title = 'Rental properties'
      value={400}
      series={[48, 52]}
      colors={['#475be8', '#e4e8ef']}
       />
        <PieChart 
      title = 'Our Customers'
      value={6000}
      series={[75, 25]}
      colors={['#276be8', '#e7e6ef']}
       />
        <PieChart 
      title = 'Cities Covered'
      value={450}
      series={[75, 25]}
      colors={['#475be8', '#e4e8ef']}
       />
    
   </Box>

   <Stack mt={2} width='100%' gap={4} direction={{ xs: 'column', lg:'row'}}>
  <TotalRevenue/>
  <PropertyReferral/>
   </Stack>
   </Box>
   
  )
}

export default home
