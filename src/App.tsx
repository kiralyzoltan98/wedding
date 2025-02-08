import { RouterProvider } from '@tanstack/react-router'
import { Toaster } from './components/ui/sonner'
import './index.css'
import { router } from './router'

function App() {
  return (
    <main className='light h-screen'>
      <RouterProvider router={router} />
      <Toaster />
    </main>
  )
}

export default App
