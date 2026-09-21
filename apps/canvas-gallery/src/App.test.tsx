import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders all sections in correct order', () => {
    render(<App />)
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    // Navbar
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    // Hero
    expect(screen.getByText(/Jesse/)).toBeInTheDocument()
    // About
    expect(screen.getByText(/20\+ Years/)).toBeInTheDocument()
    // Gallery tabs
    expect(screen.getByRole('tab', { name: 'All' })).toBeInTheDocument()
    // Testimonials
    expect(screen.getByText(/Success Agency is, hands down/)).toBeInTheDocument()
    // CTA
    expect(screen.getByText('Do You Want To Be A Model?')).toBeInTheDocument()
    // Blog
    expect(screen.getByText('Latest News')).toBeInTheDocument()
    // Footer
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<App />)
    const nav = screen.getByRole('navigation')
    expect(within(nav).getByText('CanvasGallery')).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Project' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Models' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Casting' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('has a search icon button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('opens search modal on search icon click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(screen.getByPlaceholderText('Search and hit enter...')).toBeInTheDocument()
  })

  it('closes search modal on close button click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(screen.getByPlaceholderText('Search and hit enter...')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByPlaceholderText('Search and hit enter...')).not.toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })
})

describe('HeroSlider', () => {
  it('displays model name and subtitle', () => {
    render(<App />)
    expect(screen.getByText(/Jesse/)).toBeInTheDocument()
    expect(screen.getByText('Star Model 2019')).toBeInTheDocument()
  })

  it('has Model details buttons', () => {
    render(<App />)
    const buttons = screen.getAllByRole('link', { name: /model details/i })
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })

  it('displays social media links', () => {
    render(<App />)
    const socialLinks = screen.getAllByRole('link', { name: /facebook|twitter|instagram|youtube/i })
    expect(socialLinks.length).toBeGreaterThan(0)
  })
})

describe('About', () => {
  it('displays heading', () => {
    render(<App />)
    expect(screen.getByText(/20\+ Years Practical Experience/)).toBeInTheDocument()
  })

  it('shows thumbnail images', () => {
    render(<App />)
    const allImages = screen.getAllByRole('img')
    expect(allImages.length).toBeGreaterThanOrEqual(2)
  })

  it('shows 4 service cards', () => {
    render(<App />)
    expect(screen.getByText('Fashion Shows')).toBeInTheDocument()
    expect(screen.getByText('Special Events')).toBeInTheDocument()
    expect(screen.getByText('Commercial Photo')).toBeInTheDocument()
    expect(screen.getByText('Model School')).toBeInTheDocument()
  })
})

describe('Gallery', () => {
  it('shows filter tabs', () => {
    render(<App />)
    expect(screen.getByRole('tab', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Model' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Actor' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Singer' })).toBeInTheDocument()
  })

  it('has All tab active by default', () => {
    render(<App />)
    expect(screen.getByRole('tab', { name: 'All' })).toHaveAttribute('aria-selected', 'true')
  })

  it('switches tabs and filters models', async () => {
    const user = userEvent.setup()
    render(<App />)
    // All shows all models
    expect(screen.getByText('Willie Figueroa')).toBeInTheDocument()
    expect(screen.getByText('Della Martinez')).toBeInTheDocument()

    // Switch to Model tab
    await user.click(screen.getByRole('tab', { name: 'Model' }))
    expect(screen.getByRole('tab', { name: 'Model' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'All' })).toHaveAttribute('aria-selected', 'false')
    // Only models should show
    expect(screen.getByText('Willie Figueroa')).toBeInTheDocument()
    expect(screen.queryByText('Della Martinez')).not.toBeInTheDocument()

    // Switch to Actor tab
    await user.click(screen.getByRole('tab', { name: 'Actor' }))
    expect(screen.getByText('Della Martinez')).toBeInTheDocument()
    expect(screen.queryByText('Willie Figueroa')).not.toBeInTheDocument()

    // Switch to Singer tab
    await user.click(screen.getByRole('tab', { name: 'Singer' }))
    expect(screen.getByText('Louise Ray')).toBeInTheDocument()
  })

  it('displays model items', () => {
    render(<App />)
    expect(screen.getByText('Willie Figueroa')).toBeInTheDocument()
    expect(screen.getByText('Della Martinez')).toBeInTheDocument()
  })
})

describe('Testimonials', () => {
  it('displays client quotes', () => {
    render(<App />)
    expect(screen.getByText(/Success Agency is, hands down/)).toBeInTheDocument()
  })

  it('shows client names and roles', () => {
    render(<App />)
    expect(screen.getByText('Rodney Williams')).toBeInTheDocument()
    expect(screen.getByText('Producer')).toBeInTheDocument()
  })

  it('shows star ratings', () => {
    render(<App />)
    const stars = screen.getAllByLabelText('Star')
    expect(stars.length).toBe(5)
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByText('Rodney Williams')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Nazrul Islam')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Click next first to move away from first
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Nazrul Islam')).toBeInTheDocument()
    // Click prev to go back
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Rodney Williams')).toBeInTheDocument()
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Navigate to last
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Williams Rodney')).toBeInTheDocument()
    // Next should wrap to first
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Rodney Williams')).toBeInTheDocument()
  })

  it('wraps around from first to last on prev', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Already on first, prev should wrap to last
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Williams Rodney')).toBeInTheDocument()
  })

  it('selects testimonial via thumbnail click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /view nazrul islam/i }))
    expect(screen.getByText('Nazrul Islam')).toBeInTheDocument()
  })
})

describe('CtaBanner', () => {
  it('renders heading and contact button', () => {
    render(<App />)
    expect(screen.getByText('Do You Want To Be A Model?')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })
})

describe('Blog', () => {
  it('shows section heading', () => {
    render(<App />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('displays blog post cards', () => {
    render(<App />)
    expect(screen.getByText('How To Use Eye Shadow Like The Stars')).toBeInTheDocument()
    const ironPosts = screen.getAllByText('What Curling Irons Are The Best Ones')
    expect(ironPosts.length).toBe(2)
    expect(screen.getByText('How To Save Money On Beauty Products')).toBeInTheDocument()
  })

  it('shows post dates', () => {
    render(<App />)
    const dates = screen.getAllByText('30 Aug 2018')
    expect(dates.length).toBeGreaterThanOrEqual(1)
  })
})

describe('Footer', () => {
  it('renders three columns', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText('Our Link')).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
  })

  it('shows contact info', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText('+01-3-8888-6868')).toBeInTheDocument()
    expect(within(footer).getByText(/40 Baria Sreet/)).toBeInTheDocument()
  })

  it('shows social links', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    const socialLinks = within(footer).getAllByRole('link', {
      name: /facebook|twitter|instagram|youtube/i,
    })
    expect(socialLinks.length).toBeGreaterThan(0)
  })

  it('links to Component Dock', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('does not reference ColorLib', () => {
    render(<App />)
    const allText = document.body.textContent || ''
    expect(allText.toLowerCase()).not.toContain('colorlib')
  })
})
