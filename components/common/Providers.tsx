import type { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

interface ProvidersProps {
  children: ReactNode
}

const Providers = ({ children }: ProvidersProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}

export default Providers
