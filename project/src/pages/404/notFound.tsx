import { Link } from 'react-router-dom';
import Header from '../../components/header/header';

function NotFound(): JSX.Element {
  return (
    <section>
      <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Page not found</h1>
          <Link to={'/'}>Go to main page</Link>
        </main>
      </div>
    </section>
  );
}

export default NotFound;
