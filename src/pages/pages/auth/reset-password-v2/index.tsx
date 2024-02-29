// ** React Imports
import { ChangeEvent, ReactNode, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

interface State {
  newPassword: string
  showNewPassword: boolean
  confirmNewPassword: string
  showConfirmNewPassword: boolean
}

// ** Styled Components
const ResetPasswordIllustration = styled('img')({
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
  display: 'flex',
  fontSize: '0.875rem',
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  color: theme.palette.primary.main
}))

const ResetPasswordV2 = () => {
  // ** States
  const [values, setValues] = useState<State>({
    newPassword: '',
    showNewPassword: false,
    confirmNewPassword: '',
    showConfirmNewPassword: false
  })

  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('lg'))

  // ** Var
  const { skin } = settings

  // Handle New Password
  const handleNewPasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }

  // Handle Confirm New Password
  const handleConfirmNewPasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowConfirmNewPassword = () => {
    setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
  }

  return (
    <Box className='content-right'>
      {!hidden ? (
        <Box sx={{ p: 12, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ResetPasswordIllustration
            width={700}
            alt='reset-password-illustration'
            src={`/images/pages/boy-with-laptop-${theme.palette.mode}.png`}
          />
        </Box>
      ) : null}
      <RightWrapper
        sx={{ ...(skin === 'bordered' && !hidden && { borderLeft: `1px solid ${theme.palette.divider}` }) }}
      >
        <Box sx={{ mx: 'auto', width: '100%', maxWidth: 400 }}>
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
          <Typography variant='h6' sx={{ mb: 1.5 }}>
            Reset Password 🔒
          </Typography>
          <Typography sx={{ mb: 6, color: 'text.secondary' }}>
            for <strong>john.doe@email.com</strong>
          </Typography>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <FormControl sx={{ display: 'flex', mb: 4 }}>
              <InputLabel htmlFor='auth-reset-password-v2-new-password'>New Password</InputLabel>
              <OutlinedInput
                autoFocus
                label='New Password'
                value={values.newPassword}
                id='auth-reset-password-v2-new-password'
                onChange={handleNewPasswordChange('newPassword')}
                type={values.showNewPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowNewPassword}
                      onMouseDown={e => e.preventDefault()}
                      aria-label='toggle password visibility'
                    >
                      <Icon fontSize={20} icon={values.showNewPassword ? 'bx:show' : 'bx:hide'} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ display: 'flex', mb: 6 }}>
              <InputLabel htmlFor='auth-reset-password-v2-confirm-password'>Confirm Password</InputLabel>
              <OutlinedInput
                label='Confirm Password'
                value={values.confirmNewPassword}
                id='auth-reset-password-v2-confirm-password'
                type={values.showConfirmNewPassword ? 'text' : 'password'}
                onChange={handleConfirmNewPasswordChange('confirmNewPassword')}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onMouseDown={e => e.preventDefault()}
                      aria-label='toggle password visibility'
                      onClick={handleClickShowConfirmNewPassword}
                    >
                      <Icon fontSize={20} icon={values.showConfirmNewPassword ? 'bx:show' : 'bx:hide'} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4 }}>
              Set New Password
            </Button>
            <Typography variant='body2' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LinkStyled href='/pages/auth/login-v2'>
                <Icon icon='bx:chevron-left' />
                <span>Back to login</span>
              </LinkStyled>
            </Typography>
          </form>
        </Box>
      </RightWrapper>
    </Box>
  )
}

ResetPasswordV2.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default ResetPasswordV2
