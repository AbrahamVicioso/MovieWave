import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={{
      token: {
        colorPrimary: "#F14A00"
      }
    }}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
