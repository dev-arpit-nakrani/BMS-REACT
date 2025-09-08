'use client'

// React Imports
import { useState } from 'react'

import { useRouter } from 'next/navigation'

// Next Imports
import Link from 'next/link'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import CircularProgress from '@mui/material/CircularProgress'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import { useForm } from 'react-hook-form'

import { toast } from 'react-toastify'

import type { SystemMode } from '@core/types'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import CustomTextField from '@core/components/mui/TextField'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import { useSettings } from '@core/hooks/useSettings'
import { EndPoints } from '@/constants/endPoints'

// Styled Custom Components
const RegisterIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  blockSize: 'auto',
  maxBlockSize: 600,
  maxInlineSize: '100%',
  margin: theme.spacing(12),
  [theme.breakpoints.down(1536)]: {
    maxBlockSize: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxBlockSize: 450
  }
}))

const MaskImg = styled('img')({
  blockSize: 'auto',
  maxBlockSize: 345,
  inlineSize: '100%',
  position: 'absolute',
  insetBlockEnd: 0,
  zIndex: -1
})

const registerSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Confirm Password is required')
})

type registerFormInputs = z.infer<typeof registerSchema>

const Register = ({ mode }: { mode: SystemMode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<registerFormInputs>({
    resolver: zodResolver(registerSchema)
  })

  // Vars
  const darkImg = '/images/pages/auth-mask-dark.png'
  const lightImg = '/images/pages/auth-mask-light.png'
  const darkIllustration = '/images/illustrations/auth/v2-register-dark.png'
  const lightIllustration = '/images/illustrations/auth/login.jpg'
  const borderedDarkIllustration = '/images/illustrations/auth/v2-register-dark-border.png'
  const borderedLightIllustration = '/images/illustrations/auth/v2-register-light-border.png'

  // Hooks
  const { settings } = useSettings()
  const theme = useTheme()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  const characterIllustration = useImageVariant(
    mode,
    lightIllustration,
    darkIllustration,
    borderedLightIllustration,
    borderedDarkIllustration
  )

  const onSubmit = async (data: registerFormInputs) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Password and Confirm Password Not Matched')

      return
    }

    setIsLoading(true)

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}${EndPoints.register}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    const loginData = await response.json()

    if (!loginData.status) {
      toast.error(loginData.description)
    } else {
      setIsLoading(false)
      localStorage.setItem('email', data.email)
      router.push('/otp')
    }
  }

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)
  const handleClickShowConfirmPassword = () => setIsConfirmPasswordShown(show => !show)

  return (
    <div className='flex bs-full justify-center'>
      <div
        className={classnames(
          'flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden',
          {
            'border-ie': settings.skin === 'bordered'
          }
        )}
      >
        <RegisterIllustration
          src={characterIllustration}
          alt='character-illustration'
          style={{ width: '70%', margin: 0, objectFit: 'cover', borderRadius: '12px' }}
        />
        {!hidden && (
          <MaskImg
            alt='mask'
            src={authBackground}
            className={classnames({ 'scale-x-[-1]': theme.direction === 'rtl' })}
          />
        )}
      </div>
      <div className='flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[650px]'>
        <Link href={''} className='absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]'>
          <Logo />
        </Link>
        <div className='flex flex-col gap-6 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset] mbs-11 sm:mbs-14 md:mbs-0'>
          <div className='flex flex-col gap-1'>
            <Typography variant='h4'>Adventure starts here 🚀</Typography>
            <Typography>Make your app management easy and fun!</Typography>
          </div>
          <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
            <CustomTextField
              fullWidth
              label='Email'
              placeholder='Enter your email'
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <CustomTextField
              fullWidth
              label='Password'
              placeholder='············'
              type={isPasswordShown ? 'text' : 'password'}
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                        <i className={isPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }
              }}
            />
            <CustomTextField
              fullWidth
              label='Confirm Password'
              placeholder='············'
              type={isConfirmPasswordShown ? 'text' : 'password'}
              {...register('confirmPassword')}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <i className={isPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={
                <>
                  <span>I agree to </span>
                  <Link className='text-primary' href='/' onClick={e => e.preventDefault()}>
                    privacy policy & terms
                  </Link>
                </>
              }
            />
            <Button fullWidth variant='contained' type='submit'>
              {isLoading ? <CircularProgress size={20} color='info' /> : 'GET OTP'}
            </Button>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Typography>Already have an account?</Typography>
              <Typography component={Link} href='/login' color='primary.main'>
                Sign in instead
              </Typography>
            </div>

            {/* <Divider className='gap-2 text-textPrimary'>or</Divider>
            <div className='flex justify-center items-center gap-1.5'>
              <IconButton className='text-facebook' size='small'>
                <i className='tabler-brand-facebook-filled' />
              </IconButton>
              <IconButton className='text-twitter' size='small'>
                <i className='tabler-brand-twitter-filled' />
              </IconButton>
              <IconButton className='text-textPrimary' size='small'>
                <i className='tabler-brand-github-filled' />
              </IconButton>
              <IconButton className='text-error' size='small'>
                <i className='tabler-brand-google-filled' />
              </IconButton>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
