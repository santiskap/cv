import './globals.css'
import {Header} from "@/app/componentes/header";
import Script from 'next/script'
import Menu from './componentes/Menu';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <>
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
    </>
      <body>
      <Menu></Menu>
      <Header></Header>
      <div className="p-8">
          {children}
      </div>


      </body>
    </html>
  )
}
