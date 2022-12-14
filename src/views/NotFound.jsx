import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="notfound">
      <h2 className='fw-bold'>Ooops! </h2>
      <p>Algo salio mal, la pagina que buscas no existe.</p>
      <img
        src="https://i.pinimg.com/originals/a2/85/94/a28594b135b40ec8c8644f6b2ae619a5.png"
        alt="not found"
      />
      <span className='fs-1 fw-bold'>404!</span>
      <Link to="/">
        <button className="btn btn-pay">Volver al home</button>
      </Link>
    </div>
  );
};

export default NotFound;