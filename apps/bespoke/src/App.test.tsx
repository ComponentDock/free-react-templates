import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { Collections } from './components/Collections'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { BlogPosts } from './components/BlogPosts'
import { Footer } from './components/Footer'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('Bespoke').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Collections').length).toBeGreaterThan(0)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('Blog Posts')).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Bespoke').length).toBeGreaterThan(0)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Collections')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByLabelText('Open menu')
    await user.click(menuBtn)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    const homeLinks = screen.getAllByText('Home')
    // The second "Home" is in the mobile menu
    await user.click(homeLinks[1]!)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})

describe('HeroSlider', () => {
  it('renders initial slide', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Bespoke')).toBeInTheDocument()
    expect(screen.getByText('Presents')).toBeInTheDocument()
  })

  it('navigates to next slide', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText('Creative')).toBeInTheDocument()
    expect(screen.getByText('Design')).toBeInTheDocument()
  })

  it('navigates to previous slide from first', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Previous slide'))
    expect(screen.getByText('Modern')).toBeInTheDocument()
    expect(screen.getByText('Fashion')).toBeInTheDocument()
  })

  it('navigates prev from non-first slide', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Next slide'))
    await user.click(screen.getByLabelText('Previous slide'))
    expect(screen.getByText('Bespoke')).toBeInTheDocument()
    expect(screen.getByText('Presents')).toBeInTheDocument()
  })

  it('wraps to first slide from last', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Next slide'))
    await user.click(screen.getByLabelText('Next slide'))
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText('Bespoke')).toBeInTheDocument()
    expect(screen.getByText('Presents')).toBeInTheDocument()
  })

  it('displays slide counter', () => {
    render(<HeroSlider />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('of')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })
})

describe('Collections', () => {
  it('renders products with names and prices', () => {
    render(<Collections />)
    expect(screen.getByText('Collections')).toBeInTheDocument()
    expect(screen.getByText('Minimal')).toBeInTheDocument()
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('Collecta')).toBeInTheDocument()
    expect(screen.getByText('$21')).toBeInTheDocument()
    expect(screen.getByText('Nine8')).toBeInTheDocument()
    expect(screen.getByText('$38')).toBeInTheDocument()
    expect(screen.getByText('Hut')).toBeInTheDocument()
    expect(screen.getByText('$49')).toBeInTheDocument()
  })

  it('navigates products with prev/next', async () => {
    const user = userEvent.setup()
    render(<Collections />)
    await user.click(screen.getByLabelText('Next products'))
    await user.click(screen.getByLabelText('Previous products'))
  })
})

describe('About', () => {
  it('renders heading and learn more link', () => {
    render(<About />)
    expect(screen.getByText('A Fashion Boutique')).toBeInTheDocument()
    expect(screen.getByText('Learn more')).toBeInTheDocument()
  })
})

describe('Testimonials', () => {
  it('renders testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('Adam Aderson')).toBeInTheDocument()
    expect(screen.getByText('Lukas Devlin')).toBeInTheDocument()
    expect(screen.getByText('Kayla Bryant')).toBeInTheDocument()
  })
})

describe('BlogPosts', () => {
  it('renders blog posts', () => {
    render(<BlogPosts />)
    expect(screen.getByText('Blog Posts')).toBeInTheDocument()
    expect(screen.getByText('Behind the Scenes at Our Latest Shoot')).toBeInTheDocument()
    expect(screen.getByText('Top Trends for the Season')).toBeInTheDocument()
    expect(screen.getByText('How to Style Your Wardrobe')).toBeInTheDocument()
    expect(screen.getByText('The Art of Sustainable Fashion')).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('renders footer with Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Navigations')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})
