import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/layout/Layout";


const marhey = localFont({
  src: "../../public/fonts/Marhey-Regular.woff2",
  variable: "--font-marhey",
  weight: "100 900",
});
const vazirmatn = localFont({
  src: "../../public/fonts/Vazirmatn-Regular.woff2",
  variable: "--font-vazirmatn",
  weight: "100 900",
});

export const metadata = {
  title: "Amir khani",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${marhey.variable} ${vazirmatn.variable}  antialiased dark:bg-primary`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
