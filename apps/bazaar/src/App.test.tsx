import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the Bazaar page with hero content', () => {
    render(<App />)
    expect(screen.getByText('Bazaar')).toBeInTheDocument()
    expect(screen.getByText("Men's")).toBeInTheDocument()
    expect(screen.getByText('Jeans')).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Bazaar — Fashion E-Commerce Template')
  })
})

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<App />)
    expect(screen.getByText('Bazaar')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^shop$/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /blog/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /about/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /contact/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('displays cart icon with item count', () => {
    render(<App />)
    expect(screen.getByText(/Cart \[0\]/)).toBeInTheDocument()
  })

  it('has a mobile menu toggle button', () => {
    render(<App />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })
})

describe('Hero Slider', () => {
  it('renders hero section with first slide', () => {
    render(<App />)
    expect(screen.getByText("Men's")).toBeInTheDocument()
    expect(screen.getByText('Jeans')).toBeInTheDocument()
    expect(screen.getByText('Collection')).toBeInTheDocument()
  })

  it('renders Shop Collection buttons', () => {
    render(<App />)
    const buttons = screen.getAllByText('Shop Collection')
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })

  it('has next/prev navigation buttons', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
  })

  it('advances to next slide on next button click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    // The slide changed — "Huge" is on slide 2 (may also appear elsewhere)
    expect(screen.getAllByText('Huge').length).toBeGreaterThanOrEqual(1)
  })

  it('goes to previous slide on prev button click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /previous slide/i }))
    // The slide changed — "up to 30% off" is on slide 3
    expect(screen.getAllByText(/30%/).length).toBeGreaterThanOrEqual(1)
  })
})

describe('Featured Products', () => {
  it('renders featured product cards', () => {
    render(<App />)
    expect(screen.getByText(/Fashion/)).toBeInTheDocument()
    expect(screen.getByText(/New Arrival/)).toBeInTheDocument()
    expect(screen.getAllByText('Sale').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Shoes/)).toBeInTheDocument()
  })
})

describe('New Arrivals', () => {
  it('renders section heading', () => {
    render(<App />)
    expect(screen.getByText('New Arrival')).toBeInTheDocument()
  })

  it('renders product cards with prices', () => {
    render(<App />)
    const prices = screen.getAllByText('$300.00')
    expect(prices.length).toBeGreaterThanOrEqual(1)
  })

  it('renders New tags on products', () => {
    render(<App />)
    const newTags = screen.getAllByText('New')
    expect(newTags.length).toBeGreaterThanOrEqual(1)
  })
})

describe('Promo Section', () => {
  it('renders the 45% off sale promo', () => {
    render(<App />)
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('Off')).toBeInTheDocument()
  })

  it('renders Shop Now button', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /shop now/i })).toBeInTheDocument()
  })

  it('renders Read more button', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })
})

describe('Our Products', () => {
  it('renders section heading', () => {
    render(<App />)
    expect(screen.getByText('Our Products')).toBeInTheDocument()
  })

  it('renders Sale tags on discounted products', () => {
    render(<App />)
    const saleTags = screen.getAllByText('Sale')
    expect(saleTags.length).toBeGreaterThanOrEqual(1)
  })
})

describe('Testimonials', () => {
  it('renders testimonial quotes', () => {
    render(<App />)
    expect(screen.getByText(/Alysha Myers/)).toBeInTheDocument()
    expect(screen.getByText(/James Fisher/)).toBeInTheDocument()
    expect(screen.getByText(/Jacob Webb/)).toBeInTheDocument()
  })

  it('renders section heading', () => {
    render(<App />)
    expect(screen.getByText(/Our Satisfied Customer says/)).toBeInTheDocument()
  })
})

describe('Blog', () => {
  it('renders blog section heading', () => {
    render(<App />)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
  })

  it('renders blog card titles', () => {
    render(<App />)
    const articles = screen.getAllByText('Openning Branches')
    expect(articles.length).toBe(3)
  })

  it('renders blog card authors', () => {
    render(<App />)
    const authors = screen.getAllByText('Noah Henderson')
    expect(authors.length).toBe(3)
  })
})

describe('Newsletter', () => {
  it('renders newsletter heading', () => {
    render(<App />)
    expect(screen.getByText(/Sign Up for a Newsletter/)).toBeInTheDocument()
  })

  it('renders email input and subscribe button', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('allows typing in the email input', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('clears email on form submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('')
  })
})

describe('Footer', () => {
  it('renders About Bazaar column', () => {
    render(<App />)
    expect(screen.getByText('About Bazaar')).toBeInTheDocument()
  })

  it('renders Customer Care column', () => {
    render(<App />)
    expect(screen.getByText('Customer Care')).toBeInTheDocument()
  })

  it('renders Information column', () => {
    render(<App />)
    expect(screen.getByText('Information')).toBeInTheDocument()
  })

  it('renders News column', () => {
    render(<App />)
    expect(screen.getByText('News')).toBeInTheDocument()
  })

  it('renders Contact Information column', () => {
    render(<App />)
    expect(screen.getByText('Contact Information')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<App />)
    expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/dribbble/i)).toBeInTheDocument()
  })

  it('renders copyright with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})

describe('Back to Top', () => {
  it('renders back to top button', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /back to top/i })).toBeInTheDocument()
  })
})
