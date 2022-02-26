import { useLoginContext } from '@tiffinger-thiel/appauth-react';
import { useCallback } from 'react';

const LoginPage: React.FC = () => {
  const { login } = useLoginContext();
 
  const handleLogin = useCallback(() => {
    login()
  }, [login])

  return <button onClick={handleLogin}>Login</button>;
};

export default LoginPage;
