import React, { useEffect } from 'react';
import { AuthGuard, useLoginContext } from '@tiffinger-thiel/appauth-react';
import { useLocation } from 'react-router-dom';

interface Props {
  page?: React.ComponentType;
}

export const OAUTH_RETURN_PATH = 'oauthReturnPath';

/**
 * Wraps a page component with a guard that automatically redirects to the login page
 */
const PrivatePage: React.FC<Props> = ({ page, children }) => {
  const { isReady, isLoggedIn, login } = useLoginContext();
  const location = useLocation();


  useEffect(() => {
    if (isReady && !isLoggedIn) {
      localStorage.setItem(OAUTH_RETURN_PATH, `${location.pathname}${location.search}`);
      void login();
    }
  }, [isReady, isLoggedIn, login, location]);

  const PageComponent = page;

  return <AuthGuard>{PageComponent ? <PageComponent /> : children}</AuthGuard>;
};

export default PrivatePage;
