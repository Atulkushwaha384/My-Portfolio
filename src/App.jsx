import AppRoutes from './routes/AppRoute'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme } = useTheme()
  return (
    <div className={theme}>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  )
}