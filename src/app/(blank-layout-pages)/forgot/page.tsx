// Next Imports
import type { Metadata } from 'next'

// Component Imports
import ForgotPass from '@/views/Forgot'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

export const metadata: Metadata = {
  title: 'forgot password',
  description: 'forgot your password'
}

const forgotPasswordPage = async () => {
  // Vars
  const mode = await getServerMode()

  return <ForgotPass mode={mode} />
}

export default forgotPasswordPage
