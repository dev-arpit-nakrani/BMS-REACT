// Next Imports
import type { Metadata } from 'next'

// Component Imports
import Login from '@/views/pages/auth/ForgotPasswordV2'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account'
}

const ForgotPassword = async () => {
  // Vars
  const mode = await getServerMode()

  return <Login mode={mode} />
}

export default ForgotPassword
