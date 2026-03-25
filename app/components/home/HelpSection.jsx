import {
  Shirt,
  Sparkles,
  Gem,
  Sofa,
  Monitor,
  Store,
  PackageOpen,
} from "lucide-react";

const categories = [
  { label: "Secondhand & vintage stores", icon: Shirt },
  { label: "Multi-brand fashion & lifestyle", icon: Sparkles },
  { label: "Beauty, shoes & accessories", icon: Gem },
  { label: "Furniture & homeware", icon: Sofa },
  { label: "Electronics & IT retail", icon: Monitor },
  { label: "Department stores & warehouse concepts", icon: Store },
  { label: "Brands managing surplus or past-season stock", icon: PackageOpen },
];

export default function HelpSection() {
  return (
    <section className="bg-[#f0ebe3] py-[48px] sm:py-[64px] md:py-[96px] px-[16px] sm:px-[24px]">
      <div className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[77%] mx-auto">
        {/* Header */}
        <div className="text-center mb-[40px] sm:mb-[48px]">
          <p className="text-[20px] sm:text-[18px] font-medium text-[#252525] mb-[8px]">
            WHO WE HELP
          </p>
          <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold leading-[32px] sm:leading-[38px] md:leading-[43px] gradient-text mb-[16px]">
            Every kind of retailer. Every category. Every size.
          </h2>
          <p className="text-[15px] sm:text-[16px] md:text-[18px] font-medium leading-[24px] sm:leading-[27px] md:leading-[30px] text-[#434343] max-w-[720px] mx-auto">
            Whether you run a vintage boutique, a multi-brand fashion store, a
            beauty outlet, a furniture showroom, a department store or a
            warehouse concept if manual work is slowing you down, we can fix
            it.
          </p>
        </div>

        {/* Body text */}
        <div className="text-center mb-[40px] sm:mb-[48px]">
          <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[27px] md:leading-[30px] text-[#434343] max-w-[720px] mx-auto">
            We work with all retail categories. For secondhand and resale
            stores, we have ready-made tools that deploy in hours. For all other
            retailers, we start with an audit and build exactly what you need.
          </p>
        </div>

        {/* Category grid */}
        <div className="flex flex-wrap justify-center gap-[16px] sm:gap-[20px]">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-[#111111] rounded-[20px] p-[24px] flex flex-col items-center justify-center text-center gap-[16px] shadow-[0px_0px_5px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0px_8px_24px_rgba(124,58,237,0.35)] w-[calc(50%-8px)] sm:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] aspect-square relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.15)_0%,_transparent_70%)] pointer-events-none" />
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[15px] bg-purple-500/10 relative z-10">
                <cat.icon size={28} className="text-purple-400" />
              </div>
              <p className="text-[14px] sm:text-[16px] font-medium text-white leading-[20px] relative z-10">
                {cat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-[40px] sm:mt-[48px]">
          <div
            className="border-l-8 border-purple-500 px-[20px] sm:px-[32px] py-[16px] sm:py-[20px] text-gray-600 italic text-[16px] sm:text-[18px] font-medium text-left"
            style={{
              background: "linear-gradient(to right, #f5f3ff, #ffffff)",
            }}
          >
            &quot;The online store for store owners who didn&apos;t want an
            online store.&quot;
          </div>
        </div>
      </div>
    </section>
  );
}
