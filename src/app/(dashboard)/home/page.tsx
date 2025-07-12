import LoginV2 from '@/views/pages/auth/Login'
import { getServerMode } from '@core/utils/serverHelpers'

const Login = async () => {
  const mode = await getServerMode()

  return <LoginV2 mode={mode} />
}

export default Login
