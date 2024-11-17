import './assets/css/style.css'
import ManageMoney from './components/ManageMoney'
import Footer from './components/Footer'
import Header from './components/Header'
import BrandBoxes from './components/BrandBoxes'
import AppFeatures from './components/AppFeatures'
import HowDoesItWork from './components/HowDoesItWork'
import TransferMoney from './components/TransferMoney'
import Review from './components/Review'
import FAQ from './components/FAQ'
import Email from './components/Email'
import Contact from './components/Contact'
import Location from './components/Location'

function App() {
  
  return (
    <>
    <div className="wrapper">
       <Header />
       <main>
       <ManageMoney />
       <BrandBoxes />
       <AppFeatures />
       <HowDoesItWork />
       <TransferMoney />
       <Review />
       <FAQ />
       <Email />
       <Contact />
       <Location />
       </main>
       <Footer />
    </div>
    </>
  )
}

export default App
