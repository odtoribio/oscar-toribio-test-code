import { BarChart } from '@mui/x-charts/BarChart';
import {LineChart, lineElementClasses} from '@mui/x-charts/LineChart'
import Box from '@mui/material/Box';
import './Dashboard.css';

const DashboardPage = () => {
  return (
    <div className='dashboard-wrapper'>
      <div className='dashboard-container'>
        <p>New users last week:</p>
        <Box sx={{ width: 'auto' }}>
          <BarChart 
            xAxis={[{
              id: 'barCategories',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              height: 28,
            }]}
            series={[
              {
                data: [24, 67, 13, 67, 46, 29, 53],
              },
            ]}
          />
      </Box>
      </div>
      <div className='dashboard-container'>
        <p>All users:</p>
        <LineChart
          series={[{ data: [78,190, 360, 580,893,1289, 1589, 2354, 3492], label: 'Users', area: true, showMark: false }]}
          xAxis={[{ scaleType: 'point', data: [2018,2019,2020,2021,2022,2023,2024,2025,2026], height: 28 }]}
          sx={{
            [`& .${lineElementClasses.root}`]: {
              display: 'none',
            },
          }}
          margin={{right: 24}}
        />
      </div>

      <div className='dashboard-container'>
        <p>Posts / Comments</p>
        <LineChart
          series={[
            { data: [39,87, 63, 56,23,79], label: 'Posts', area: true, stack:'total', showMark: false },
            { data: [262,128, 95, 76,42, 110], label: 'Comments', area: true, stack:'total', showMark: false }
          ]}
          xAxis={[{ scaleType: 'point', data: ['Aug','Sep','Oct','Nov','Dec','Jan'], height: 28 }]}
          yAxis={[{ width: 50 }]}
          sx={{
            [`& .${lineElementClasses.root}`]: {
              display: 'none',
            },
          }}
          margin={{right: 24}}
        />
      </div>
    </div>
  )
}

export default DashboardPage;
