AOS.init();

//     1. Western Province

// Colombo

// Gampaha

// Kalutara

// 2. Central Province

// Kandy

// Matale

// Nuwara Eliya

// 3. Southern Province

// Galle

// Matara

// Hambantota

// 4. Northern Province

// Jaffna

// Kilinochchi

// Mannar

// Mullaitivu

// Vavuniya

// 5. Eastern Province

// Trincomalee

// Batticaloa

// Ampara

// 6. North Western Province

// Kurunegala

// Puttalam

// 7. North Central Province

// Anuradhapura

// Polonnaruwa

// 8. Uva Province

// Badulla

// Monaragala

// 9. Sabaragamuwa Province

// Ratnapura

// Kegalle
const destinations = [
  {
    name: "Sigiriya",
    images: [
      "asset/images/sigiriya.jpg",
      "asset/images/sigiriya.jpg",
      "asset/images/sigiriya.jpg"
    ],
    description: "Sigiriya, also known as the Lion Rock, is one of Sri Lanka’s most iconic landmarks and a UNESCO World Heritage Site, located in the Matale District of the Central Province at coordinates 7.9569° N, 80.7603° E, approximately 175 km northeast of Colombo. Rising about 200 meters above the surrounding plains, this ancient rock fortress and palace complex was built by King Kashyapa I (477–495 AD) as a fortified citadel to protect himself after claiming the throne by killing his father. Later, it became a Buddhist monastery until the 14th century. The site is renowned for its remarkable architecture and engineering, including the rock fortress atop the massive granite rock, terraced boulder gardens, water gardens with pools and fountains, moats and ramparts, and the majestic Lion’s Gate carved into the rock. Sigiriya is famous for its exquisite frescoes of celestial maidens (Apsaras), the polished Mirror Wall inscribed with centuries-old graffiti and poems, and panoramic views from the summit that stretch across lush forests and water reservoirs. Archaeological studies reveal advanced hydraulic systems and artifacts dating back to the 5th century. Sigiriya represents a harmonious blend of palace, fortress, and city, showcasing exceptional art, literature, and urban planning. Known as the “Eighth Wonder of the World,” it is one of Sri Lanka’s top tourist attractions, offering guided tours, rest areas, and souvenir shops. The site is open for visitors from 7:00 AM to 5:30 PM, with early morning or late afternoon being the best times to avoid midday heat. Once adorned with over 500 frescoes, the site continues to captivate visitors with its history, cultural significance, and natural beauty.",
    province: "Central Province",
    district: "Matale District",
    Location: "Near the town of Dambulla, about 175 km northeast of Colombo",
    map: "https://www.google.com/maps/search/?api=1&query=Sigiriya,+Sri+Lanka"
  }, {
    name: "Bopath Waterfall",
    images: [
      "asset/images/bopathella.jpg",
      "asset/images/bopathella (2).jpg",
      "asset/images/bopathela2.jpg "

    ],
    description: "Bopath Ella is one of Sri Lanka’s most enchanting waterfalls, located in the Ratnapura District near the village of Kuruwita. This breathtaking waterfall stands approximately 30 meters tall and is uniquely shaped like the leaf of the sacred Bo tree (Ficus religiosa), which gives it both its name and cultural significance. The falls are formed by the Kuru Ganga, a tributary of the Kalu Ganga River, and the cascading water creates a natural pool at its base, ideal for swimming and relaxation. Surrounded by lush tropical greenery, the area is rich in biodiversity, offering visitors a peaceful and picturesque setting. A short, easy walk from the main road leads to the falls, with local shops and stalls along the path providing refreshments, snacks, and a glimpse of the vibrant local culture. Bopath Ella also holds spiritual and folkloric importance, with local legends speaking of mystical spirits and hidden treasures, adding a magical charm to the site. The waterfall is easily accessible from Colombo, approximately 75 km away, making it a perfect destination for a day trip or a nature-focused getaway. Early mornings or late afternoons are the best times to visit to enjoy the serene environment and capture stunning photographs. Whether for nature enthusiasts, photographers, or travelers seeking tranquility, Bopath Ella offers an unforgettable experience that combines natural beauty, cultural heritage, and adventure.",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: "Bopath Ella Falls is located near the village of Agalwatte, close to Kuruwita town in the Ratnapura District, Sabaragamuwa Province, Sri Lanka. It is approximately 75 km from Colombo, which is about a 2.5-hour drive via the A4 High-Level Road.",
    map: "https://maps.app.goo.gl/9vyJbq59vqf8dTFS8"
  }, {
    name: "Duwili Waterfall",
    images: [
      "asset/images/Duwili.jpeg",
      "asset/images/Duwili1.jpeg",
      "asset/images/Duwili2.jpeg "

    ],
    description: "Duwili Ella Falls, also known as Walawe Ganga East Falls, is a spectacular 40-meter-high waterfall located near the village of Thanjantenna, approximately 4 km from Balangoda in the Ratnapura District of Sri Lanka, within the Sabaragamuwa Province. The name “Duwili,” meaning “dust” in Sinhala, comes from the fine mist that rises from the cascading water, giving the waterfall its enchanting, mystical appearance. Nestled within the lush and biodiverse terrain of the Knuckles Mountain Range, Duwili Ella is surrounded by dense forests, streams, and rich flora and fauna, making it a haven for nature lovers. The waterfall is accessed via a challenging 16-kilometer hiking trail, considered one of Sri Lanka’s most demanding treks, which passes through rugged terrain, smaller waterfalls, and scenic valleys. Many hikers choose to camp overnight in nearby caves to fully enjoy the remote and serene environment. The waterfall offers breathtaking views of the surrounding mountains and valleys, and its natural pool at the base is ideal for a refreshing dip. Due to the difficulty of the trek and potential hazards, it is recommended to visit Duwili Ella with a licensed guide and proper preparation. Combining adventure, tranquility, and unspoiled wilderness, Duwili Ella remains a favorite destination for adventure seekers, photographers, and travelers looking for a unique and immersive nature experience.",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: "Duwili Ella Falls is located near the village of Thanjantenna, approximately 4 km from Balangoda town in the Ratnapura District, Sabaragamuwa Province, Sri Lanka. It is situated within the Knuckles Mountain Range, surrounded by lush forests and biodiverse terrain.",
    map: "https://maps.app.goo.gl/XfxwD6HLSvdBsJ3w7"
  },
  {
    name: "Surathali Waterfall",
    images: [
      "asset/images/suruthali.jpg",
      "asset/images/suruthali1.jpg",
      "asset/images/suruthali2.jpg "

    ],
    description: "Surathali Ella, also known as Surathali Waterfall, is a stunning 60-meter-high waterfall located in the Walhaputenna area near Belihuloya in the Ratnapura District of Sabaragamuwa Province, Sri Lanka. The waterfall is easily accessible from the Colombo–Badulla main road (A4), approximately 9.5 km from Belihuloya town. Surathali Ella is composed of three distinct segments that cascade over angled rocks, creating a mesmerizing visual display. Its name, “Surathali,” gained popularity after a film was shot in the area, adding a touch of cinematic history to its natural allure. Visitors can enjoy breathtaking views from a roadside vantage point or take a short 50-meter walk along a footpath to reach the base, where the cool waters and lush surroundings offer a perfect spot for relaxation, photography, and connecting with nature. The area around the falls is rich in biodiversity, featuring dense greenery and tropical flora, providing a serene and peaceful environment. Surathali Ella is a must-visit destination for nature enthusiasts, photographers, and travelers seeking a tranquil escape, combining ease of access with the raw beauty of Sri Lanka’s landscapes",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: "Surathali Ella is located in the Walhaputenna area near Belihuloya town, in the Ratnapura District, Sabaragamuwa Province, Sri Lanka. It lies along the Colombo–Badulla main road (A4), making it easily accessible for travelers.",
    map: "https://maps.app.goo.gl/oTVUoyLUPi8ycKNB9"
  },
  {
    name: "Kirindi Waterfall",
    images: [
      "asset/images/kirindi.jpeg",
      "asset/images/kirindi1.jpeg",
      "asset/images/kirindi2.jpeg "

    ],
    description:"Kirindi Ella is a spectacular 116-meter-high waterfall located in the Ratnapura District of Sabaragamuwa Province, Sri Lanka. Formed by the Kirindi Oya, which originates from Kuttapitiya Mountain at an elevation of 940 meters, the waterfall cascades through dense jungle into a deep natural pool called Diyagathwala. Kirindi Ella is situated approximately 6.5 km from the Pelmadulla junction along the A4 Colombo–Ratnapura–Batticaloa main road, making it easily accessible for visitors. The waterfall is renowned not only for its breathtaking beauty but also for local legends, including stories of hidden treasures at its base, mysterious voices during Halloween, and sightings of fireballs above the cascade at night. Visitors can enjoy views from a convenient platform near the entrance or take a more adventurous path down 521 steps to reach the pool at the base. For those seeking a panoramic perspective, the top of the waterfall is accessible via a trail starting at the Kuttapitiya Tea Factory. Surrounded by lush greenery and a serene environment, Kirindi Ella is ideal for nature enthusiasts, photographers, and travelers looking for both adventure and tranquility, offering a memorable experience in Sri Lanka’s picturesque hill country.",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: "Kirindi Ella Waterfall is located near Pelmadulla town in the Ratnapura District, Sabaragamuwa Province, Sri Lanka. It is approximately 6.5 km from the Pelmadulla junction along the A4 Colombo–Ratnapura–Batticaloa main road. The waterfall is situated in a lush, forested area at the base of Kuttapitiya Mountain.",
    map: "https://maps.app.goo.gl/mjXZGvyFWJ5WDE7n9"
  },
  {
    name: "Katugas Waterfall",
    images: [
      "asset/images/katugas.jpeg",
      "asset/images/katugas1.jpeg",
      "asset/images/katugas2.jpeg "

    ],
    description:"Katugas Ella is a serene 6-meter-high waterfall nestled in the lush forests of Kospelawinna, within the Ratnapura District of Sabaragamuwa Province, Sri Lanka. Originating from the springs of the Katugas Ela stream, which descends from the southern slopes of the Minuwangala mountain, the waterfall gracefully cascades into the Kalu Ganga river. To reach the falls, visitors should turn off at Weralupa Junction from the Colombo–Ratnapura–Batticaloa main road (A4), proceed approximately 2.5 km, cross a small bridge, and then walk about 100 meters along a main road until they encounter the water stream known as Katugas Dola. From there, a short trek over rocks and streams leads to the waterfall. The journey offers a tranquil experience amidst nature, with opportunities to bathe in the natural pools along the way. However, caution is advised during the rainy season due to slippery conditions. This hidden gem is ideal for nature enthusiasts and adventure seekers looking to explore Sri Lanka's off-the-beaten-path attractions.",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: "Katugas Ella Waterfall is located in Kospelawinna, within the Ratnapura District, Sabaragamuwa Province, Sri Lanka. It can be reached by turning off at Weralupa Junction from the Colombo–Ratnapura–Batticaloa main road (A4) and then traveling approximately 2.5 km, followed by a short walk along the stream to the waterfall.",
    map: "https://maps.app.goo.gl/jA1hmSH6KXkNCcuY7"
  },
  {
    name: "Mapalana Waterfall",
    images: [
      "asset/images/mapalana.jpg",
      "asset/images/mapalana1.jpg",
      "asset/images/mapalana2.jpg "

    ],
    description:"Mapalana Ella, also known as Mapalana Waterfall, is a charming 141-foot (43-meter) cascade nestled in the lush greenery of the Ratnapura District in the Sabaragamuwa Province of Sri Lanka, near the village of Halminiella in Pelmadulla. Fed by the Kuru Ganga, a tributary of the Kalu Ganga River, the waterfall gracefully flows over rocky cliffs, creating a scenic and tranquil spot ideal for nature lovers and eco-travelers. Mapalana Ella is surrounded by rich biodiversity, tea estates, and rubber plantations, making it a refreshing stop for those exploring the natural beauty of the region. Its location can be accessed via Ratnapura–Pelmadulla road, with a short trek through village paths leading to the site. Visitors can enjoy the serene environment, photography opportunities, and the cooling mist of the falls",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: "Halminiella village, Pelmadulla, Ratnapura District, Sabaragamuwa Province, Sri Lanka.",
    map: "https://maps.app.goo.gl/cYqMR5583yUUweUs7"
  },
  {
    name: "Alupola Waterfall",
    images: [
      "asset/images/alupola.jpg",
      "asset/images/alupola1.jpg",
      "asset/images/alupola2.jpg "

    ],
    description:"Alupola Falls, also known as Alupola Ella, is a beautiful waterfall hidden within the lush greenery of the Ratnapura District in the Sabaragamuwa Province of Sri Lanka, located near the Balangoda area, about 25 kilometers away from Ratnapura town. Surrounded by the enchanting Sinharaja Forest Reserve’s outskirts and tea estates, this cascade flows gracefully down rocky slopes, creating a refreshing and serene natural attraction. The waterfall is formed by a tributary of the Walawe River, and its crystal-clear waters add both scenic beauty and ecological importance to the region. Alupola Falls is approximately 40 meters in height, and the area around it is rich in biodiversity, featuring endemic flora and fauna that thrive in the cool and moist environment. The location is not only a nature lover’s paradise but also offers a peaceful atmosphere, making it an ideal spot for eco-tourism, meditation, and relaxation away from the bustle of urban life. Visitors can also explore the nearby Alupola Tea Estate, which enhances the charm of the area with its neatly lined tea bushes and panoramic views. Since this attraction is less commercialized compared to other waterfalls in Sri Lanka, it maintains its natural, untouched beauty, making it perfect for those seeking a quiet retreat. Alupola Falls can be accessed through the Balangoda–Colombo main road, followed by a short drive and walk through scenic village paths.",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: "Alupola Falls is located in Ratnapura District, Sabaragamuwa Province, Sri Lanka, near Balangoda, about 25 km from Ratnapura town and close to the Sinharaja Forest Reserve and Alupola Tea Estate.",
    map: "https://maps.app.goo.gl/7oPYHZ5KBVTSNet86"
  },
  {
    name: "Lankaella Waterfall( Bambarakanda Waterfall)",
    images: [
      "asset/images/lanka.jpg",
      "asset/images/lanka1.jpg",
      "asset/images/lanka2.jpg "

    ],
    description:"Lanka Ella, also known as Lanka Falls, is a stunning yet lesser-known waterfall located in the Ratnapura District of the Sabaragamuwa Province, Sri Lanka, close to the world-famous Bambarakanda Falls, which is the tallest waterfall in the country. Hidden deep within the forest near Kalupahana, Lanka Ella is approximately 126 meters in height and is formed by the Belihul Oya stream, making it one of the most picturesque waterfalls in the region. Unlike some waterfalls where visitors can bathe directly under the cascade, Lanka Ella has a natural pool at its base with deep blue waters, ideal for safe swimming and relaxation while surrounded by untouched forest greenery. The surrounding area is rich in biodiversity, with lush montane forest, tea plantations, and endemic species, offering a truly serene experience for nature enthusiasts and hikers. The name Lanka Ella is said to be inspired by its uniquely shaped plunge pool, which resembles the outline of Sri Lanka when viewed from above. The trek to Lanka Ella involves a short but adventurous hike through jungle paths and streams, giving visitors both excitement and the reward of breathtaking views. Since it is situated away from major tourist crowds, the site remains relatively unspoiled, making it perfect for eco-tourism and those seeking tranquility in nature. To reach Lanka Ella, travelers usually take the A4 highway (Colombo–Badulla road) up to Kalupahana and then follow a small trail leading into the forest from the base of Bambarakanda Falls.",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: "Kalupahana, close to Bambarakanda Falls, along the Colombo–Badulla (A4) main road ",
    map: "https://maps.app.goo.gl/KVJmFwAtvnoEfYUV7"
  },
  {
    name: "Dehana Waterfall",
    images: [
      "asset/images/dehana.jpg",
      "asset/images/dehana1.jpg",
      "asset/images/dehana2.jpg "

    ],
    description:"Dehena Falls, also called Dehena Ella, is a scenic and lesser-known waterfall situated in the Ratnapura District of the Sabaragamuwa Province, Sri Lanka, flowing gracefully amidst lush forests, tea plantations, and rural village landscapes. This enchanting waterfall is approximately 73 meters in height, and it cascades in a narrow stream down rocky cliffs, creating a picturesque view with misty spray and crystal-clear waters at its base. The waterfall is formed by a tributary of the Kalu Ganga River, which is one of the major rivers in Sri Lanka, and the surrounding environment is home to rich biodiversity, including various species of birds, butterflies, and endemic flora. Dehena Ella is not heavily commercialized, which allows it to retain its natural charm and tranquil atmosphere, making it an ideal destination for eco-tourists, hikers, and travelers seeking peace away from crowded attractions. The name Dehena is derived from the nearby rural village that gives the waterfall its identity, and the area has cultural value as well, with local villagers often visiting it as part of their daily connection with nature. To reach Dehena Falls, visitors can travel along the Ratnapura–Wewelwatte road and then take a short trail through tea estates and forest paths that lead to the waterfall’s base, offering scenic views along the way. Since the pool below the falls can be deep and slippery, bathing should be done cautiously. Its unspoiled beauty and serene environment make it perfect for nature photography, meditation, and a refreshing stop for those exploring the waterfalls of the Ratnapura region.",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " Near Wewelwatte, along the Ratnapura–Wewelwatte road",
    map: "https://maps.app.goo.gl/fcoeV219YtLJTBWh8"
  },
  {
    name: "Kalthota doowili waterfall",
    images: [
      "asset/images/kalthota.jpg",
      "asset/images/kalthota1.jpg",
      "asset/images/kalthota2.jpg "

    ],
    description:"Kalthota Doowili Ella, also known as Doowili Falls of Kalthota, is a breathtaking and less-crowded waterfall located in the Balangoda area of the Ratnapura District, within the Sabaragamuwa Province of Sri Lanka, and is considered one of the hidden natural gems of the island. The waterfall gets its name “Doowili” (meaning “dust” in Sinhala) because the cascading water creates a fine mist that resembles clouds of dust as it crashes down the rocks, adding a magical aura to the surroundings. Kalthota Doowili Ella is approximately 40 meters in height, and it is formed by a tributary of the Walawe River, which flows through the region providing water for agriculture and biodiversity. The waterfall is nestled in a rural setting, surrounded by paddy fields, tea estates, rocky cliffs, and patches of forest, making it a refreshing destination for both nature lovers and eco-tourists. The pool at the base of the falls is crystal clear and scenic, but since it can be deep and the rocks slippery, bathing should be done with caution. The journey to the falls is adventurous, requiring travel along the Balangoda–Kalthota road followed by a trek through village paths, forest trails, and rocky terrain, making it a rewarding experience for hikers and explorers. Its serene environment, away from urban noise and commercialization, makes Kalthota Doowili Ella an ideal spot for photography, meditation, and enjoying pure natural beauty. The region is also culturally rich, as Kalthota itself is a historic village with traditional lifestyles that give visitors a glimpse of authentic Sri Lankan rural life.",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " althota Doowili Ella is a stunning waterfall situated in the village of Kalthota, about 27 km from Balangoda in the Ratnapura District of Sabaragamuwa Province, Sri Lanka.",
    map: "https://maps.app.goo.gl/6JSL9R62GEuVRXCD8"
  },
  {
    name: "Sampath Waterfall",
    images: [
      "asset/images/sampath.jpg",
      "asset/images/samapth1.jpg",
      "asset/images/sampath2.jpg "

    ],
    description:"Sampath Ella is a charming waterfall hidden within the lush greenery of the Ratnapura District in the Sabaragamuwa Province, Sri Lanka, a region renowned for its gems, rivers, and scenic landscapes. The waterfall is created by a branch of the Kuru Ganga, a tributary of the famous Kalu Ganga, and gracefully cascades down through a rocky setting into a natural pool below. Its name, “Sampath Ella,” is believed to be derived from the peaceful and prosperous surroundings of the area, reflecting the natural beauty and abundance of the region. The waterfall is not very tall but is admired for its serene flow, crystal-clear water, and the tranquility it offers, making it a refreshing escape for nature lovers and travelers seeking less-crowded attractions. Surrounded by thick forests, tea estates, and village landscapes, Sampath Ella is accessible through narrow rural roads, offering visitors both adventure and relaxation. The site is especially popular among locals for bathing and picnicking, while its calm environment also attracts photographers and eco-travelers. Located just a few kilometers away from the gem-rich city of Ratnapura, Sampath Ella is an ideal stop for those exploring the natural and cultural wonders of the Sabaragamuwa Province.",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " Sampath Ella is located in the Ratnapura District of the Sabaragamuwa Province, Sri Lanka, a few kilometers away from the city of Ratnapura, along the banks of the Kuru Ganga, which is a tributary of the Kalu Ganga",
    map: "https://maps.app.goo.gl/sLw4z594JdN7DAer9"
  },
  {
    name: "Pandi Waterfall",
    images: [
      "asset/images/pandi.jpg",
      "asset/images/pandi1.jpg",
      "asset/images/pandi2.jpg "

    ],
    description:"Pandi Ella is a picturesque and lesser-known waterfall nestled in the Ratnapura District of the Sabaragamuwa Province, Sri Lanka, a region celebrated for its natural beauty and abundant waterways. The waterfall is formed by a stream that flows through the forested highlands before joining the larger river systems of the area, creating a charming cascade that attracts both locals and travelers seeking tranquility. Pandi Ella is not among the tallest waterfalls, but its gentle, multi-tiered flow combined with the surrounding greenery makes it a captivating sight, especially during the rainy season when the water volume is at its peak. The pool at the base of the falls provides a refreshing spot for bathing and relaxation, making it a popular picnic destination for nearby villagers. The area around Pandi Ella is surrounded by tea plantations, paddy fields, and rural settlements, offering visitors an authentic glimpse into Sri Lanka’s countryside life along with the natural wonder of the falls. Though access requires traveling through narrow rural roads and sometimes a short trek, the journey is well rewarded with the peaceful atmosphere and unspoiled environment. Situated close to Ratnapura town, famous for its gems and cultural heritage, Pandi Ella serves as both a natural retreat and a complement to the district’s diverse attractions, making it a delightful stop for eco-tourism and nature enthusiasts.",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " Pandi Ella is located in the Ratnapura District of the Sabaragamuwa Province, Sri Lanka, a short distance from Ratnapura town, surrounded by rural villages, tea estates, and forested landscapes.",
    map: "https://maps.app.goo.gl/VUykf12XnYwGPSm26"
  },
  {
    name: "KatuKithul Waterfall",
    images: [
      "asset/images/kirindi.jpeg",
      "asset/images/kirindi1.jpeg",
      "asset/images/kirindi2.jpeg "

    ],
    description:"",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " ",
    map: ""
  },
  {
    name: "Hal ella waterfall",
    images: [
      "asset/images/kirindi.jpeg",
      "asset/images/kirindi1.jpeg",
      "asset/images/kirindi2.jpeg "

    ],
    description:"",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " ",
    map: ""
  },
  {
    name: "Rajawaka Waterfall",
    images: [
      "asset/images/kirindi.jpeg",
      "asset/images/kirindi1.jpeg",
      "asset/images/kirindi2.jpeg "

    ],
    description:"",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " ",
    map: ""
  },
  {
    name: "Kaluganaga river",
    images: [
      "asset/images/kirindi.jpeg",
      "asset/images/kirindi1.jpeg",
      "asset/images/kirindi2.jpeg "

    ],
    description:"",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " ",
    map: ""
  },
  {
    name: "Kelani river",
    images: [
      "asset/images/kirindi.jpeg",
      "asset/images/kirindi1.jpeg",
      "asset/images/kirindi2.jpeg "

    ],
    description:"",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " ",
    map: ""
  },
  {
    name: "Mahaoya river",
    images: [
      "asset/images/kirindi.jpeg",
      "asset/images/kirindi1.jpeg",
      "asset/images/kirindi2.jpeg "

    ],
    description:"",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " ",
    map: ""
  },
  {
    name: "Udawalawa lake",
    images: [
      "asset/images/kirindi.jpeg",
      "asset/images/kirindi1.jpeg",
      "asset/images/kirindi2.jpeg "

    ],
    description:"",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " ",
    map: ""
  },
  {
    name: "Chandrika lake",
    images: [
      "asset/images/kirindi.jpeg",
      "asset/images/kirindi1.jpeg",
      "asset/images/kirindi2.jpeg "

    ],
    description:"",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " ",
    map: ""
  },
  {
    name: "samanakawewa lake",
    images: [
      "asset/images/kirindi.jpeg",
      "asset/images/kirindi1.jpeg",
      "asset/images/kirindi2.jpeg "

    ],
    description:"",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " ",
    map: ""
  },
  {
    name: "kalatuwewa lake",
    images: [
      "asset/images/kirindi.jpeg",
      "asset/images/kirindi1.jpeg",
      "asset/images/kirindi2.jpeg "

    ],
    description:"",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " ",
    map: ""
  },
  {
    name: "",
    images: [
      "asset/images/kirindi.jpeg",
      "asset/images/kirindi1.jpeg",
      "asset/images/kirindi2.jpeg "

    ],
    description:"",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " ",
    map: ""
  },
  {
    name: "",
    images: [
      "asset/images/kirindi.jpeg",
      "asset/images/kirindi1.jpeg",
      "asset/images/kirindi2.jpeg "

    ],
    description:"",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " ",
    map: ""
  },
  {
    name: "",
    images: [
      "asset/images/kirindi.jpeg",
      "asset/images/kirindi1.jpeg",
      "asset/images/kirindi2.jpeg "

    ],
    description:"",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " ",
    map: ""
  },
  {
    name: "",
    images: [
      "asset/images/kirindi.jpeg",
      "asset/images/kirindi1.jpeg",
      "asset/images/kirindi2.jpeg "

    ],
    description:"",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " ",
    map: ""
  },
  {
    name: "",
    images: [
      "asset/images/kirindi.jpeg",
      "asset/images/kirindi1.jpeg",
      "asset/images/kirindi2.jpeg "

    ],
    description:"",
    province: "Sabaragamuwa Province",
    district: "Rathnapura district",
    Location: " ",
    map: ""
  }

];

// ------- Function to redirect to search page -------
function goToResults(event) {
  event.preventDefault();
  const Search = document.getElementById("search").value.trim();
  if (Search) {
    window.location.href = `search.html?q=${encodeURIComponent(Search)}`;
  }
  return false;
}

// ------- Function to show results on search.html -------
function displayResults() {
  const params = new URLSearchParams(window.location.search);
  const Search = params.get("q")?.toLowerCase();
  const resultContainer = document.getElementById("result");

  if (!resultContainer) return;

  if (!Search) {
    resultContainer.innerHTML = `<p class="text-muted">No search query provided.</p>`;
    return;
  }
  // ---search function work this-------

  const filtered = destinations.filter(Check =>
    Check.name.toLowerCase().includes(Search) ||
    Check.province.toLowerCase().includes(Search) ||
    Check.district.toLowerCase().includes(Search)
  );

  if (filtered.length === 0) {
    resultContainer.innerHTML = `<p class="text-danger">No results found for "<strong>${Search}</strong>".</p>`;
    return;
  }

  // ✅ Render cards with side images
  resultContainer.innerHTML = filtered.map(Check => `
    <div class="col-12">
      <div class="row g-3 align-items-start">
        
        <!-- Left side: Card -->
        <div class="col-md-8">
          <div class="card h-100 shadow-lg">
            <!-- First image inside card -->
            <img src="${Check.images[0]}" class="card-img-top" alt="${Check.name}">
            
            <div class="card-body">
              <h5 class="card-title fw-bold">${Check.name}</h5>
              <p class="card-text">${Check.description}</p>
              <p class="card-text"><strong>Province:</strong> ${Check.province}</p>
              <p class="card-text"><strong>District:</strong> ${Check.district}</p>
              <p class="card-text"><strong>Location:</strong> ${Check.Location}</p>
              <p class="card-text"><a href="${Check.map}" target="_blank">View Map</a></p>
              <a href="#" class="btn btn-primary">Discover</a>
            </div>
          </div>
        </div>

        <!-- Right side: Other images -->
        <div class="col-md-4 d-flex flex-column gap-2">
          ${Check.images.slice(1).map(img => `
            <img src="${img}" alt="${Check.name}" 
              style="width: 100%; height: 430px; object-fit: cover; border-radius: 6px;">
          `).join("")}
        </div>

      </div>
    </div>
  `).join("");
}

// Run on page load
window.addEventListener("DOMContentLoaded", displayResults);


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".card-body").forEach(card => {
    let more = card.querySelector(".more");
    let btn = card.querySelector("button");
    if (!more && btn) {

      btn.style.display = "none";
    }

  });
});

function readmore(btn) {
  let cardBody = btn.closest(".card-body");
  let dots = cardBody.querySelector(".dots");
  let more = cardBody.querySelector(".more");
  if (!more) return;
  //clicked the card
  if (dots.style.display === "none") {

    dots.style.display = "inline";
    more.style.display = "none";
    btn.innerText = "Discover";
  } else {
    dots.style.display = "none";
    more.style.display = "inline";
    btn.innerText = "Read less";

  }
}