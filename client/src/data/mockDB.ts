import { SummaryPost } from "@/types/post";

export const summaryPosts: SummaryPost[] = [
  {
    id: 1,
    title: "Exploring City Life",
    description:
      "Discover the vibrancy of urban living with insights into city culture and landmarks.",
    primaryImageUrl:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
    author: "Emily Johnson",
    publishedAt: "2023-10-26",
  },
  {
    id: 2,
    title: "Beachside Escapes",
    description:
      "Unwind at beautiful beaches with our guide to the best coastal retreats.",
    primaryImageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    author: "Emily Johnson",
    publishedAt: "2023-10-12",
  },
  {
    id: 3,
    title: "Nature’s Pathways",
    description:
      "Explore the tranquility of nature with trails and parks that offer a peaceful escape.",
    primaryImageUrl:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Emily Johnson",
    publishedAt: "2023-10-01",
  },
  {
    id: 4,
    title: "Sunset Serenity",
    description:
      "Relax with our curated list of destinations offering breathtaking sunsets.",
    primaryImageUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    author: "Liam Turner",
    publishedAt: "2023-09-20",
  },
  {
    id: 5,
    title: "Mountain Adventures",
    description:
      "Take your breath away with thrilling treks and scenic mountain views.",
    primaryImageUrl:
      "https://images.unsplash.com/photo-1508264165352-258db2ebd59b",
    author: "Sophie Lee",
    publishedAt: "2023-09-15",
  },
  {
    id: 6,
    title: "Forest Retreat",
    description:
      "Reconnect with nature in quiet forest cabins and green escapes.",
    primaryImageUrl: "https://picsum.photos/id/1043/800/500",
    author: "Daniel Kim",
    publishedAt: "2023-09-10",
  },
  {
    id: 7,
    title: "Rural Reflections",
    description:
      "Find peace and simplicity in rural life and countryside living.",
    primaryImageUrl:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    author: "Rachel Adams",
    publishedAt: "2023-09-05",
  },
  {
    id: 8,
    title: "Urban Art Scenes",
    description:
      "Discover the best of street art and urban creativity around the world.",
    primaryImageUrl: "https://picsum.photos/id/1033/800/500",
    author: "Alex Green",
    publishedAt: "2023-08-30",
  },
];

export const fullPosts = [
  {
    id: 1,
    title: "Exploring City Life",
    description:
      "Discover the vibrancy of urban living with insights into city culture and landmarks.",
    primaryImageUrl:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
    author: "Emily Johnson",
    publishedAt: "2023-10-26",
    body: "Discover the vibrancy of urban living with insights into city culture and landmarks. Urban areas offer an exciting blend of architecture, cuisine, entertainment, and lifestyle. From towering skyscrapers to cozy cafés, the city is alive with energy at every corner. In this article, we dive deep into the cultural heartbeat of major metropolises, explore hidden gems in back alleys, and offer practical tips for enjoying city life without feeling overwhelmed. Whether you're a tourist or a local, there's always more to explore in the urban jungle.",
    categories: [
      { id: 1, name: "Urban" },
      { id: 2, name: "Culture" },
    ],
    relatedPosts: [
      {
        id: 2,
        title: "Beachside Escapes",
        primaryImageUrl:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      },
      {
        id: 8,
        title: "Urban Art Scenes",
        primaryImageUrl: "https://picsum.photos/id/1033/800/500",
      },
    ],
  },
  {
    id: 2,
    title: "Beachside Escapes",
    description:
      "Unwind at beautiful beaches with our guide to the best coastal retreats.",
    primaryImageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    author: "Emily Johnson",
    publishedAt: "2023-10-12",
    body: "Unwind at beautiful beaches with our guide to the best coastal retreats. From tropical paradises to rugged shorelines, beach destinations offer a unique kind of escape from the everyday hustle. We’ll explore lesser-known seaside towns, tips for affordable travel, and activities to enjoy beyond sunbathing. This guide is perfect for solo travelers, couples, and families seeking both relaxation and adventure.",
    categories: [
      { id: 2, name: "Travel" },
      { id: 3, name: "Relaxation" },
    ],
    relatedPosts: [
      {
        id: 1,
        title: "Exploring City Life",
        primaryImageUrl:
          "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
      },
      {
        id: 4,
        title: "Sunset Serenity",
        primaryImageUrl:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      },
    ],
  },
  {
    id: 3,
    title: "Nature’s Pathways",
    description:
      "Explore the tranquility of nature with trails and parks that offer a peaceful escape.",
    primaryImageUrl:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Emily Johnson",
    publishedAt: "2023-10-01",
    body: "Explore the tranquility of nature with trails and parks that offer a peaceful escape. Nature paths are not only soothing for the soul but also beneficial for physical and mental health. This post covers serene hiking trails, safety tips for beginners, and how to prepare for your next outdoor journey. Whether you're hiking through forests or walking a coastal trail, nature has something to offer everyone. Don't forget to pack your essentials and take moments to truly breathe.",
    categories: [
      { id: 3, name: "Nature" },
      { id: 4, name: "Adventure" },
    ],
    relatedPosts: [
      {
        id: 2,
        title: "Beachside Escapes",
        primaryImageUrl:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      },
      {
        id: 4,
        title: "Sunset Serenity",
        primaryImageUrl:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      },
      {
        id: 5,
        title: "Mountain Adventures",
        primaryImageUrl:
          "https://images.unsplash.com/photo-1508264165352-258db2ebd59b",
      },
      {
        id: 6,
        title: "Forest Retreat",
        primaryImageUrl: "https://picsum.photos/id/1043/800/500",
      },
    ],
  },
  {
    id: 4,
    title: "Sunset Serenity",
    description:
      "Relax with our curated list of destinations offering breathtaking sunsets.",
    primaryImageUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    author: "Liam Turner",
    publishedAt: "2023-09-20",
    body: "Relax with our curated list of destinations offering breathtaking sunsets. Sunset watching is more than a photo opportunity — it's a moment to slow down and reflect. We'll take you to some of the world's most stunning sunset locations, share photography tips, and suggest cozy spots to enjoy the view with loved ones. Sunset chasing is a soul-filling habit worth building into your travels.",
    categories: [
      { id: 2, name: "Travel" },
      { id: 5, name: "Photography" },
    ],
    relatedPosts: [
      {
        id: 2,
        title: "Beachside Escapes",
        primaryImageUrl:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      },
      {
        id: 3,
        title: "Nature’s Pathways",
        primaryImageUrl:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      },
    ],
  },
  {
    id: 5,
    title: "Mountain Adventures",
    description:
      "Take your breath away with thrilling treks and scenic mountain views.",
    primaryImageUrl:
      "https://images.unsplash.com/photo-1508264165352-258db2ebd59b",
    author: "Sophie Lee",
    publishedAt: "2023-09-15",
    body: "Take your breath away with thrilling treks and scenic mountain views. Mountains invite us to challenge ourselves, connect with nature, and gain new perspectives. This article highlights both popular and off-the-beaten-path hikes, how to prepare for high-altitude adventures, and why mountains have a timeless allure for adventurers around the world. From the Rockies to the Alps, each range has its own personality. We’ll also explore gear essentials, weather planning, and mental preparation. Whether you're a seasoned climber or a weekend explorer, there's something magical about reaching the summit and seeing the world below. Our guide includes elevation maps, trail tips, and testimonials from hikers who’ve walked these trails before you.",
    categories: [
      { id: 4, name: "Adventure" },
      { id: 6, name: "Hiking" },
    ],
    relatedPosts: [
      {
        id: 3,
        title: "Nature’s Pathways",
        primaryImageUrl:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      },
      {
        id: 6,
        title: "Forest Retreat",
        primaryImageUrl: "https://picsum.photos/id/1043/800/500",
      },
    ],
  },
  {
    id: 6,
    title: "Forest Retreat",
    description:
      "Reconnect with nature in quiet forest cabins and green escapes.",
    primaryImageUrl: "https://picsum.photos/id/1043/800/500",
    author: "Daniel Kim",
    publishedAt: "2023-09-10",
    body: "Reconnect with nature in quiet forest cabins and green escapes. Forests offer solitude, fresh air, and a chance to disconnect from digital noise. From choosing the right cabin to planning campfire meals, we cover everything you need to plan a forest retreat that truly refreshes. Whether alone or with company, the forest welcomes you.",
    categories: [
      { id: 3, name: "Nature" },
      { id: 7, name: "Wellness" },
    ],
    relatedPosts: [
      {
        id: 5,
        title: "Mountain Adventures",
        primaryImageUrl:
          "https://images.unsplash.com/photo-1508264165352-258db2ebd59b",
      },
      {
        id: 7,
        title: "Rural Reflections",
        primaryImageUrl:
          "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      },
    ],
  },
  {
    id: 7,
    title: "Rural Reflections",
    description:
      "Find peace and simplicity in rural life and countryside living.",
    primaryImageUrl:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    author: "Rachel Adams",
    publishedAt: "2023-09-05",
    body: "Find peace and simplicity in rural life and countryside living. Rural areas remind us of slower rhythms, meaningful connections, and the charm of simplicity. We explore life in small towns, the benefits of countryside retreats, and how to embrace a minimalist, peaceful lifestyle — even if just for a weekend getaway. This piece includes tips for finding local farm stays, exploring country markets, and blending into the pace of village life.",
    categories: [
      { id: 1, name: "Lifestyle" },
      { id: 8, name: "Countryside" },
    ],
    relatedPosts: [
      {
        id: 6,
        title: "Forest Retreat",
        primaryImageUrl: "https://picsum.photos/id/1043/800/500",
      },
      {
        id: 8,
        title: "Urban Art Scenes",
        primaryImageUrl: "https://picsum.photos/id/1033/800/500",
      },
    ],
  },
  {
    id: 8,
    title: "Urban Art Scenes",
    description:
      "Discover the best of street art and urban creativity around the world.",
    primaryImageUrl: "https://picsum.photos/id/1033/800/500",
    author: "Alex Green",
    publishedAt: "2023-08-30",
    body: "Discover the best of street art and urban creativity around the world. Street art reflects the soul of a city — vibrant, raw, and constantly evolving. In this post, we spotlight famous street art hubs and interview artists shaping the visual stories of our streets.",
    categories: [
      { id: 2, name: "Culture" },
      { id: 9, name: "Art" },
    ],
    relatedPosts: [
      {
        id: 1,
        title: "Exploring City Life",
        primaryImageUrl:
          "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
      },
      {
        id: 7,
        title: "Rural Reflections",
        primaryImageUrl:
          "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      },
    ],
  },
];
