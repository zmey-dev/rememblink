import { Memorial } from "../types/memorial";

export const memorials: Memorial[] = [
  {
    id: "1",
    name: "Eleanor Marie Johnson",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500",
    coverImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200",
    birthDate: "1945-03-15",
    deathDate: "2024-01-20",
    location: "Chicago, Illinois",
    obituary: "Eleanor Marie Johnson, beloved mother, grandmother, and cherished community leader, passed away peacefully on January 20, 2024. Throughout her remarkable 78 years, she touched countless lives with her warmth, wisdom, and unwavering dedication to serving others.",
    familyMembers: ["Michael Johnson (Son)", "Sarah Williams (Daughter)", "James Johnson (Husband, deceased)"],
    memories: [
      {
        id: "m1",
        authorName: "Michael Johnson",
        authorPhoto: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=200",
        content: "Mom's Sunday dinners were legendary in our neighborhood. Her door was always open, and her heart even more so.",
        date: "2024-01-25",
        type: "text",
        likes: 24
      },
      {
        id: "m2",
        authorName: "Sarah Williams",
        authorPhoto: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?w=200",
        content: "A beautiful day at the lake, one of mom's favorite places.",
        date: "2024-01-28",
        type: "photo",
        mediaUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
        likes: 45
      }
    ]
  },
  {
    id: "2",
    name: "Robert William Anderson",
    photo: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=500",
    coverImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200",
    birthDate: "1938-08-22",
    deathDate: "2024-02-15",
    location: "Portland, Oregon",
    obituary: "Robert 'Bob' Anderson, veteran teacher and devoted family man, passed away surrounded by loved ones. His 45-year career in education inspired generations of students.",
    familyMembers: ["Mary Anderson (Wife)", "John Anderson (Son)", "Patricia Cooper (Daughter)"],
    memories: [
      {
        id: "m3",
        authorName: "John Anderson",
        authorPhoto: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=200",
        content: "Dad's last fishing trip with us. He always said the best conversations happened on the water.",
        date: "2024-02-20",
        type: "photo",
        mediaUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800",
        likes: 32
      }
    ]
  },
  {
    id: "3",
    name: "Maria Carmen Rodriguez",
    photo: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=500",
    coverImage: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200",
    birthDate: "1952-06-10",
    deathDate: "2024-03-05",
    location: "San Diego, California",
    obituary: "Maria Rodriguez, beloved artist and entrepreneur, left this world leaving behind a legacy of creativity and inspiration. Her paintings brought joy to countless homes and her spirit touched many lives.",
    familyMembers: ["Carlos Rodriguez (Husband)", "Ana Rodriguez (Daughter)", "Luis Rodriguez (Son)"],
    memories: [
      {
        id: "m4",
        authorName: "Ana Rodriguez",
        authorPhoto: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=200",
        content: "Mamá in her studio, doing what she loved most. Her passion for art was contagious.",
        date: "2024-03-10",
        type: "photo",
        mediaUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800",
        likes: 56
      }
    ]
  },
  {
    id: "4",
    name: "James William Thompson",
    photo: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=500",
    coverImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200",
    birthDate: "1940-12-03",
    deathDate: "2024-02-18",
    location: "Boston, Massachusetts",
    obituary: "James Thompson, distinguished professor of physics at MIT and loving father, passed away peacefully. His groundbreaking research in quantum mechanics and dedication to teaching inspired countless students.",
    familyMembers: ["Margaret Thompson (Wife)", "Peter Thompson (Son)", "Elizabeth Thompson (Daughter)"],
    memories: [
      {
        id: "m5",
        authorName: "Dr. Sarah Chen",
        authorPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
        content: "Professor Thompson was my mentor during my PhD. His guidance shaped my entire career in physics.",
        date: "2024-02-20",
        type: "text",
        likes: 67
      },
      {
        id: "m6",
        authorName: "Peter Thompson",
        authorPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
        content: "Dad's last lecture at MIT. A beautiful moment capturing his passion for teaching.",
        date: "2024-02-25",
        type: "photo",
        mediaUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
        likes: 89
      }
    ]
  },
  {
    id: "5",
    name: "Isabella Sofia Martinez",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
    coverImage: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=1200",
    birthDate: "1968-04-15",
    deathDate: "2024-03-10",
    location: "Miami, Florida",
    obituary: "Isabella Martinez, renowned chef and restaurateur, brought joy to countless people through her culinary artistry. Her restaurants became cultural landmarks in Miami's vibrant food scene.",
    familyMembers: ["Antonio Martinez (Husband)", "Sofia Martinez (Daughter)", "Miguel Martinez (Son)"],
    memories: [
      {
        id: "m7",
        authorName: "Sofia Martinez",
        authorPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
        content: "Mamá teaching me her secret paella recipe. These moments in the kitchen are treasured memories.",
        date: "2024-03-15",
        type: "photo",
        mediaUrl: "https://images.unsplash.com/photo-1515669097368-22e68427d265?w=800",
        likes: 112
      }
    ]
  },
  {
    id: "6",
    name: "Dr. David Chen",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    coverImage: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200",
    birthDate: "1955-08-22",
    deathDate: "2024-01-30",
    location: "Seattle, Washington",
    obituary: "Dr. David Chen, pioneering heart surgeon and humanitarian, dedicated his life to saving others. His medical missions to underserved communities touched thousands of lives worldwide.",
    familyMembers: ["Linda Chen (Wife)", "Michael Chen (Son)", "Emily Chen (Daughter)"],
    memories: [
      {
        id: "m8",
        authorName: "Dr. Michael Chen",
        authorPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
        content: "Following in dad's footsteps. His dedication to helping others inspired me to become a doctor.",
        date: "2024-02-05",
        type: "text",
        likes: 156
      }
    ]
  },
  {
    id: "7",
    name: "Grace Elizabeth Williams",
    photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500",
    coverImage: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200",
    birthDate: "1930-06-15",
    deathDate: "2024-02-28",
    location: "Denver, Colorado",
    obituary: "Grace Williams, environmental activist and nature photographer, spent her life protecting Colorado's wilderness. Her award-winning photography helped preserve countless natural habitats.",
    familyMembers: ["Robert Williams (Son)", "Catherine Williams (Daughter)", "Thomas Williams (Husband, deceased)"],
    memories: [
      {
        id: "m9",
        authorName: "Catherine Williams",
        authorPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
        content: "Mom's favorite spot in the Rockies. She would spend hours here capturing the perfect shot.",
        date: "2024-03-05",
        type: "photo",
        mediaUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
        likes: 178
      }
    ]
  },
  {
    id: "8",
    name: "Marcus Johnson",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
    coverImage: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=1200",
    birthDate: "1962-03-28",
    deathDate: "2024-03-01",
    location: "New Orleans, Louisiana",
    obituary: "Marcus Johnson, legendary jazz musician and composer, enriched the world with his soulful trumpet playing. His contributions to New Orleans jazz will be remembered for generations.",
    familyMembers: ["Diana Johnson (Wife)", "Miles Johnson (Son)", "Ella Johnson (Daughter)"],
    memories: [
      {
        id: "m10",
        authorName: "Miles Johnson",
        authorPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
        content: "Dad's last performance at the Jazz & Heritage Festival. The crowd gave him a standing ovation.",
        date: "2024-03-07",
        type: "video",
        mediaUrl: "https://example.com/video/marcus-final-performance.mp4",
        likes: 234
      }
    ]
  },
  {
    id: "9",
    name: "Patricia Anne Wilson",
    photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500",
    coverImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200",
    birthDate: "1943-09-15",
    deathDate: "2024-02-25",
    location: "Austin, Texas",
    obituary: "Patricia Wilson, pioneering computer scientist and mentor to generations of women in tech, passed away leaving behind a legacy of innovation and inspiration. Her groundbreaking work in artificial intelligence shaped the field.",
    familyMembers: ["Richard Wilson (Husband)", "Jennifer Wilson (Daughter)", "Mark Wilson (Son)"],
    memories: [
      {
        id: "m11",
        authorName: "Dr. Jennifer Wilson",
        authorPhoto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200",
        content: "Mom at her retirement ceremony from IBM. Her speech about women in tech moved everyone to tears.",
        date: "2024-02-28",
        type: "photo",
        mediaUrl: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800",
        likes: 145
      }
    ]
  },
  {
    id: "10",
    name: "Samuel Peter Wright",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
    coverImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200",
    birthDate: "1951-12-05",
    deathDate: "2024-03-15",
    location: "Minneapolis, Minnesota",
    obituary: "Samuel Wright, decorated Vietnam veteran and dedicated youth mentor, spent his life serving others. His work with troubled youth changed countless lives in the Minneapolis community.",
    familyMembers: ["Martha Wright (Wife)", "David Wright (Son)", "Sarah Wright (Daughter)"],
    memories: [
      {
        id: "m12",
        authorName: "David Wright",
        authorPhoto: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=200",
        content: "Dad's last Veterans Day parade. He was so proud to carry the flag.",
        date: "2024-03-18",
        type: "photo",
        mediaUrl: "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?w=800",
        likes: 267
      }
    ]
  },
  {
    id: "11",
    name: "Dr. Emma Claire Thompson",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
    coverImage: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200",
    birthDate: "1958-03-28",
    deathDate: "2024-03-10",
    location: "Baltimore, Maryland",
    obituary: "Dr. Emma Thompson, renowned pediatric surgeon at Johns Hopkins Hospital, saved thousands of young lives during her 35-year career. Her innovative surgical techniques revolutionized pediatric cardiac care.",
    familyMembers: ["Dr. William Thompson (Husband)", "Alice Thompson (Daughter)", "Daniel Thompson (Son)"],
    memories: [
      {
        id: "m13",
        authorName: "Dr. Alice Thompson",
        authorPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
        content: "Mom performing her last surgery. A perfect example of her dedication to her young patients.",
        date: "2024-03-12",
        type: "photo",
        mediaUrl: "https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?w=800",
        likes: 389
      }
    ]
  },
  {
    id: "12",
    name: "Roberto Carlos Mendoza",
    photo: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=500",
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
    birthDate: "1965-06-15",
    deathDate: "2024-02-20",
    location: "Santa Fe, New Mexico",
    obituary: "Roberto Mendoza, celebrated artist and community activist, transformed Santa Fe's art scene through his vibrant murals and youth art programs. His work celebrating Hispanic heritage will continue to inspire future generations.",
    familyMembers: ["Maria Mendoza (Wife)", "Carmen Mendoza (Daughter)", "Juan Mendoza (Son)"],
    memories: [
      {
        id: "m14",
        authorName: "Carmen Mendoza",
        authorPhoto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200",
        content: "Papá working on his last mural, celebrating our community's heritage.",
        date: "2024-02-25",
        type: "photo",
        mediaUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800",
        likes: 234
      }
    ]
  },
  {
    id: "13",
    name: "Katherine Rose Sullivan",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
    coverImage: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200",
    birthDate: "1948-08-12",
    deathDate: "2024-03-05",
    location: "Portland, Oregon",
    obituary: "Katherine Sullivan, environmental activist and conservation leader, protected thousands of acres of Pacific Northwest wilderness through her tireless advocacy. Her work establishing marine sanctuaries will benefit generations to come.",
    familyMembers: ["Patrick Sullivan (Husband)", "Emily Sullivan (Daughter)", "Michael Sullivan (Son)"],
    memories: [
      {
        id: "m15",
        authorName: "Emily Sullivan",
        authorPhoto: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=200",
        content: "Mom leading her final beach cleanup. She never stopped fighting for our planet.",
        date: "2024-03-08",
        type: "photo",
        mediaUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800",
        likes: 456
      }
    ]
  }
];
