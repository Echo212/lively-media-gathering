
import { Interview, Poet, Event, CityCollection } from "../types";

// Sample data for the media library

export const interviews: Interview[] = [
  {
    id: "interview-1",
    title: "On Siberian Identity in Poetry",
    description: "A conversation about how regional identity shapes poetic expression in Siberia",
    audioUrl: "/placeholder-audio.mp3", // This would be replaced with an actual audio file
    date: "2023-05-15",
    duration: "12:45",
    transcript: "In this interview, we discuss the unique aspects of Siberian identity and how it manifests in contemporary poetry...",
    poetId: "poet-1",
    featured: true
  },
  {
    id: "interview-2",
    title: "Language and Tradition in Modern Poetry",
    description: "Exploring the balance between traditional forms and contemporary expression",
    audioUrl: "/placeholder-audio.mp3",
    date: "2023-06-22",
    duration: "18:30",
    transcript: "This conversation explores how poets navigate between traditional poetic forms and contemporary expression...",
    poetId: "poet-3"
  },
  {
    id: "interview-3",
    title: "Urban Landscapes in Poetic Imagery",
    description: "How city environments influence poetic imagery and metaphor",
    audioUrl: "/placeholder-audio.mp3",
    date: "2023-07-10",
    duration: "15:20",
    poetId: "poet-2"
  },
  {
    id: "interview-4",
    title: "The Role of Memory in Poetry",
    description: "Examining how personal and collective memory shapes poetic work",
    audioUrl: "/placeholder-audio.mp3",
    date: "2023-08-05",
    duration: "20:15",
    poetId: "poet-4"
  },
  {
    id: "interview-5",
    title: "Natural World in Siberian Poetry",
    description: "The significance of nature and landscape in regional poetic traditions",
    audioUrl: "/placeholder-audio.mp3",
    date: "2023-09-18",
    duration: "16:40",
    featured: true
  }
];

export const poets: Poet[] = [
  {
    id: "poet-1",
    name: "Anna Mikhailova",
    city: "Tomsk",
    bio: "Anna Mikhailova is a prominent voice in contemporary Siberian poetry, known for her explorations of regional identity and historical memory. Her work has been published in numerous literary journals across Russia.",
    imageUrl: "/placeholder.svg",
    poems: [
      {
        id: "poem-1-1",
        title: "Winter Light",
        text: "The snow reflects a different kind of silence,\nOne that speaks in the language of light.\nHere, between buildings of stone and memory,\nWe learn to read what cannot be written.",
        year: "2020"
      },
      {
        id: "poem-1-2",
        title: "City Maps",
        text: "I trace the streets with fingertips,\nEach intersection a possibility.\nThe city breathes beneath my touch,\nIts history rising like mist from the river.",
        year: "2021"
      }
    ],
    featured: true
  },
  {
    id: "poet-2",
    name: "Dmitry Sokolov",
    city: "Novosibirsk",
    bio: "Dmitry Sokolov combines elements of urban life with traditional Siberian imagery in his poetry. His work explores the tension between modernization and cultural heritage in contemporary Russia.",
    imageUrl: "/placeholder.svg",
    poems: [
      {
        id: "poem-2-1",
        title: "Concrete and Sky",
        text: "Between steel and cloud,\nWe build our temporary homes.\nThe city grows like a forest,\nRoots deep in forgotten soil.",
        year: "2019"
      },
      {
        id: "poem-2-2",
        title: "Train Stations",
        text: "Each departure creates a new geography.\nI collect destinations like photographs,\nArranging them in albums of memory.\nDistance is measured in absence.",
        year: "2022"
      }
    ]
  },
  {
    id: "poet-3",
    name: "Ekaterina Volkova",
    city: "Omsk",
    bio: "Ekaterina Volkova's poetry examines the intersections of personal and collective identity in post-Soviet Russia. Her work often incorporates elements of folklore and myth reimagined in contemporary settings.",
    imageUrl: "/placeholder.svg",
    poems: [
      {
        id: "poem-3-1",
        title: "Inherited Landscapes",
        text: "What we carry is not only memory\nBut the shape of hills against evening sky,\nThe taste of river water in spring thaw,\nThe precise angle of light in autumn.",
        year: "2018"
      },
      {
        id: "poem-3-2",
        title: "Conversations with Grandmothers",
        text: "Their stories hang in the air like embroidery,\nThreads connecting impossible distances.\nI listen for patterns, repetitions,\nThe language that survives translation.",
        year: "2020"
      }
    ],
    featured: true
  },
  {
    id: "poet-4",
    name: "Pavel Nesterov",
    city: "Barnaul",
    bio: "Pavel Nesterov writes poetry that engages with the natural world and environmental concerns in the Altai region. His work has been recognized for its powerful imagery and ecological awareness.",
    imageUrl: "/placeholder.svg",
    poems: [
      {
        id: "poem-4-1",
        title: "River Systems",
        text: "The watershed divides more than water.\nOn maps, the blue lines suggest simplicity.\nBut standing at the confluence,\nComplexity flows in multiple directions.",
        year: "2021"
      },
      {
        id: "poem-4-2",
        title: "Forest Inventory",
        text: "Count the rings to measure time,\nBut what measures loss?\nThe spaces between trees\nWiden with each season.",
        year: "2019"
      }
    ]
  },
  {
    id: "poet-5",
    name: "Maria Kuznetsova",
    city: "Kemerovo",
    bio: "Maria Kuznetsova's poetry explores themes of industrial heritage and transformation in Siberian cities. Her work often juxtaposes images of nature with those of industrial landscapes.",
    imageUrl: "/placeholder.svg",
    poems: [
      {
        id: "poem-5-1",
        title: "Coal Country",
        text: "Black dust settles on everything:\nwindowsills, laundry, memory.\nWe breathe it in until it becomes\nindistinguishable from ourselves.",
        year: "2020"
      },
      {
        id: "poem-5-2",
        title: "Garden Cities",
        text: "Between factory walls,\nWe plant impossible gardens.\nFlowers push through concrete,\nA different kind of resistance.",
        year: "2022"
      }
    ]
  }
];

export const events: Event[] = [
  {
    id: "event-1",
    title: "Siberian Poetry Festival",
    description: "Annual gathering of poets from across the region for readings, workshops, and discussions.",
    date: "2023-11-15",
    time: "10:00",
    location: "Central Library",
    city: "Tomsk",
    imageUrl: "/placeholder.svg",
    featured: true
  },
  {
    id: "event-2",
    title: "Poetry Reading: New Voices",
    description: "Showcase of emerging poets from Novosibirsk featuring works exploring urban identity.",
    date: "2023-10-28",
    time: "18:30",
    location: "Novosibirsk State University",
    city: "Novosibirsk",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "event-3",
    title: "Workshop: Poetry and Place",
    description: "Interactive workshop exploring how regional landscapes influence poetic expression.",
    date: "2023-12-05",
    time: "14:00",
    location: "Cultural Center",
    city: "Omsk",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "event-4",
    title: "Literary Congress: Traditions in Modern Poetry",
    description: "Academic conference examining the role of traditional forms in contemporary poetry across Siberia.",
    date: "2024-02-20",
    time: "09:00",
    location: "Altai State University",
    city: "Barnaul",
    imageUrl: "/placeholder.svg",
    featured: true
  },
  {
    id: "event-5",
    title: "Poetry and Music Collaboration",
    description: "Evening of poetry readings accompanied by local musicians, exploring the intersection of literary and musical traditions.",
    date: "2023-11-30",
    time: "19:00",
    location: "Philharmonic Hall",
    city: "Kemerovo",
    imageUrl: "/placeholder.svg"
  }
];

export const cityCollections: CityCollection[] = [
  {
    id: "tomsk",
    name: "Tomsk",
    description: "A collection of works by poets from Tomsk, exploring the city's unique literary heritage and contemporary voices.",
    imageUrl: "/placeholder.svg",
    poets: ["poet-1"],
    interviews: ["interview-1"],
    events: ["event-1"]
  },
  {
    id: "novosibirsk",
    name: "Novosibirsk",
    description: "Poetry and interviews from Novosibirsk, focusing on urban themes and the tension between tradition and modernity.",
    imageUrl: "/placeholder.svg",
    poets: ["poet-2"],
    interviews: ["interview-3"],
    events: ["event-2"]
  },
  {
    id: "omsk",
    name: "Omsk",
    description: "Literary works from Omsk that engage with questions of identity, memory, and cultural heritage.",
    imageUrl: "/placeholder.svg",
    poets: ["poet-3"],
    interviews: ["interview-2"],
    events: ["event-3"]
  },
  {
    id: "barnaul",
    name: "Barnaul",
    description: "Poetry and conversations from Barnaul, with particular attention to the relationship between literature and the natural environment.",
    imageUrl: "/placeholder.svg",
    poets: ["poet-4"],
    interviews: ["interview-4"],
    events: ["event-4"]
  },
  {
    id: "kemerovo",
    name: "Kemerovo",
    description: "A collection focusing on industrial heritage, social transformation, and literary response in Kemerovo.",
    imageUrl: "/placeholder.svg",
    poets: ["poet-5"],
    interviews: ["interview-5"],
    events: ["event-5"]
  }
];
