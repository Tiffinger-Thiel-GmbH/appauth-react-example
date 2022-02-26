import { useLoginContext } from '@tiffinger-thiel/appauth-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Intermediate page that triggers the logout when called. Used to prevent the user from
 * being immediately logged in again.
 */
const LogoutPage: React.FC = () => {
  const { isLoggedIn, logout } = useLoginContext();
  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      setLoggingOut(true);
      // TODO: 
      void logout()
      // TODO: some IDPs do not expose an endSession endpoint. (e.g. Gitlab)
      // These need https://github.com/Tiffinger-Thiel-GmbH/appauth-react/pull/8
      // And this code:
      //
      //   void logout().then(redirected => {
      //       if (!redirected) {
      //           navigate('/')
      //       }
      //   });
    } else if (!loggingOut) {
      navigate('/');
    }
  }, [isLoggedIn, loggingOut, logout, navigate]);

  return <div>Log out...</div>;
};

export default LogoutPage;
