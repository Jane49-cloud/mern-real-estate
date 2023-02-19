import React from 'react'
import { Box , Typography,Stack } from '@pankod/refine-mui'
import { PieChartProps } from 'interfaces/home'
import ReactApexChart from 'react-apexcharts';
import { TotalRevenueOptions } from './charts.config';
import { TotalRevenueSeries } from './charts.config';
import { ArrowCircleUpRounded } from '@mui/icons-material';

const TotalRevenue = () => {
  return (
    <Box
     p={4}
     flex={1}
     id='chart'
     display={'flex'}
     flexDirection = 'column'
     borderRadius={'15px'}
     bgcolor='#fcfcfc'
     >
      <Typography fontWeight={600} color='#11142' >
        Total Revenue
      </Typography>
      <Stack my={'20px'} direction='row' gap={4} flexWrap='wrap' >
        <Typography fontWeight={700} fontSize='28px' color='#222'>
          $345,500
        </Typography>
        <Stack direction={'row'} alignItems='center' gap={1}>
          <ArrowCircleUpRounded
          sx={{
            fontSize:25,
            color:"#4754be8"
          }}
          />
          <Stack>
            <Typography fontSize={15}>
              0.8%
            </Typography>
            <Typography fontSize={12}>
             Than last month
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <ReactApexChart
      series={TotalRevenueSeries}
      type="bar"
      height='300px'
      options={TotalRevenueOptions}
      />

    </Box>

  )
}

export default TotalRevenue
