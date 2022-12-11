import Header from '/components/header/Header.jsx';
import Banner from '/components/banner/Banner.jsx';
import Trending from '/components/trending/Trending.jsx'
import Discover from '/components/discover/Discover.jsx';
import Collection from '/components/top-collection/Collection.jsx';
import CheckCollection from '/components/check-collections/Check.jsx';
import Footer from '/components/footer/Footer.jsx';
// import TestComponent from './components/testComponent/TestComponent';

function App() {

  
  return (
    <>
      <Header />
      {/* <TestComponent /> */}
      <Banner />
      <Trending />
      <Discover />
      <Collection />
      <CheckCollection />
      <Footer />
    </>
  );
}

export default App;
