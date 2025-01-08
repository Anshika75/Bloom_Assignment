import './globals.css'
import { Marcellus, Mulish } from 'next/font/google'
import { TransitionProvider } from './contexts/transition-context'

const marcellus = Marcellus({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-marcellus'
})

const mulish = Mulish({ 
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-mulish'
})

export const metadata = {
  title: 'Bloom: Reinventing Social Media',
  description: 'Empowering social connections through mindful technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${marcellus.variable} ${mulish.variable}`}>
      <body className="font-mulish">
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  )
}

