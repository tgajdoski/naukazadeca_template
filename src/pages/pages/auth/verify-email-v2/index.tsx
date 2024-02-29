// ** React Imports
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Styled Components
const TwoStepIllustration = styled('img')({
  height: 'auto',
  maxWidth: '100%'
})

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('lg')]: {
    maxWidth: 480
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 635
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(12)
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  marginLeft: theme.spacing(1),
  color: theme.palette.primary.main
}))

const VerifyEmailV2 = () => {
  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('lg'))

  // ** Var
  const { skin } = settings

  return (
    <Box className='content-right'>
      {!hidden ? (
        <Box sx={{ p: 12, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <TwoStepIllustration
            width={700}
            alt='verify-email-illustration'
            src={`/images/pages/boy-verify-email-${theme.palette.mode}.png`}
          />
        </Box>
      ) : null}
      <RightWrapper
        sx={{ ...(skin === 'bordered' && !hidden && { borderLeft: `1px solid ${theme.palette.divider}` }) }}
      >
        <Box sx={{ mx: 'auto', maxWidth: 400 }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center' }}>
            <img src='/images/logos/logo.png' alt='logo' width='30' height='30' />
            <Typography
              variant='h5'
              sx={{
                ml: 2,
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: '-0.45px',
                textTransform: 'lowercase',
                fontSize: '1.75rem !important'
              }}
            >
              {themeConfig.templateName}
            </Typography>
          </Box>
          <Typography variant='h5' sx={{ mb: 1.5 }}>
            Verify your email ✉️
          </Typography>
          <Typography sx={{ mb: 6, color: 'text.secondary' }}>
            Account activation link sent to your email address: <strong>john.doe@email.com</strong> Please follow the
            link inside to continue.
          </Typography>
          <Button fullWidth variant='contained' sx={{ mb: 4 }}>
            Skip for now
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ mr: 1 }} variant='body2'>
              Didn't get the mail?
            </Typography>
            <LinkStyled href='/' onClick={e => e.preventDefault()}>
              Resend
            </LinkStyled>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}

VerifyEmailV2.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default VerifyEmailV2
