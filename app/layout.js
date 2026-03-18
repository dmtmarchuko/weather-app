import '../public/index.css'
import {Roboto} from 'next/font/google'
import CityProvaider from '../components/CityProvider'

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
})


export const metadata = {
  title: "Weather App",
  description: "Weather App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name='viewport' content='width=device-wigth, initial-scale=1'/>
      </head> 
      <body className={roboto.className}>
        <CityProvaider>
          {children}
        </CityProvaider>
      </body>
    </html>
  );
}