import executiveLounge from '../assets/images/arabic_executive_lounge_1791196686663.jpg';
import gahwaWelcome from '../assets/images/arabic_gahwa_welcome_1791196654593.jpg';
import gourmetBuffet from '../assets/images/arabic_gourmet_buffet_1791196677358.jpg';
import luxuryLobby from '../assets/images/arabic_luxury_lobby_1791196641617.jpg';
import suiteBedroom from '../assets/images/arabic_suite_bedroom_1791196665711.jpg';
import arabicCoffee from '../assets/images/lavona_arabic_coffee_1791195694315.jpg';
import heroBanner from '../assets/images/lavona_hero_banner_1791195658209.jpg';
import hotelFacade from '../assets/images/lavona_hotel_facade_1791195721896.jpg';
import restaurantDining from '../assets/images/lavona_restaurant_dining_1791195708668.jpg';
import royalSuite from '../assets/images/lavona_royal_suite_1791195677151.jpg';

export const HOTEL_IMAGES = {
  executiveLounge,
  gahwaWelcome,
  gourmetBuffet,
  luxuryLobby,
  suiteBedroom,
  arabicCoffee,
  heroBanner,
  hotelFacade,
  restaurantDining,
  royalSuite,
};

export interface Room {
  id: string;
  nameEn: string;
  nameAr: string;
  category: 'royal' | 'executive' | 'deluxe' | 'family';
  priceSar: number;
  sizeSqM: number;
  maxGuests: number;
  bedTypeEn: string;
  bedTypeAr: string;
  viewEn: string;
  viewAr: string;
  image: string;
  descriptionEn: string;
  descriptionAr: string;
  amenitiesEn: string[];
  amenitiesAr: string[];
  gallery: string[];
}

export interface Facility {
  id: string;
  iconName: string;
  titleEn: string;
  titleAr: string;
  shortDescEn: string;
  shortDescAr: string;
  fullDescEn: string;
  fullDescAr: string;
  highlightEn: string;
  highlightAr: string;
  image: string;
}

export const HOTEL_INFO = {
  nameEn: "Lavona Hotel",
  nameAr: "فندق لافونا",
  phone: "+966 13 843 0111",
  rawPhone: "+966138430111",
  whatsapp: "+966138430111",
  addressEn: "Al Dabab, Dammam 32261, Saudi Arabia",
  addressAr: "الضباب، الدمام 32261، المملكة العربية السعودية",
  email: "reservations@lavonahotel.sa",
  checkIn: "15:00",
  checkOut: "12:00",
  stars: 4,
  locationCoordinates: { lat: 26.434, lng: 50.103 },
  nearbyLandmarks: [
    { nameEn: "Dammam Corniche", nameAr: "كورنيش الدمام", distanceEn: "12 mins drive", distanceAr: "12 دقيقة بالسيارة" },
    { nameEn: "King Fahd International Airport (DMM)", nameAr: "مطار الملك فهد الدولي", distanceEn: "25 mins drive", distanceAr: "25 دقيقة بالسيارة" },
    { nameEn: "Ithra Cultural Center (Aramco)", nameAr: "مركز إثراء الثقافي", distanceEn: "18 mins drive", distanceAr: "18 دقيقة بالسيارة" },
    { nameEn: "Al Danah Mall & Shopping District", nameAr: "مجمع الدانة والمراكز التجارية", distanceEn: "8 mins drive", distanceAr: "8 دقائق بالسيارة" },
    { nameEn: "Dammam Railway Station", nameAr: "محطة قطار الدمام", distanceEn: "15 mins drive", distanceAr: "15 دقيقة بالسيارة" },
  ]
};

export const ROOMS_DATA: Room[] = [
  {
    id: 'royal-suite',
    nameEn: 'Royal Lavona Suite',
    nameAr: 'الأجنحة الملكية لافونا',
    category: 'royal',
    priceSar: 850,
    sizeSqM: 78,
    maxGuests: 3,
    bedTypeEn: 'King Size Bed & Private Majlis Living Room',
    bedTypeAr: 'سرير كينغ فاخر مع صالة مجلس ملكي',
    viewEn: 'Panoramic Dammam Cityscape & Palms',
    viewAr: 'إطلالة بانورامية على مدينة الدمام والنخيل',
    image: suiteBedroom,
    descriptionEn: 'The pinnacle of luxury in Dammam. Features a royal master bedroom with Islamic geometric gold lattice artwork, separate velvet Majlis seating room, oversized marble bathroom with jacuzzi, and gold-hued fixtures.',
    descriptionAr: 'قمة الفخامة والرفاهية في الدمام. يضم غرفة نوم رئيسية مزخرفة بالنقوش الذهبية الملكية، صالة مجلس منفصلة بإضاءة دافئة، وحمام رخامي فاخر مزود بجاكوزي ولمسات ذهبية.',
    amenitiesEn: ['Oversized Marble Jacuzzi', 'Private Executive Majlis Access', '300Mbps High-Speed Wi-Fi', '55-inch Smart IPTV', '24/7 Butler Service', 'Nespresso & Saudi Gahwa Station'],
    amenitiesAr: ['جاكوزي رخامي فاخر', 'دخول المجلس الملكي الخاص', 'واي فاي فائق السرعة 300 ميجابت', 'شاشة ذكية 55 بوصة', 'خدمة المساعد الشخصي 24/7', 'ركن القهوة السعودية والنسبريسو'],
    gallery: [
      suiteBedroom,
      luxuryLobby,
      gahwaWelcome,
      executiveLounge
    ]
  },
  {
    id: 'executive-suite',
    nameEn: 'Executive Grand Suite',
    nameAr: 'الجناح التنفيذي الفاخر',
    category: 'executive',
    priceSar: 580,
    sizeSqM: 56,
    maxGuests: 3,
    bedTypeEn: '1 King Bed & Velvet Arabic Sofa Set',
    bedTypeAr: 'سرير كينغ مع طقم كنپ مخملي عربي',
    viewEn: 'Dammam City & Palm Avenue',
    viewAr: 'إطلالة على مدينة الدمام وشارع النخيل',
    image: executiveLounge,
    descriptionEn: 'Designed for business executives and discerning travelers. Features a spacious executive desk, ergonomic seating, traditional brass lantern ambiance, and opulent dark purple & gold textiles.',
    descriptionAr: 'مصمم خصيصاً لرجال الأعمال والمسافرين الباحثين عن التميز. يحتوي على مكتب عمل تنفيذي متكامل، جلسة مريحة، وأجواء تراثية دافئة بإضاءة بنفسجية وذهبية.',
    amenitiesEn: ['Ergonomic Executive Desk', 'Free High-Speed Wi-Fi', 'In-Room Safe', 'Rainfall Shower', '24-Hour In-Room Dining', 'Saudi Gahwa & Ajwa Dates Welcome Set'],
    amenitiesAr: ['مكتب عمل تنفيذي', 'واي فاي مجاني سريع', 'خزنة داخل الغرفة', 'دش مطري فاخر', 'خدمة الطعام بالغرف 24/7', 'ضيافة القهوة السعودية وتمر العجوة'],
    gallery: [
      executiveLounge,
      luxuryLobby,
      gourmetBuffet
    ]
  },
  {
    id: 'deluxe-king',
    nameEn: 'Deluxe King Room',
    nameAr: 'غرفة ديلوكس كينج',
    category: 'deluxe',
    priceSar: 380,
    sizeSqM: 38,
    maxGuests: 2,
    bedTypeEn: '1 Luxury King Mattress',
    bedTypeAr: 'سرير كينج فاخر',
    viewEn: 'City View',
    viewAr: 'إطلالة على المدينة',
    image: hotelFacade,
    descriptionEn: 'An elegant retreat offering plush bedding, custom blackout curtains, silent climate control, and refined purple and gold Arabesque design elements.',
    descriptionAr: 'ملاذ أنيق يوفر مفارش فندقية فائقة النعومة، ستائر عازلة للضوء، تكييف هادئ، وتصميم ملكي متناسق باللمسات العربية.',
    amenitiesEn: ['High-Speed Wi-Fi', 'Smart Climate Control', 'Tea & Coffee Station', 'Luxury Amenities', 'Daily Housekeeping'],
    amenitiesAr: ['واي فاي سريع', 'تحكم ذكي بالتكييف', 'ركن شاي وقهوة', 'مستلزمات عناية فاخرة', 'تنظيف يومي للملفات'],
    gallery: [
      hotelFacade,
      suiteBedroom
    ]
  },
  {
    id: 'family-suite',
    nameEn: 'Lavona Family Suite',
    nameAr: 'جناح لافونا العائلي',
    category: 'family',
    priceSar: 690,
    sizeSqM: 68,
    maxGuests: 5,
    bedTypeEn: '1 King Bed + 2 Twin Beds',
    bedTypeAr: 'سرير كينج + سريران منفصلان',
    viewEn: 'Courtyard & Avenue',
    viewAr: 'إطلالة على الفناء والشارع الرئيسي',
    image: gahwaWelcome,
    descriptionEn: 'Generously proportioned family suite featuring two separate bedroom spaces, dual bathrooms, and traditional Saudi hospitality amenities for families.',
    descriptionAr: 'جناح عائلي رحب يضم غرفتي نوم منفصلتين، حمامين، ومساحات واسعة تضمن الراحة والخصوصية لكل أفراد العائلة مع ضيافة القهوة السعودية.',
    amenitiesEn: ['Dual Bathrooms', 'High-Speed Wi-Fi', 'Connecting Rooms Option', 'Mini Refrigerator', 'Family Dining Area'],
    amenitiesAr: ['حمامان فاخران', 'واي فاي عالي السرعة', 'إمكانية الغرف المتصلة', 'ثلاجة صغيرة', 'ركن طعام عائلي خاصة'],
    gallery: [
      gahwaWelcome,
      gourmetBuffet
    ]
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'free-wifi',
    iconName: 'Wifi',
    titleEn: 'Free High-Speed Wi-Fi',
    titleAr: 'إنترنت واي فاي عالي السرعة',
    shortDescEn: 'Ultra-fast optical fiber wireless access across all guest rooms, suites, and common lounges.',
    shortDescAr: 'شبكة ألياف بصرية فائقة السرعة تغطي كافة الغرف والمرافق والمجالس العامة مجاناً.',
    fullDescEn: 'Stay seamlessly connected with complimentary optical fiber Wi-Fi throughout Lavona Hotel. Perfect for HD video streaming, remote business conferences, and fast browsing.',
    fullDescAr: 'ابقَ على اتصال دائم مع خدمة الواي فاي عالية السرعة المجانية في جميع أنحاء الفندق، وهي مثالية لمشاهدة الفيديو عالي الدقة واجتماعات العمل والصفح السلس.',
    highlightEn: '300 Mbps Fiber Speed',
    highlightAr: 'سرعة 300 ميجابت/ثانية',
    image: executiveLounge
  },
  {
    id: 'free-parking',
    iconName: 'Car',
    titleEn: 'Free Covered Parking & Valet',
    titleAr: 'موقف سيارات مغطى مجاني وخدمة صف',
    shortDescEn: 'Secure indoor covered garage with 24-hour CCTV surveillance and valet assistance.',
    shortDescAr: 'موقف سيارات مغطى وآمن مزود بكاميرات مراقبة على مدار 24 ساعة مع خدمة صف السيارات.',
    fullDescEn: 'Enjoy complete convenience with our complimentary covered parking garage. Guests benefit from valet service upon arrival and direct elevator access into the main hotel lobby.',
    fullDescAr: 'استمتع براحة بال كاملة مع موقف السيارات المغطى والآمن مجاناً لجميع النزلاء، بالإضافة لخدمة صف السيارات والدخول المباشر للمصاعد.',
    highlightEn: '24/7 Monitored & Covered',
    highlightAr: 'مغطى ومراقب 24/7',
    image: hotelFacade
  },
  {
    id: 'front-desk',
    iconName: 'Clock',
    titleEn: '24-Hour Arabic Reception & Concierge',
    titleAr: 'استقبال وضيافة على مدار 24 ساعة',
    shortDescEn: 'Dedicated multilingual Saudi reception team ready to assist with express check-in and city guidance anytime.',
    shortDescAr: 'فريق استقبال يتحدث العربية والإنجليزي بطلاقة جاهز لخدمتكم وإرشاداتكم في كل الأوقات.',
    fullDescEn: 'Our reception is staffed 24 hours a day, 7 days a week. Whether you arrive on a late-night flight or require express check-out, our hospitable team is at your service.',
    fullDescAr: 'مكتب الاستقبال يعمل على مدار الساعة لخدمتكم، سواء وصلت في وقت متأخر من الليل أو احتجت إنهاء إجراءات المغادرة السريعة.',
    highlightEn: 'Multilingual & Express Check-In',
    highlightAr: 'استقبال متعدد اللغات وإجراءات سريعة',
    image: luxuryLobby
  },
  {
    id: 'restaurant',
    iconName: 'Utensils',
    titleEn: 'Gourmet Saudi & International Dining',
    titleAr: 'مطعم فاخر للمأكولات السعودية والعالمية',
    shortDescEn: 'Savor rich Saudi Kabsa, fresh Dammam seafood, and international culinary delights.',
    shortDescAr: 'تذوق أشهى المأكولات السعودية والشرقية والعالمية والأسماك الطازجة في أجواء راقية.',
    fullDescEn: 'Lavona Hotel Dining offers a culinary journey blending authentic Saudi recipes with contemporary international cuisine. Open for lavish breakfast buffets, business lunches, and dinners.',
    fullDescAr: 'يقدم مطعم لافونا تجربة طعام فريدة تجمع بين النكهات السعودية الأصيلة والمأكولات العالمية. يفتح أبوابه للبوفيه المفتوح والوجبات اليومية.',
    highlightEn: 'Saudi Kabsa & International Buffet',
    highlightAr: 'بوفيه مفتوح ومأكولات سعودية شهية',
    image: gourmetBuffet
  },
  {
    id: 'air-conditioning',
    iconName: 'Wind',
    titleEn: 'Silent Climate Control AC',
    titleAr: 'تكييف مركزي متطور وهادئ',
    shortDescEn: 'Individually controlled, silent HVAC units in every suite for ideal cooling during hot Arabian days.',
    shortDescAr: 'نظام تكييف مستقل وهادئ في كل غرفة يضمن جوّاً منعشاً ومثالياً على مدار السنة.',
    fullDescEn: 'Beat the Eastern Province heat with individually adjustable digital thermostats. Engineered for silent operation and optimal humidity control for deep, restful sleep.',
    fullDescAr: 'تغلب على حرارة المنطقة الشرقية مع نظام التكييف الذكي والمستقل المصمم للعمل بهدوء تام وتوفير مناخ مريح في الغرفة.',
    highlightEn: 'Silent Digital Climate Control',
    highlightAr: 'تحكم رقمي هادئ في المناخ',
    image: suiteBedroom
  },
  {
    id: 'airport-shuttle',
    iconName: 'Bus',
    titleEn: 'Private Airport Shuttle Service',
    titleAr: 'خدمة التوصيل من وإلى المطار',
    shortDescEn: 'Convenient private transfers connecting Lavona Hotel with King Fahd International Airport (25 min).',
    shortDescAr: 'تنقلات خاصة ومباشرة بين الفندق ومطار الملك فهد الدولي بالدمام (25 دقيقة).',
    fullDescEn: 'Arrive in comfort with our dedicated chauffeur transfers. Pre-book an airport pickup or drop-off for effortless travel between King Fahd International Airport (DMM) and the hotel.',
    fullDescAr: 'احجز رحلة تنقل مريحة وسلسة بسيارات فاخرة بين الفندق ومطار الملك فهد الدولي بالدمام مع سائقين محترفين.',
    highlightEn: 'Direct Pickup to DMM Airport',
    highlightAr: 'توصيل مباشر لمطار الملك فهد',
    image: heroBanner
  }
];

export const TESTIMONIALS = [
  {
    nameEn: "Fahad Al-Otaibi",
    nameAr: "فهد العتيبي",
    roleEn: "Business Traveler from Riyadh",
    roleAr: "رجل أعمال - الرياض",
    rating: 5,
    commentEn: "Lavona Hotel in Dammam exceeded all my expectations! The location in Al Dabab is central, the Royal Suite with Islamic gold lattice work was magnificent, and the Saudi Gahwa coffee welcome was memorable.",
    commentAr: "فندق لافونا في الدمام تجاوز كل توقعاتي! الموقع ممتاز في حي الضباب، الجناح الملكي المزخرف كان تحفة معمارية، وحفاوة الاستقبال بالقهوة السعودية كانت رائعة."
  },
  {
    nameEn: "Dr. Sarah Al-Mansoor",
    nameAr: "د. سارة المنصور",
    roleEn: "Conference Guest from Jeddah",
    roleAr: "زائرة من جدة",
    rating: 5,
    commentEn: "The silence and air conditioning in the room allowed me to rest peacefully. Fast Wi-Fi, delicious Saudi breakfast buffet, and direct shuttle service to Dammam airport made my trip effortless.",
    commentAr: "الهدوء ونظام التكييف المريح مكنني من الاسترخاء التام. الإنترنت السريع وبوفيه الإفطار السعودي اللذيذ جعل زيارتي سهلة للغاية."
  },
  {
    nameEn: "Mohammed & Family",
    nameAr: "محمد والعائلة",
    roleEn: "Family Vacationers from Khobar",
    roleAr: "عائلة زائرة - الخبر",
    rating: 5,
    commentEn: "Spacious Family Suite, delicious breakfast buffet, and parking right outside. We loved the dark purple & gold Arabian ambience! Will definitely choose Lavona Hotel every time we visit Dammam.",
    commentAr: "جناح عائلي واسع، بوفيه إفطار شهي، ومواقف سيارات متوفرة بكثرة. أعجبنا الديكور الفاخر. سنختار فندق لافونا دائماً في الدمام."
  }
];
