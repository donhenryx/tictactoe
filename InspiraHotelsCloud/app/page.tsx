"use client";

import { useState } from "react";

// ── Figma MCP Asset URLs ──────────────────────────────────────────────────────
const ASSETS = {
  logo: "https://www.figma.com/api/mcp/asset/176dbc8c-8f53-49e2-9d49-4fd9bb8ea5d0",
  navHotels: "https://www.figma.com/api/mcp/asset/91e5ad3e-4d2b-4bc5-8325-5af52fc14f03",
  navResorts: "https://www.figma.com/api/mcp/asset/55336f33-ba6b-47de-9907-043e29c3d678",
  navVacation: "https://www.figma.com/api/mcp/asset/93839d06-62c7-4c18-8908-f6de4e017fce",
  navFlights: "https://www.figma.com/api/mcp/asset/136fedda-b9f4-4c63-9791-642854279ed4",
  navCruises: "https://www.figma.com/api/mcp/asset/3b61e7e6-2b33-4e07-afd0-f83cef3fcd8a",
  navCars: "https://www.figma.com/api/mcp/asset/204c4eb2-35f1-4016-9087-4eca909a5f6c",
  navTransfers: "https://www.figma.com/api/mcp/asset/d9f7fa20-4ea8-45c9-8981-8c61709c836d",
  navActivities: "https://www.figma.com/api/mcp/asset/1c952cef-04ab-4022-8cfa-3c05520f5b80",
  socialX: "https://www.figma.com/api/mcp/asset/9f75992b-6a13-4eb4-8d79-765767079271",
  socialFacebook: "https://www.figma.com/api/mcp/asset/8e178b6f-71df-4a39-a04e-3d2b308f3f77",
  socialInstagram: "https://www.figma.com/api/mcp/asset/bbccf6ed-cbaa-4cfb-b6c3-326803637966",
};

// ── Inline SVG Icons ──────────────────────────────────────────────────────────
function IconPin() {
  return (
    <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 0C2.686 0 0 2.686 0 6c0 4.5 6 11 6 11s6-6.5 6-11c0-3.314-2.686-6-6-6zm0 8.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="#465664"/>
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="3" width="14" height="12" rx="2" stroke="#686ea3" strokeWidth="1.5"/>
      <path d="M1 7h14" stroke="#686ea3" strokeWidth="1.5"/>
      <path d="M5 1v3M11 1v3" stroke="#686ea3" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconPerson() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="5" r="3" stroke="#686ea3" strokeWidth="1.5"/>
      <path d="M1.5 14c0-3.038 2.91-5.5 6.5-5.5s6.5 2.462 6.5 5.5" stroke="#686ea3" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconSearch({ color = "#fff" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6.5" cy="6.5" r="5" stroke={color} strokeWidth="1.5"/>
      <path d="M10.5 10.5L14 14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconList() {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="2" width="8" height="8" rx="1" fill="#424577"/>
      <rect x="0" y="14" width="8" height="8" rx="1" fill="#424577"/>
      <rect x="11" y="5" width="9" height="2" rx="1" fill="#424577"/>
      <rect x="11" y="17" width="9" height="2" rx="1" fill="#424577"/>
    </svg>
  );
}

function IconMap() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5l8-4 8 4 8-4v20l-8 4-8-4-8 4V5z" stroke="#adadad" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 1v20M17 5v20" stroke="#adadad" strokeWidth="1.5"/>
    </svg>
  );
}

function IconFilter() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 2h9M3 5.5h5M4.5 9h2" stroke="#465664" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconChevronDown({ color = "#465664", size = 9 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={Math.round(size * 0.55)} viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1l3.5 3.5L8 1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconChevronLeft() {
  return (
    <svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2L2 13.5L14 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2l12 11.5L2 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconHeart({ filled = false }: { filled?: boolean }) {
  return (
    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 20.5C12 20.5 1 13.5 1 6.5a5.5 5.5 0 0111-1 5.5 5.5 0 0111 1c0 7-11 14-11 14z"
        fill={filled ? "#f7665f" : "none"} stroke="white" strokeWidth="1.5"/>
    </svg>
  );
}

function IconStar({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 1l1.76 3.57L13 5.27l-3 2.92.71 4.14L7 10.07 3.29 12.33 4 8.19 1 5.27l4.24-.7L7 1z"
        fill={filled ? "#ffaf57" : "none"} stroke="#ffaf57" strokeWidth="1" strokeLinejoin="round"/>
    </svg>
  );
}

function IconRestaurant() {
  return (
    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 1v6a3 3 0 006 0V1" stroke="#08b554" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 1v7" stroke="#08b554" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13 1v17M11 1c0 3 2 4 2 6v11" stroke="#08b554" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconCasino() {
  return (
    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="19" height="16" rx="3" stroke="#08b554" strokeWidth="1.5"/>
      <circle cx="6" cy="6" r="1.5" fill="#08b554"/>
      <circle cx="10.5" cy="9" r="1.5" fill="#08b554"/>
      <circle cx="15" cy="6" r="1.5" fill="#08b554"/>
      <circle cx="6" cy="12" r="1.5" fill="#08b554"/>
      <circle cx="15" cy="12" r="1.5" fill="#08b554"/>
    </svg>
  );
}

function IconPets() {
  return (
    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7c0-1.66 1.34-3 3-3s3 1.34 3 3" stroke="#08b554" strokeWidth="1.5"/>
      <circle cx="3" cy="4" r="1.5" fill="#08b554"/>
      <circle cx="11" cy="4" r="1.5" fill="#08b554"/>
      <circle cx="7" cy="1.5" r="1.5" fill="#08b554"/>
      <path d="M2 11c0-3.87 5-6 5-6s5 2.13 5 6c0 3-2.24 5-5 5s-5-2-5-5z" stroke="#08b554" strokeWidth="1.5"/>
    </svg>
  );
}

function IconAllInclusive() {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 1a9.5 9.5 0 100 19 9.5 9.5 0 000-19z" stroke="#08b554" strokeWidth="1.5"/>
      <path d="M7 10.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5S7 12.43 7 10.5z" stroke="#08b554" strokeWidth="1.5"/>
      <path d="M5 5l11 11" stroke="#08b554" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconFamily() {
  return (
    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="4" r="3" stroke="#686ea3" strokeWidth="1.5"/>
      <circle cx="17" cy="5" r="2" stroke="#686ea3" strokeWidth="1.5"/>
      <path d="M1 17c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke="#686ea3" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 21c0-2.76 1.12-5 3-5" stroke="#686ea3" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconTrophy() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 13v4M6 17h6" stroke="#ea732d" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 2H1v3a4 4 0 004 4M15 2h2v3a4 4 0 01-4 4" stroke="#ea732d" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 2h12v6a6 6 0 01-6 6 6 6 0 01-6-6V2z" stroke="#ea732d" strokeWidth="1.5"/>
    </svg>
  );
}

function IconPromo() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 1l2.39 4.84L17 6.73l-4 3.9.94 5.5L9 13.57l-4.94 2.56.94-5.5L1 6.73l5.61-.89L9 1z"
        fill="#0b81d1" stroke="#0b81d1" strokeWidth="0.5" strokeLinejoin="round"/>
    </svg>
  );
}

function IconSort() {
  return (
    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 4h11M3 8h7M5 12h3" stroke="#424577" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconShare() {
  return (
    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="3" r="2" stroke="#424577" strokeWidth="1.5"/>
      <circle cx="3" cy="9.5" r="2" stroke="#424577" strokeWidth="1.5"/>
      <circle cx="13" cy="16" r="2" stroke="#424577" strokeWidth="1.5"/>
      <path d="M5 8.5l6-4M5 10.5l6 4" stroke="#424577" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconBelow() {
  return (
    <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1l7.5 7.5L16 1" stroke="#465664" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const hotels = [
  {
    id: 1,
    name: "Beach Kin Ha Villas & Suites",
    address: "Blvd. Kukulcán Km. 8.5, Cancún, Quintana Roo.",
    stars: 4,
    rating: 8.5,
    ratingLabel: "Excellent",
    category: "Family",
    amenities: ["Restaurant", "Casino", "Pets Allowed"],
    allInclusive: true,
    dealPct: -49,
    dealLabel: "Great Deal",
    priceOriginal: "$110*",
    price: "$167",
    priceTotal: "$170 for 2 nights total*",
    savings: "$188",
    points: 225,
    hasPromo: true,
    promoText: "Spring it On promo, plus: 1,500 Inspiration Points",
    imgGradient: "from-cyan-400 via-teal-500 to-blue-600",
    showComparison: false,
    showAddToTrip: false,
  },
  {
    id: 2,
    name: "Coral Mar Resort & Spa",
    address: "Blvd. Kukulcán Km. 8.5, Cancún, Quintana Roo.",
    stars: 4,
    rating: 8.5,
    ratingLabel: "Excellent",
    category: "Family",
    amenities: ["Restaurant", "Casino", "Pets Allowed"],
    allInclusive: true,
    dealPct: -49,
    dealLabel: "Great Deal",
    priceOriginal: "$110*",
    price: "$167",
    priceTotal: "$170 for 2 nights total*",
    savings: "$188",
    points: 225,
    hasPromo: false,
    showComparison: false,
    showAddToTrip: true,
  },
  {
    id: 3,
    name: "Montamart Resort by the Sea",
    address: "Blvd. Kukulcán Km. 8.5, Cancún, Quintana Roo.",
    stars: 4,
    rating: 8.5,
    ratingLabel: "Excellent",
    category: "Family",
    amenities: ["Restaurant", "Casino", "Pets Allowed"],
    allInclusive: true,
    dealPct: -35,
    dealLabel: "Deal",
    priceOriginal: "$110*",
    price: "$167",
    priceTotal: "$170 for 2 nights total*",
    savings: "$188",
    points: 225,
    hasPromo: false,
    showComparison: true,
    showAddToTrip: false,
  },
  {
    id: 4,
    name: "Temptation Island",
    address: "Blvd. Kukulcán Km. 8.5, Cancún, Quintana Roo.",
    stars: 4,
    rating: 8.5,
    ratingLabel: "Excellent",
    category: "Family",
    amenities: ["Restaurant", "Casino", "Pets Allowed"],
    allInclusive: true,
    dealPct: -25,
    dealLabel: "Deal",
    priceOriginal: "$110*",
    price: "$167",
    priceTotal: "$170 for 2 nights total*",
    savings: "$188",
    points: 225,
    hasPromo: true,
    promoText: "Spring it On promo, plus: 1,500 Inspiration Points",
    showComparison: false,
    showAddToTrip: false,
  },
  {
    id: 5,
    name: "Beach Paradise Resort & Spa",
    address: "Blvd. Kukulcán Km. 8.5, Cancún, Quintana Roo.",
    stars: 4,
    rating: 8.5,
    ratingLabel: "Excellent",
    category: "Family",
    amenities: ["Restaurant", "Casino", "Pets Allowed"],
    allInclusive: true,
    dealPct: -2,
    dealLabel: "Offer",
    priceOriginal: "$110*",
    price: "$167",
    priceTotal: "$170 for 2 nights total*",
    savings: "$188",
    points: 225,
    hasPromo: true,
    promoText: "Spring it On promo, plus: 1,500 Inspiration Points",
    showComparison: false,
    showAddToTrip: false,
  },
];

const imgGradients = [
  "from-cyan-400 via-teal-500 to-blue-700",
  "from-orange-300 via-rose-400 to-pink-500",
  "from-amber-400 via-orange-500 to-red-500",
  "from-blue-500 via-indigo-600 to-violet-700",
  "from-emerald-400 via-teal-500 to-cyan-600",
];

// ── Sub-components ────────────────────────────────────────────────────────────

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-[3px] cursor-pointer group">
      <img src={icon} alt={label} className="h-[24px] w-auto object-contain" />
      <span
        className={`text-[13px] leading-none text-center whitespace-nowrap transition-colors tracking-[0.026em]
          ${active
            ? "font-bold text-[#424577]"
            : "font-medium text-[#919191] group-hover:text-[#424577]"
          }`}
      >
        {label}
      </span>
    </div>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} filled={i < count} />
      ))}
    </div>
  );
}

function AmenityBadge({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1 text-[13px] text-inspira-subhead tracking-inspira">
      {icon}
      {label}
    </span>
  );
}

function ComparisonPanel() {
  const sites = [
    { name: "Expedia.com", price: "$110.03*" },
    { name: "Booking.com", price: "$110.03*" },
    { name: "Agoda.com", price: "$110.03*" },
    { name: "Priceline.com", price: "$110.03*" },
  ];
  return (
    <div className="absolute bottom-9 right-0 z-20 bg-white rounded-[13px] shadow-comparison px-4 py-3 flex gap-0 min-w-[387px]">
      {sites.map((site, i) => (
        <div key={site.name} className="flex flex-col gap-0.5 flex-1">
          <span className="text-[11px] font-bold text-black leading-[18px]">{site.name}</span>
          <span className="text-[11px] font-semibold text-inspira-points-b underline leading-[18px]">
            {site.price}
          </span>
          {i < sites.length - 1 && (
            <div className="absolute h-[38.5px] w-px bg-inspira-lines-light" style={{ left: `${(i + 1) * 25}%`, top: "12px" }} />
          )}
        </div>
      ))}
    </div>
  );
}

function AddToTripPanel() {
  return (
    <div className="absolute top-0 left-[270px] z-30 bg-white rounded-xl shadow-card px-5 py-4 w-[264px]">
      <p className="text-[13px] font-semibold text-inspira-primary mb-3 tracking-inspira">Add to:</p>
      <div className="flex flex-col gap-2 mb-3">
        <div className="flex items-center gap-2 px-3 py-2 border border-inspira-secondary2 rounded-lg text-[13px] font-medium text-inspira-secondary2 cursor-pointer hover:bg-inspira-secondary2 hover:text-white transition-colors">
          <span className="text-inspira-points-a">+</span> New Trip
        </div>
        <div className="flex items-center gap-2 px-3 py-2 border border-inspira-lines-light rounded-lg text-[13px] font-medium text-inspira-subhead cursor-pointer hover:bg-gray-50 transition-colors">
          My Europe 2026 Trip
        </div>
      </div>
      <div className="border-t border-inspira-lines-light pt-3">
        <button className="flex items-center gap-2 px-4 py-1.5 border border-inspira-secondary2 rounded-lg text-[13px] font-medium text-inspira-secondary2 hover:bg-inspira-secondary2 hover:text-white transition-colors">
          <IconShare /> Share
        </button>
      </div>
    </div>
  );
}

function HotelCard({ hotel, gradientClass }: { hotel: typeof hotels[0]; gradientClass: string }) {
  const [activeImg, setActiveImg] = useState(0);
  const [showComparison, setShowComparison] = useState(hotel.showComparison);
  const [showAddToTrip, setShowAddToTrip] = useState(hotel.showAddToTrip);

  return (
    <div className="relative bg-white rounded-[15px] shadow-card overflow-visible flex w-full max-w-[975px]">
      {/* ── Hotel Image ── */}
      <div className="relative flex-shrink-0 w-[288px] h-[288px] m-[14px] rounded-xl overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`} />

        {/* Deal badge */}
        <div className="absolute top-3 left-0 flex items-stretch h-[34px] z-10">
          <div className="bg-inspira-header text-white flex items-center px-2 text-[13px] font-bold rounded-r-none rounded-l-none">
            {hotel.dealPct}%
          </div>
          <div className="bg-inspira-header bg-opacity-80 text-white flex items-center px-2 text-[13px] font-medium rounded-r-md">
            {hotel.dealLabel}
          </div>
        </div>

        {/* Favorite */}
        <button
          onClick={() => setShowAddToTrip(!showAddToTrip)}
          className="absolute top-3 right-3 z-10"
        >
          <IconHeart />
        </button>

        {/* Nav arrows */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 opacity-80 hover:opacity-100 transition-opacity"
          onClick={() => setActiveImg((p) => Math.max(0, p - 1))}
        >
          <IconChevronLeft />
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 opacity-80 hover:opacity-100 transition-opacity"
          onClick={() => setActiveImg((p) => Math.min(4, p + 1))}
        >
          <IconChevronRight />
        </button>

        {/* Pagination dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === activeImg ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* AddToTrip popup */}
        {showAddToTrip && (
          <div className="absolute top-0 left-full ml-2 z-40">
            <AddToTripPanel />
          </div>
        )}
      </div>

      {/* ── Hotel Info ── */}
      <div className="flex-1 py-4 pl-4 pr-2 flex flex-col gap-2 min-w-0">
        {/* Name */}
        <h2 className="text-[18px] font-bold text-inspira-header leading-tight truncate pr-2">
          {hotel.name}
        </h2>

        {/* Address */}
        <div className="flex items-start gap-1.5">
          <span className="mt-0.5 flex-shrink-0"><IconPin /></span>
          <p className="text-[13px] text-inspira-subhead tracking-inspira leading-snug">
            {hotel.address}
          </p>
        </div>

        {/* Stars */}
        <StarRating count={hotel.stars} />

        {/* Rating + Category */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="bg-inspira-secondary2 text-white text-[13px] font-bold px-1.5 py-0.5 rounded">
              {hotel.rating}
            </span>
            <span className="text-[13px] font-medium text-inspira-subhead">{hotel.ratingLabel}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <IconFamily />
            <span className="text-[13px] font-medium text-inspira-secondary1">{hotel.category}</span>
          </div>
        </div>

        {/* Amenities row 1 */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
          <AmenityBadge label="Restaurant" icon={<IconRestaurant />} />
          <AmenityBadge label="Casino" icon={<IconCasino />} />
          <AmenityBadge label="Pets Allowed" icon={<IconPets />} />
        </div>

        {/* Amenities row 2 */}
        {hotel.allInclusive && (
          <div className="flex gap-4">
            <AmenityBadge label="All-Inclusive" icon={<IconAllInclusive />} />
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-inspira-lines-light my-1" />

        {/* Points banners */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 bg-[#fff3ec] rounded-md px-3 py-1.5">
            <IconTrophy />
            <span className="text-[13px] font-medium text-inspira-points-a tracking-inspira">
              Big win! You earn:{" "}
              <span className="font-bold">{hotel.points} Inspiration Points</span>
            </span>
          </div>

          {hotel.hasPromo && (
            <div className="flex items-center gap-2 bg-[#e8f4fc] rounded-md px-3 py-1.5">
              <IconPromo />
              <span className="text-[13px] font-medium text-inspira-points-b tracking-inspira">
                {hotel.promoText}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ── Vertical Divider ── */}
      <div className="w-px bg-inspira-lines-light self-stretch my-4" />

      {/* ── Pricing Panel ── */}
      <div className="flex-shrink-0 w-[183px] py-4 px-3 flex flex-col gap-1 relative">
        {/* Struck price */}
        <div className="flex justify-end">
          <span className="text-[13px] text-inspira-lines line-through">{hotel.priceOriginal}</span>
        </div>

        {/* Main price */}
        <div className="flex items-baseline gap-1">
          <span className="text-[32px] font-bold text-inspira-primary leading-none">{hotel.price}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r="7.5" stroke="#465664" strokeWidth="1.5"/>
            <path d="M8.5 5v4l2.5 2" stroke="#465664" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-[13px] text-inspira-subhead">Per Night*</span>
        </div>
        <p className="text-[13px] text-inspira-subhead">{hotel.priceTotal}</p>
        <p className="text-[12px] text-inspira-subhead italic">*Tax Included</p>

        {/* Book with points */}
        <button className="btn-book-points mt-1">Book With Points</button>

        {/* Book */}
        <button className="btn-book mt-1">Book</button>

        {/* Savings */}
        <p className="text-[12px] font-semibold text-inspira-points-a mt-1">
          Total Savings:{hotel.savings}
        </p>
        <p className="text-[11px] text-inspira-subhead">Including Taxes &amp; Fees</p>

        {/* Compare Price */}
        <div className="relative mt-1">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="flex items-center gap-1.5 border border-inspira-lines-light rounded-full px-3 py-1 text-[13px] text-inspira-primary hover:bg-gray-50 transition-colors w-full justify-center"
          >
            Compare Price <IconChevronDown />
          </button>
          {showComparison && (
            <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 z-30 w-[387px] -translate-x-1/4">
              <ComparisonPanel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function SearchHotelsPage() {
  const [listView, setListView] = useState(true);
  const [destination] = useState("Cancún, Mexico");
  const [checkIn] = useState("Fri, Apr 25");
  const [checkOut] = useState("Sun, Apr 27");
  const [guests] = useState("2 Adults · 0 Children · 1 rooms");

  return (
    <div className="min-h-screen bg-inspira-bg font-poppins">
      {/* ══ HEADER ══════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-white shadow-header h-[78px] flex items-center px-6">
        {/* Logo — ~246px wide in 1440px Figma frame */}
        <div className="flex-shrink-0 w-[200px]">
          <img
            src={ASSETS.logo}
            alt="Inspira"
            className="h-[46px] w-auto object-contain object-left"
          />
        </div>

        {/* Nav Items — evenly spaced across center */}
        <nav className="flex items-center justify-center gap-7 flex-1">
          <NavItem icon={ASSETS.navHotels} label="Hotels" active />
          <NavItem icon={ASSETS.navResorts} label="Resorts" />
          <NavItem icon={ASSETS.navVacation} label="Vacation Rentals" />
          <NavItem icon={ASSETS.navFlights} label="Flights" />
          <NavItem icon={ASSETS.navCruises} label="Cruises" />
          <NavItem icon={ASSETS.navCars} label="Cars" />
          <NavItem icon={ASSETS.navTransfers} label="Transfers" />
          <NavItem icon={ASSETS.navActivities} label="Activities" />
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Inspiration Points counter */}
          <div className="flex items-center gap-1.5 border border-inspira-lines-light rounded-md px-2 py-1">
            {/* Wallet/gift icon */}
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="6" width="20" height="13" rx="2" stroke="#ea732d" strokeWidth="1.5"/>
              <path d="M7 6V4a4 4 0 018 0v2" stroke="#ea732d" strokeWidth="1.5"/>
              <circle cx="11" cy="13" r="2" fill="#ea732d"/>
            </svg>
            <div className="leading-none">
              <div className="text-[13px] font-bold text-[#ea732d]">22,3456</div>
              <div className="text-[9px] font-semibold text-[#ea732d] tracking-[0.018em] whitespace-nowrap">
                Inspiration Points
              </div>
            </div>
          </div>

          {/* Currency */}
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-[18px] leading-none">🇺🇸</span>
            <span className="text-[13px] font-semibold text-[#919191] tracking-[0.026em]">USD</span>
            <IconChevronDown color="#919191" size={8} />
          </div>

          {/* Avatar + name */}
          <div className="flex items-center gap-1.5 cursor-pointer">
            <div className="w-[30px] h-[30px] rounded-full bg-inspira-secondary2 flex items-center justify-center text-white text-xs font-bold overflow-hidden">
              S
            </div>
            <span className="text-[13px] font-semibold text-[#919191] tracking-[0.026em]">Somit</span>
            <IconChevronDown color="#919191" size={8} />
          </div>
        </div>
      </header>

      {/* ══ SEARCH + FILTER BAR ═════════════════════════════════════════════ */}
      <div className="sticky top-[78px] z-40 bg-white shadow-sm">
        {/* Search Inputs Row */}
        <div className="flex items-center gap-2 px-8 pt-4 pb-3">
          {/* Destination */}
          <div className="flex items-center gap-2 bg-[#f6f8fa] border border-[#e5e5e5] rounded-md px-4 py-3 flex-1 cursor-pointer">
            <IconPin />
            <span className="text-[13px] text-inspira-subhead tracking-inspira">{destination}</span>
          </div>

          {/* Vertical divider */}
          <div className="w-px h-8 bg-inspira-lines-light mx-1" />

          {/* Check-in */}
          <div className="flex items-center gap-2 bg-[#f6f8fa] border border-[#e5e5e5] rounded-md px-4 py-3 cursor-pointer">
            <IconCalendar />
            <span className="text-[13px] text-inspira-subhead tracking-inspira">{checkIn}</span>
          </div>

          {/* Check-out */}
          <div className="flex items-center gap-2 bg-[#f6f8fa] border border-[#e5e5e5] rounded-md px-4 py-3 cursor-pointer">
            <IconCalendar />
            <span className="text-[13px] text-inspira-subhead tracking-inspira">{checkOut}</span>
          </div>

          {/* Guests */}
          <div className="flex items-center gap-2 bg-[#f6f8fa] border border-[#e5e5e5] rounded-md px-4 py-3 cursor-pointer">
            <IconPerson />
            <span className="text-[13px] text-inspira-subhead tracking-inspira">{guests}</span>
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center w-[50px] h-[51px] bg-inspira-primary rounded-md hover:bg-opacity-90 transition-colors">
            <IconSearch />
          </button>
        </div>

        {/* Filter Row 1 — toggle + pills + hotel name */}
        <div className="flex items-center gap-3 px-8 pb-2">
          {/* List/Map toggle — white bg, #c3c3c3 border, active half highlighted */}
          <div className="flex items-center border border-[#c3c3c3] rounded-[6px] overflow-hidden h-[37px]">
            <button
              onClick={() => setListView(true)}
              className={`flex items-center justify-center w-[61px] h-full transition-colors ${
                listView ? "bg-[#a4a8c8]" : "bg-white"
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="0" y="1" width="7" height="7" rx="1" fill={listView ? "white" : "#adadad"}/>
                <rect x="0" y="12" width="7" height="7" rx="1" fill={listView ? "white" : "#adadad"}/>
                <rect x="10" y="4" width="10" height="1.5" rx="0.75" fill={listView ? "white" : "#adadad"}/>
                <rect x="10" y="15" width="10" height="1.5" rx="0.75" fill={listView ? "white" : "#adadad"}/>
              </svg>
            </button>
            <div className="w-px h-full bg-[#c3c3c3]" />
            <button
              onClick={() => setListView(false)}
              className={`flex items-center justify-center w-[55px] h-full transition-colors ${
                !listView ? "bg-[#a4a8c8]" : "bg-white"
              }`}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M1 4l7-3 7 3 7-3v16l-7 3-7-3-7 3V4z" stroke={!listView ? "white" : "#adadad"} strokeWidth="1.3" strokeLinejoin="round"/>
                <path d="M8 1v16M15 4v16" stroke={!listView ? "white" : "#adadad"} strokeWidth="1.3"/>
              </svg>
            </button>
          </div>

          <span className="text-[13px] font-medium text-inspira-subhead tracking-[0.026em]">
            List View ON
          </span>

          <div className="w-px h-5 bg-inspira-lines-light" />

          {/* Solid filter pills — #a4a8c8 bg, rounded-[6px] */}
          <button className="filter-pill">
            Price
            <svg width="10" height="10" viewBox="0 0 11 11" fill="none"><path d="M1 2h9M3 5.5h5M4.5 9h2" stroke="#465664" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <IconChevronDown size={8} />
          </button>
          <button className="filter-pill">
            Guest Rating
            <IconChevronDown size={8} />
          </button>
          <button className="filter-pill">
            Stars
            <svg width="10" height="10" viewBox="0 0 11 11" fill="none"><path d="M1 2h9M3 5.5h5M4.5 9h2" stroke="#465664" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <IconChevronDown size={8} />
          </button>

          {/* Hotel Name — input style: #f6f8fa bg, #bfbfbf border, rounded-4px */}
          <div className="ml-auto filter-input">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 2h9M3 5.5h5M4.5 9h2" stroke="#bfbfbf" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <span className="text-[13px] text-[#bfbfbf] tracking-[0.026em]">Hotel Name</span>
          </div>
        </div>

        {/* Filter Row 2 — More Filters (expanded sub-row) */}
        <div className="flex items-center gap-2 px-8 pb-3">
          {/* More Filters badge with checkmark icon */}
          <div className="flex items-center gap-1.5">
            {/* small checkmark/tick icon (Group 203 in Figma) */}
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
              <path d="M1 6l4 4 7-8" stroke="#424577" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[13px] font-medium text-inspira-subhead tracking-[0.026em]">
              More Filters(2)
            </span>
            <IconChevronDown size={8} />
          </div>
        </div>
      </div>

      {/* ══ MAIN CONTENT ════════════════════════════════════════════════════ */}
      <main className="max-w-[1240px] mx-auto px-6 py-6">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-baseline gap-3">
            <h1 className="text-[28px] font-bold text-inspira-header">Cancún hotels</h1>
            <span className="text-[22px] font-normal text-inspira-lines">1,225 places</span>
          </div>
          <button className="flex items-center gap-2 bg-white border border-inspira-secondary2 rounded-full px-4 py-1.5 text-[13px] font-medium text-inspira-secondary2 hover:bg-inspira-secondary2 hover:text-white transition-colors">
            <IconSort />
            Sort by
          </button>
        </div>

        {/* Hotel Cards */}
        <div className="flex flex-col gap-5">
          {hotels.map((hotel, idx) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              gradientClass={imgGradients[idx]}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-8 mb-4">
          <button className="flex items-center gap-3 border border-inspira-primary rounded-full px-10 py-3 text-[16px] font-medium text-inspira-primary bg-white hover:bg-inspira-primary hover:text-white transition-colors shadow-sm">
            Load More
            <IconBelow />
          </button>
        </div>
      </main>

      {/* ══ FOOTER ══════════════════════════════════════════════════════════ */}
      <footer className="bg-white border-t border-inspira-lines-light mt-8">
        <div className="max-w-[1240px] mx-auto px-6 py-10">
          <div className="flex gap-8">
            {/* Link columns */}
            <div className="flex-1 grid grid-cols-4 gap-6">
              {[
                ["About Us", "Contact", "Wallet"],
                ["Hotel Stays", "Resort Stays", "My Trips"],
                ["Profile", "Share With Friends", "Booking History"],
                ["Terms", "Privacy Policies", "Site Map"],
              ].map((col, i) => (
                <div key={i} className="flex flex-col gap-3">
                  {col.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-[14px] font-medium text-inspira-subhead tracking-inspira hover:text-inspira-secondary2 transition-colors"
                    >
                      · {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            {/* Social + copyright */}
            <div className="flex flex-col items-end justify-between">
              <div className="flex items-center gap-3">
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <img src={ASSETS.socialFacebook} alt="Facebook" className="h-5 w-5 object-contain" />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <img src={ASSETS.socialX} alt="X" className="h-5 w-5 object-contain" />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <img src={ASSETS.socialInstagram} alt="Instagram" className="h-5 w-5 object-contain" />
                </a>
              </div>
              <p className="text-[14px] font-medium text-inspira-subhead tracking-inspira">
                ®2025 Inspira Holidays. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
