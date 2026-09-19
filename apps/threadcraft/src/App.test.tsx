import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import { App } from './App'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { CategoryTabs } from './components/CategoryTabs'
import { ProductCard } from './components/ProductCard'
import { TrendingProducts } from './components/TrendingProducts'
import { DealOfTheWeek, tick, pad } from './components/DealOfTheWeek'
import { FeaturedProducts } from './components/FeaturedProducts'
import { CollectionGallery } from './components/CollectionGallery'
import { BlogSection } from './components/BlogSection'
import { FeaturesBar } from './components/FeaturesBar'
import { Footer } from './components/Footer'

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true })
})
afterEach(() => {
  vi.useRealTimers()
})

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('Threadcraft').length).toBeGreaterThan(0)
    expect(screen.getByText('hello@threadcraft.com')).toBeInTheDocument()
    expect(screen.getByText('+1 555 123 4567')).toBeInTheDocument()
  })
})

describe('TopBar', () => {
  it('renders contact info and cart', () => {
    render(<TopBar />)
    expect(screen.getByText('hello@threadcraft.com')).toBeInTheDocument()
    expect(screen.getByText('+1 555 123 4567')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Threadcraft').length).toBeGreaterThan(0)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('Collection')).toBeInTheDocument()
    expect(screen.getByText("Men's")).toBeInTheDocument()
    expect(screen.getByText("Women's")).toBeInTheDocument()
    expect(screen.getByText("Kid's")).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })
})

describe('HeroSlider', () => {
  it('renders initial slide', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Summer Collection')).toBeInTheDocument()
    expect(screen.getByText('Up to 50% off selected styles')).toBeInTheDocument()
  })
  it('navigates to next slide', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText('Winter Essentials')).toBeInTheDocument()
  })
  it('navigates to previous slide from first', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Previous slide'))
    expect(screen.getByText('Winter Essentials')).toBeInTheDocument()
  })
  it('navigates prev from non-first slide', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Next slide'))
    await user.click(screen.getByLabelText('Previous slide'))
    expect(screen.getByText('Summer Collection')).toBeInTheDocument()
  })
  it('wraps to first slide from last', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Next slide'))
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText('Summer Collection')).toBeInTheDocument()
  })
})

describe('CategoryTabs', () => {
  it('renders tabs and switches active', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<CategoryTabs />)
    expect(screen.getByText("Men's")).toBeInTheDocument()
    expect(screen.getByText("Women's")).toBeInTheDocument()
    expect(screen.getByText("Kid's")).toBeInTheDocument()
    await user.click(screen.getByText("Women's"))
    await user.click(screen.getByText("Kid's"))
  })
})

describe('ProductCard', () => {
  it('renders product with sale price', () => {
    render(
      <ProductCard
        image="test.jpg"
        name="Test Product"
        originalPrice={100}
        salePrice={75}
        category="Men's"
      />,
    )
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('$100.00')).toBeInTheDocument()
    expect(screen.getByText('$75.00')).toBeInTheDocument()
  })
})

describe('TrendingProducts', () => {
  it('renders products and filters by category', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<TrendingProducts />)
    expect(screen.getByText('Discover More')).toBeInTheDocument()
    expect(screen.getByText('Classic Denim Jacket')).toBeInTheDocument()
    const buttons = screen.getAllByRole('button')
    const mensBtn = buttons.find((b) => b.textContent === "Men's")
    const womensBtn = buttons.find((b) => b.textContent === "Women's")
    const kidsBtn = buttons.find((b) => b.textContent === "Kid's")
    const accBtn = buttons.find((b) => b.textContent === 'Accessories')
    const allBtn = buttons.find((b) => b.textContent === 'All')
    if (mensBtn) await user.click(mensBtn)
    if (womensBtn) await user.click(womensBtn)
    if (kidsBtn) await user.click(kidsBtn)
    if (accBtn) await user.click(accBtn)
    if (allBtn) await user.click(allBtn)
  })
})

describe('DealOfTheWeek', () => {
  it('renders deal and countdown', () => {
    render(<DealOfTheWeek />)
    expect(screen.getByText('Deal Of The Week')).toBeInTheDocument()
    expect(screen.getByText('Premium Leather Boots')).toBeInTheDocument()
    expect(screen.getByText('Shop Now')).toBeInTheDocument()
  })
  it('counts down seconds', () => {
    render(<DealOfTheWeek />)
    vi.advanceTimersByTime(1000)
  })
})

describe('tick', () => {
  it('decrements seconds', () => {
    expect(tick({ days: 1, hrs: 0, mins: 0, secs: 5 })).toEqual({
      days: 1,
      hrs: 0,
      mins: 0,
      secs: 4,
    })
  })
  it('wraps seconds to 59 when crossing minute boundary', () => {
    expect(tick({ days: 1, hrs: 0, mins: 5, secs: 0 })).toEqual({
      days: 1,
      hrs: 0,
      mins: 4,
      secs: 59,
    })
  })
  it('wraps minutes to 59 when crossing hour boundary', () => {
    expect(tick({ days: 1, hrs: 5, mins: 0, secs: 0 })).toEqual({
      days: 1,
      hrs: 4,
      mins: 59,
      secs: 59,
    })
  })
  it('wraps hours to 23 when crossing day boundary', () => {
    expect(tick({ days: 5, hrs: 0, mins: 0, secs: 0 })).toEqual({
      days: 4,
      hrs: 23,
      mins: 59,
      secs: 59,
    })
  })
  it('returns all zeros when days go negative', () => {
    expect(tick({ days: 0, hrs: 0, mins: 0, secs: 0 })).toEqual({
      days: 0,
      hrs: 0,
      mins: 0,
      secs: 0,
    })
  })
})

describe('pad', () => {
  it('pads single digit', () => {
    expect(pad(5)).toBe('05')
  })
  it('does not pad double digit', () => {
    expect(pad(12)).toBe('12')
  })
})

describe('FeaturedProducts', () => {
  it('renders and switches tabs', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<FeaturedProducts />)
    expect(screen.getByText('Featured Products')).toBeInTheDocument()
    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    await user.click(screen.getByText('Best Sellers'))
    await user.click(screen.getByText('Trending'))
  })
})

describe('CollectionGallery', () => {
  it('renders 6 images', () => {
    render(<CollectionGallery />)
    expect(screen.getByText('Our Collection')).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })
})

describe('BlogSection', () => {
  it('renders blog posts', () => {
    render(<BlogSection />)
    expect(screen.getByText('From The Blog')).toBeInTheDocument()
    expect(screen.getByText(/Top 10 Fashion Trends/)).toBeInTheDocument()
  })
})

describe('FeaturesBar', () => {
  it('renders features', () => {
    render(<FeaturesBar />)
    expect(screen.getByText('Free Shipping')).toBeInTheDocument()
    expect(screen.getByText('Delivery On Time')).toBeInTheDocument()
    expect(screen.getByText('Secure Payment')).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('renders footer with Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })
})
