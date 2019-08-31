import axios from 'axios';
import Link from 'next/link';

const HomePage = ({ posts }) => {
  const postList = [];
  for (let i = 0; i < 10; i++) {
    postList.push(
      <li key={posts[i].id}>
        <Link href={`/post?id=${posts[i].id}`} as={`/p/${posts[i].id}`}>
          <a>{posts[i].title}</a>
        </Link>
      </li>
    );
  }

  return (
    <div>
      <h1>Homepage!</h1>
      <ul>{postList}</ul>
    </div>
  );
};

HomePage.getInitialProps = async ({ req }) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return { posts: res.data };
};

export default HomePage;
