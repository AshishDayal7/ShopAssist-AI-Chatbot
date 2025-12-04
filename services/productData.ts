import { Product, SearchFilters } from '../types';

export const PRODUCTS: Product[] = [
  // --- ULTRA PREMIUM & FLAGSHIP (> 60k) ---
  {
    id: "p1",
    name: "Pixel 9 Pro",
    brand: "Google",
    price: 109999,
    rating: 4.8,
    reviews: 1250,
    features: ["AI Camera", "Clean Android", "7 years updates", "Titan M2 Security", "Best Camera"],
    description: "The smartest smartphone with deep Gemini integration and the best still photography camera on the market.",
    imageUrl: "https://m.media-amazon.com/images/I/410a3ScPotL._SY300_SX300_QL70_FMwebp_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Pixel+9+Pro",
    specs: {
      screen: "6.7 inch LTPO OLED",
      processor: "Tensor G4",
      battery: "5050 mAh",
      camera: "50MP Main, 48MP Telephoto",
      storage: "128GB - 1TB"
    }
  },
  {
    id: "p2",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 129999,
    rating: 4.7,
    reviews: 3400,
    features: ["S-Pen", "Galaxy AI", "Titanium Frame", "100x Zoom", "Nightography"],
    description: "The ultimate power user phone with a built-in stylus, incredible zoom capabilities, and a massive display.",
    imageUrl: "https://m.media-amazon.com/images/I/81vxWpPpgNL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Samsung+Galaxy+S24+Ultra",
    specs: {
      screen: "6.8 inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      battery: "5000 mAh",
      camera: "200MP Main",
      storage: "256GB - 1TB"
    }
  },
  {
    id: "p3",
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    price: 144900,
    rating: 4.9,
    reviews: 5000,
    features: ["iOS Ecosystem", "Action Button", "Titanium", "FaceID", "Cinematic Video"],
    description: "Apple's flagship with the A18 Pro chip, offering seamless integration with Mac and iPad.",
    imageUrl: "https://m.media-amazon.com/images/I/61PBLEFPoKL._SX679_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=iPhone+16+Pro+Max",
    specs: {
      screen: "6.9 inch Super Retina XDR",
      processor: "A18 Pro",
      battery: "4600 mAh",
      camera: "48MP Main",
      storage: "256GB - 1TB"
    }
  },
  {
    id: "p50",
    name: "Samsung Galaxy Z Fold 6",
    brand: "Samsung",
    price: 164999,
    rating: 4.6,
    reviews: 150,
    features: ["Foldable", "Multitasking", "Galaxy AI", "Lightweight"],
    description: "The most refined foldable yet, thinner and lighter with Galaxy AI features tailored for the big screen.",
    imageUrl: "https://m.media-amazon.com/images/I/31Nw+Wn6xrL._SY300_SX300_QL70_FMwebp_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Samsung+Galaxy+Z+Fold6",
    specs: {
        screen: "7.6 inch Dynamic AMOLED 2X",
        processor: "Snapdragon 8 Gen 3",
        battery: "4400 mAh",
        camera: "50MP Triple",
        storage: "256GB - 1TB"
    }
  },
  {
    id: "p4",
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 64999,
    rating: 4.6,
    reviews: 890,
    features: ["Fast Charging", "Hasselblad Camera", "Value Flagship", "Alert Slider"],
    description: "Incredible performance for the price, featuring 80W fast charging and a great display.",
    imageUrl: "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=OnePlus+12",
    specs: {
      screen: "6.8 inch AMOLED",
      processor: "Snapdragon 8 Gen 3",
      battery: "5400 mAh",
      camera: "50MP Main",
      storage: "256GB - 512GB"
    }
  },
  {
    id: "p7",
    name: "Xiaomi 14",
    brand: "Xiaomi",
    price: 69999,
    rating: 4.5,
    reviews: 1200,
    features: ["Leica Optics", "Compact Flagship", "HyperOS", "Fast Charging"],
    description: "A compact powerhouse with Leica co-engineered cameras and top-tier performance.",
    imageUrl: "https://m.media-amazon.com/images/I/4166f5DXEEL._SY300_SX300_QL70_FMwebp_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Xiaomi+14",
    specs: {
      screen: "6.36 inch LTPO OLED",
      processor: "Snapdragon 8 Gen 3",
      battery: "4610 mAh",
      camera: "50MP Leica Triple",
      storage: "256GB - 512GB"
    }
  },
  {
    id: "p27",
    name: "Vivo X100 Pro",
    brand: "Vivo",
    price: 89999,
    rating: 4.7,
    reviews: 500,
    features: ["Zeiss Optics", "Best Portrait Camera", "Curved Display"],
    description: "Arguably the best camera phone for portraits and low light, co-engineered with Zeiss.",
    imageUrl: "https://m.media-amazon.com/images/I/41pml780BoL._SY300_SX300_QL70_FMwebp_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Vivo+X100+Pro",
    specs: {
        screen: "6.78 inch AMOLED",
        processor: "Dimensity 9300",
        battery: "5400 mAh",
        camera: "50MP Zeiss 1-inch",
        storage: "512GB"
    }
  },
  {
    id: "p28",
    name: "OnePlus Open",
    brand: "OnePlus",
    price: 139999,
    rating: 4.8,
    reviews: 300,
    features: ["Foldable", "Multitasking", "No Crease", "Premium Build"],
    description: "The best foldable experience in India right now with a nearly invisible crease.",
    imageUrl: "https://m.media-amazon.com/images/I/81B4UqMfjeL._SX679_.jpg",
    affiliateLink: "https://www.amazon.in/Oneplus-Open-Storage-Crimson-Shadow/dp/B0D9W7Y3XM",
    specs: {
        screen: "7.82 inch Flexi-fluid AMOLED",
        processor: "Snapdragon 8 Gen 2",
        battery: "4805 mAh",
        camera: "48MP Sony LYT-T808",
        storage: "512GB"
    }
  },
  {
    id: "p31",
    name: "Samsung Galaxy Z Flip6",
    brand: "Samsung",
    price: 109999,
    rating: 4.6,
    reviews: 200,
    features: ["Foldable", "Compact", "Galaxy AI", "Flex Mode"],
    description: "The most stylish foldable phone that fits in any pocket, now with improved cameras and durability.",
    imageUrl: "https://m.media-amazon.com/images/I/31jykUGQ5AL._SY300_SX300_QL70_FMwebp_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Samsung+Galaxy+Z+Flip6",
    specs: {
        screen: "6.7 inch Dynamic AMOLED 2X",
        processor: "Snapdragon 8 Gen 3",
        battery: "4000 mAh",
        camera: "50MP Main",
        storage: "256GB - 512GB"
    }
  },
  {
    id: "p32",
    name: "Motorola Razr 50 Ultra",
    brand: "Motorola",
    price: 89999,
    rating: 4.5,
    reviews: 150,
    features: ["Foldable", "Largest Cover Screen", "Pantone Colors"],
    description: "Features a massive external display that lets you run full apps without opening the phone.",
    imageUrl: "https://m.media-amazon.com/images/I/61uzJ0Vc7uL._SX569_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Motorola+Razr+50+Ultra",
    specs: {
        screen: "6.9 inch pOLED 165Hz",
        processor: "Snapdragon 8s Gen 3",
        battery: "4000 mAh",
        camera: "50MP Dual",
        storage: "512GB"
    }
  },
  {
    id: "p33",
    name: "Samsung Galaxy S24",
    brand: "Samsung",
    price: 62999,
    rating: 4.5,
    reviews: 1100,
    features: ["Compact Flagship", "Galaxy AI", "7 years updates"],
    description: "A true compact flagship that doesn't compromise on power or build quality.",
    imageUrl: "https://m.media-amazon.com/images/I/41h2alWH8ML._SY300_SX300_QL70_FMwebp_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Samsung+Galaxy+S24",
    specs: {
        screen: "6.2 inch Dynamic AMOLED 2X",
        processor: "Exynos 2400 / Snapdragon 8 Gen 3",
        battery: "4000 mAh",
        camera: "50MP Main",
        storage: "128GB - 512GB"
    }
  },
  {
    id: "p34",
    name: "iPhone 15",
    brand: "Apple",
    price: 69900,
    rating: 4.7,
    reviews: 3000,
    features: ["Dynamic Island", "USB-C", "Great Video"],
    description: "The standard iPhone choice with the Dynamic Island and USB-C convenience.",
    imageUrl: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=iPhone+15",
    specs: {
        screen: "6.1 inch Super Retina XDR",
        processor: "A16 Bionic",
        battery: "3349 mAh",
        camera: "48MP Main",
        storage: "128GB - 512GB"
    }
  },
  
  // --- PREMIUM MID-RANGE (30k - 60k) ---
  {
    id: "p51",
    name: "Motorola Edge 50 Ultra",
    brand: "Motorola",
    price: 54999,
    rating: 4.5,
    reviews: 400,
    features: ["Wood Finish", "125W Charging", "Telephoto", "Pantone"],
    description: "A masterpiece of design with real wood or vegan leather backs and powerful internals.",
    imageUrl: "https://m.media-amazon.com/images/I/71L5l40M+JL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Motorola+Edge+50+Ultra",
    specs: {
        screen: "6.7 inch pOLED 144Hz",
        processor: "Snapdragon 8s Gen 3",
        battery: "4500 mAh",
        camera: "50MP + 64MP Telephoto",
        storage: "512GB"
    }
  },
  {
    id: "p52",
    name: "Xiaomi 14 Civi",
    brand: "Xiaomi",
    price: 42999,
    rating: 4.4,
    reviews: 650,
    features: ["Cinematic Vision", "Dual Selfie Camera", "Premium Design"],
    description: "Brings the Leica magic and a quad-curved display to a more accessible price point.",
    imageUrl: "https://m.media-amazon.com/images/I/71M3+aC2sIL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Xiaomi+14+Civi",
    specs: {
        screen: "6.55 inch AMOLED 120Hz",
        processor: "Snapdragon 8s Gen 3",
        battery: "4700 mAh",
        camera: "50MP Leica Triple",
        storage: "256GB - 512GB"
    }
  },
  {
    id: "p53",
    name: "Honor 200 Pro",
    brand: "Honor",
    price: 57999,
    rating: 4.3,
    reviews: 300,
    features: ["Harcourt Portrait", "Eye Comfort Display", "Unique Design"],
    description: "Specializes in studio-level portraits with its Harcourt partnership.",
    imageUrl: "https://m.media-amazon.com/images/I/71fVoqRC0wL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Honor+200+Pro",
    specs: {
        screen: "6.78 inch AMOLED",
        processor: "Snapdragon 8s Gen 3",
        battery: "5200 mAh",
        camera: "50MP Triple",
        storage: "512GB"
    }
  },
  {
    id: "p54",
    name: "Vivo V40 Pro",
    brand: "Vivo",
    price: 49999,
    rating: 4.5,
    reviews: 550,
    features: ["Zeiss All Main", "Slim 5500mAh", "Portrait Master"],
    description: "Incredibly slim phone despite packing a massive battery, with Zeiss optics on all cameras.",
    imageUrl: "https://m.media-amazon.com/images/I/61C2k6q+u+L._AC_SL1200_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Vivo+V40+Pro",
    specs: {
        screen: "6.78 inch AMOLED",
        processor: "Dimensity 9200+",
        battery: "5500 mAh",
        camera: "50MP Quad Zeiss",
        storage: "256GB - 512GB"
    }
  },
  {
    id: "p55",
    name: "iQOO Neo 9 Pro",
    brand: "iQOO",
    price: 35999,
    rating: 4.6,
    reviews: 1800,
    features: ["Dual Chip", "Flagship Performance", "Leather Design"],
    description: "Features the flagship Snapdragon 8 Gen 2 chip at a mid-range price. Unbeatable value.",
    imageUrl: "https://m.media-amazon.com/images/I/71O1Q5e5PeL._AC_SL1200_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=iQOO+Neo+9+Pro",
    specs: {
        screen: "6.78 inch LTPO AMOLED 144Hz",
        processor: "Snapdragon 8 Gen 2",
        battery: "5160 mAh",
        camera: "50MP Sony IMX920",
        storage: "128GB - 256GB"
    }
  },
  {
    id: "p5",
    name: "Pixel 8a",
    brand: "Google",
    price: 49999,
    rating: 4.5,
    reviews: 600,
    features: ["Budget Friendly", "Great Camera", "Compact"],
    description: "The best mid-range phone for photography enthusiasts who don't want to break the bank.",
    imageUrl: "https://m.media-amazon.com/images/I/61G9vJd1CXL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Pixel+8a",
    specs: {
      screen: "6.1 inch OLED",
      processor: "Tensor G3",
      battery: "4492 mAh",
      camera: "64MP Main",
      storage: "128GB - 256GB"
    }
  },
  {
    id: "p6",
    name: "Nothing Phone (2)",
    brand: "Nothing",
    price: 36999,
    rating: 4.4,
    reviews: 450,
    features: ["Glyph Interface", "Unique Design", "Clean OS"],
    description: "A phone that stands out from the crowd with its transparent back and unique light interface.",
    imageUrl: "https://m.media-amazon.com/images/I/71Ab1KkU1LL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Nothing+Phone+2",
    specs: {
      screen: "6.7 inch LTPO OLED",
      processor: "Snapdragon 8+ Gen 1",
      battery: "4700 mAh",
      camera: "50MP Dual",
      storage: "128GB - 512GB"
    }
  },
  {
    id: "p10",
    name: "OnePlus 12R",
    brand: "OnePlus",
    price: 39999,
    rating: 4.6,
    reviews: 2100,
    features: ["Gaming Performance", "Battery Life", "Smooth Display"],
    description: "The ultimate flagship killer offering top-tier performance at a fraction of the cost.",
    imageUrl: "https://m.media-amazon.com/images/I/71XNlmquRNL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=OnePlus+12R",
    specs: {
        screen: "6.78 inch AMOLED ProXDR",
        processor: "Snapdragon 8 Gen 2",
        battery: "5500 mAh",
        camera: "50MP Sony IMX890",
        storage: "128GB - 256GB"
    }
  },
  {
    id: "p40",
    name: "OnePlus 11R",
    brand: "OnePlus",
    price: 32999,
    rating: 4.5,
    reviews: 3500,
    features: ["Value Flagship", "Curved Display", "Fast Charging"],
    description: "Former flagship killer that is still excellent value for money.",
    imageUrl: "https://m.media-amazon.com/images/I/613SAOPmLeL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=OnePlus+11R",
    specs: {
        screen: "6.74 inch AMOLED 120Hz",
        processor: "Snapdragon 8+ Gen 1",
        battery: "5000 mAh",
        camera: "50MP Sony IMX890",
        storage: "128GB - 256GB"
    }
  },
  {
    id: "p11",
    name: "iQOO 12",
    brand: "iQOO",
    price: 52999,
    rating: 4.7,
    reviews: 1500,
    features: ["Hardcore Gaming", "Q1 Chip", "BMW Edition"],
    description: "The default choice for mobile gamers in India. Incredible raw power.",
    imageUrl: "https://m.media-amazon.com/images/I/619f09kK7tL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=iQOO+12",
    specs: {
        screen: "6.78 inch LTPO AMOLED",
        processor: "Snapdragon 8 Gen 3",
        battery: "5000 mAh",
        camera: "50MP + 64MP Periscope",
        storage: "256GB - 512GB"
    }
  },
  {
    id: "p14",
    name: "Moto Edge 50 Pro",
    brand: "Motorola",
    price: 31999,
    rating: 4.3,
    reviews: 800,
    features: ["Pantone Colors", "Curved Screen", "Clean UI", "125W Charging"],
    description: "A style icon with a beautiful curved display, Pantone curated colors, and crazy fast charging.",
    imageUrl: "https://m.media-amazon.com/images/I/71d5fMd5ZXL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Moto+Edge+50+Pro",
    specs: {
        screen: "6.7 inch pOLED 144Hz",
        processor: "Snapdragon 7 Gen 3",
        battery: "4500 mAh",
        camera: "50MP AI Camera",
        storage: "256GB"
    }
  },
  {
    id: "p16",
    name: "Samsung Galaxy S23 FE",
    brand: "Samsung",
    price: 34999,
    rating: 4.2,
    reviews: 3000,
    features: ["IP68 Rating", "Samsung Ecosystem", "Telephoto Lens"],
    description: "The entry point to the premium Galaxy S series experience.",
    imageUrl: "https://m.media-amazon.com/images/I/71qGismu6JL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Samsung+Galaxy+S23+FE",
    specs: {
        screen: "6.4 inch Dynamic AMOLED 2X",
        processor: "Exynos 2200",
        battery: "4500 mAh",
        camera: "50MP + 8MP Telephoto",
        storage: "128GB - 256GB"
    }
  },
  {
    id: "p41",
    name: "Samsung Galaxy A35 5G",
    brand: "Samsung",
    price: 27999,
    rating: 4.3,
    reviews: 900,
    features: ["Glass Back", "Knox Vault", "Super AMOLED"],
    description: "Premium build quality and security features trickle down to the mid-range.",
    imageUrl: "https://m.media-amazon.com/images/I/717Xj2F92+L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Samsung+Galaxy+A35",
    specs: {
        screen: "6.6 inch Super AMOLED 120Hz",
        processor: "Exynos 1380",
        battery: "5000 mAh",
        camera: "50MP OIS",
        storage: "128GB - 256GB"
    }
  },
  {
    id: "p20",
    name: "Vivo V30 Pro",
    brand: "Vivo",
    price: 41999,
    rating: 4.4,
    reviews: 400,
    features: ["Slim Design", "Aura Light", "Zeiss Portraits"],
    description: "Focuses entirely on portrait photography with studio-quality lighting effects.",
    imageUrl: "https://m.media-amazon.com/images/I/61Ite8s7H6L._AC_SL1200_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Vivo+V30+Pro",
    specs: {
        screen: "6.78 inch AMOLED",
        processor: "Dimensity 8200",
        battery: "5000 mAh",
        camera: "50MP Triple Zeiss",
        storage: "256GB - 512GB"
    }
  },
  {
    id: "p24",
    name: "iPhone 13",
    brand: "Apple",
    price: 48999,
    rating: 4.6,
    reviews: 20000,
    features: ["Reliable", "Video Quality", "iOS", "Compact"],
    description: "The most popular entry-level iPhone in India. Still performs flawlessly.",
    imageUrl: "https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=iPhone+13",
    specs: {
        screen: "6.1 inch Super Retina XDR",
        processor: "A15 Bionic",
        battery: "3240 mAh",
        camera: "12MP Dual",
        storage: "128GB - 512GB"
    }
  },
  {
    id: "p35",
    name: "iPhone 14",
    brand: "Apple",
    price: 58999,
    rating: 4.6,
    reviews: 8000,
    features: ["Action Mode", "Crash Detection", "iOS 18"],
    description: "A solid upgrade over the 13 with better cameras and crash detection features.",
    imageUrl: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=iPhone+14",
    specs: {
        screen: "6.1 inch Super Retina XDR",
        processor: "A15 Bionic (5-core GPU)",
        battery: "3279 mAh",
        camera: "12MP Dual",
        storage: "128GB - 512GB"
    }
  },
  {
    id: "p36",
    name: "Samsung Galaxy A55 5G",
    brand: "Samsung",
    price: 39999,
    rating: 4.3,
    reviews: 1200,
    features: ["Premium Build", "Knox Security", "Good Cameras"],
    description: "Metal frame and glass back make this feel like a flagship S-series phone.",
    imageUrl: "https://m.media-amazon.com/images/I/71J8-sM67aL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Samsung+Galaxy+A55+5G",
    specs: {
        screen: "6.6 inch Super AMOLED 120Hz",
        processor: "Exynos 1480",
        battery: "5000 mAh",
        camera: "50MP Main",
        storage: "128GB - 256GB"
    }
  },

  // --- MID-RANGE (20k - 30k) ---
  {
    id: "p56",
    name: "OnePlus Nord 4",
    brand: "OnePlus",
    price: 29999,
    rating: 4.5,
    reviews: 900,
    features: ["Metal Unibody", "6 Years Support", "AI Eraser"],
    description: "The only modern 5G phone with a full metal unibody design. Robust and fast.",
    imageUrl: "https://m.media-amazon.com/images/I/611ki6093XL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=OnePlus+Nord+4",
    specs: {
        screen: "6.74 inch AMOLED 120Hz",
        processor: "Snapdragon 7+ Gen 3",
        battery: "5500 mAh",
        camera: "50MP Sony LYT-600",
        storage: "128GB - 256GB"
    }
  },
  {
    id: "p57",
    name: "Realme 13 Pro+",
    brand: "Realme",
    price: 32999,
    rating: 4.4,
    reviews: 400,
    features: ["AI Hyperimage", "Monet Gold", "Periscope"],
    description: "Focuses on art and photography with a Monet-inspired design and powerful zoom cameras.",
    imageUrl: "https://m.media-amazon.com/images/I/71Y9+1N3kQL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Realme+13+Pro+",
    specs: {
        screen: "6.7 inch Curved AMOLED",
        processor: "Snapdragon 7s Gen 2",
        battery: "5200 mAh",
        camera: "50MP Sony LYT-701",
        storage: "256GB - 512GB"
    }
  },
  {
    id: "p42",
    name: "Poco X6 Pro",
    brand: "Poco",
    price: 25999,
    rating: 4.6,
    reviews: 2800,
    features: ["Performance King", "HyperOS", "Gaming"],
    description: "The absolute best performance you can get under 30k. A beast for gaming.",
    imageUrl: "https://m.media-amazon.com/images/I/51+s0-j69cL._AC_SL1000_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Poco+X6+Pro",
    specs: {
        screen: "6.67 inch 1.5K AMOLED 120Hz",
        processor: "Dimensity 8300 Ultra",
        battery: "5000 mAh",
        camera: "64MP OIS",
        storage: "256GB - 512GB"
    }
  },
  {
    id: "p8",
    name: "Samsung Galaxy M55",
    brand: "Samsung",
    price: 24999,
    rating: 4.2,
    reviews: 2100,
    features: ["Super AMOLED Plus", "Big Battery", "Budget 5G"],
    description: "A reliable mid-range choice for Indian users looking for a great screen and battery life.",
    imageUrl: "https://m.media-amazon.com/images/I/81D2a2y+l+L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Samsung+Galaxy+M55",
    specs: {
      screen: "6.7 inch Super AMOLED Plus",
      processor: "Snapdragon 7 Gen 1",
      battery: "5000 mAh",
      camera: "50MP Main",
      storage: "128GB - 256GB"
    }
  },
  {
    id: "p12",
    name: "Realme GT 6T",
    brand: "Realme",
    price: 30999,
    rating: 4.5,
    reviews: 700,
    features: ["Brightest Display", "Fast Performance", "Mirror Design"],
    description: "Features one of the brightest displays on a smartphone and top-tier mid-range performance.",
    imageUrl: "https://m.media-amazon.com/images/I/71+4R4kE+lL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Realme+GT+6T",
    specs: {
        screen: "6.78 inch LTPO AMOLED 6000 nits",
        processor: "Snapdragon 7+ Gen 3",
        battery: "5500 mAh",
        camera: "50MP Sony LYT-600",
        storage: "256GB - 512GB"
    }
  },
  {
    id: "p13",
    name: "Poco F6",
    brand: "Poco",
    price: 29999,
    rating: 4.3,
    reviews: 1100,
    features: ["Raw Performance", "Gaming", "Value for Money"],
    description: "The spiritual successor to the F1. Pure performance focus for gamers on a budget.",
    imageUrl: "https://m.media-amazon.com/images/I/510R20R0wVL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Poco+F6",
    specs: {
        screen: "6.67 inch AMOLED 1.5K",
        processor: "Snapdragon 8s Gen 3",
        battery: "5000 mAh",
        camera: "50MP OIS",
        storage: "256GB - 512GB"
    }
  },
  {
    id: "p15",
    name: "Redmi Note 13 Pro+",
    brand: "Xiaomi",
    price: 31999,
    rating: 4.1,
    reviews: 1800,
    features: ["200MP Camera", "Curved Screen", "IP68", "Fast Charging"],
    description: "Looks and feels like a flagship with a curved screen and vegan leather back.",
    imageUrl: "https://m.media-amazon.com/images/I/81577+2s7FL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Redmi+Note+13+Pro+",
    specs: {
        screen: "6.67 inch Curved AMOLED",
        processor: "Dimensity 7200 Ultra",
        battery: "5000 mAh",
        camera: "200MP Main",
        storage: "256GB - 512GB"
    }
  },
  {
    id: "p17",
    name: "Nothing Phone (2a)",
    brand: "Nothing",
    price: 23999,
    rating: 4.5,
    reviews: 2500,
    features: ["Glyph Interface", "Transparent Design", "Clean UI"],
    description: "The coolest looking phone in the budget segment. Very clean software experience.",
    imageUrl: "https://m.media-amazon.com/images/I/71E+A4N8SCL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Nothing+Phone+2a",
    specs: {
        screen: "6.7 inch AMOLED",
        processor: "Dimensity 7200 Pro",
        battery: "5000 mAh",
        camera: "50MP Dual",
        storage: "128GB - 256GB"
    }
  },
  {
    id: "p21",
    name: "OnePlus Nord CE 4",
    brand: "OnePlus",
    price: 24999,
    rating: 4.3,
    reviews: 3000,
    features: ["100W Charging", "Smooth UI", "Good Battery"],
    description: "A no-nonsense phone that charges incredibly fast and lasts all day.",
    imageUrl: "https://m.media-amazon.com/images/I/61abLrCfF7L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=OnePlus+Nord+CE+4",
    specs: {
        screen: "6.7 inch AMOLED 120Hz",
        processor: "Snapdragon 7 Gen 3",
        battery: "5500 mAh",
        camera: "50MP Sony LYT-600",
        storage: "128GB - 256GB"
    }
  },
  {
    id: "p22",
    name: "Realme 12 Pro+",
    brand: "Realme",
    price: 29999,
    rating: 4.4,
    reviews: 1200,
    features: ["Periscope Zoom", "Luxury Watch Design", "Curved Display"],
    description: "Brings flagship-grade zoom capabilities to the mid-range segment.",
    imageUrl: "https://m.media-amazon.com/images/I/81+5Q7s7m+L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Realme+12+Pro+",
    specs: {
        screen: "6.7 inch Curved AMOLED",
        processor: "Snapdragon 7s Gen 2",
        battery: "5000 mAh",
        camera: "50MP + 64MP Periscope",
        storage: "128GB - 256GB"
    }
  },
  {
    id: "p37",
    name: "Motorola Edge 50 Fusion",
    brand: "Motorola",
    price: 22999,
    rating: 4.4,
    reviews: 2100,
    features: ["Curved Display", "IP68", "Sony Sensor"],
    description: "The best looking phone in the 20-25k segment with premium materials and water resistance.",
    imageUrl: "https://m.media-amazon.com/images/I/7101c5rjO+L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Motorola+Edge+50+Fusion",
    specs: {
        screen: "6.7 inch pOLED 144Hz",
        processor: "Snapdragon 7s Gen 2",
        battery: "5000 mAh",
        camera: "50MP Sony LYT-700C",
        storage: "128GB - 256GB"
    }
  },
  {
    id: "p58",
    name: "Motorola Edge 50 Neo",
    brand: "Motorola",
    price: 23999,
    rating: 4.3,
    reviews: 500,
    features: ["Compact", "Military Grade", "5 Years Updates", "Sony Lytia"],
    description: "A compact powerhouse with military-grade durability and long-term software support.",
    imageUrl: "https://m.media-amazon.com/images/I/71Y+w2+g7+L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Motorola+Edge+50+Neo",
    specs: {
        screen: "6.4 inch pOLED 120Hz",
        processor: "Dimensity 7300",
        battery: "4310 mAh",
        camera: "50MP Sony LYT-700C",
        storage: "256GB"
    }
  },

  // --- BUDGET (Under 20k) ---
  {
    id: "p18",
    name: "CMF Phone 1",
    brand: "Nothing",
    price: 15999,
    rating: 4.4,
    reviews: 1500,
    features: ["Customizable Back", "Clean UI", "Super Budget"],
    description: "A fun, customizable phone with removable back covers and accessories.",
    imageUrl: "https://m.media-amazon.com/images/I/71u9+3+g9XL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=CMF+Phone+1",
    specs: {
        screen: "6.67 inch Super AMOLED",
        processor: "Dimensity 7300",
        battery: "5000 mAh",
        camera: "50MP Sony",
        storage: "128GB"
    }
  },
  {
    id: "p19",
    name: "Samsung Galaxy M35 5G",
    brand: "Samsung",
    price: 19999,
    rating: 4.1,
    reviews: 4000,
    features: ["6000mAh Battery", "Gorilla Glass Victus+", "Reliable"],
    description: "The battery monster. Ideally suited for heavy users who don't want to charge often.",
    imageUrl: "https://m.media-amazon.com/images/I/818a-pz0BvL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Samsung+Galaxy+M35+5G",
    specs: {
        screen: "6.6 inch Super AMOLED",
        processor: "Exynos 1380",
        battery: "6000 mAh",
        camera: "50MP OIS",
        storage: "128GB - 256GB"
    }
  },
  {
    id: "p25",
    name: "Redmi 13C 5G",
    brand: "Xiaomi",
    price: 10499,
    rating: 4.0,
    reviews: 5000,
    features: ["Affordable 5G", "Star Trail Design", "Basic Daily Driver"],
    description: "One of the most affordable 5G smartphones in India.",
    imageUrl: "https://m.media-amazon.com/images/I/813sVzTfvaL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Redmi+13C+5G",
    specs: {
        screen: "6.74 inch HD+ 90Hz",
        processor: "Dimensity 6100+",
        battery: "5000 mAh",
        camera: "50MP AI Dual",
        storage: "128GB - 256GB"
    }
  },
  {
    id: "p26",
    name: "Samsung Galaxy M15 5G",
    brand: "Samsung",
    price: 13999,
    rating: 4.2,
    reviews: 3500,
    features: ["sAMOLED", "4 Android Updates", "6000mAh"],
    description: "Unbeatable software support and battery life in the budget segment.",
    imageUrl: "https://m.media-amazon.com/images/I/71E5zB1qbIL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Samsung+Galaxy+M15+5G",
    specs: {
        screen: "6.5 inch Super AMOLED",
        processor: "Dimensity 6100+",
        battery: "6000 mAh",
        camera: "50MP Triple",
        storage: "128GB"
    }
  },
  {
    id: "p29",
    name: "iQOO Z9",
    brand: "iQOO",
    price: 19999,
    rating: 4.3,
    reviews: 1800,
    features: ["Fastest in Segment", "Sony Camera", "Slim"],
    description: "Best performing phone under 20k with a surprisingly good main camera.",
    imageUrl: "https://m.media-amazon.com/images/I/71Ex8c-9T2L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=iQOO+Z9",
    specs: {
        screen: "6.67 inch AMOLED 120Hz",
        processor: "Dimensity 7200",
        battery: "5000 mAh",
        camera: "50MP Sony IMX882",
        storage: "128GB - 256GB"
    }
  },
  {
    id: "p30",
    name: "POCO C65",
    brand: "Poco",
    price: 7499,
    rating: 3.9,
    reviews: 8000,
    features: ["Super Budget", "Big Screen", "Glass Back"],
    description: "An excellent choice for first-time smartphone buyers on a strict budget.",
    imageUrl: "https://m.media-amazon.com/images/I/51Z-W3yN9AL._AC_SL1000_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=POCO+C65",
    specs: {
        screen: "6.74 inch HD+ 90Hz",
        processor: "Helio G85",
        battery: "5000 mAh",
        camera: "50MP AI",
        storage: "128GB"
    }
  },
  {
    id: "p38",
    name: "Moto G85 5G",
    brand: "Motorola",
    price: 17999,
    rating: 4.2,
    reviews: 1300,
    features: ["3D Curved Screen", "Slim Design", "Clean Android"],
    description: "Brings a premium 3D curved pOLED screen to the under 20k segment.",
    imageUrl: "https://m.media-amazon.com/images/I/71w3oJ7aWyL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Moto+G85+5G",
    specs: {
        screen: "6.67 inch pOLED 120Hz",
        processor: "Snapdragon 6s Gen 3",
        battery: "5000 mAh",
        camera: "50MP OIS",
        storage: "128GB"
    }
  },
  {
    id: "p43",
    name: "Moto G64 5G",
    brand: "Motorola",
    price: 14999,
    rating: 4.1,
    reviews: 1600,
    features: ["Big Battery", "OIS Camera", "Stereo Speakers"],
    description: "A solid all-rounder with a massive 6000mAh battery and OIS camera.",
    imageUrl: "https://m.media-amazon.com/images/I/71N7+2+jRLL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Moto+G64+5G",
    specs: {
        screen: "6.5 inch IPS LCD 120Hz",
        processor: "Dimensity 7025",
        battery: "6000 mAh",
        camera: "50MP OIS",
        storage: "128GB - 256GB"
    }
  },
  {
    id: "p39",
    name: "Samsung Galaxy A15 5G",
    brand: "Samsung",
    price: 15499,
    rating: 4.1,
    reviews: 2500,
    features: ["Super AMOLED", "Knox Security", "Good Updates"],
    description: "The classic reliable Samsung choice for budget buyers.",
    imageUrl: "https://m.media-amazon.com/images/I/71L2iW0-bJL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.in/s?k=Samsung+Galaxy+A15+5G",
    specs: {
        screen: "6.5 inch Super AMOLED 90Hz",
        processor: "Dimensity 6100+",
        battery: "5000 mAh",
        camera: "50MP Triple",
        storage: "128GB"
    }
  }
];

// Mapping vague user intents to technical keywords and social proof thresholds
const INTENT_MAP: Record<string, { keywords: string[], minRating: number }> = {
    "camera": {
        keywords: ["ois", "sony", "imx", "zeiss", "leica", "pixel", "iphone", "samsung", "telephoto", "periscope", "night", "portrait", "50mp", "200mp", "camera"],
        minRating: 4.1
    },
    "performance": { // covers: speed, processor, gaming, fast
        keywords: ["snapdragon 8", "snapdragon 7", "apple a", "bionic", "dimensity 9", "dimensity 8", "gaming", "144hz", "120hz", "gt", "pro", "iqoo", "poco", "tensor"],
        minRating: 4.0
    },
    "battery": {
        keywords: ["6000", "5500", "5000", "mah", "endurance", "day", "battery"],
        minRating: 4.0
    },
    "display": {
        keywords: ["amoled", "oled", "120hz", "144hz", "curved", "vision", "hdr", "nits"],
        minRating: 4.0
    },
    "reliable": {
        keywords: ["samsung", "apple", "pixel", "updates", "support", "warranty", "gorilla"],
        minRating: 4.2
    }
};

export const searchProducts = (filters: SearchFilters): Product[] => {
  // Helper to sanitize text for comparison
  const normalize = (text: string) => text.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();

  // Scoring function: Returns higher score for better feature matches AND social proof
  const getFeatureScore = (product: Product, requestedFeatures: string[]): number => {
    if (!requestedFeatures || requestedFeatures.length === 0) return 0;
    
    let score = 0;
    // Combine all searchable text
    const productText = normalize(
        `${product.features.join(' ')} ${product.name} ${product.brand} ${Object.values(product.specs).join(' ')} ${product.description}`
    );

    // Terms that are too generic to count as a specific match alone
    const stopWords = ['phone', 'mobile', 'smartphone', 'android', 'device', 'with', 'the', 'top', 'under', 'budget', 'cheap', 'affordable', 'latest', 'new', 'buy', 'purchase'];

    // Add Reliability Boost (Logarithmic scale for reviews)
    // A phone with 20,000 reviews gets more "trust points" than one with 100
    if (product.reviews > 0) {
        score += Math.log10(product.reviews) * 0.5;
    }
    
    // Rating boost (Social Proof)
    if (product.rating >= 4.5) score += 2;
    else if (product.rating >= 4.0) score += 1;

    requestedFeatures.forEach(feature => {
        const normalizedFeature = normalize(feature);
        if (stopWords.includes(normalizedFeature)) return;

        let intentMatched = false;

        // Check for Smart Intents (Qualitative to Technical mapping)
        for (const [intent, criteria] of Object.entries(INTENT_MAP)) {
            if (normalizedFeature.includes(intent) || (intent === 'performance' && (normalizedFeature.includes('speed') || normalizedFeature.includes('fast'))) || (intent === 'camera' && normalizedFeature.includes('photo'))) {
                
                // User asked for this intent (e.g. "good camera")
                intentMatched = true;
                
                // 1. Check if product matches strict technical keywords for this intent
                const matches = criteria.keywords.some(k => productText.includes(k));
                if (matches) score += 3;
                
                // 2. Check if product meets the rating threshold for this intent (e.g. "Good camera" implies high rating)
                if (product.rating >= criteria.minRating) score += 2;

                // 3. Brand specific boosts for intents
                if (intent === 'camera' && ['google', 'apple', 'samsung'].includes(product.brand.toLowerCase())) score += 1;
                if (intent === 'performance' && ['iqoo', 'oneplus', 'apple'].includes(product.brand.toLowerCase())) score += 1;
                
                break; // Found the intent, move to next feature
            }
        }

        // Standard keyword matching (fallback or additive)
        if (!intentMatched) {
            const tokens = normalizedFeature.split(/\s+/).filter(t => t.length > 2 && !stopWords.includes(t));
            if (tokens.length > 0) {
                let tokenMatches = 0;
                tokens.forEach(token => {
                    if (productText.includes(token)) tokenMatches++;
                });

                if (tokenMatches > 0) {
                    score += tokenMatches;
                    if (tokenMatches === tokens.length && tokens.length > 1) score += 2; 
                }
            }
        }
    });
    
    return score;
  };

  const getPriceMatch = (product: Product, strict: boolean): boolean => {
      const buffer = strict ? 0 : 0.20; // 0% or 20% buffer
      if (filters.minPrice !== undefined && product.price < filters.minPrice * (1 - buffer)) return false;
      if (filters.maxPrice !== undefined && product.price > filters.maxPrice * (1 + buffer)) return false;
      return true;
  };

  const getBrandMatch = (product: Product): boolean => {
      if (!filters.brand) return true;
      return product.brand.toLowerCase() === filters.brand.toLowerCase();
  };

  const getRatingMatch = (product: Product): boolean => {
      if (filters.minRating === undefined) return true;
      return product.rating >= filters.minRating;
  };

  // --- Execution Strategy ---

  // 1. Base Filter (Brand & Rating are always strict)
  const baseCandidates = PRODUCTS.filter(p => getBrandMatch(p) && getRatingMatch(p));

  // 2. Strategy A: Strict Price + Feature Match (Smart Scoring)
  const strictPriceCandidates = baseCandidates.filter(p => getPriceMatch(p, true));
  
  if (filters.features && filters.features.length > 0) {
      // Score candidates by features + social proof
      const scoredA = strictPriceCandidates.map(p => ({ p, score: getFeatureScore(p, filters.features!) }));
      
      // Filter out low scores (generic matches)
      const matchesA = scoredA.filter(item => item.score > 2); // Threshold > 2 implies at least some meaningful match or very high social proof
      
      if (matchesA.length > 0) {
          // Sort by Score DESC
          return matchesA.sort((a, b) => b.score - a.score).map(i => i.p);
      }

      // 3. Strategy B: Relaxed Price + Feature Match
      const relaxedPriceCandidates = baseCandidates.filter(p => getPriceMatch(p, false));
      const scoredB = relaxedPriceCandidates.map(p => ({ p, score: getFeatureScore(p, filters.features!) }));
      const matchesB = scoredB.filter(item => item.score > 2);

      if (matchesB.length > 0) {
          return matchesB.sort((a, b) => b.score - a.score).map(i => i.p);
      }
  }

  // 4. Strategy C: Fallback to Best Rated (Social Proof)
  if (strictPriceCandidates.length > 0) {
      return strictPriceCandidates.sort((a, b) => (b.rating * 1000 + b.reviews) - (a.rating * 1000 + a.reviews));
  }

  // 5. Strategy D: Relaxed Price + Best Rated
  const relaxedPriceCandidates = baseCandidates.filter(p => getPriceMatch(p, false));
  if (relaxedPriceCandidates.length > 0) {
      return relaxedPriceCandidates.sort((a, b) => b.rating - a.rating);
  }

  // 6. Global Fallback (Low cost reliable options)
  if (filters.maxPrice && filters.maxPrice < 10000) {
       return [...PRODUCTS].sort((a, b) => a.price - b.price).slice(0, 3);
  }

  return [];
};