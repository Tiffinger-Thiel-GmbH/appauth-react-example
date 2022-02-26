import { HomePage } from './page/HomePage'
import { AuthenticateOptions, AuthProvider } from '@tiffinger-thiel/appauth-react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import OAuthPage from './page/OauthPage';
import LogoutPage from './page/LogoutPage';
import LoginPage from './page/LoginPage';

function getEnv(name: string): string {
  return (import.meta.env[name] || '').toString();
}

const AUTH_OPTIONS: AuthenticateOptions = {
  openIdConnectUrl: getEnv('VITE_AUTH_OPEN_ID_CONNECT'),
  scope: getEnv('VITE_AUTH_SCOPE'),
  clientId: getEnv('VITE_AUTH_CLIENT_ID'),
  redirectUrl: getEnv(`VITE_AUTH_REDIRECT`),
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider options={AUTH_OPTIONS}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/oauth" element={<OAuthPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
