import Header from './components/Header/Header.jsx';
import Banner from './components/Banner/Banner.jsx';
import Trending from './components/Trending/Trending.jsx'
import Discover from './components/Discover/Discover.jsx';
import Collection from './components/Top-collection/Collection.jsx';
import CheckCollection from './components/Check-collections/Check.jsx';
import Footer from './components/Footer/Footer.jsx';
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
