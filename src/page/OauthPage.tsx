import React, { useEffect } from 'react';
import { useLoginContext } from '@tiffinger-thiel/appauth-react';
import { useNavigate } from 'react-router-dom';
import { OAUTH_RETURN_PATH } from './PrivatePage';

const OAuthPage: React.FC = () => {
  const { isReady } = useLoginContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isReady) {
      const returnPath = localStorage.getItem(OAUTH_RETURN_PATH) || '/home';
      localStorage.removeItem(OAUTH_RETURN_PATH);
      navigate(returnPath);
    }
  }, [isReady, navigate]);

  return <div>Log in...</div>;
};

export default OAuthPage;
