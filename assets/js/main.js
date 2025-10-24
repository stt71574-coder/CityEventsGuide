
// A simple "database" of events with detailed descriptions
const allEvents = [
    { 
        id: 1, 
        title: 'مهرجان المسرح الوطني', 
        title_en: 'National Theater Festival', // Translated title
        date: '2025-10-15', 
        location: 'المسرح الوطني', 
        location_en: 'National Theater', // Translated location
        category: 'culture', 
        image: 'assets/national-festival.jpg', 
        description: 'انضموا إلينا في أكبر تجمع ثقافي لهذا العام، حيث يعرض مهرجان المسرح الوطني مجموعة مبهرة من الأعمال المسرحية المحلية والعالمية. استمتعوا بعروض تتنوع بين الدراما العميقة والكوميديا الساخرة والمسرح التجريبي الذي يتحدى المألوف. فرصة لا تعوض للقاء الفنانين وحضور ورش عمل تفاعلية.', 
        description_en: 'Join us at the largest cultural gathering this year, where the National Theater Festival presents a stunning collection of local and international theatrical works. Enjoy performances ranging from deep drama to satirical comedy and experimental theater that challenges the norm. An unmissable opportunity to meet artists and attend interactive workshops.' // Translated description
    },
    { 
        id: 2, 
        title: 'ليلة موسيقية تحت النجوم', 
        title_en: 'Orchestra Under the Stars',
        date: '2025-10-18', 
        location: 'الحديقة العامة', 
        location_en: 'Public Garden',
        category: 'music', 
        image: 'assets/Orchestra_Under_Stars.jpg', 
        description: 'استمتعوا بسحر الموسيقى الكلاسيكية والألحان الشرقية في الهواء الطلق. "ليلة موسيقية تحت النجوم" تجمع أفضل العازفين المحليين في أمسية فريدة من نوعها في قلب الحديقة العامة. أحضروا بطانياتكم واستعدوا لرحلة موسيقية تأخذكم إلى عالم آخر.', 
        description_en: 'Enjoy the charm of classical music and eastern melodies outdoors. "Orchestra Under the Stars" brings together the best local musicians for a unique evening in the heart of the Public Garden. Bring your blankets and prepare for a musical journey that takes you to another world.'
    },
    { 
        id: 3, 
        title: 'كرنفال الأسرة السعيدة', 
        title_en: 'Happy Family Carnival',
        date: '2025-10-20', 
        location: 'ملاهي المدينة', 
        location_en: 'City Amusement Park',
        category: 'family', 
        image: 'assets/carnival.jpg', 
        description: 'يوم كامل من المرح والضحك والمغامرات ينتظركم في كرنفال الأسرة السعيدة! فعاليات متنوعة تشمل ألعاب المهارة، العروض البهلوانية، الرسم على الوجوه، ومنطقة خاصة بالألعاب المطاطية للأطفال. لا تفوتوا فرصة لخلق ذكريات لا تُنسى مع أحبائكم.', 
        description_en: 'A full day of fun, laughter, and adventures awaits you at the Happy Family Carnival! Diverse activities include skill games, circus performances, face painting, and a special area with bouncy games for children. Don\'t miss the chance to create unforgettable memories with your loved ones.'
    },
    { 
        id: 4, 
        title: 'معرض الكتاب السنوي', 
        title_en: 'Annual Book Fair',
        date: '2025-10-22', 
        location: 'مركز المؤتمرات', 
        location_en: 'Conference Center',
        category: 'culture', 
        image: 'assets/book_gallery.jpg', 
        description: 'لكل محبي القراءة والكلمة المكتوبة، يفتح معرض الكتاب السنوي أبوابه مجددًا! اكتشفوا أحدث الإصدارات من آلاف دور النشر المحلية والعالمية، واحضروا حفلات توقيع الكتب مع مؤلفيكم المفضلين، وشاركوا في الندوات الثقافية الملهمة.', 
        description_en: 'For all book lovers and lovers of the written word, the Annual Book Fair opens its doors again! Discover the latest releases from thousands of local and international publishers, attend book signing events with your favorite authors, and participate in inspiring cultural seminars.'
    },
    { 
        id: 5, 
        title: 'ماراثون المدينة', 
        title_en: 'City Marathon',
        date: '2025-10-25', 
        location: 'كورنيش المدينة', 
        location_en: 'City Corniche',
        category: 'sports', 
        image: 'assets/marathon.jpg', 
        description: 'اربطوا أحذيتكم الرياضية وكونوا جزءًا من أكبر حدث رياضي في المدينة! سواء كنتم عدائين محترفين أو مبتدئين، يوفر ماراثون المدينة سباقات لمسافات مختلفة (5 كم، 10 كم، وماراثون كامل) على طول الكورنيش الخلاب. انضموا لآلاف المشاركين في يوم مليء بالطاقة والحيوية.', 
        description_en: 'Tie your running shoes and be part of the biggest sporting event in the city! Whether you are a professional or amateur runner, the City Marathon offers races for different distances (5km, 10km, and full marathon) along the scenic corniche. Join thousands of participants in a day full of energy and vitality.'
    },
    { 
        id: 6, 
        title: 'حفل فرقة الروك المحلية', 
        title_en: 'Local Rock Band Concert',
        date: '2025-10-28', 
        location: 'نادي الموسيقى', 
        location_en: 'Music Club',
        category: 'music', 
        image: 'assets/rock_festival.jpg', 
        description: 'استعدوا لأمسية صاخبة ومليئة بالحماس مع أشهر فرق الروك المحلية. سيقدمون مجموعة من أشهر أغانيهم بالإضافة إلى أعمال جديدة لأول مرة على المسرح. أجواء حماسية وطاقة متفجرة تنتظر كل عشاق موسيقى الروك.', 
        description_en: 'Get ready for a loud and exciting evening with the most famous local rock band. They will perform a collection of their most popular songs along with new works for the first time on stage. Exciting atmosphere and explosive energy await all rock music fans.'
    },
    { 
        id: 7, 
        title: 'مهرجان الطعام الشعبي', 
        title_en: 'Folk Food Festival',
        date: '2025-10-30', 
        location: 'الساحة المركزية', 
        location_en: 'Central Square',
        category: 'food', 
        image: 'assets/food_festival.jpg', 
        description: 'رحلة شهية تأخذكم في جولة حول العالم عبر أطباق متنوعة! يجمع مهرجان الطعام الشعبي أفضل عربات الطعام والمطاعم المحلية لتقديم أشهى المأكولات الشعبية والعالمية. تعالوا لتذوق نكهات جديدة والاستمتاع بالأجواء الاحتفالية.', 
        description_en: 'A delicious journey takes you on a tour around the world through diverse dishes! The Folk Food Festival brings together the best food trucks and local restaurants to offer the most delicious local and international cuisines. Come and taste new flavors and enjoy the festive atmosphere.'
    },
    { 
        id: 8, 
        title: 'مؤتمر التقنية والابتكار', 
        title_en: 'Technology and Innovation Conference',
        date: '2025-11-02', 
        location: 'فندق الهيلتون', 
        location_en: 'Hilton Hotel',
        category: 'tech', 
        image: 'assets/tech_conference.jpg', 
        description: 'استكشفوا مستقبل التكنولوجيا في مؤتمر التقنية والابتكار السنوي. يجمع المؤتمر خبراء ورواد أعمال من جميع أنحاء العالم لمناقشة أحدث الاتجاهات في الذكاء الاصطناعي، الأمن السيبراني، والتكنولوجيا المالية. فرصة مثالية للتواصل والتعلم.', 
        description_en: 'Explore the future of technology at the Annual Technology and Innovation Conference. The conference brings together experts and entrepreneurs from around the world to discuss the latest trends in artificial intelligence, cybersecurity, and fintech. An ideal opportunity for networking and learning.'
    },
    { 
        id: 9, 
        title: 'ورشة الفنون للأطفال', 
        title_en: 'Art Workshop for Children',
        date: '2025-11-05', 
        location: 'المركز الثقافي', 
        location_en: 'Cultural Center',
        category: 'family', 
        image: 'assets/art_workshop.jpg', 
        description: 'أطلقوا العنان لإبداع أطفالكم في ورشة الفنون الممتعة! سيتعلم الأطفال تقنيات فنية مختلفة مثل الرسم بالألوان المائية، التشكيل بالصلصال، وصناعة الكولاج في بيئة آمنة ومحفزة. جميع المواد متوفرة، والمقاعد محدودة!', 
        description_en: 'Unleash your children\'s creativity in the fun art workshop! Children will learn different art techniques such as watercolor painting, clay modeling, and collage making in a safe and stimulating environment. All materials are provided, and seats are limited!'
    },
];


// --- Multi-language Texts Configuration ---
const LANGUAGES = {
    ar: {
        siteTitle: 'دليل فعاليات المدينة',
        index: 'الرئيسية',
        allEvents: 'كل الفعاليات',
        about: 'عن الدليل',
        contact: 'اتصل بنا',
        heroTitle: 'اكتشف أفضل الفعاليات في مدينتك',
        heroSubtitle: 'منصتك الأولى لمتابعة الأحداث والفعاليات المحلية',
        featuredEventsTitle: 'فعاليات بارزة هذا الأسبوع',
        featuredEventsDesc: 'أبرز الفعاليات التي لا يجب تفويتها',
        categoriesTitle: 'تصنيفات الفعاليات',
        categoriesLink: 'شاهد الكل',
        latestEventsTitle: 'أحدث الفعاليات',
        latestEventsDesc: 'اكتشف أحدث ما تم إضافته من فعاليات',
        footerTitle: 'دليل فعاليات المدينة',
        footerDesc: 'منصتك لاستكشاف وتجربة أفضل ما في مدينتك. نحن نجمع لك الفعاليات لنجعل حياتك أكثر متعة.',
        quickLinks: 'روابط سريعة',
        followUs: 'تابعنا',
        copyright: '© 2025 دليل فعاليات المدينة. جميع الحقوق محفوظة.',
        culture: 'Culture', // Keep category names in English for consistency if needed, or translate them too
        sports: 'Sports',
        music: 'Music',
        family: 'Family',
        food: 'Food',
        tech: 'Technology',
        all: 'All',
        detailsBtn: 'المزيد من التفاصيل',
        backToEvents: 'العودة إلى كل الفعاليات',
        noEventsFound: 'لا توجد فعاليات تطابق بحثك.',
        contactRequired: 'يرجى ملء جميع الحقول المطلوبة.',
        contactValidEmail: 'الرجاء إدخال عنوان بريد إلكتروني صحيح.',
        contactSuccess: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
        eventNotFound: 'عذراً, الفعالية المطلوبة غير موجودة.',
        eventNotFoundDetails: 'قد يكون الرابط خاطئاً أو تم حذف الفعالية.',
        searchPlaceholder: 'ابحث عن فعالية أو موقع...',
        categoryAll: 'الكل',
        categoryCulture: 'ثقافة',
        categorySports: 'رياضة',
        categoryMusic: 'موسيقى',
        categoryFamily: 'عائلي',
        categoryFood: 'طعام',
        categoryTech: 'تقنية',
        // Add more translations as needed
    },
    en: {
        siteTitle: 'City Events Guide',
        index: 'index',
        allEvents: 'All Events',
        about: 'About Us',
        contact: 'Contact Us',
        heroTitle: 'Discover the Best Events in Your City',
        heroSubtitle: 'Your first platform for following local events and activities',
        featuredEventsTitle: 'Featured Events This Week',
        featuredEventsDesc: 'The most prominent events you should not miss',
        categoriesTitle: 'Event Categories',
        categoriesLink: 'View All',
        latestEventsTitle: 'Latest Events',
        latestEventsDesc: 'Discover the latest events added',
        footerTitle: 'City Events Guide',
        footerDesc: 'Your platform to explore and experience the best of your city. We gather events for you to make your life more enjoyable.',
        quickLinks: 'Quick Links',
        followUs: 'Follow Us',
        copyright: '© 2025 City Events Guide. All rights reserved.',
        culture: 'Culture',
        sports: 'Sports',
        music: 'Music',
        family: 'Family',
        food: 'Food',
        tech: 'Technology',
        all: 'All',
        detailsBtn: 'More Details',
        backToEvents: 'Back to All Events',
        noEventsFound: 'No events match your search.',
        contactRequired: 'Please fill in all required fields.',
        contactValidEmail: 'Please enter a valid email address.',
        contactSuccess: 'Your message has been sent successfully! We will contact you soon.',
        eventNotFound: 'Sorry, the requested event is not found.',
        eventNotFoundDetails: 'The link may be incorrect or the event has been removed.',
        searchPlaceholder: 'Search for an event or location...',
        categoryAll: 'All',
        categoryCulture: 'Culture',
        categorySports: 'Sports',
        categoryMusic: 'Music',
        categoryFamily: 'Family',
        categoryFood: 'Food',
        categoryTech: 'Technology',
        // Add more translations as needed
    }
};
if (document.getElementById('eventsGrid')) {
    const eventsGrid = document.getElementById('eventsGrid');
    const categoryBadges = document.querySelectorAll('.category-badge');
    const activeBadge = document.querySelector('.category-badge.active');
    let filter = 'all';
    if (activeBadge) {
         filter = activeBadge.dataset.filter;
    }
    displayEvents(allEvents, eventsGrid);
    filterEvents(filter, eventsGrid);
}

if (document.getElementById('allEventsGrid')) {
    const allEventsGrid = document.getElementById('allEventsGrid');
    applyAllFilters(); // Re-apply filters to update displayed events
}
document.addEventListener('DOMContentLoaded', () => {
  // --- Page Specific Initializers ---
  if (document.getElementById('slider')) {
    initindexpage();
}
if (document.getElementById('allEventsGrid')) {
    initAllEventsPage();
}
if (document.getElementById('contactForm')) {
    initContactPage();
}
if (document.getElementById('event-details-container')) {
    initEventDetailsPage();
}
    // --- Language Toggle Logic---
    const langToggle = document.getElementById('langToggle');
    const htmlEl = document.documentElement;
    let currentLang = htmlEl.lang; // Initialize current language

   // Function to update the UI elements based on the current language
function updateLanguageUI(lang) {
    const texts = LANGUAGES[lang];

    // Update Navbar Links
    if (document.getElementById('nav-index')) document.getElementById('nav-index').textContent = texts.index;
    if (document.getElementById('nav-all-events')) document.getElementById('nav-all-events').textContent = texts.allEvents;
    if (document.getElementById('nav-about')) document.getElementById('nav-about').textContent = texts.about;
    if (document.getElementById('nav-contact')) document.getElementById('nav-contact').textContent = texts.contact;
    if (document.getElementById('navbar-brand-text')) document.getElementById('navbar-brand-text').textContent = texts.siteTitle;

    if (document.getElementById('page-title')) {
        // Get the current page name from the title (e.g., "- الرئيسية" or "- index")
        const currentTitle = document.getElementById('page-title').textContent;
        const separator = ' - ';
        const parts = currentTitle.split(separator);
        const pageName = parts.length > 1 ? parts[1] : '';
        document.getElementById('page-title').textContent = `${texts.siteTitle} - ${pageName}`;
    }
    // Update Hero Section
    if (document.getElementById('hero-title')) document.getElementById('hero-title').textContent = texts.heroTitle;
    if (document.getElementById('hero-subtitle')) document.getElementById('hero-subtitle').textContent = texts.heroSubtitle;

    // Update Featured Events Section
    if (document.getElementById('featured-events-title')) document.getElementById('featured-events-title').textContent = texts.featuredEventsTitle;
    if (document.getElementById('featured-events-desc')) document.getElementById('featured-events-desc').textContent = texts.featuredEventsDesc;

    // Update Categories Section
    if (document.getElementById('categories-title')) document.getElementById('categories-title').textContent = texts.categoriesTitle;
    if (document.getElementById('categories-link')) {
        document.getElementById('categories-link').textContent = texts.categoriesLink;
        // Update the paragraph text that contains the link
        if (document.getElementById('categories-link-p')) {
            document.getElementById('categories-link-p').innerHTML = `Choose the category that interests you or <a href="events.html" id="categories-link">${texts.categoriesLink}</a>`; // Note: Keep the link text dynamic
        }
    }

    // Update Category Badges (Example: Keep symbols, translate text)
    // Using the new span IDs for category text
    if (document.getElementById('badge-culture-text')) document.getElementById('badge-culture-text').textContent = texts['categoryCulture'] || texts.culture;
    if (document.getElementById('badge-sports-text')) document.getElementById('badge-sports-text').textContent = texts['categorySports'] || texts.sports;
    if (document.getElementById('badge-music-text')) document.getElementById('badge-music-text').textContent = texts['categoryMusic'] || texts.music;
    if (document.getElementById('badge-family-text')) document.getElementById('badge-family-text').textContent = texts['categoryFamily'] || texts.family;
    if (document.getElementById('badge-food-text')) document.getElementById('badge-food-text').textContent = texts['categoryFood'] || texts.food;
    if (document.getElementById('badge-tech-text')) document.getElementById('badge-tech-text').textContent = texts['categoryTech'] || texts.tech;
    if (document.getElementById('badge-all-text')) document.getElementById('badge-all-text').textContent = texts['categoryAll'] || texts.all;

    // Update Latest Events Section
    if (document.getElementById('latest-events-title')) document.getElementById('latest-events-title').textContent = texts.latestEventsTitle;
    if (document.getElementById('latest-events-desc')) document.getElementById('latest-events-desc').textContent = texts.latestEventsDesc;

    // Update Footer
    if (document.getElementById('footer-title')) document.getElementById('footer-title').textContent = texts.footerTitle;
    if (document.getElementById('footer-desc')) document.getElementById('footer-desc').textContent = texts.footerDesc;
    if (document.getElementById('footer-quick-links')) document.getElementById('footer-quick-links').textContent = texts.quickLinks;
    if (document.getElementById('footer-follow-us')) document.getElementById('footer-follow-us').textContent = texts.followUs;
    if (document.getElementById('footer-follow-us-p')) document.getElementById('footer-follow-us-p').textContent = texts.followUsP || texts.followUs; // Fallback
    if (document.getElementById('footer-nav-index')) document.getElementById('footer-nav-index').textContent = texts.index;
    if (document.getElementById('footer-nav-all-events')) document.getElementById('footer-nav-all-events').textContent = texts.allEvents;
    if (document.getElementById('footer-nav-about')) document.getElementById('footer-nav-about').textContent = texts.about;
    if (document.getElementById('footer-nav-contact')) document.getElementById('footer-nav-contact').textContent = texts.contact;
    if (document.getElementById('footer-copyright')) document.getElementById('footer-copyright').textContent = texts.copyright;

    // Update Search Placeholder if it exists
    if (document.getElementById('searchInput')) document.getElementById('searchInput').placeholder = texts.searchPlaceholder;

    // Update "No Events Found" message if it exists
    if (document.getElementById('allEventsGrid')) {
        const noEventsElement = document.querySelector('#allEventsGrid .lead');
        if (noEventsElement && noEventsElement.textContent.includes(LANGUAGES['ar'].noEventsFound) || noEventsElement.textContent.includes(LANGUAGES['en'].noEventsFound)) {
             noEventsElement.textContent = texts.noEventsFound;
        }
    }

    // Update Team IDs Section
    if (document.getElementById('team-ids-label')) document.getElementById('team-ids-label').textContent = texts.teamIdsLabel || 'Project developed by:'; // Fallback if key doesn't exist

    // Update Slider Events (Hardcoded events in the slider)
    // Event 1
    if (document.getElementById('event1-title')) document.getElementById('event1-title').textContent = allEvents[0][`title_${lang}`] || allEvents[0].title;
    if (document.getElementById('event1-date')) document.getElementById('event1-date').textContent = new Date(allEvents[0].date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    if (document.getElementById('event1-location')) document.getElementById('event1-location').textContent = allEvents[0][`location_${lang}`] || allEvents[0].location;
    if (document.getElementById('event1-description')) document.getElementById('event1-description').textContent = allEvents[0][`description_${lang}`] || allEvents[0].description;
    if (document.getElementById('event1-details-btn')) document.getElementById('event1-details-btn').textContent = texts.detailsBtn;

    // Event 2
    if (document.getElementById('event2-title')) document.getElementById('event2-title').textContent = allEvents[1][`title_${lang}`] || allEvents[1].title;
    if (document.getElementById('event2-date')) document.getElementById('event2-date').textContent = new Date(allEvents[1].date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    if (document.getElementById('event2-location')) document.getElementById('event2-location').textContent = allEvents[1][`location_${lang}`] || allEvents[1].location;
    if (document.getElementById('event2-description')) document.getElementById('event2-description').textContent = allEvents[1][`description_${lang}`] || allEvents[1].description;
    if (document.getElementById('event2-details-btn')) document.getElementById('event2-details-btn').textContent = texts.detailsBtn;

    // Event 3
    if (document.getElementById('event3-title')) document.getElementById('event3-title').textContent = allEvents[2][`title_${lang}`] || allEvents[2].title;
    if (document.getElementById('event3-date')) document.getElementById('event3-date').textContent = new Date(allEvents[2].date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    if (document.getElementById('event3-location')) document.getElementById('event3-location').textContent = allEvents[2][`location_${lang}`] || allEvents[2].location;
    if (document.getElementById('event3-description')) document.getElementById('event3-description').textContent = allEvents[2][`description_${lang}`] || allEvents[2].description;
    if (document.getElementById('event3-details-btn')) document.getElementById('event3-details-btn').textContent = texts.detailsBtn; // Note: The original text was "(details)" - this will change it to "Details" or "التفاصيل"

    // Update Bootstrap link if necessary (as before)
    const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
    if (bootstrapLink) {
        if (lang === 'ar' && !bootstrapLink.href.includes('.rtl')) {
            // Ensure RTL is loaded for Arabic
            bootstrapLink.href = bootstrapLink.href
                .replace('.min.css', '.rtl.min.css')
                .replace(/\s+/g, ''); // Remove potential spaces
        } else if (lang === 'en' && bootstrapLink.href.includes('.rtl')) {
            // Ensure non-RTL is loaded for English
            bootstrapLink.href = bootstrapLink.href
                .replace('.rtl.min.css', '.min.css')
                .replace(/\s+/g, ''); // Remove potential spaces
        }
    }
}
    // Function to toggle the language
    function toggleLanguage() {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        htmlEl.lang = currentLang;
        htmlEl.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

        // Update the flag display (CSS handles this based on lang attribute)
        // The CSS rule below will handle showing the correct flag image

        // Update all the UI texts
        updateLanguageUI(currentLang);

        // Re-render the event grid if it exists to reflect language change for events
        if (document.getElementById('eventsGrid')) {
            const eventsGrid = document.getElementById('eventsGrid');
            const categoryBadges = document.querySelectorAll('.category-badge');
            const activeBadge = document.querySelector('.category-badge.active');
            let filter = 'all';
            if (activeBadge) {
                 filter = activeBadge.dataset.filter;
            }
            displayEvents(allEvents, eventsGrid);
            filterEvents(filter, eventsGrid);
        }

        if (document.getElementById('allEventsGrid')) {
            const allEventsGrid = document.getElementById('allEventsGrid');
            applyAllFilters(); // Re-apply filters to update displayed events
        }
    }

    // Initialize the UI with the current language on page load
    updateLanguageUI(currentLang);

    // Attach the toggle function to the click event
    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggleLanguage();
        });
    }


    // --- General Functions (Used across multiple pages) ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    // Scroll-to-top button visibility
    if (scrollToTopBtn) {
        window.onscroll = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };

        // Scroll-to-top button functionality
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Page Specific Initializers ---
    if (document.getElementById('slider')) {
        initindexpage();
    }
    if (document.getElementById('allEventsGrid')) {
        initAllEventsPage();
    }
    if (document.getElementById('contactForm')) {
        initContactPage();
    }
    if (document.getElementById('event-details-container')) {
        initEventDetailsPage();
    }

    
});

function initEventDetailsPage() {
    const container = document.getElementById('event-details-container');
    const params = new URLSearchParams(window.location.search);
    const eventId = parseInt(params.get('id'));
    const currentLang = document.documentElement.lang; // Get current language
    const texts = LANGUAGES[currentLang]; // Get current language texts

    // Search for the event in the "database"
    const event = allEvents.find(e => e.id === eventId);

    if (event) {
        // Update the page title
        document.title = `${event[`title_${currentLang}`] || event.title} - ${texts.siteTitle || 'City Events Guide'}`; // Use site title from LANGUAGES
        document.getElementById('eventImage').src = event.image;
        document.getElementById('eventImage').alt = event[`title_${currentLang}`] || event.title;
        document.getElementById('eventTitle').textContent = event[`title_${currentLang}`] || event.title;
        // Format date according to language preference (locale)
        const dateLocale = currentLang === 'ar' ? 'ar-EG' : 'en-US';
        document.getElementById('eventDate').textContent = new Date(event.date).toLocaleDateString(dateLocale, { year: 'numeric', month: 'long', day: 'numeric' });
        document.getElementById('eventLocation').textContent = event[`location_${currentLang}`] || event.location;
        document.getElementById('eventDescription').textContent = event[`description_${currentLang}`] || event.description;
    } else {
        // If event not found, show error message
        container.innerHTML = `<div class="alert alert-danger text-center"><h2>${texts.eventNotFound || 'Sorry, the requested event is not found.'}</h2><p>${texts.eventNotFoundDetails || 'The link may be incorrect or the event has been removed.'}</p><a href="events.html" class="btn btn-primary mt-3">${texts.backToEvents || 'Back to All Events'}</a></div>`; // Fallbacks
    }
}




// --- indexpage Initialization ---
function initindexpage() {
    // Slider functionality
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Automatically advance slider
    setInterval(() => {
        document.getElementById('nextBtn').click();
    }, 5000);

    // Populate and filter events on indexpage
    const eventsGrid = document.getElementById('eventsGrid');
    const categoryBadges = document.querySelectorAll('.category-badge');

    // Display initial set of events (first 6)
    displayEvents(allEvents.slice(0, 6), eventsGrid);

    // Filter functionality
    categoryBadges.forEach(badge => {
        badge.addEventListener('click', () => {
            // Manage active state for badges
            categoryBadges.forEach(b => b.classList.remove('active'));
            badge.classList.add('active');
            
            const filter = badge.dataset.filter;
            filterEvents(filter, eventsGrid);
        });
    });
}


// --- All Events Page Initialization ---
function initAllEventsPage() {
    const allEventsGrid = document.getElementById('allEventsGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const dateFilter = document.getElementById('dateFilter');
    const currentLang = document.documentElement.lang; // Get current language

    // Initial display of all events
    displayEvents(allEvents, allEventsGrid);
    
    // Add event listeners for filters
    searchInput.addEventListener('input', applyAllFilters);
    categoryFilter.addEventListener('change', applyAllFilters);
    dateFilter.addEventListener('change', applyAllFilters);

    function applyAllFilters() {
        let filteredEvents = [...allEvents];
        const texts = LANGUAGES[currentLang];

        // Filter by search term
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredEvents = filteredEvents.filter(event => 
                (event[`title_${currentLang}`] || event.title).toLowerCase().includes(searchTerm) ||
                (event[`location_${currentLang}`] || event.location).toLowerCase().includes(searchTerm)
            );
        }

        // Filter by category
        const category = categoryFilter.value;
        if (category && category !== 'all') {
            filteredEvents = filteredEvents.filter(event => event.category === category);
        }
        
        // Filter by date
        const date = dateFilter.value;
        if (date) {
            filteredEvents = filteredEvents.filter(event => event.date === date);
        }

        displayEvents(filteredEvents, allEventsGrid);
        
        // Show message if no results
        if(filteredEvents.length === 0) {
            allEventsGrid.innerHTML = `<div class="col-12 text-center"><p class="lead">${texts.noEventsFound}</p></div>`;
        }
    }
}


// --- Contact Page Initialization ---
function initContactPage() {
    const form = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');
    const currentLang = document.documentElement.lang; // Get current language
    const texts = LANGUAGES[currentLang];

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission

        // Simple validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            showAlert(texts.contactRequired, 'danger');
            return;
        }

        if (!validateEmail(email)) {
            showAlert(texts.contactValidEmail, 'warning');
            return;
        }
        
        // If validation passes
        showAlert(texts.contactSuccess, 'success');
        form.reset(); // Clear the form
    });

    function showAlert(message, type) {
        formAlert.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
        formAlert.style.display = 'block';
        // Hide alert after 5 seconds
        setTimeout(() => {
             formAlert.style.display = 'none';
        }, 5000);
    }
    
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}




// --- Reusable Helper Functions ---
function displayEvents(events, gridContainer) {
    const currentLang = document.documentElement.lang; // Get current language
    const texts = LANGUAGES[currentLang];
    gridContainer.innerHTML = ''; 
    events.forEach(event => {
        const eventCard = `
            <div class="col-lg-4 col-md-6 event-item" data-category="${event.category}">
                <div class="event-card">
                    <div class="event-card-img" style="background-image: url('${event.image}');">
                        <div class="event-date-badge">${new Date(event.date).toLocaleDateString(currentLang === 'ar' ? 'ar-EG-u-nu-latn' : 'en-US', {day: 'numeric', month: 'short'})}</div>
                    </div>
                    <div class="event-card-body">
                        <span class="badge" style="background-color: var(--primary-color);">${getCategoryName(event.category)}</span>
                        <h4 class="event-title mt-2">${event[`title_${currentLang}`] || event.title}</h4>
                        <p class="event-meta"><i class="fa-solid fa-location-dot"></i> ${event[`location_${currentLang}`] || event.location}</p>
                        <p class="event-description">${(event[`description_${currentLang}`] || event.description).substring(0, 80)}...</p>
                        <a href="event.html?id=${event.id}" class="btn btn-outline-primary btn-sm">${texts.detailsBtn}</a>
                    </div>
                </div>
            </div>
        `;
        gridContainer.innerHTML += eventCard;
    });
}




/**
 * Filters event cards visible on the page based on a category.
 * @param {string} filter - The category to filter by ('all' shows all).
 * @param {HTMLElement} gridContainer - The grid containing the event items.
 */
function filterEvents(filter, gridContainer) {
    const eventItems = gridContainer.querySelectorAll('.event-item');
    eventItems.forEach(item => {
        item.style.transform = 'scale(0.8)';
        item.style.opacity = '0';
        setTimeout(() => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                    item.style.opacity = '1';
                }, 50);
            } else {
                item.style.display = 'none';
            }
        }, 300);
    });
}

function getCategoryName(key) {
    const currentLang = document.documentElement.lang;
    const texts = LANGUAGES[currentLang];
    const names = {
        culture: currentLang === 'ar' ? 'ثقافة' : texts.culture,
        sports: currentLang === 'ar' ? 'رياضة' : texts.sports,
        music: currentLang === 'ar' ? 'موسيقى' : texts.music,
        family: currentLang === 'ar' ? 'عائلي' : texts.family,
        food: currentLang === 'ar' ? 'طعام' : texts.food,
        tech: currentLang === 'ar' ? 'تقنية' : texts.tech
    };
    return names[key] || key;
}