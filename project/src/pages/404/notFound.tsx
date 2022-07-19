import Header from '../../components/header/header';

function NotFound(): JSX.Element {
  return (
    <section>
      <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Page not found</h1>
          <a href="/main">Go to main page</a>
        </main>
      </div>
    </section>
  );
}

export default NotFound;
