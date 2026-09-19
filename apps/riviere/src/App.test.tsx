import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { ShopByCategory } from './components/ShopByCategory'
import { LatestProducts } from './components/LatestProducts'
import { BestCollection } from './components/BestCollection'
import { ShopMethods } from './components/ShopMethods'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

describe('App', () => {
  it('renders all sections in correct order', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByLabelText('Main navigation')).toBeInTheDocument()
    expect(screen.getByLabelText('Hero banner')).toBeInTheDocument()
    expect(screen.getByText('Shop by Category')).toBeInTheDocument()
    expect(screen.getByText('Latest Products')).toBeInTheDocument()
    expect(screen.getByText('Best Collection of This Month')).toBeInTheDocument()
    expect(screen.getByLabelText('Gallery')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('TopBar', () => {
  it('shows utility links', () => {
    render(<TopBar />)
    expect(screen.getByText('My Account')).toBeInTheDocument()
    expect(screen.getByText('Wish List')).toBeInTheDocument()
    expect(screen.getByText('Shopping')).toBeInTheDocument()
    expect(screen.getByText('Cart')).toBeInTheDocument()
    expect(screen.getByText('Checkout')).toBeInTheDocument()
  })

  it('shows country and phone info', () => {
    render(<TopBar />)
    expect(screen.getByText('EN')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('renders all main nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('Latest')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Pages')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Riviere')).toBeInTheDocument()
  })

  it('renders search input', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Search products')).toBeInTheDocument()
  })

  it('renders wishlist and cart icons', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Wishlist')).toBeInTheDocument()
    expect(screen.getByLabelText('Shopping cart')).toBeInTheDocument()
  })

  it('renders Sign in button', () => {
    render(<Navbar />)
    expect(screen.getByText('Sign in')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation menu')
    await user.click(toggle)
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()
    await user.click(toggle)
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })

  it('shows dropdown on hover and hides on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const latestLink = screen.getByText('Latest')
    await user.hover(latestLink)
    expect(screen.getByText('Product List')).toBeInTheDocument()
    await user.unhover(latestLink)
    expect(screen.queryByText('Product List')).not.toBeInTheDocument()
  })
})

describe('HeroSlider', () => {
  it('renders hero content', () => {
    render(<HeroSlider />)
    expect(screen.getByText('60% Discount')).toBeInTheDocument()
    expect(screen.getByText(/Winter/)).toBeInTheDocument()
    expect(screen.getByText('Shop Now')).toBeInTheDocument()
  })

  it('has background image', () => {
    render(<HeroSlider />)
    const bg = document.querySelector('[aria-label="Hero banner"]')
    expect(bg).toBeInTheDocument()
  })
})

describe('ShopByCategory', () => {
  it('renders 4 category cards', () => {
    render(<ShopByCategory />)
    expect(screen.getByText("Women's")).toBeInTheDocument()
    expect(screen.getByText('Winter Clothing')).toBeInTheDocument()
    expect(screen.getByText("Men's")).toBeInTheDocument()
    expect(screen.getByText('Accessories')).toBeInTheDocument()
  })

  it('has section heading', () => {
    render(<ShopByCategory />)
    expect(screen.getByText('Shop by Category')).toBeInTheDocument()
  })
})

describe('LatestProducts', () => {
  it('renders product cards', () => {
    render(<LatestProducts />)
    expect(screen.getByText('Winter Jacket')).toBeInTheDocument()
    expect(screen.getByText('$120.00')).toBeInTheDocument()
    expect(screen.getByText('Casual Blazer')).toBeInTheDocument()
    expect(screen.getByText('$95.00')).toBeInTheDocument()
  })

  it('has section heading', () => {
    render(<LatestProducts />)
    expect(screen.getByText('Latest Products')).toBeInTheDocument()
  })
})

describe('BestCollection', () => {
  it('renders featured products', () => {
    render(<BestCollection />)
    expect(screen.getByText('Best Collection of This Month')).toBeInTheDocument()
    expect(screen.getByText('Leather Jacket')).toBeInTheDocument()
    expect(screen.getByText('Wool Coat')).toBeInTheDocument()
    expect(screen.getByText('Cotton Shirt')).toBeInTheDocument()
  })

  it('renders promo image', () => {
    render(<BestCollection />)
    const promo = screen.getByAltText('Featured collection promotion')
    expect(promo).toBeInTheDocument()
  })
})

describe('ShopMethods', () => {
  it('renders 3 features', () => {
    render(<ShopMethods />)
    expect(screen.getByText('Free Shipping')).toBeInTheDocument()
    expect(screen.getByText('Secure Payment')).toBeInTheDocument()
    expect(screen.getByText('Returns & Exchange')).toBeInTheDocument()
  })

  it('has descriptions', () => {
    render(<ShopMethods />)
    expect(screen.getByText(/On orders over \$50/)).toBeInTheDocument()
  })
})

describe('Gallery', () => {
  it('renders 5 images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
  })

  it('has gallery label', () => {
    render(<Gallery />)
    expect(screen.getByLabelText('Gallery')).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('renders 4 columns', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('New Products')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
    expect(screen.getByLabelText('Website')).toBeInTheDocument()
  })

  it('has Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Riviere\. All rights reserved/)).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })
})
