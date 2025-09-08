// Next Imports
import type { Metadata } from 'next'

// Component Imports

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'
import OTP from '@/views/OTP'

export const metadata: Metadata = {
  title: 'forgot password',
  description: 'forgot your password'
}

const twoStepPage = async () => {
  // Vars
  const mode = await getServerMode()

  return <OTP mode={mode} />
}

export default twoStepPage
