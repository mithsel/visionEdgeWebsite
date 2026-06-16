import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import { WhatsAppButton } from './components/WhatsAppButton'
import ThemeProvider from './hooks/ThemeProvider'
import ScrollToTop from './ScrollToTop/ScrollToTop'
function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <main className="min-h-screen bg-white dark:bg-[#0A0A0F] transition-colors duration-300">
        <ScrollProgress />
        <Navbar />
        <Outlet />
        <Footer />
        <WhatsAppButton />
      </main>
    </ThemeProvider>
  )
}

export default App
