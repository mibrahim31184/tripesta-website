// ====== Tripesta MAIN JS (Full) ======

// Year
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Navbar shrink
const nav = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
  if (!nav) return;
  if (window.scrollY > 30) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

// Hero slider
const slides = Array.from(document.querySelectorAll("#heroSlider .hero-slide"));
if (slides.length) {
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
  }, 5000);
}

// WhatsApp numbers
const WA1 = "971521774320";
const WA2 = "971503661905";

function getWALink(num, lang) {
  const text =
    lang === "ar"
      ? "شكرًا لتواصلك مع تريبستا. كيف نقدر نساعدك في حجوزات السفر؟"
      : "Thanks for contacting Tripesta. How can we help with your travel booking?";
  return "https://wa.me/" + num + "?text=" + encodeURIComponent(text);
}

function updateWALinks(lang) {
  const link1 = getWALink(WA1, lang);
  const link2 = getWALink(WA2, lang);

  // Mapping: ids that should go to number 1 vs 2
  const map = {
    whLink1: link1,
    whContact1: link1,
    whMainCta: link1,
    whCtaPackages: link1,

    whLink2: link2,
    whContact2: link2,
  };

  Object.keys(map).forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = map[id];
  });
}

// Translation dictionary (minimal but complete for current page)
const dict = {
  en: {
    // Nav
    "nav.services": "Services",
    "nav.flights": "Flights",
    "nav.packages": "Packages",
    "nav.hotels": "Hotels",
    "nav.visa": "Visa",
    "nav.about": "About",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.book": "Book Now",

    // Hero
    "hero.badge": "Your Complete Travel Partner",
    "hero.title1": "Explore the World with",
    "hero.sub": "Flights • Hotels • Tourist Visas • Packages • Tours — Best deals & fast support.",
    "hero.cta1": "View Packages",
    "hero.cta2": "Get a Quote",

    // Quick
    "quick.title": "Quick Inquiry",
    "quick.send": "Send Request",
    "quick.or": "Or WhatsApp:",

    // Sections
    "services.title": "Services",
    "services.sub": "Everything you need for a complete trip – Flights, Hotels, Tourist Visas, Packages",
    "services.flights": "Flight Booking",
    "services.flightsP": "Best options, smart routes, flexible tickets.",
    "services.hotels": "Hotel Booking",
    "services.hotelsP": "Family, luxury, or budget – worldwide stays.",
    "services.visa": "Tourist Visas",
    "services.visaP": "Fast visa processing with high success rate.",
    "services.packages": "Tour Packages",
    "services.packagesP": "Ready-made & custom itineraries.",

    "flights.title": "Flight Specialists",
    "flights.sub": "We provide flight tickets to anywhere in the world with all airlines at the cheapest prices",
    "flights.destinations": "200+ Global Destinations",
    "flights.desc": "We work with all airlines to guarantee you the best fare.",
    "flights.flex": "Flexible tickets",
    "flights.support": "24/7 support",
    "flights.price": "Best prices",

    "packages.title": "Tour Packages",
    "packages.sub": "Georgia, Turkey, Maldives, and more",
    "packages.whatsapp": "WhatsApp to customize your package",
    "package.georgia": "Georgia Escape",
    "package.georgiaDays": "5 days",
    "package.georgiaDesc": "Tbilisi + Kazbegi + Gudauri",
    "package.turkey": "Turkish Delight",
    "package.turkeyDays": "7 days",
    "package.turkeyDesc": "Istanbul + Cappadocia + Pamukkale",
    "package.maldives": "Maldives",
    "package.maldivesDays": "7 days",
    "package.maldivesDesc": "Overwater villa + 5* resort",

    "hotels.title": "Hotels & Stays",
    "hotels.sub": "Choose from top hotels worldwide – family, luxury, budget",

    "visa.title": "Tourist Visas",
    "visa.sub": "We provide all types of tourist visas worldwide with high success rate",
    "visa.uae": "UAE Visa",
    "visa.uaeDesc": "Visit & tourist visas for UAE.",
    "visa.schengen": "Schengen",
    "visa.schengenDesc": "European tourist visas, fast track.",
    "visa.ukusa": "UK & USA",
    "visa.ukusaDesc": "Consultation & complete file preparation.",

    "about.title": "About Us",
    "about.sub": "Since 2014, we've been helping travelers plan smooth trips",
    "about.est": "Established in 2014",
    "about.p1": "Tripesta has achieved strong success in the travel industry — packages, hotels, transport, and tourist visa services.",
    "about.li1": "Tailor-made packages with trusted partners",
    "about.li2": "Fast customer support & clear trip planning",
    "about.li3": "Hotels, transfers, tours, and visas",
    "about.achievements": "Achievements",
    "about.ach1": "10,000+ happy travelers",
    "about.ach2": "Partners with 70+ airlines & hotels",
    "about.ach3": "98% visa success rate",
    "about.ach4": "Multilingual team",

    "reviews.title": "Customer Reviews",
    "reviews.sub": "Real service, real support – we care about your trip.",
    "review.one": "Fast processing and professional service.",
    "review.two": "Schengen visa in 5 days. Thank you Tripesta.",
    "review.three": "Turkey package was complete and hotels were excellent.",

    "contact.title": "Contact Us",
    "contact.sub": "Send your request – we'll reply quickly with the best offers",
    "contact.brand": "Tripesta",
    "contact.whLabel": "Phone / WhatsApp",
    "contact.emailLabel": "Email",
    "contact.locLabel": "Location",
    "contact.locVal": "Ajman Free Zone - Ajman Media City",
    "contact.whCta": "Chat on WhatsApp",
    "contact.send": "Send Message",

    "footer.brand": "Tripesta",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",

    "service.package": "Tour Package",
    "service.hotel": "Hotel",
    "service.flight": "Flight",
    "service.visa": "Visa",

    // Placeholders
    "ph.name": "Your Name *",
    "ph.email": "Your Email *",
    "ph.destination": "Destination (e.g., Georgia)",
    "ph.phone": "Your Phone",
    "ph.message": "Your Message *",
  },

  ar: {
    // Nav
    "nav.services": "الخدمات",
    "nav.flights": "الطيران",
    "nav.packages": "الباقات",
    "nav.hotels": "الفنادق",
    "nav.visa": "التأشيرات",
    "nav.about": "من نحن",
    "nav.reviews": "آراء العملاء",
    "nav.contact": "اتصل بنا",
    "nav.book": "احجز الآن",

    // Hero
    "hero.badge": "شريكك المتكامل للسفر والسياحة",
    "hero.title1": "اكتشف العالم مع",
    "hero.sub": "طيران • فنادق • تأشيرات سياحية • باقات • جولات — عروض حصرية ودعم سريع.",
    "hero.cta1": "شاهد الباقات",
    "hero.cta2": "اطلب عرض سعر",

    // Quick
    "quick.title": "استفسار سريع",
    "quick.send": "إرسال الطلب",
    "quick.or": "أو واتساب:",

    // Sections
    "services.title": "الخدمات",
    "services.sub": "كل ما تحتاجه لرحلة متكاملة – طيران، فنادق، تأشيرات سياحية، باقات",
    "services.flights": "حجوزات الطيران",
    "services.flightsP": "أفضل الخيارات ومسارات ذكية وتذاكر مرنة.",
    "services.hotels": "حجوزات الفنادق",
    "services.hotelsP": "خيارات ممتازة – عائلي، فاخر أو اقتصادي.",
    "services.visa": "التأشيرات السياحية",
    "services.visaP": "سرعة إنجاز ومتابعة دقيقة.",
    "services.packages": "الباقات السياحية",
    "services.packagesP": "باقات جاهزة وبرامج حسب طلبك.",

    "flights.title": "متخصصون في الطيران",
    "flights.sub": "نوفر تذاكر طيران إلى أي مكان في العالم مع جميع الشركات بأفضل الأسعار",
    "flights.destinations": "200+ وجهة حول العالم",
    "flights.desc": "نعمل مع جميع الخطوط الجوية لنضمن لك أفضل سعر.",
    "flights.flex": "تذاكر مرنة",
    "flights.support": "دعم 24/7",
    "flights.price": "أفضل الأسعار",

    "packages.title": "الباقات السياحية",
    "packages.sub": "جورجيا، تركيا، المالديف وأكثر",
    "packages.whatsapp": "واتساب لتصميم باقتك الخاصة",
    "package.georgia": "جورجيا إسكيب",
    "package.georgiaDays": "5 أيام",
    "package.georgiaDesc": "تبليسي + كازبيجي + جوداوري",
    "package.turkey": "السحر التركي",
    "package.turkeyDays": "7 أيام",
    "package.turkeyDesc": "اسطنبول + كبادوكيا + باموكالي",
    "package.maldives": "المالديف",
    "package.maldivesDays": "7 أيام",
    "package.maldivesDesc": "فيلا فوق الماء + منتجع 5 نجوم",

    "hotels.title": "الفنادق والإقامات",
    "hotels.sub": "اختر من أفضل الفنادق حول العالم – عائلي، فاخر، اقتصادي",

    "visa.title": "التأشيرات السياحية",
    "visa.sub": "نقدم جميع أنواع التأشيرات السياحية حول العالم بنسبة نجاح عالية",
    "visa.uae": "تأشيرة الإمارات",
    "visa.uaeDesc": "تأشيرات زيارة وسياحة للإمارات.",
    "visa.schengen": "شنغن",
    "visa.schengenDesc": "تأشيرات أوروبا السياحية بمواعيد سريعة.",
    "visa.ukusa": "بريطانيا وأمريكا",
    "visa.ukusaDesc": "استشارات وتجهيز ملف كامل.",

    "about.title": "من نحن",
    "about.sub": "منذ 2014 نساعد المسافرين على رحلات سهلة",
    "about.est": "تأسسنا في 2014",
    "about.p1": "حققنا نجاحات قوية في عالم السفر — باقات، فنادق، مواصلات، وخدمات التأشيرات.",
    "about.li1": "باقات مخصصة وشركاء موثوقون",
    "about.li2": "دعم سريع وخطة رحلة واضحة",
    "about.li3": "فنادق، تنقلات، جولات، وتأشيرات",
    "about.achievements": "إنجازاتنا",
    "about.ach1": "أكثر من 10,000 مسافر سعيد",
    "about.ach2": "شركاء مع 70+ شركة طيران وفندق",
    "about.ach3": "نسبة نجاح تأشيرات 98%",
    "about.ach4": "فريق متعدد اللغات",

    "reviews.title": "آراء العملاء",
    "reviews.sub": "خدمة حقيقية ودعم فعلي – نهتم برحلتك.",
    "review.one": "سرعة في الإنجاز وتعامل راقي.",
    "review.two": "فيزا شنغن خلال 5 أيام. شكراً تريبستا.",
    "review.three": "باقة تركيا كانت متكاملة والفنادق ممتازة.",

    "contact.title": "اتصل بنا",
    "contact.sub": "أرسل طلبك – وسنرد بأسرع وقت بأفضل العروض",
    "contact.brand": "تريبستا",
    "contact.whLabel": "هاتف / واتساب",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.locLabel": "الموقع",
    "contact.locVal": "Ajman Free Zone - Ajman Media City",
    "contact.whCta": "تحدث على واتساب",
    "contact.send": "إرسال الرسالة",

    "footer.brand": "تريبستا",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.privacy": "الخصوصية",
    "footer.terms": "الشروط",

    "service.package": "باقة سياحية",
    "service.hotel": "فندق",
    "service.flight": "طيران",
    "service.visa": "تأشيرة",

    // Placeholders
    "ph.name": "الاسم *",
    "ph.email": "البريد الإلكتروني *",
    "ph.destination": "الوجهة (مثال: جورجيا)",
    "ph.phone": "رقم الهاتف",
    "ph.message": "رسالتك *",
  },
};

// Apply language (keeps icons)
function applyLang(lang) {
  document.body.className = lang === "ar" ? "rtl" : "";
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // Translate text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[lang]?.[key];
    if (!val) return;

    // Keep icons if exist
    const icon = el.querySelector("i");
    if (icon) {
      const iconHtml = icon.outerHTML;
      el.innerHTML = "";
      el.textContent = val + " ";
      el.insertAdjacentHTML("beforeend", iconHtml);
    } else {
      el.textContent = val;
    }
  });

  // Translate placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    const val = dict[lang]?.[key];
    if (!val) return;
    el.setAttribute("placeholder", val);
  });

  // Toggle button text
  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) toggleBtn.textContent = lang === "ar" ? "English" : "عربي";

  // Update WhatsApp
  updateWALinks(lang);
}

// Toggle button
const langToggle = document.getElementById("langToggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    const current = document.documentElement.lang || "en";
    applyLang(current === "ar" ? "en" : "ar");
  });
}

// Init
applyLang("en");
updateWALinks("en");
