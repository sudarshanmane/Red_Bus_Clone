import EnjoyAppCard from "./Components/EnjoyAppCard";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MoreThanBus from "./Components/MoreThanBus";
import PrimoImage from "./Components/PrimoImage";
import SearchSection from "./Components/SearchSection";
import TrendingOffers from "./Components/TrendingOffers";

function App() {
  return (
    <main className="">
      <Header></Header>
      <SearchSection></SearchSection>
      <TrendingOffers></TrendingOffers>
      <MoreThanBus></MoreThanBus>
      <EnjoyAppCard></EnjoyAppCard>
      <PrimoImage></PrimoImage>
      <Footer></Footer>
    </main>
  );
}

export default App;
