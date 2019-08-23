import Link from 'next/link';

const Navbar = () => {
  const styles = {
    alignItems: 'center',
    background: '#963',
    display: 'flex',
    justifyContent: 'space-around',
    height: '5vh',
    textTransform: 'uppercase'
  };

  return (
    <div style={styles}>
      <Link href="/">
        <a>Homepage</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};

export default Navbar;
