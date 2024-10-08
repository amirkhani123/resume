import Link from "next/link";

function Header() {
  return (
    <header className="w-full flex items-center justify-between my-2 p-2 sticky top-2 left-0 box-blur rounded-lg max-md:p-px z-10 ">
      <Link href="/" className="font-marhey text-lg max-md:text-base">
        AMIR KHANI
      </Link>
      <div className="flex gap-3 items-center max-md:gap-2 font-vazir">
        <Link href="/#about-me">About Me</Link>
        <Link
          href="/contact-me"
          className="p-2 bg-primary text-second  border rounded-md px-5 my-hover hover:bg-second hover:text-primary hover:border hover:border-primary max-md:px-3 max-md:py-2 max-md:m-1 "
        >
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Header;
