import { Manrope } from 'next/font/google';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './styles/rtl.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'Chodesync',
  description: 'Chodesync',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <Script strategy="afterInteractive" id="microsoft-clarity">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "p1nfykbzy6");
          `}
        </Script>
      </head>
      <body className={manrope.className}>
        <LanguageProvider>
          <Header />
          <main> {children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
