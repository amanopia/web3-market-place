import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Trending from './components/trending/Trending'
import Discover from './components/discover/Discover';
import Collection from './components/top-collection/Collection';
import CheckCollection from './components/check-collections/Check';
import Footer from './components/footer/Footer';
import TestComponent from './components/testComponent/TestComponent';

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
