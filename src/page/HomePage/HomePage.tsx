import { useCallback, useState } from 'react'
import PrivatePage from '../PrivatePage'
import { useNavigate } from 'react-router-dom'
import { useLoginContext } from '@tiffinger-thiel/appauth-react'
import logo from './logo.svg'
import './HomePage.css'

export function HomePage() {
  const { token } = useLoginContext();
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const handleLogout = useCallback(() => {
    // Navigate to the logout page. 
    // Do not call the logout from the appauth-react directly to avoid instant re-login (due to the PrivatePage wrapper).
    navigate("/logout")
  }, [navigate])

  return (
    <PrivatePage>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button type="button" onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
            <button type="button" onClick={handleLogout}>Logout</button>
          </p>
          <p>Your token: <code>{token}</code></p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    </PrivatePage>
  )
}
