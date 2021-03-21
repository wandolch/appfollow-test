import Comment from '../interfaces/Comment'

export const COMMENTS_DATA: Comment[] = [
  {
    id: 1,
    author: 'Nikolay',
    message:
      "It's really good but try to reduce the size of the selected box that came up when selecting its too big and you can also reduce the opacity... its look more cool",
    comments: [
      {
        id: 2,
        author: 'Olga',
        message:
          'I love the timeline you built for them. I am grateful to hear that some of the freeCodeCamp tutorials/courses have been helpful for this. We are going to add even more projects to our curriculum soon, and I will share your timeline with the curriculum team.',
        comments: [],
      },
      {
        id: 3,
        author: 'Nikolay',
        message: 'Thank you!',
        comments: [
          {
            id: 4,
            author: 'Olga',
            message:
              'Amazing thanks. If you had to make a map based app where users CRUD each others map pins, where there could be as many as 20k map pins on the map at a given time, what db solution would you use? Ideally one that handles user email authentication too. Thanks!',
            comments: [],
          },
          {
            id: 5,
            author: 'Piotr',
            message:
              "Wow, your one day projects would take me 3 months. That's depressing. Just joking, that's really inspiring!",
            comments: [
              {
                id: 7,
                author: 'Oleg',
                message:
                  "Great db choices. I'm a traditionalist so I would say postgres. That way you learn about deployment and management, not to mention other cool stuff. It's also powerful and SQ. Which project did you use Firebase with? I am desperate to figure out Firebase and cannot find anything that can help me...\n\nGood effort by the way!",
                comments: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 11,
    author: 'Alex',
    message: "That's awesome! What inspired you to make this? Great work.",
    comments: [],
  },
  {
    id: 12,
    author: 'Laura',
    message:
      "For me personally it's developer happiness. I write barely any CSS these days and I can prototype UI fairly quickly.",
    comments: [
      {
        id: 13,
        author: 'Alex',
        message: 'Thank you!',
        comments: [],
      },
    ],
  },
]
