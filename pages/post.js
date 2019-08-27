import { withRouter } from 'next/router';

const Post = ({ router: { query } }) => {
  return <h1>Post: {query.id}</h1>;
};

// Post.getInitialProps = async ({ query }) => {
//   return query;
// };

export default withRouter(Post);
