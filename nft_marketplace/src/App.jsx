import Banner from '../src/components/banner/Banner';
// import Header from './components/header/Header';
// import Header from './components/header/Header'
import Header from '../src/components/header/Header'
import Trending from '../src/components/trending/Trending'
import Discover from '../src/components/discover/Discover';
import Collection from '../src/components/top-collection/Collection';
import CheckCollection from '../src/components/check-collections/Check';
import Footer from '../src/components/footer/Footer';
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
