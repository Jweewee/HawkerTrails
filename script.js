// Mock Data
const mockData = {
    hawkerCentres: {
        maxwell: {
            id: 'maxwell',
            name: 'Maxwell Food Centre',
            address: '1 Kadayanallur St, Singapore 069184',
            coordinates: [1.2803, 103.8447],
            rating: 4.2,
            totalReviews: 2134,
            totalStalls: 127,
            hours: '6:00 AM - 2:00 AM',
            currentStatus: 'Open',
            busyStatus: 'Moderate',
            paymentMethods: ['Cash', 'PayNow', 'GrabPay'],
            description: 'One of Singapore\'s most famous hawker centres, located in the heart of Chinatown.',
            whatPeopleSaying: 'Visitors consistently praise Maxwell for its iconic Tian Tian Hainanese Chicken Rice and the vibrant atmosphere. Many mention long queues during peak hours but agree the food quality makes the wait worthwhile. The centre is particularly busy during lunch hours and weekends.',
            image: 'assets/Maxwell Hawker Centre/Maxwell header.png',
            popularTimes: {
                sunday: [20, 25, 35, 45, 65, 80, 85, 70, 60, 55, 45, 40, 50, 60, 70, 75, 80, 75, 70, 65, 55, 45, 35, 25],
                monday: [15, 20, 30, 40, 70, 85, 90, 85, 75, 65, 55, 50, 60, 70, 80, 85, 90, 85, 80, 70, 60, 50, 40, 30],
                tuesday: [15, 20, 30, 40, 70, 85, 90, 85, 75, 65, 55, 50, 60, 70, 80, 85, 90, 85, 80, 70, 60, 50, 40, 30],
                wednesday: [15, 20, 30, 40, 70, 85, 90, 85, 75, 65, 55, 50, 60, 70, 80, 85, 90, 85, 80, 70, 60, 50, 40, 30],
                thursday: [15, 20, 30, 40, 70, 85, 90, 85, 75, 65, 55, 50, 60, 70, 80, 85, 90, 85, 80, 70, 60, 50, 40, 30],
                friday: [20, 25, 35, 45, 75, 90, 95, 90, 80, 70, 60, 55, 65, 75, 85, 90, 95, 90, 85, 75, 65, 55, 45, 35],
                saturday: [25, 30, 40, 50, 70, 85, 90, 85, 75, 70, 65, 60, 70, 80, 85, 90, 85, 80, 75, 70, 60, 50, 40, 30]
            },
            currentWaitTime: '15-20 min',
            stalls: [
                {
                    id: 'tian-tian',
                    name: 'Tian Tian Hainanese Chicken Rice',
                    unit: '#01-10',
                    cuisine: 'Chinese',
                    rating: 4.3,
                    reviewCount: 1847,
                    priceRange: 'S$3.50 - S$5.00',
                    popularDishes: ['Hainanese Chicken Rice', 'Roast Chicken Rice'],
                    hours: '10:30 AM - 7:30 PM',
                    closedDays: ['Monday'],
                    paymentMethods: ['Cash Only'],
                    currentWaitTime: '10-15 min',
                    whatPeopleSaying: 'Mixed reviews about this famous stall. While some praise the tender chicken and fragrant rice, others find it overrated with long queues. The organized ordering system helps, but some dishes are served cold. Many agree it\'s worth trying once but opinions vary on whether it lives up to the hype.',
                    image: 'assets/Maxwell Hawker Centre/tiantianchickenrice/stall header.png',
                    imagePosition: 'center top',
                    menuImage: 'assets/Maxwell Hawker Centre/tiantianchickenrice/review_menu.png',
                    photos: [
                        'assets/Maxwell Hawker Centre/tiantianchickenrice/review1.png',
                        'assets/Maxwell Hawker Centre/tiantianchickenrice/review2.png',
                        'assets/Maxwell Hawker Centre/tiantianchickenrice/review3.png',
                        'assets/Maxwell Hawker Centre/tiantianchickenrice/review_ambience.png',
                        'assets/Maxwell Hawker Centre/tiantianchickenrice/review_menu.png'
                    ]
                },
                {
                    id: 'ah-tai-chicken',
                    name: 'Ah Tai Chicken Rice',
                    unit: '#01-14',
                    cuisine: 'Chinese',
                    rating: 4.3,
                    reviewCount: 1248,
                    priceRange: 'S$6.00 - S$8.00',
                    popularDishes: ['Hainanese Chicken Rice', 'Roasted Chicken', 'Chicken Soup'],
                    hours: '11:00 AM - 8:00 PM',
                    closedDays: ['Tuesday'],
                    paymentMethods: ['Cash', 'PayNow'],
                    currentWaitTime: '15-20 min',
                    whatPeopleSaying: 'Hidden gem that delivers better value than Tian Tian! Each grain of rice is perfectly coated in chicken oil with a beautiful off-white hue. Chicken is smooth and silky. Long queues but worth the wait for authentic Hainanese chicken rice at reasonable prices.',
                    image: 'assets/Maxwell Hawker Centre/ahtaichickenrice/stall header.png',
                    imagePosition: 'center center',
                    menuImage: 'assets/Maxwell Hawker Centre/ahtaichickenrice/menu.png',
                    photos: [
                        'assets/Maxwell Hawker Centre/ahtaichickenrice/review1.png',
                        'assets/Maxwell Hawker Centre/ahtaichickenrice/review2.png',
                        'assets/Maxwell Hawker Centre/ahtaichickenrice/review3.png',
                        'assets/Maxwell Hawker Centre/ahtaichickenrice/review4.png',
                        'assets/Maxwell Hawker Centre/ahtaichickenrice/review5.png',
                        'assets/Maxwell Hawker Centre/ahtaichickenrice/review_vibe.png',
                        'assets/Maxwell Hawker Centre/ahtaichickenrice/menu.png'
                    ]
                },
                {
                    id: 'zhen-porridge',
                    name: 'Zhen Zhen Porridge',
                    unit: '#01-58',
                    cuisine: 'Chinese',
                    rating: 4.0,
                    reviewCount: 654,
                    priceRange: 'S$3.00 - S$6.00',
                    popularDishes: ['Fish Porridge', 'Century Egg Porridge', 'Chicken Porridge'],
                    hours: '7:00 AM - 3:00 PM',
                    closedDays: ['Wednesday'],
                    paymentMethods: ['Cash', 'PayNow'],
                    whatPeopleSaying: 'Comfort food at its best. The porridge is smooth and well-seasoned. Perfect for breakfast or light meals.',
                    image: 'assets/Maxwell Hawker Centre/zhenzhenporridge/header.png',
                    imagePosition: 'center top',
                    menuImage: 'assets/Maxwell Hawker Centre/zhenzhenporridge/menu.png',
                    photos: [
                        'assets/Maxwell Hawker Centre/zhenzhenporridge/review1.png',
                        'assets/Maxwell Hawker Centre/zhenzhenporridge/review_2.png',
                        'assets/Maxwell Hawker Centre/zhenzhenporridge/review3.png',
                        'assets/Maxwell Hawker Centre/zhenzhenporridge/review_vibe.png',
                        'assets/Maxwell Hawker Centre/zhenzhenporridge/menu.png'
                    ]
                }
            ]
        },
        chinatown: {
            id: 'chinatown',
            name: 'Chinatown Complex Food Centre',
            address: '335 Smith St, Singapore 050335',
            coordinates: [1.2823, 103.8429],
            rating: 4.1,
            totalReviews: 4782,
            totalStalls: 260,
            hours: '6:00 AM - 10:00 PM',
            currentStatus: 'Open',
            busyStatus: 'Busy',
            paymentMethods: ['Cash', 'PayNow', 'GrabPay', 'DBS PayLah!'],
            description: 'The largest hawker centre in Chinatown, offering an incredible variety of local and regional cuisines.',
            whatPeopleSaying: 'Massive food centre with incredible variety. Visitors love the authentic atmosphere and diverse food options. Can get very crowded during peak meal times. Many stalls are cash-only, so come prepared.',
            image: 'assets/Chinatown Complex/Chinatown Complex header.png',
            popularTimes: {
                sunday: [30, 35, 45, 55, 75, 90, 95, 90, 80, 75, 70, 65, 75, 85, 90, 95, 90, 85, 80, 75, 65, 55, 45, 35],
                monday: [25, 30, 40, 50, 80, 95, 100, 95, 85, 75, 65, 60, 70, 80, 90, 95, 100, 95, 90, 80, 70, 60, 50, 40],
                tuesday: [25, 30, 40, 50, 80, 95, 100, 95, 85, 75, 65, 60, 70, 80, 90, 95, 100, 95, 90, 80, 70, 60, 50, 40],
                wednesday: [25, 30, 40, 50, 80, 95, 100, 95, 85, 75, 65, 60, 70, 80, 90, 95, 100, 95, 90, 80, 70, 60, 50, 40],
                thursday: [25, 30, 40, 50, 80, 95, 100, 95, 85, 75, 65, 60, 70, 80, 90, 95, 100, 95, 90, 80, 70, 60, 50, 40],
                friday: [30, 35, 45, 55, 85, 100, 105, 100, 90, 80, 70, 65, 75, 85, 95, 100, 105, 100, 95, 85, 75, 65, 55, 45],
                saturday: [35, 40, 50, 60, 80, 95, 100, 95, 85, 80, 75, 70, 80, 90, 95, 100, 95, 90, 85, 80, 70, 60, 50, 40]
            },
            currentWaitTime: '20-30 min',
            stalls: [
                {
                    id: 'hk-tim-sum',
                    name: 'Hong Kong Mong Kok Tim Sum',
                    unit: '#02-097',
                    cuisine: 'Chinese',
                    rating: 4.0,
                    reviewCount: 380,
                    priceRange: 'S$1.00 - S$10.00',
                    popularDishes: ['Dim Sum', 'Har Gow', 'Siu Mai'],
                    hours: '7:00 AM - 3:00 PM',
                    closedDays: ['Monday'],
                    paymentMethods: ['Cash Only'],
                    whatPeopleSaying: 'Mixed reviews on service quality, but customers appreciate the authentic dim sum flavors and reasonable prices.',
                    image: 'assets/Chinatown Complex/hongkongmongkokdimsum/stall header.png',
                    imagePosition: 'center center',
                    menuImage: 'assets/Chinatown Complex/hongkongmongkokdimsum/menu.png',
                    photos: [
                        'assets/Chinatown Complex/hongkongmongkokdimsum/image.png',
                        'assets/Chinatown Complex/hongkongmongkokdimsum/review1.png',
                        'assets/Chinatown Complex/hongkongmongkokdimsum/review2.png',
                        'assets/Chinatown Complex/hongkongmongkokdimsum/review3.png',
                        'assets/Chinatown Complex/hongkongmongkokdimsum/menu.png'
                    ]
                },
                {
                    id: 'xlb-specialist',
                    name: 'Zhong Guo La Mian Xiao Long Bao',
                    unit: '#02-135',
                    cuisine: 'Chinese',
                    rating: 4.6,
                    reviewCount: 796,
                    priceRange: 'S$7.00 - S$15.00',
                    popularDishes: ['Xiao Long Bao', 'Sichuan Dumplings', 'Guo Tie'],
                    hours: '11:00 AM - 9:00 PM',
                    closedDays: ['Thursday'],
                    paymentMethods: ['Cash', 'PayNow'],
                    currentWaitTime: '20-30 min',
                    whatPeopleSaying: 'Long-time favorite with heavenly XLB that rivals Din Tai Fung. The soup is clear yet rich, skin is thin, and meat fresh without porky smell. Guo Tie equally impressive with perfect crispy crust. Portions have shrunk over years but quality remains consistent. Expect queues but worth the wait.',
                    image: 'assets/Chinatown Complex/ZhongGuoLaMianXiaoLongBao/header.png',
                    imagePosition: 'center top',
                    menuImage: 'assets/Chinatown Complex/ZhongGuoLaMianXiaoLongBao/menu.png',
                    photos: [
                        'assets/Chinatown Complex/ZhongGuoLaMianXiaoLongBao/review1.png',
                        'assets/Chinatown Complex/ZhongGuoLaMianXiaoLongBao/review2.png',
                        'assets/Chinatown Complex/ZhongGuoLaMianXiaoLongBao/review3.png',
                        'assets/Chinatown Complex/ZhongGuoLaMianXiaoLongBao/reivew_vibe.png',
                        'assets/Chinatown Complex/ZhongGuoLaMianXiaoLongBao/menu.png'
                    ]
                },
                {
                    id: 'claypot-rice',
                    name: 'Lian He Ben Ji Claypot Rice',
                    unit: '#02-198/199',
                    cuisine: 'Chinese',
                    rating: 3.9,
                    reviewCount: 870,
                    priceRange: 'S$1.00 - S$10.00',
                    popularDishes: ['Claypot Rice', 'Chicken Claypot Rice', 'Lap Cheong Rice'],
                    hours: '5:00 PM - 10:00 PM',
                    closedDays: ['Sunday'],
                    paymentMethods: ['Cash Only'],
                    whatPeopleSaying: 'Quality has been inconsistent recently. Long wait times and some service issues reported. However, when done well, the claypot rice is excellent.',
                    image: 'assets/Chinatown Complex/LianHeBenJiClaypotRice/stall header.png',
                    imagePosition: 'center top',
                    menuImage: 'assets/Chinatown Complex/LianHeBenJiClaypotRice/menu.png',
                    photos: [
                        'assets/Chinatown Complex/LianHeBenJiClaypotRice/review1.png',
                        'assets/Chinatown Complex/LianHeBenJiClaypotRice/review2.png',
                        'assets/Chinatown Complex/LianHeBenJiClaypotRice/review3.png',
                        'assets/Chinatown Complex/LianHeBenJiClaypotRice/review4.png',
                        'assets/Chinatown Complex/LianHeBenJiClaypotRice/review_vibe.png',
                        'assets/Chinatown Complex/LianHeBenJiClaypotRice/menu.png'
                    ]
                }
            ]
        }
    },
    
    recentReviews: [
        {
            id: 1,
            stallId: 'tian-tian',
            reviewerName: 'Kim Wee Soh',
            reviewerAvatar: 'assets/example_reviews/reviews_profile/ALV-UjXdtoS5p7FKIWfxvOU_wTXvYWCRycncRNcOv9PSPwnKvZHdki4=w65-h65-p-rp-mo-ba5-br100.png',
            rating: 4,
            date: '1 week ago',
            text: 'The line wasn\'t as long when we visited on a Monday morning. The wait was about 5 minutes. It\'s very organized now with a window for ordering and payment and the next window for picking up your food while you remain in the queue. Food was still as good as I remembered almost a decade ago, although the portion is definitely smaller now.'
        },
        {
            id: 2,
            stallId: 'tian-tian',
            reviewerName: 'Keith Er',
            reviewerAvatar: 'assets/example_reviews/reviews_profile/ALV-UjU8sKSzPxkbTGPKZzjQJXRJ3_trVOR35fxBg5J1qqUk17hczXZvPw=w65-h65-p-rp-mo-ba8-br100.png',
            rating: 5,
            date: '3 days ago', 
            text: 'If you\'re in Singapore and want to try a true local classic, Tian Tian at the hawker centre is a must. The chicken was tender, boneless, and full of flavor, and the rice was so fragrant it could stand on its own. Well worth the 10–15 minute wait.'
        },
        {
            id: 3,
            stallId: 'tian-tian',
            reviewerName: 'Norman Au',
            reviewerAvatar: 'assets/example_reviews/reviews_profile/ALV-UjUGsvnL-aEDhS1aa2nDcr0lSG9aDQaBttQmQdU9fZ6NjKgMOlowzg=w65-h65-p-rp-mo-ba2-br100.png',
            rating: 2,
            date: '5 days ago',
            text: 'Unfortunately, I found this place to be completely overrated. The queue was long, though to their credit, service was fast once you get in. However, the food was disappointing—served cold, and in some cases, the chicken wasn\'t fully cooked.'
        },
        {
            id: 4,
            stallId: 'xlb-specialist',
            reviewerName: 'Jeremy Toh',
            reviewerAvatar: 'assets/example_reviews/reviews_profile/ALV-UjVigOgh8-8iiL5bvo5CaeP_uNv-QZAsTZT0KOU7P69PEURfC3k=w65-h65-p-rp-mo-ba6-br100.png',
            rating: 5,
            date: '2 days ago',
            text: 'We have been patronising Zhong Guo La Mian Xiao Long Bao for a really long time now. The XLB was, in all honesty, heavenly. The soup within the XLB looks clear yet rich, the skin is thin and the meat does not have a "porky" smell. Definitely one of the best in Singapore!'
        },
        {
            id: 5,
            stallId: 'xlb-specialist',
            reviewerName: 'Ong Chung Hock',
            reviewerAvatar: 'assets/example_reviews/reviews_profile/ALV-UjWD5IiN0LRavusYKv0vlpyW3crg63bdPyNllYV5ye26HVILVyQz=w65-h65-p-rp-mo-ba3-br100.png',
            rating: 4,
            date: '1 week ago',
            text: 'The best value you\'re gonna get for Dim Sum anywhere in Singapore! We ordered Xiao Long Bao, Sichuan Sauce Dumpling and Pan Fried Dumplings and they were all delicious and super budget friendly. Fresh ingredients, top-notched seasonings, and cheap (approx. 7 SGD each dish).'
        },
        {
            id: 6,
            stallId: 'claypot-rice',
            reviewerName: 'Robert Zheng',
            reviewerAvatar: 'assets/example_reviews/reviews_profile/ALV-UjV9Vnfpavjr2VJLzY5DBco50oQyY2dwXAqmEz2tmvg4_CJyiehS6A=w65-h65-p-rp-mo-ba6-br100.png',
            rating: 5,
            date: '4 days ago',
            text: 'Lian He Ben Ji seems to be the rare case in which the taste of the claypot rice just gets better over time! The claypot rice is cooked to the extent that there\'s a layer of crust at the side of the claypot; it looks charred and inedible but it isn\'t and in fact crispy! Chicken was succulent.'
        },
        {
            id: 7,
            stallId: 'claypot-rice',
            reviewerName: 'Kim Wee Soh',
            reviewerAvatar: 'assets/example_reviews/reviews_profile/ALV-UjXdtoS5p7FKIWfxvOU_wTXvYWCRycncRNcOv9PSPwnKvZHdki4=w65-h65-p-rp-mo-ba5-br100.png',
            rating: 4,
            date: '1 week ago',
            text: 'We enjoyed a very hearty meal for two at this well established Claypot restaurant. Absolutely 10/10 for the claypot rice flavours and textures. We really loved how succulent the meat was and how the lap cheong sausage and salted fish flavours embedded themselves in to the rice.'
        },
        {
            id: 8,
            stallId: 'zhen-porridge',
            reviewerName: 'Keith Er',
            reviewerAvatar: 'assets/example_reviews/reviews_profile/ALV-UjU8sKSzPxkbTGPKZzjQJXRJ3_trVOR35fxBg5J1qqUk17hczXZvPw=w65-h65-p-rp-mo-ba8-br100.png',
            rating: 5,
            date: '3 days ago',
            text: 'My go-to. It\'s smooth and velvety, and the ingredients are well mixed. It\'s rare to find a place that takes the extra step to blend the century egg evenly into the porridge, rather than just adding them on top. Each spoonful is a blast of taste from the century egg!'
        },
        {
            id: 9,
            stallId: 'zhen-porridge',
            reviewerName: 'Norman Au',
            reviewerAvatar: 'assets/example_reviews/reviews_profile/ALV-UjUGsvnL-aEDhS1aa2nDcr0lSG9aDQaBttQmQdU9fZ6NjKgMOlowzg=w65-h65-p-rp-mo-ba2-br100.png',
            rating: 5,
            date: '1 week ago',
            text: 'This stall is my all time favorite and serve the best porridge in the vicinity. Lots of ingredients with very nice texture. The garnishes also enhance the flavour. The taste is consistent throughout the years.'
        },
        {
            id: 10,
            stallId: 'zhen-porridge',
            reviewerName: 'Jeremy Toh',
            reviewerAvatar: 'assets/example_reviews/reviews_profile/ALV-UjVigOgh8-8iiL5bvo5CaeP_uNv-QZAsTZT0KOU7P69PEURfC3k=w65-h65-p-rp-mo-ba6-br100.png',
            rating: 4,
            date: '5 days ago',
            text: 'Value for money porridge. Very thick porridge, with plenty of flavour and texture. Add the egg - it gives the porridge added weight and character. They also put lots of condiments. The queue during lunch can be very long, but the wait is definitely worth it!'
        },
        {
            id: 11,
            stallId: 'hk-tim-sum',
            reviewerName: 'Ong Chung Hock',
            reviewerAvatar: 'assets/example_reviews/reviews_profile/ALV-UjWD5IiN0LRavusYKv0vlpyW3crg63bdPyNllYV5ye26HVILVyQz=w65-h65-p-rp-mo-ba3-br100.png',
            rating: 4,
            date: '2 days ago',
            text: 'The stall been for for a long time yet this was my first visit and it tasted great!! You need to take the queue number first, order then is your call. The Barbecued Pork Bun (叉燒包) is their signature dish.'
        },
        {
            id: 12,
            stallId: 'hk-tim-sum',
            reviewerName: 'Robert Zheng',
            reviewerAvatar: 'assets/example_reviews/reviews_profile/ALV-UjV9Vnfpavjr2VJLzY5DBco50oQyY2dwXAqmEz2tmvg4_CJyiehS6A=w65-h65-p-rp-mo-ba6-br100.png',
            rating: 4,
            date: '1 week ago',
            text: 'Char Siew Bao were amazing. They ask if you want to eat there or takeaway which is handy. Take a number and you only order when your number is called. You collect the food when you order as they have the food in steamers already.'
        },
        {
            id: 13,
            stallId: 'hk-tim-sum',
            reviewerName: 'Kim Wee Soh',
            reviewerAvatar: 'assets/example_reviews/reviews_profile/ALV-UjXdtoS5p7FKIWfxvOU_wTXvYWCRycncRNcOv9PSPwnKvZHdki4=w65-h65-p-rp-mo-ba5-br100.png',
            rating: 3,
            date: '4 days ago',
            text: 'It can get busy here and the ticket system can be quite confusing. The dim sum were of good quality. I particularly enjoyed the char siew pao. The cheong fan was also delicious. It\'s a food court experience and its popularity means that it requires patience.'
        },
        {
            id: 14,
            stallId: 'ah-tai-chicken',
            reviewerName: 'Keith Er',
            reviewerAvatar: 'assets/example_reviews/reviews_profile/ALV-UjU8sKSzPxkbTGPKZzjQJXRJ3_trVOR35fxBg5J1qqUk17hczXZvPw=w65-h65-p-rp-mo-ba8-br100.png',
            rating: 5,
            date: '2 days ago',
            text: 'Each grain of rice has a life of its own. The rice is generously coated in chicken oil that gives it a beautiful off white hue and I could taste each grain bouncing in my mouth. Chicken is smooth and silky. Not a fan of chicken skin usually but I subconsciously devoured everything.'
        },
        {
            id: 15,
            stallId: 'ah-tai-chicken',
            reviewerName: 'Jeremy Toh',
            reviewerAvatar: 'assets/example_reviews/reviews_profile/ALV-UjVigOgh8-8iiL5bvo5CaeP_uNv-QZAsTZT0KOU7P69PEURfC3k=w65-h65-p-rp-mo-ba6-br100.png',
            rating: 5,
            date: '1 week ago',
            text: 'Best Hainanese Chicken Rice! We did some research before reached to this place and tried SG\'s chicken rice, then figured out even there is no Michelin star for this place - this is actually superb with reasonable price. The chicken is soft, tender goes with fresh, delicious vegie and amazing chicken rice.'
        },
        {
            id: 16,
            stallId: 'ah-tai-chicken',
            reviewerName: 'Ong Chung Hock',
            reviewerAvatar: 'assets/example_reviews/reviews_profile/ALV-UjWD5IiN0LRavusYKv0vlpyW3crg63bdPyNllYV5ye26HVILVyQz=w65-h65-p-rp-mo-ba3-br100.png',
            rating: 4,
            date: '3 days ago',
            text: 'Not as famous as Tian Tian but this shop delivers higher value, as they produce very delicious Singaporean chicken rice at a more reasonable price than Tian Tian. This shop has long queue so be patient.'
        }
    ]
};

// Global Variables
let map;
let fullscreenMap;
let currentPage = 'home';

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Update bottom nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update active nav item in bottom nav
    const navItems = document.querySelectorAll('.nav-item');
    if (pageId === 'home') {
        navItems[0].classList.add('active');
    } else if (pageId === 'search-results') {
        navItems[1].classList.add('active');
    } else if (pageId === 'add-stall') {
        navItems[2].classList.add('active');
    }
    
    currentPage = pageId;
}

// Back button functionality
function goBack() {
    if (currentPage !== 'home') {
        showPage('home');
        document.querySelector('.back-btn').style.display = 'none';
    }
}

// Menu modal functions
function showMenuModal(menuImageSrc, stallName) {
    const modal = document.createElement('div');
    modal.className = 'menu-modal';
    modal.innerHTML = `
        <div class="menu-modal-overlay" onclick="closeMenuModal()"></div>
        <div class="menu-modal-content">
            <button class="menu-modal-close" onclick="closeMenuModal()">
                <i class="fas fa-times"></i>
            </button>
            <img src="${menuImageSrc}" alt="${stallName} Menu" class="menu-modal-image">
        </div>
    `;
    document.body.appendChild(modal);
    
    // Trigger animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeMenuModal() {
    const modal = document.querySelector('.menu-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Photo gallery modal functions
function showPhotoModal(photoSrc, stallName) {
    const modal = document.createElement('div');
    modal.className = 'photo-modal';
    modal.innerHTML = `
        <div class="photo-modal-overlay" onclick="closePhotoModal()"></div>
        <div class="photo-modal-content">
            <button class="photo-modal-close" onclick="closePhotoModal()">
                <i class="fas fa-times"></i>
            </button>
            <img src="${photoSrc}" alt="${stallName} Photo" class="photo-modal-image">
        </div>
    `;
    document.body.appendChild(modal);
    
    // Trigger animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closePhotoModal() {
    const modal = document.querySelector('.photo-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Map Functions
function initializeMap() {
    // Initialize main map
    map = L.map('map').setView([1.2803, 103.8447], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Add hawker centre markers
    Object.values(mockData.hawkerCentres).forEach(centre => {
        const marker = L.marker(centre.coordinates)
            .bindPopup(`
                <div style="min-width: 200px;">
                    <h3 style="margin: 0 0 8px 0; font-size: 16px;">${centre.name}</h3>
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                        <span style="color: #f56565;">★</span>
                        <span style="font-weight: 500;">${centre.rating}</span>
                        <span style="color: #718096; font-size: 14px;">(${centre.totalReviews} reviews)</span>
                    </div>
                    <p style="margin: 0 0 12px 0; color: #4a5568; font-size: 14px;">${centre.totalStalls} stalls</p>
                    <button onclick="showHawkerDetail('${centre.id}')" style="background: #f56565; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 14px;">View Details</button>
                </div>
            `)
            .addTo(map);
    });
}

function toggleFullscreenMap() {
    const overlay = document.getElementById('map-overlay');
    
    if (overlay.classList.contains('active')) {
        // Close fullscreen
        overlay.classList.remove('active');
    } else {
        // Open fullscreen
        overlay.classList.add('active');
        
        // Initialize fullscreen map if not already done
        if (!fullscreenMap) {
            setTimeout(() => {
                fullscreenMap = L.map('map-fullscreen').setView([1.2803, 103.8447], 13);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors'
                }).addTo(fullscreenMap);
                
                // Add hawker centre markers to fullscreen map
                Object.values(mockData.hawkerCentres).forEach(centre => {
                    const marker = L.marker(centre.coordinates)
                        .bindPopup(`
                            <div style="min-width: 200px;">
                                <h3 style="margin: 0 0 8px 0; font-size: 16px;">${centre.name}</h3>
                                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                                    <span style="color: #f56565;">★</span>
                                    <span style="font-weight: 500;">${centre.rating}</span>
                                    <span style="color: #718096; font-size: 14px;">(${centre.totalReviews} reviews)</span>
                                </div>
                                <p style="margin: 0 0 12px 0; color: #4a5568; font-size: 14px;">${centre.totalStalls} stalls</p>
                                <button onclick="showHawkerDetail('${centre.id}'); toggleFullscreenMap();" style="background: #f56565; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 14px;">View Details</button>
                            </div>
                        `)
                        .addTo(fullscreenMap);
                });
            }, 100);
        } else {
            // Invalidate size for existing fullscreen map
            setTimeout(() => {
                fullscreenMap.invalidateSize();
            }, 100);
        }
    }
}

// Hawker Centre Detail
function showHawkerDetail(centreId) {
    const centre = mockData.hawkerCentres[centreId];
    if (!centre) return;
    
    const detailPage = document.getElementById('hawker-detail');
    detailPage.innerHTML = `
        <div class="hawker-detail-hero">
            <img src="${centre.image}" alt="${centre.name}">
            <div class="hawker-hero-content">
                <h1>${centre.name}</h1>
                <div class="hawker-meta">
                    <div class="rating-display">
                        <div class="stars">
                            ${generateStars(centre.rating)}
                        </div>
                        <span>${centre.rating}</span>
                        <span>(${centre.totalReviews.toLocaleString()} reviews)</span>
                    </div>
                    <span>${centre.totalStalls} stalls</span>
                    <span>${centre.hours}</span>
                </div>
            </div>
        </div>
        
        <div class="hawker-detail-content">
            <div class="hawker-info-cards">
                <div class="info-card-grid">
                    <div class="info-card">
                        <div class="info-header">
                            <i class="fas fa-map-marker-alt"></i>
                            <h4>Address</h4>
                        </div>
                        <p>${centre.address}</p>
                    </div>
                    <div class="info-card">
                        <div class="info-header">
                            <i class="fas fa-clock"></i>
                            <h4>Hours</h4>
                        </div>
                        <p class="${centre.currentStatus === 'Open' ? 'status-open' : 'status-closed'}">${centre.currentStatus}</p>
                        <p>${centre.hours}</p>
                    </div>
                    <div class="info-card">
                        <div class="info-header">
                            <i class="fas fa-credit-card"></i>
                            <h4>Payment Methods</h4>
                        </div>
                        <p>${centre.paymentMethods.join(', ')}</p>
                    </div>
                    <div class="info-card">
                        <div class="info-header">
                            <i class="fas fa-store"></i>
                            <h4>Total Stalls</h4>
                        </div>
                        <p class="stat-highlight">${centre.totalStalls}</p>
                    </div>
                </div>
            </div>
            
            <div class="popular-times-section">
                <h3>Popular Times</h3>
                <div class="popular-times-card">
                    <div class="popular-times-days">
                        <button class="day-tab" data-day="monday">MON</button>
                        <button class="day-tab" data-day="tuesday">TUE</button>
                        <button class="day-tab" data-day="wednesday">WED</button>
                        <button class="day-tab" data-day="thursday">THU</button>
                        <button class="day-tab" data-day="friday">FRI</button>
                        <button class="day-tab" data-day="saturday">SAT</button>
                        <button class="day-tab active" data-day="sunday">SUN</button>
                    </div>
                    <div class="live-status ${centre.busyStatus.toLowerCase()}">
                        <i class="fas fa-circle"></i>
                        <span>Live: ${centre.busyStatus}</span>
                    </div>
                    <div class="chart-container">
                        <canvas id="popularTimesChart-${centreId}" width="300" height="100"></canvas>
                    </div>
                    <div class="wait-time">
                        <i class="fas fa-clock"></i>
                        <span>Usually up to ${centre.currentWaitTime} wait</span>
                    </div>
                </div>
            </div>
            
            <div class="what-people-saying">
                <h3>What people are saying</h3>
                <p>${centre.whatPeopleSaying}</p>
            </div>
            
            <div class="stalls-section">
                <h2>Stalls (${centre.stalls.length})</h2>
                <div class="stall-headers-gallery">
                    ${centre.stalls.map(stall => `
                        <div class="stall-header-item" onclick="showStallDetail('${centreId}', '${stall.id}')">
                            <img src="${stall.image}" alt="${stall.name}">
                            <div class="stall-header-info">
                                <h4>${stall.name}</h4>
                                <div class="stall-rating-compact">
                                    <i class="fas fa-star"></i>
                                    <span>${stall.rating}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="stalls-list">
                    ${centre.stalls.map(stall => `
                        <div class="stall-item" onclick="showStallDetail('${centreId}', '${stall.id}')">
                            <div class="stall-main">
                                <div class="stall-image">
                                    <img src="${stall.image}" alt="${stall.name}">
                                    <div class="stall-rating-badge">
                                        <i class="fas fa-star"></i>
                                        <span>${stall.rating}</span>
                                    </div>
                                </div>
                                <div class="stall-content">
                                    <div class="stall-header">
                                        <div class="stall-info">
                                            <h3>${stall.name}</h3>
                                            <div class="stall-meta">${stall.unit} • ${stall.cuisine}</div>
                                            <div class="stall-price">${stall.priceRange}</div>
                                        </div>
                                        <div class="stall-rating">
                                            <div class="rating-stars">
                                                ${generateStars(stall.rating, 'small')}
                                            </div>
                                            <div class="rating-count">(${stall.reviewCount})</div>
                                        </div>
                                    </div>
                                    <div class="stall-details">
                                        <div class="detail-item">
                                            <i class="fas fa-clock"></i>
                                            <span>${stall.hours}</span>
                                        </div>
                                        <div class="detail-item">
                                            <i class="fas fa-credit-card"></i>
                                            <span>${stall.paymentMethods.join(', ')}</span>
                                        </div>
                                        ${stall.closedDays.length > 0 ? `
                                        <div class="detail-item">
                                            <i class="fas fa-calendar-times"></i>
                                            <span>Closed ${stall.closedDays.join(', ')}</span>
                                        </div>
                                        ` : ''}
                                    </div>
                                    <div class="popular-dishes-list">
                                        ${stall.popularDishes.map(dish => `<span class="dish-tag">${dish}</span>`).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    showPage('hawker-detail');
    
    // Initialize popular times chart
    setTimeout(() => {
        initializePopularTimesChart(centreId, 'sunday');
        
        // Add day tab click handlers
        document.querySelectorAll('.day-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                initializePopularTimesChart(centreId, this.dataset.day);
            });
        });
    }, 100);
}

// Stall Detail
function showStallDetail(centreId, stallId) {
    const centre = mockData.hawkerCentres[centreId];
    const stall = centre.stalls.find(s => s.id === stallId);
    if (!stall) return;
    
    // Get reviews for this stall
    const stallReviews = mockData.recentReviews.filter(review => review.stallId === stallId);
    
    const detailPage = document.getElementById('stall-detail');
    detailPage.innerHTML = `
        <div class="stall-detail-hero">
            <div class="stall-hero-card">
                <img src="${stall.image}" alt="${stall.name}" style="object-position: ${stall.imagePosition || 'center center'};">
            </div>
            <div class="stall-hero-content">
                <div class="breadcrumb">
                    <a href="#" onclick="showHawkerDetail('${centreId}')">${centre.name}</a> › ${stall.name}
                </div>
                <h1>${stall.name}</h1>
                <div class="hawker-meta">
                    <div class="rating-display">
                        <div class="stars">
                            ${generateStars(stall.rating)}
                        </div>
                        <span>${stall.rating}</span>
                        <span>(${stall.reviewCount} reviews)</span>
                    </div>
                    <span>${stall.unit}</span>
                    <span>${stall.priceRange}</span>
                </div>
            </div>
        </div>
        
        <div class="stall-detail-content">
            <div class="photo-gallery">
                ${stall.photos ? stall.photos.map(photo => `<img src="${photo}" alt="${stall.name}" onclick="showPhotoModal('${photo}', '${stall.name}')" style="cursor: pointer;">`).join('') : `<img src="${stall.image}" alt="${stall.name}" onclick="showPhotoModal('${stall.image}', '${stall.name}')" style="cursor: pointer;">`}
            </div>
            
            <div class="popular-dishes-section">
                <h3>Popular Dishes</h3>
                <div class="popular-dishes-grid">
                    ${stall.popularDishes.map(dish => `<span class="dish-card">${dish}</span>`).join('')}
                </div>
            </div>
            
            <div class="stall-info-cards">
                <div class="info-card">
                    <div class="info-grid">
                        <div class="info-item">
                            <h4>Unit Number</h4>
                            <p>${stall.unit}</p>
                        </div>
                        <div class="info-item">
                            <h4>Cuisine Type</h4>
                            <p>${stall.cuisine}</p>
                        </div>
                        <div class="info-item">
                            <h4>Price Range</h4>
                            <p>${stall.priceRange}</p>
                        </div>
                        <div class="info-item">
                            <h4>Hours</h4>
                            <p>${stall.hours}</p>
                        </div>
                        ${stall.closedDays.length > 0 ? `
                        <div class="info-item">
                            <h4>Closed Days</h4>
                            <p>${stall.closedDays.join(', ')}</p>
                        </div>
                        ` : ''}
                        <div class="info-item">
                            <h4>Payment Methods</h4>
                            <p>${stall.paymentMethods.join(', ')}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            ${stall.menuImage ? `
            <div class="menu-card-section">
                <h3>Menu</h3>
                <div class="menu-card">
                    <img src="${stall.menuImage}" alt="${stall.name} Menu" class="menu-image" onclick="showMenuModal('${stall.menuImage}', '${stall.name}')" style="cursor: pointer;">
                </div>
            </div>
            ` : ''}
            
            <div class="what-people-saying">
                <h3>What people are saying</h3>
                <p>${stall.whatPeopleSaying}</p>
            </div>
            
            <div class="reviews-section">
                <h3>Recent Reviews (${stallReviews.length})</h3>
                <div class="reviews-grid">
                    ${stallReviews.length > 0 ? stallReviews.map(review => `
                        <div class="review-card">
                            <div class="review-header">
                                <div class="reviewer-info">
                                    <img src="${review.reviewerAvatar}" alt="${review.reviewerName}" class="reviewer-avatar">
                                    <div class="reviewer-details">
                                        <h4>${review.reviewerName}</h4>
                                        <p>${review.date}</p>
                                    </div>
                                </div>
                                <div class="review-rating">
                                    ${generateStars(review.rating, 'small')}
                                    <span>${review.rating}</span>
                                </div>
                            </div>
                            <div class="review-text">
                                ${review.text}
                            </div>
                        </div>
                    `).join('') : '<p class="no-reviews">No recent reviews available.</p>'}
                </div>
            </div>
        </div>
    `;
    
    showPage('stall-detail');
}

// Add Stall Workflow
function startWorkflow(method) {
    showPage('workflow-progress');
    
    // Simulate workflow progression
    let currentStep = 0;
    const steps = document.querySelectorAll('.step');
    const progressFill = document.querySelector('.progress-fill');
    
    const progressSteps = [25, 50, 75, 100];
    
    function advanceStep() {
        if (currentStep < steps.length) {
            steps[currentStep].classList.add('active');
            progressFill.style.width = progressSteps[currentStep] + '%';
            currentStep++;
            
            if (currentStep < steps.length) {
                setTimeout(advanceStep, 2000);
            } else {
                // Workflow complete
                setTimeout(() => {
                    alert('Stall successfully added to HawkerAI directory!');
                    showPage('home');
                }, 1000);
            }
        }
    }
    
    // Reset workflow
    steps.forEach(step => step.classList.remove('active'));
    progressFill.style.width = '0%';
    
    // Start progression
    setTimeout(advanceStep, 500);
}

// Popular Times Chart
function initializePopularTimesChart(centreId, day) {
    const centre = mockData.hawkerCentres[centreId];
    const canvas = document.getElementById(`popularTimesChart-${centreId}`);
    if (!canvas || !centre.popularTimes[day]) return;
    
    const ctx = canvas.getContext('2d');
    const data = centre.popularTimes[day];
    const currentHour = new Date().getHours();
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Chart settings
    const barWidth = canvas.width / 24;
    const maxHeight = canvas.height - 20;
    const maxValue = Math.max(...data);
    
    // Draw bars
    data.forEach((value, index) => {
        const barHeight = (value / maxValue) * maxHeight;
        const x = index * barWidth;
        const y = canvas.height - barHeight;
        
        // Current hour highlighting
        const isCurrentHour = index === currentHour && day === getCurrentDay();
        
        // Color based on busy level
        let color;
        if (value < 30) color = '#4299e1'; // Blue - quiet
        else if (value < 70) color = '#805ad5'; // Purple - moderate  
        else color = '#e53e3e'; // Red - busy
        
        if (isCurrentHour) {
            color = '#f56565'; // Highlight current hour
        }
        
        ctx.fillStyle = color;
        ctx.fillRect(x + 2, y, barWidth - 4, barHeight);
    });
    
    // Draw hour labels for key times
    ctx.fillStyle = '#718096';
    ctx.font = '10px Inter';
    ctx.textAlign = 'center';
    
    const keyHours = [9, 12, 15, 18, 21];
    keyHours.forEach(hour => {
        const x = hour * barWidth + barWidth / 2;
        const timeLabel = hour === 12 ? '12p' : hour > 12 ? `${hour-12}p` : `${hour}a`;
        ctx.fillText(timeLabel, x, canvas.height - 5);
    });
}

function getCurrentDay() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[new Date().getDay()];
}

// Helper Functions
function generateStars(rating, size = 'normal') {
    const starSize = size === 'small' ? '12px' : '16px';
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += `<i class="fas fa-star" style="color: #fbbf24; font-size: ${starSize};"></i>`;
    }
    
    if (hasHalfStar) {
        stars += `<i class="fas fa-star-half-alt" style="color: #fbbf24; font-size: ${starSize};"></i>`;
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += `<i class="far fa-star" style="color: #e2e8f0; font-size: ${starSize};"></i>`;
    }
    
    return stars;
}


// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize map
    initializeMap();
    
    // Add stall input method switching
    const inputMethods = document.querySelectorAll('.input-method');
    inputMethods.forEach(method => {
        method.addEventListener('click', function() {
            inputMethods.forEach(m => m.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Photo upload functionality
    const photoUpload = document.querySelector('.photo-upload');
    const fileInput = photoUpload?.querySelector('input[type="file"]');
    
    if (photoUpload && fileInput) {
        photoUpload.addEventListener('click', () => fileInput.click());
        
        fileInput.addEventListener('change', function(e) {
            if (e.target.files.length > 0) {
                const fileName = e.target.files[0].name;
                photoUpload.querySelector('p').textContent = `Selected: ${fileName}`;
            }
        });
    }
    
    // Search functionality (basic)
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
});

function performSearch() {
    const query = document.querySelector('.search-input').value;
    if (query.trim()) {
        // For demo purposes, show search results page
        populateSearchResults(query);
        showPage('search-results');
    }
}

function populateSearchResults(query) {
    const resultsContainer = document.querySelector('.results-list');
    const resultsHeader = document.querySelector('.results-header h1');
    
    resultsHeader.textContent = `Search results for "${query}"`;
    
    // Mock search results
    const results = Object.values(mockData.hawkerCentres);
    
    resultsContainer.innerHTML = results.map(centre => `
        <div class="hawker-card" onclick="showHawkerDetail('${centre.id}')">
            <div class="hawker-image">
                <img src="${centre.image}" alt="${centre.name}">
                <div class="hawker-rating">
                    <i class="fas fa-star"></i>
                    <span>${centre.rating}</span>
                </div>
            </div>
            <div class="hawker-info">
                <h3>${centre.name}</h3>
                <p class="hawker-location">${centre.address}</p>
                <p class="hawker-stats">${centre.totalStalls} stalls • ${centre.totalReviews.toLocaleString()} reviews</p>
                <div class="popular-stalls">
                    ${centre.stalls.slice(0, 2).map(stall => `<span class="stall-tag">${stall.name}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}