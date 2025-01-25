import { Nav } from '../layout/Nav';
import { PostUser } from '../layout/PostUser';
import { PostFeed } from '../layout/PostsFeed';
const posts = [
  {
    name: 'Orbter',
    profileColor: '#123456', // Replace with the color code
    date: '22/01/2025',
    text: 'i am going to the beach with my friends and we gona have a lot of fun because we a cool',
    likes: 51,
    reposts: 4,
    commentsCount: 23,
    comments: [
      {
        name: 'User1',
        text: 'Sounds like so much fun!',
      },
      {
        name: 'User2',
        text: 'Wish I could join you!',
      },
    ],
  },
  {
    name: 'Alex',
    profileColor: '#654321',
    date: '21/01/2025',
    text: 'Had an amazing day coding a new project!',
    likes: 40,
    reposts: 3,
    commentsCount: 15,
    comments: [
      {
        name: 'User3',
        text: 'That’s awesome! Can’t wait to see it!',
      },
      {
        name: 'User4',
        text: 'Keep it up!',
      },
    ],
  },
  {
    name: 'Jamie',
    profileColor: '#abcdef',
    date: '20/01/2025',
    text: 'Just finished a great workout session at the gym.',
    likes: 35,
    reposts: 2,
    commentsCount: 10,
    comments: [
      {
        name: 'User5',
        text: 'Great job staying active!',
      },
      {
        name: 'User6',
        text: 'How long was your session?',
      },
    ],
  },
  {
    name: 'Taylor',
    profileColor: '#ff8800',
    date: '19/01/2025',
    text: 'Had the best pizza in town today!',
    likes: 75,
    reposts: 8,
    commentsCount: 30,
    comments: [
      {
        name: 'User7',
        text: 'Where did you get it?',
      },
      {
        name: 'User8',
        text: 'I need to try that place!',
      },
    ],
  },
  {
    name: 'Jordan',
    profileColor: '#00ff88',
    date: '18/01/2025',
    text: 'Reading a fascinating book on React development.',
    likes: 60,
    reposts: 5,
    commentsCount: 20,
    comments: [
      {
        name: 'User9',
        text: 'Which book is it?',
      },
      {
        name: 'User10',
        text: 'That sounds interesting!',
      },
    ],
  },
];

function HomePage() {
  return (
    <div>
      <Nav />
      <div>
        <PostUser />
      </div>
      <div>
        {posts.map((post, index) => {
          <PostFeed post={post} key={index} />;
        })}
      </div>
    </div>
  );
}
export default HomePage;
