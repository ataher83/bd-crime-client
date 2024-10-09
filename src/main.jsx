import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProvider from './providers/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
        </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
