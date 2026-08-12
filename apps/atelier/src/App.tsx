import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Categories } from './components/Categories'
import { NewProduct } from './components/NewProduct'
import { Banner } from './components/Banner'
import { Trend } from './components/Trend'
import { Discount } from './components/Discount'
import { Services } from './components/Services'
import { Instagram } from './components/Instagram'
import { Footer } from './components/Footer'

/* Atelier — fashion e-commerce storefront, recreation of ColorLib "Ashion".
   Section order (1:1): navbar → category tiles → NEW PRODUCT grid → banner
   carousel → trend tabs → discount band → services → instagram strip →
   footer. */
export function App() {
  useEffect(() => {
    document.title = 'Atelier — Fashion E-commerce Template'
  }, [])

  return (
    <div className="font-sans text-muted">
      <Navbar />
      <main>
        <Categories />
        <NewProduct />
        <Banner />
        <Trend />
        <Discount />
        <Services />
        <Instagram />
      </main>
      <Footer />
    </div>
  )
}
