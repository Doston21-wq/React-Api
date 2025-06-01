import { useNavigate, Link } from 'react-router-dom';
import err from '../assets/404.avif';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <img
        src={err}
        alt="Not found"
        style={{ width: "300px" }}
      />
      <h1>Ooops! Something Error</h1>
      <Link to="/" style={{ color: "#01F7DC", textDecoration: "none", fontSize: "25px"}}>Back Home</Link>
    </div>
  );
};

export default Error;
