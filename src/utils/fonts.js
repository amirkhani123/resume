import { Marhey, Vazirmatn } from "next/font/google";

const marhey =Marhey ({
    subsets: ["latin"],
    variable: "--font-marhey",
    weight:"500",
  });
  const vazirmatn = Vazirmatn({
    subsets:['latin'],
    variable: "--font-vazirmatn",
    weight:["100","200","300","400","500","600","700","800"],
  });
  export {vazirmatn,marhey}