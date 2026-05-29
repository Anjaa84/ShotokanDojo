import type { Location, Schedule, Instructor, BlogPost, GalleryImage, Testimonial } from "@shared/schema";

export const locations: Location[] = [
  {
    id: 1,
    name: "Kotahena",
    address: "Ciel Futsal – Rooftop Futsal Court, Kotahena, Colombo 13",
    phone: "(+94) 77 100 0000",
    email: "kotahena@shotokanacademy.com",
    coordinates: "6.94802,79.85983",
    facilities: ["Rooftop Training Court", "Open Air Environment"],
    mapUrl: "https://cutt.ly/kotahena",
  },
  {
    id: 2,
    name: "Nugegoda",
    address: "Nugegoda Karate Dojo, Nugegoda, Colombo",
    phone: "(+94) 77 234 5678",
    email: "nugegoda@shotokanacademy.com",
    coordinates: "6.872779,79.889875",
    facilities: ["Indoor Training Hall"],
    mapUrl: "https://cutt.ly/3efdQv1a",
  },
  {
    id: 3,
    name: "Kirulapone (Porvarama Rd, Colombo 5)",
    address: "Porvarama Road, Colombo 5, Kirulapone",
    phone: "(+94) 77 345 6789",
    email: "kirulapone@shotokanacademy.com",
    coordinates: "6.887993,79.872390",
    facilities: ["Community Hall"],
    mapUrl: "https://cutt.ly/Kirulapone",
  },
  {
    id: 4,
    name: "Wellawatte",
    address: "Wellawatte Training Hall, Colombo 6",
    phone: "(+94) 77 456 7890",
    email: "wellawatte@shotokanacademy.com",
    coordinates: "6.879167,79.862222",
    facilities: ["Indoor Training Facility"],
    mapUrl: "https://cutt.ly/Wellawatte",
  },
  {
    id: 5,
    name: "Thalawathugoda",
    address: "Hokandara Road, Thalawathugoda",
    phone: "(+94) 77 567 8901",
    email: "thalawathugoda@shotokanacademy.com",
    coordinates: "6.874444,79.958611",
    facilities: ["Spacious Dojo"],
    mapUrl: "https://cutt.ly/TMAOHokandara",
  },
  {
    id: 6,
    name: "Welivita",
    address: "Welivita Community Center, Welivita",
    phone: "(+94) 77 678 9012",
    email: "welivita@shotokanacademy.com",
    coordinates: "6.956481,79.989708",
    facilities: ["Community Training Facility"],
    mapUrl: "https://cutt.ly/TMAO---Welivita",
  },
  {
    id: 7,
    name: "Battaramulla (Kids Only)",
    address: "Battaramulla Training Hall, Battaramulla",
    phone: "(+94) 77 789 0123",
    email: "battaramulla@shotokanacademy.com",
    coordinates: "6.909722,79.927222",
    facilities: ["Kids Dojo", "Safe Environment"],
    mapUrl: "https://maps.app.goo.gl/V1ZSahsmqWdnYoDB7",
  },
];

export const schedules: Schedule[] = [
  {
    id: 1,
    locationId: 1,
    day: "Monday",
    classes: {
      classes: [
        { name: "Kids Beginner (5-12 yrs)", time: "4:00 - 5:00 PM", description: "Focus on basic movements, coordination, and discipline in a fun environment." },
        { name: "Teen & Adult All Levels", time: "6:00 - 7:30 PM", description: "Comprehensive training covering kihon, kata, and kumite for all skill levels." },
        { name: "Advanced & Black Belt", time: "7:30 - 9:00 PM", description: "Intensive training for advanced students and black belts." },
      ],
    },
  },
  {
    id: 2,
    locationId: 1,
    day: "Tuesday",
    classes: {
      classes: [
        { name: "Kids Intermediate & Advanced", time: "4:00 - 5:00 PM", description: "Progressive training for children with prior experience." },
        { name: "Adult Beginners", time: "6:00 - 7:00 PM", description: "Introduction to karate basics for new adult practitioners." },
        { name: "Kata Specialization", time: "7:30 - 9:00 PM", description: "Focused training on traditional kata and their applications." },
      ],
    },
  },
  {
    id: 3,
    locationId: 1,
    day: "Wednesday",
    classes: {
      classes: [
        { name: "Kids Beginner (5-12 yrs)", time: "4:00 - 5:00 PM", description: "Focus on basic movements, coordination, and discipline in a fun environment." },
        { name: "Teen & Adult All Levels", time: "6:00 - 7:30 PM", description: "Comprehensive training covering kihon, kata, and kumite for all skill levels." },
        { name: "Kumite (Sparring) Practice", time: "7:30 - 9:00 PM", description: "Controlled sparring practice with emphasis on technique and safety." },
      ],
    },
  },
  {
    id: 4,
    locationId: 1,
    day: "Thursday",
    classes: {
      classes: [
        { name: "Kids Intermediate & Advanced", time: "4:00 - 5:00 PM", description: "Progressive training for children with prior experience." },
        { name: "Self-Defense Workshop", time: "6:00 - 7:00 PM", description: "Practical self-defense applications from traditional karate." },
        { name: "Advanced & Black Belt", time: "7:30 - 9:00 PM", description: "Intensive training for advanced students and black belts." },
      ],
    },
  },
  {
    id: 5,
    locationId: 1,
    day: "Friday",
    classes: {
      classes: [
        { name: "Kids All Levels", time: "4:00 - 5:00 PM", description: "Combined class for children of all skill levels." },
        { name: "Teen & Adult All Levels", time: "6:00 - 7:30 PM", description: "Comprehensive training covering kihon, kata, and kumite for all skill levels." },
      ],
    },
  },
  {
    id: 6,
    locationId: 1,
    day: "Saturday",
    classes: {
      classes: [
        { name: "Family Class", time: "9:00 - 10:00 AM", description: "Train together as a family in this all-ages, all-levels class." },
        { name: "Competition Team Training", time: "10:30 AM - 12:00 PM", description: "Specialized training for students participating in tournaments." },
        { name: "Open Training", time: "12:30 - 2:00 PM", description: "Supervised practice time for all members to work on their techniques." },
      ],
    },
  },
];

export const instructors: Instructor[] = [
  {
    id: 1,
    name: "Sensei Robert Chen",
    title: "Chief Instructor",
    belt: "7th Dan Black Belt",
    experience: "30+ Years Experience",
    bio: "Sensei Chen has trained under legendary Japanese masters and has coached national champions. He specializes in traditional kata and precision techniques.",
    specialties: ["Kata", "Kumite", "Competition"],
    imageUrl: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece",
    featured: true,
  },
  {
    id: 2,
    name: "Sensei Maria Rodriguez",
    title: "Senior Instructor",
    belt: "5th Dan Black Belt",
    experience: "15+ Years Experience",
    bio: "Sensei Rodriguez is a former national champion specializing in youth development and women's self-defense programs. She leads our competitive team.",
    specialties: ["Youth Programs", "Self-Defense", "Kumite"],
    imageUrl: "https://pixabay.com/get/gcd19023d19b365aabcc8bd41f657488521e913e5cb1917932035ecfaa1005491aff667231bea97540925d3262abab598afc252afa33b8e12d280d4e39216fc10_1280.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Sensei David Kim",
    title: "Senior Instructor",
    belt: "4th Dan Black Belt",
    experience: "12+ Years Experience",
    bio: "Sensei Kim focuses on connecting traditional karate philosophy with modern fitness principles. He specializes in beginner adult classes.",
    specialties: ["Kihon", "Fitness", "Adult Beginners"],
    imageUrl: "https://images.unsplash.com/photo-1544717684-1243da23b545",
    featured: true,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Mastering the Perfect Mae-Geri (Front Kick)",
    slug: "mastering-the-perfect-mae-geri",
    category: "Technique",
    excerpt: "Learn the key details to develop a powerful and accurate front kick, one of Shotokan's fundamental techniques. We break down the mechanics, common mistakes, and training exercises.",
    content: `
        <h2>Introduction to the Front Kick</h2>
        <p>The mae-geri, or front kick, is one of the fundamental techniques in Shotokan Karate. It is often one of the first kicks that students learn, but mastering it takes significant practice and attention to detail.</p>

        <h2>The Mechanics of a Proper Front Kick</h2>
        <p>A proper mae-geri consists of several key components:</p>
        <ul>
          <li><strong>Chamber:</strong> Pull your knee high toward your chest, with your kicking foot pointed down.</li>
          <li><strong>Extension:</strong> Extend your leg directly forward, snapping from the hip and knee.</li>
          <li><strong>Impact:</strong> Strike with the ball of your foot (koshi) with toes pulled back to prevent injury.</li>
          <li><strong>Retraction:</strong> Quickly retract to the chamber position before returning to your stance.</li>
        </ul>

        <h2>Common Mistakes to Avoid</h2>
        <p>Many students struggle with these aspects of the front kick:</p>
        <ul>
          <li>Leaning back excessively, which reduces power and balance</li>
          <li>Dropping the knee during chamber, which telegraphs the kick</li>
          <li>Failing to retract quickly, which leaves you vulnerable</li>
          <li>Striking with the wrong part of the foot</li>
        </ul>

        <h2>Training Exercises to Improve Your Front Kick</h2>
        <p>Use these exercises to develop a stronger, faster mae-geri:</p>
        <ol>
          <li><strong>Wall Kicks:</strong> Practice slow, controlled kicks against a wall to develop proper form.</li>
          <li><strong>Chamber Holds:</strong> Hold the chambered position for 30 seconds to build strength and balance.</li>
          <li><strong>Target Practice:</strong> Use a focus mitt or pad held at different heights to practice accuracy.</li>
          <li><strong>Speed Drills:</strong> Practice performing 10 quick front kicks without putting your foot down.</li>
        </ol>

        <h2>Applications in Kumite and Self-Defense</h2>
        <p>The front kick is versatile in both tournament sparring and practical self-defense situations. In kumite, it can be used as a stop kick to prevent an opponent's advance. In self-defense, it targets vulnerable areas like the knee or abdomen to create distance from an attacker.</p>

        <h2>Conclusion</h2>
        <p>The mae-geri may seem simple, but its proper execution requires dedicated practice. Focus on mastering the details of this fundamental technique, and you'll build a solid foundation for more advanced kicks in your karate journey.</p>
      `,
    imageUrl: "https://images.unsplash.com/photo-1594381898411-846e7d193883",
    createdAt: new Date("2024-01-15"),
    featured: true,
  },
  {
    id: 2,
    title: "The Importance of Meditation in Karate Training",
    slug: "importance-of-meditation-in-karate-training",
    category: "Philosophy",
    excerpt: "Discover how incorporating meditation into your karate practice can enhance focus, technique execution, and spiritual development. Learn practical meditation exercises for martial artists.",
    content: `
        <h2>The Mind-Body Connection in Martial Arts</h2>
        <p>Traditional karate training encompasses more than just physical techniques. The mental aspect of training, particularly meditation (mokuso), is essential for developing complete martial artists.</p>

        <h2>Benefits of Meditation for Karate Practitioners</h2>
        <p>Regular meditation practice offers numerous benefits that directly enhance karate training:</p>
        <ul>
          <li><strong>Improved Focus:</strong> Sharpens your ability to concentrate during training and competition.</li>
          <li><strong>Stress Reduction:</strong> Reduces anxiety and helps maintain calm under pressure.</li>
          <li><strong>Enhanced Awareness:</strong> Develops heightened sensitivity to your surroundings and opponents.</li>
          <li><strong>Better Technique:</strong> Creates stronger mind-body connection for more precise movements.</li>
          <li><strong>Faster Recovery:</strong> Accelerates mental and physical recovery between training sessions.</li>
        </ul>

        <h2>Traditional Meditation in Karate</h2>
        <p>In traditional dojos, training sessions begin and end with brief meditation periods (mokuso). These moments of quiet reflection serve multiple purposes:</p>
        <ul>
          <li>Transitioning the mind from outside distractions to focused training</li>
          <li>Setting intentions for the training session</li>
          <li>Reflecting on lessons learned</li>
          <li>Paying respect to the traditions and lineage of karate</li>
        </ul>

        <h2>Practical Meditation Exercises for Martial Artists</h2>
        <ol>
          <li><strong>Breathing Meditation (Kokyu):</strong> Sit in seiza (formal kneeling position), close your eyes, and focus solely on your breathing for 5-10 minutes. Count each breath cycle to maintain focus.</li>
          <li><strong>Moving Meditation:</strong> Perform kata at 25% of normal speed, with complete awareness of every movement, breath, and muscle contraction.</li>
          <li><strong>Visualization Practice:</strong> Mentally rehearse techniques or kata with perfect execution, engaging all your senses in the visualization.</li>
          <li><strong>Mindful Standing (Mokuso Tachi):</strong> Stand in a basic stance for 5-10 minutes, focusing on posture, balance, and breathing while eliminating distracting thoughts.</li>
        </ol>

        <h2>Integrating Meditation Into Your Training Routine</h2>
        <p>For maximum benefit, incorporate meditation into your karate practice in these ways:</p>
        <ul>
          <li>Begin and end each training session with 2-5 minutes of quiet meditation</li>
          <li>Practice focused breathing during brief pauses in your training</li>
          <li>Dedicate one 15-20 minute session per week to deeper meditation practice</li>
          <li>Use visualization techniques before competitions or examinations</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Meditation is not separate from karate training—it is an integral part of developing as a complete martial artist. By cultivating mental discipline alongside physical techniques, you'll experience deeper progress in your karate journey and develop skills that benefit all aspects of life.</p>
      `,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    createdAt: new Date("2024-02-10"),
    featured: true,
  },
  {
    id: 3,
    title: "Breaking Down Heian Shodan: Your First Kata",
    slug: "breaking-down-heian-shodan",
    category: "Kata",
    excerpt: "An in-depth analysis of Heian Shodan, the first kata most Shotokan students learn. We explore its history, application (bunkai), and tips for perfecting each movement.",
    content: `
        <h2>The Foundation of Shotokan Training</h2>
        <p>Heian Shodan is typically the first kata taught to new students in most Shotokan dojos. The name translates to "Peaceful Mind, Level 1," though paradoxically, it contains techniques designed for self-defense in serious situations.</p>

        <h2>Historical Context</h2>
        <p>The Heian kata series was developed by Anko Itosu in the early 1900s as simplified versions of more complex kata for teaching in Okinawan schools. They were derived from the older Kanku Dai (previously known as Kushanku) kata and designed to be more accessible for beginners while still containing essential fighting principles.</p>

        <h2>Movement Sequence</h2>
        <p>Heian Shodan consists of 21 movements performed in a symmetrical pattern that returns to the starting point. Key techniques include:</p>
        <ul>
          <li>Downward blocks (gedan barai)</li>
          <li>Middle level punches (chudan tsuki)</li>
          <li>Rising blocks (age uke)</li>
          <li>Hammer fist strikes (tettsui uchi)</li>
        </ul>

        <h2>Common Challenges for Beginners</h2>
        <p>New students often struggle with these aspects of Heian Shodan:</p>
        <ul>
          <li>Maintaining proper stances, especially the back stance (kokutsu dachi)</li>
          <li>Remembering the sequence and directions</li>
          <li>Coordinating breathing with techniques</li>
          <li>Generating appropriate power and timing</li>
        </ul>

        <h2>Practical Applications (Bunkai)</h2>
        <p>Though Heian Shodan appears simple, its movements contain effective self-defense applications:</p>

        <h3>Opening Movement</h3>
        <p>The initial downward block can deflect a low attack while simultaneously preparing for the following punch. Alternatively, it can be used as a arm grab and strike combination.</p>

        <h3>Rising Block Sequence</h3>
        <p>The three rising blocks performed while advancing in forward stance can be interpreted as defenses against overhead attacks, but also contain arm locks, throws, and strikes to vital points.</p>

        <h3>Back Stance with Knife-Hand Block</h3>
        <p>This movement can function as an escape from a wrist grab followed by a counter-strike, or as a deflection and throat strike combination.</p>

        <h2>Training Tips for Perfecting Heian Shodan</h2>
        <ol>
          <li><strong>Start Slowly:</strong> Begin practicing at 50% speed, focusing on correct form rather than speed.</li>
          <li><strong>Section Practice:</strong> Break the kata into 3-4 smaller sections until you've mastered each part.</li>
          <li><strong>Mirror Work:</strong> Practice in front of a mirror to check your stances and hand positions.</li>
          <li><strong>Mental Rehearsal:</strong> Visualize the entire kata with perfect execution before physical practice.</li>
          <li><strong>Application Understanding:</strong> Study the bunkai to give purpose to each movement.</li>
        </ol>

        <h2>Conclusion</h2>
        <p>Heian Shodan is far more than a beginner's exercise—it's a comprehensive introduction to the fundamental principles of Shotokan Karate. By mastering this kata, students develop the building blocks necessary for all future karate training. Even advanced practitioners regularly return to Heian Shodan to refine their fundamentals and discover deeper applications.</p>
      `,
    imageUrl: "https://pixabay.com/get/g587ac623419edd89b2813a0c55a392f4b407f0aea19ba99b6c6f54bfedcccf943d17820b7f3e3561d02226ab278f332d12dd42a833bed7621b5f991162b3a457_1280.jpg",
    createdAt: new Date("2024-03-05"),
    featured: true,
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 1, title: "TMAO Karate Group Photo", category: "events", imageUrl: "/karate-group.jpg", featured: true },
  { id: 2, title: "Karate Training Session", category: "training", imageUrl: "/karate-training-1.jpg", featured: true },
  { id: 3, title: "Students in Training", category: "training", imageUrl: "/karate-training-2.jpg", featured: true },
  { id: 4, title: "Main dojo training area", category: "facilities", imageUrl: "https://images.unsplash.com/photo-1564415051543-cb73a7468103", featured: true },
  { id: 5, title: "Children's karate class", category: "training", imageUrl: "https://images.unsplash.com/photo-1517438322307-e67111335449", featured: true },
  { id: 6, title: "Kata demonstration", category: "events", imageUrl: "https://pixabay.com/get/g1553158f35a20cfd7dc528fffd3885508bc79f06030b1d5d19294cb12cbb4881d68d1320a32ca7ccb5b0567991586b9133bc0a7590d877e7bb4d0ae23e2c25e7_1280.jpg", featured: true },
  { id: 7, title: "Tournament awards ceremony", category: "competitions", imageUrl: "https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e", featured: true },
  { id: 8, title: "Dojo entrance", category: "facilities", imageUrl: "https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f", featured: true },
  { id: 9, title: "TMAO Karate Team Practice", category: "training", imageUrl: "/472055947_122129028374476383_5203862077452401462_n.jpg", featured: true },
  { id: 10, title: "TMAO Karate Tournament", category: "events", imageUrl: "/499543244_122150434892476383_4842116742760404024_n.jpg", featured: true },
  { id: 11, title: "TMAO Karate Belt Ceremony", category: "events", imageUrl: "/499548486_122150434832476383_251501860172778980_n.jpg", featured: true },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Wilson",
    status: "Training for 3 years",
    content: "Joining this academy was one of the best decisions I've made. Beyond just learning self-defense, I've gained discipline and confidence that have improved every aspect of my life. The instructors are knowledgeable and supportive.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michelle Nelson",
    status: "Parent of student",
    content: "My son has transformed since beginning karate here. He's more focused in school, respectful at home, and has developed amazing physical skills. The children's program balances discipline with fun perfectly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Robert Kim",
    status: "Training for 5 years",
    content: "As someone who started karate later in life (40s), I was worried I wouldn't fit in. The academy welcomed me and adapted training to my abilities. I'm now healthier, more flexible, and have achieved my black belt.",
    rating: 5,
  },
];
