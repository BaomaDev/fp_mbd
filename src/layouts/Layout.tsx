import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import { LayoutProps } from '@/types/layout';

export default function Layout({
  children,
  withFooter,
  withNavbar,
}: LayoutProps) {
  return (
    <>
      {children}
      {withFooter && <Footer />}
      {withNavbar && <Navbar />}
    </>
  );
}