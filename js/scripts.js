// ====== Tripesta MAIN JS (محدث بالكامل) ======

// DOM ready
document.addEventListener("DOMContentLoaded", () => {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

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

  // ✅ إعادة تحميل GIF كل 2 ثانية للحفاظ على الحركة (حل مضمون)
  const logo = document.querySelector('.main-logo');
  if (logo) {
    setInterval(() => {
      const src = logo.src.split('?')[0];
      logo.src = src + '?t=' + new Date().getTime();
    }, 2000);
  }
});

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

  // Mapping: all IDs
  const map = {
    whLink1: link1,
    whLink2: link2,
    whContact1: link1,
    whContact2: link2,
    whMainCta: link1,
    whCtaPackages: link1
  };

  Object.keys(map).forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = map[id];
  });
}

// Translation dictionary (كامل)
const dict = {
  en: {
    "nav.services": "Services",
    "nav.flights": "Flights",
    "nav.packages": "Packages",
    "nav.hotels": "Hotels",
    "nav.visa": "Visa",
    "nav.about": "About",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.book": "Book Now",

    "hero.badge": "Your Complete Travel Partner",
    "hero.title1": "Explore the World with",
    "hero.sub": "Flights • Hotels • Tourist Visas • Packages • Tours — Best deals & fast support.",
    "hero.cta1": "View Packages",
    "hero.cta2": "Get a Quote",

    "quick.title": "Quick Inquiry",
    "quick.send": "Send Request",
    "quick.or": "Or WhatsApp:",

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
    "packages.sub": "Georgia, Turkey, Azerbaijan, Poland, Maldives, Thailand, Saudi",
    "packages.whatsapp": "WhatsApp to customize your package",
    "package.georgia": "Georgia Escape",
    "package.georgiaDays": "5 days",
    "package.georgiaDesc": "Tbilisi + Kazbegi + Gudauri",
    "package.turkey": "Turkish Delight",
    "package.turkeyDays": "7 days",
    "package.turkeyDesc": "Istanbul + Cappadocia + Pamukkale",
    "package.azerbaijan": "Azerbaijan",
    "package.azerbaijanDays": "4 days",
    "package.azerbaijanDesc": "Baku + Gabala + Caspian Sea",
    "package.poland": "Poland Classic",
    "package.polandDays": "6 days",
    "package.polandDesc": "Warsaw + Krakow + Auschwitz",
    "package.maldives": "Maldives",
    "package.maldivesDays": "7 days",
    "package.maldivesDesc": "Overwater villa + 5* resort",
    "package.thailand": "Thailand",
    "package.thailandDays": "8 days",
    "package.thailandDesc": "Bangkok + Phuket + Chiang Mai",
    "package.saudi": "Saudi Arabia",
    "package.saudiDays": "5 days",
    "package.saudiDesc": "Makkah + Madinah + Jeddah",

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
    "visa.asia": "Asia Visas",
    "visa.asiaDesc": "Turkey, Georgia, Thailand, Azerbaijan, China.",
    "visa.saudi": "Saudi Tourist Visa",
    "visa.saudiDesc": "Tourist visas for Saudi.",
    "visa.maldives": "Maldives",
    "visa.maldivesDesc": "Visa on arrival & permits.",

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
    "about.ach4": "Multilingual team (Arabic, English, Filipino)",

    "reviews.title": "Customer Reviews",
    "reviews.sub": "Real service, real support – we care about your trip.",
    "review.jasim": "Fast processing and professional service. I traveled to Georgia and it was amazing.",
    "review.sarah": "Schengen visa in 5 days. Thank you Tripesta.",
    "review.mohamed": "Turkey package was complete and hotels were excellent. Highly recommended.",
    "review.razan": "Booked Maldives trip, everything was organized and easy. Professional staff.",
    "review.client": "Loyal Tripesta customer, they always deliver the best.",
    "review.clientName": "Tripesta Client",
    "review.grace": "What an amazing experience! I really enjoyed my trip to Turkey. Smooth booking and great support.",

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

    "ph.name": "Your Name *",
    "ph.email": "Your Email *",
    "ph.destination": "Destination (e.g., Georgia)",
    "ph.phone": "Your Phone",
    "ph.message": "Your Message *",
  },

  ar: {
    "nav.services": "الخدمات",
    "nav.flights": "الطيران",
    "nav.packages": "الباقات",
    "nav.hotels": "الفنادق",
    "nav.visa": "التأشيرات",
    "nav.about": "من نحن",
    "nav.reviews": "آراء العملاء",
    "nav.contact": "اتصل بنا",
    "nav.book": "احجز الآن",

    "hero.badge": "شريكك المتكامل للسفر والسياحة",
    "hero.title1": "اكتشف العالم مع",
    "hero.sub": "طيران • فنادق • تأشيرات سياحية • باقات • جولات — عروض حصرية ودعم سريع.",
    "hero.cta1": "شاهد الباقات",
    "hero.cta2": "اطلب عرض سعر",

    "quick.title": "استفسار سريع",
    "quick.send": "إرسال الطلب",
    "quick.or": "أو واتساب:",

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
    "packages.sub": "جورجيا، تركيا، أذربيجان، بولندا، المالديف، تايلاند، السعودية",
    "packages.whatsapp": "واتساب لتصميم باقتك الخاصة",
    "package.georgia": "جورجيا إسكيب",
    "package.georgiaDays": "5 أيام",
    "package.georgiaDesc": "تبليسي + كازبيجي + جوداوري",
    "package.turkey": "السحر التركي",
    "package.turkeyDays": "7 أيام",
    "package.turkeyDesc": "اسطنبول + كبادوكيا + باموكالي",
    "package.azerbaijan": "أذربيجان",
    "package.azerbaijanDays": "4 أيام",
    "package.azerbaijanDesc": "باكو + قابالا + بحر قزوين",
    "package.poland": "بولندا الكلاسيكية",
    "package.polandDays": "6 أيام",
    "package.polandDesc": "وارسو + كراكوف + أوشفيتز",
    "package.maldives": "المالديف",
    "package.maldivesDays": "7 أيام",
    "package.maldivesDesc": "فيلا فوق الماء + منتجع 5 نجوم",
    "package.thailand": "تايلاند",
    "package.thailandDays": "8 أيام",
    "package.thailandDesc": "بانكوك + بوكيت + شيانغ ماي",
    "package.saudi": "السعودية",
    "package.saudiDays": "5 أيام",
    "package.saudiDesc": "مكة + المدينة + جدة",

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
    "visa.asia": "تأشيرات آسيا",
    "visa.asiaDesc": "تركيا، جورجيا، تايلاند، أذربيجان، الصين.",
    "visa.saudi": "تأشيرة السعودية السياحية",
    "visa.saudiDesc": "تأشيرات زيارة سياحية للمملكة.",
    "visa.maldives": "المالديف",
    "visa.maldivesDesc": "تأشيرة دخول وتصاريح خاصة.",

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
    "about.ach4": "فريق متعدد اللغات (عربي، إنجليزي، فلبيني)",

    "reviews.title": "آراء العملاء",
    "reviews.sub": "خدمة حقيقية ودعم فعلي – نهتم برحلتك.",
    "review.jasim": "سرعة في الإنجاز وتعامل راقي. سافرت لجورجيا وكانت الرحلة رائعة.",
    "review.sarah": "فيزا شنغن خلال 5 أيام. شكراً تريبستا.",
    "review.mohamed": "باقة تركيا كانت متكاملة والفنادق ممتازة. أنصح بالتعامل معهم.",
    "review.razan": "حجزت رحلة المالديف، كان كل شيء منظم وسهل. موظفين محترفين.",
    "review.client": "عميل دائم لتريبستا، دائماً يقدمون الأفضل.",
    "review.clientName": "عميل تريبستا",
    "review.grace": "تجربة رائعة! استمتعت جداً برحلتي إلى تركيا. حجز سلس ودعم ممتاز.",

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

    "ph.name": "الاسم *",
    "ph.email": "البريد الإلكتروني *",
    "ph.destination": "الوجهة (مثال: جورجيا)",
    "ph.phone": "رقم الهاتف",
    "ph.message": "رسالتك *",
  },
};

// Apply language function
function applyLang(lang) {
  document.body.className = lang === "ar" ? "rtl" : "";
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // Translate text elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[lang]?.[key];
    if (!val) return;

    const icon = el.querySelector("i");
    if (icon) {
      const iconHtml = icon.outerHTML;
      el.innerHTML = val + " ";
      el.insertAdjacentHTML("beforeend", iconHtml);
    } else {
      el.textContent = val;
    }
  });

  // Translate placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    const val = dict[lang]?.[key];
    if (val) el.setAttribute("placeholder", val);
  });

  // Update toggle button
  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) toggleBtn.textContent = lang === "ar" ? "English" : "عربي";

  // Update book icon direction
  const bookBtn = document.querySelector('.btn-brand[href="#contact"] i');
  if (bookBtn) {
    bookBtn.className = lang === "ar" ? "fa-solid fa-arrow-left ms-1" : "fa-solid fa-arrow-right ms-1";
  }

  // Update WhatsApp links
  updateWALinks(lang);
  
  // Save preference
  localStorage.setItem("tripesta_lang", lang);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("tripesta_lang") || "en";
  applyLang(savedLang);
  
  // Toggle button click
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const current = document.documentElement.lang || "en";
      applyLang(current === "ar" ? "en" : "ar");
    });
  }
});
