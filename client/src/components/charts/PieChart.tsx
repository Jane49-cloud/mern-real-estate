import React from 'react'
import { Box , Typography,Stack } from '@pankod/refine-mui'
import { PieChartProps } from 'interfaces/home'
import ReactApexChart from 'react-apexcharts';

const PieChart = ({title, value,series,colors}:PieChartProps) => {
  return (
    <Box 
    id='chart'
    flex={1}
    display='flex'
    bgcolor={'#Fcfcfc'}
    padding='0.5rem 0.4rem'
    boxShadow={"0px 4px 8px 0px rgba(0, 0, 0, 0.2)"}
    minHeight="110px"
    width={"fit-content"}
    borderRadius ='0.2rem'
    >
<Stack direction={'column'}>
<Typography fontSize={'15px'} color='#808191'>
  {title}
</Typography>

<Typography fontSize={'24px'} color='#222' mt={2} fontWeight="700">
  {value}
</Typography>
</Stack>
<ReactApexChart 
options={{ 
  chart: {type: 'donut'},
  colors,
  legend:{show: false}, 
  dataLabels:{enabled: false} 
  }}
  series={series}
  type="donut"
  width={'120px'}
  />
 </Box>
  )
}

export default PieChart