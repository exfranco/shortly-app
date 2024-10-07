import { Poppins } from "next/font/google";
import '../styles/globals.scss';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Shortly - URL Shortener',
  description: 'Acorta tus enlaces de manera rápida y sencilla con Shortly.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
