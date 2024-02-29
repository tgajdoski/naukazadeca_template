// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'



const UserSpinner = ({ sx }: { sx?: BoxProps['sx'] }) => {
  // ** Hook
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
      <img src={'/images/logos/logo.png'} alt="Logo" style={{ width: '150px', height: '150px' }} />
      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </Box>
  )
}

export default UserSpinner
