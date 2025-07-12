// Next Imports
import type { Metadata } from 'next'

// Component Imports
import Register from '@/views/pages/auth/RegisterV2'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account'
}

const RegisterStore = async () => {
  // Vars
  const mode = await getServerMode()

  return <Register mode={mode} />
}

export default RegisterStore
