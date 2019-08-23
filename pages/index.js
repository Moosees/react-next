import axios from 'axios';
import Link from 'next/link';

const HomePage = ({ posts }) => {
  return (
    <div>
      <h1>Homepage!</h1>
      <div>{posts[Math.floor(Math.random() * 100)].title}</div>
    </div>
  );
};

HomePage.getInitialProps = async ({ req }) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return { posts: res.data };
};

export default HomePage;
