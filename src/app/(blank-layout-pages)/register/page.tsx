// Next Imports
import type { Metadata } from 'next'

// Component Imports

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'
import Register from '@/views/register'

export const metadata: Metadata = {
  title: 'forgot password',
  description: 'forgot your password'
}

const registerPage = async () => {
  // Vars
  const mode = await getServerMode()

  return <Register mode={mode} />
}

export default registerPage
