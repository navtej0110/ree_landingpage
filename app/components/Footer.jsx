"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const scrollToHash = (e, hash) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-[#0a0f0a] px-[24px] sm:px-[40px] pt-[40px] pb-[24px]">
      <div className="max-w-[1152px] mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-start gap-[32px] sm:gap-[80px] pb-[32px]">
          <div className="min-w-[160px]">
            <div className="inline-block bg-white rounded-[8px] px-[12px] py-[8px] mb-[4px]">
              <Image src="/Icons/reelogo.png" alt="REe" width={120} height={34} style={{ width: "auto", height: "34px" }} />
            </div>
            <p className="text-[14px] leading-[35px] text-white">We built these tools because</p>
          </div>

          <div className="flex flex-col gap-[12px]">
            <Link href="/#problem" onClick={(e) => scrollToHash(e, "problem")} className="text-[16px] leading-[18px] text-white">Who we help</Link>
            <Link href="/#tools" onClick={(e) => scrollToHash(e, "tools")} className="text-[16px] leading-[18px] text-white">Our tools</Link>
            <Link href="#" className="text-[16px] leading-[18px] text-white">Company</Link>
          </div>
        </div>

        <div className="w-full h-px bg-[#414C45]" />

        <div className="pt-[20px] text-center">
          <p className="text-[#DFDFDF] text-[14px] leading-[18px]">
            &copy; 2026 REe. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
