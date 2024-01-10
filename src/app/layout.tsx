import './globals.css'
import Providers from '@/redux/Providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
      <body className='flex justify-center items-center h-screen'>{children}</body>
      </Providers>
    </html>
  )
}
