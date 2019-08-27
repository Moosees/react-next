import axios from 'axios';

const Post = ({ id, comments }) => {
  const commentList = comments.map(comment => (
    <div
      key={comment.id}
      style={{
        border: '1px solid #333',
        margin: '5px auto',
        padding: '5px'
      }}
    >
      <h3>{comment.name}</h3>
      <p>{comment.body}</p>
      <h5>From: {comment.email}</h5>
    </div>
  ));

  return (
    <div>
      <h1>Comments on post {id}</h1>
      <div>{commentList}</div>
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const { data } = res;
  return { id: query.id, comments: data };
};

export default Post;
