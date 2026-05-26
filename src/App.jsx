import AppRoutes from './routes/AppRoute'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/home/ScrollToTop'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme } = useTheme()
  return (
    <div className={theme}>
      <Navbar />
      <ScrollToTop />
      <AppRoutes />
      <Footer />
    </div>
  )
}