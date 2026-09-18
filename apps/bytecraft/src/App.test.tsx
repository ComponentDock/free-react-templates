import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders all sections with correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('ByteCraft — Digital Agency Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the hero with headline and CTA', () => {
    render(<App />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Crafting Digital Agency/)
    expect(screen.getByRole('link', { name: 'Explore Us' })).toBeInTheDocument()
  })

  it('renders the about section with three service cards', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'About Our Digital Agency' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('Web Design').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('App Development')).toBeInTheDocument()
    expect(screen.getByText('Brand Strategy')).toBeInTheDocument()
    expect(screen.getAllByText('Explore').length).toBeGreaterThanOrEqual(3)
  })

  it('renders the services section with four features', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us' })).toBeInTheDocument()
    expect(screen.getByText('Unique Design')).toBeInTheDocument()
    expect(screen.getByText('Appropriate UX')).toBeInTheDocument()
    expect(screen.getByText('Perfect Visual')).toBeInTheDocument()
    expect(screen.getByText('Different Layout')).toBeInTheDocument()
  })

  it('renders the portfolio section with filter tabs', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 2, name: 'Remarkable Works' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Branding' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Web Design' })).toBeInTheDocument()
  })

  it('renders the team section with four members', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 2, name: 'Creative People' })).toBeInTheDocument()
    // Use getAllByText since names may appear in alt text and aria-labels too
    expect(screen.getAllByText('Alex Morgan').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Sarah Chen').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Marcus Reid').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Elena Voss').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the studio/parallax section', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 2, name: /A Digital Studio/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('renders the pricing section with three plans', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 2, name: 'Pricing Plans' })).toBeInTheDocument()
    expect(screen.getByText('Standard')).toBeInTheDocument()
    expect(screen.getByText('Business')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getAllByText('Purchase').length).toBeGreaterThanOrEqual(3)
  })

  it('renders the Instagram feed strip', () => {
    render(<App />)

    const instImgs = screen.getAllByAltText(/Instagram feed/)
    expect(instImgs.length).toBe(6)
  })

  it('renders the blog section with four posts', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 2, name: 'Latest From Blog' })).toBeInTheDocument()
    expect(screen.getByText('The Future of Digital Design')).toBeInTheDocument()
    expect(screen.getByText('Building Scalable Web Applications')).toBeInTheDocument()
    expect(screen.getAllByText('Details').length).toBeGreaterThanOrEqual(4)
  })

  it('renders the contact section with form fields', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 2, name: 'Get In Touch' })).toBeInTheDocument()
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('renders the CTA bar', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Not Yet Convinced/,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()

    const cdLink = within(footer).getByRole('link', {
      name: /Component Dock/,
    })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
  })

  it('renders navigation links in the footer', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText('About Agency')).toBeInTheDocument()
    expect(within(footer).getByText('Navigation Links')).toBeInTheDocument()
    expect(within(footer).getByText('Newsletter')).toBeInTheDocument()
  })

  it('submits newsletter form in footer without page reload', async () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    const emailInput = within(footer).getByLabelText('Email for newsletter')
    await userEvent.type(emailInput, 'test@example.com')
    const subscribeBtn = within(footer).getByRole('button', {
      name: 'Subscribe',
    })
    await userEvent.click(subscribeBtn)
    expect(emailInput).toHaveValue('test@example.com')
  })
})

describe('Navbar', () => {
  it('toggles search input on search button click', async () => {
    render(<App />)

    const searchBtn = screen.getByRole('button', { name: 'Toggle search' })
    expect(screen.queryByLabelText('Search')).not.toBeInTheDocument()

    await userEvent.click(searchBtn)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()

    await userEvent.click(searchBtn)
    expect(screen.queryByLabelText('Search')).not.toBeInTheDocument()
  })

  it('toggles mobile menu on mobile menu button click', async () => {
    render(<App />)

    const menuBtn = screen.getByRole('button', {
      name: 'Toggle mobile menu',
    })
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await userEvent.click(menuBtn)
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    await userEvent.click(menuBtn)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('renders social icons in the header (scoped to banner)', () => {
    render(<App />)

    const header = screen.getByRole('banner')
    expect(within(header).getByLabelText('Facebook')).toBeInTheDocument()
    expect(within(header).getByLabelText('Twitter')).toBeInTheDocument()
    expect(within(header).getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})

describe('Portfolio filtering', () => {
  it('filters items when a category tab is clicked', async () => {
    render(<App />)

    const allBtn = screen.getByRole('button', { name: 'All' })
    const brandingBtn = screen.getByRole('button', { name: 'Branding' })

    // All items visible
    const allImgs = screen.getAllByAltText(/Portfolio item/)
    expect(allImgs.length).toBe(6)

    await userEvent.click(brandingBtn)

    // Only branding items visible
    const filteredImgs = screen.getAllByAltText(/Portfolio item/)
    expect(filteredImgs.length).toBe(2)

    // Back to all
    await userEvent.click(allBtn)
    const restoredImgs = screen.getAllByAltText(/Portfolio item/)
    expect(restoredImgs.length).toBe(6)
  })

  it('filters by Web Design category', async () => {
    render(<App />)

    await userEvent.click(screen.getByRole('button', { name: 'Web Design' }))
    const imgs = screen.getAllByAltText(/Portfolio item/)
    expect(imgs.length).toBe(2)
  })

  it('filters by Creative Work category', async () => {
    render(<App />)

    await userEvent.click(screen.getByRole('button', { name: 'Creative Work' }))
    const imgs = screen.getAllByAltText(/Portfolio item/)
    expect(imgs.length).toBe(1)
  })

  it('filters by Image Manipulation category', async () => {
    render(<App />)

    await userEvent.click(screen.getByRole('button', { name: 'Image Manipulation' }))
    const imgs = screen.getAllByAltText(/Portfolio item/)
    expect(imgs.length).toBe(1)
  })
})

describe('Contact form', () => {
  it('prevents default form submission', async () => {
    render(<App />)

    await userEvent.type(screen.getByLabelText('Full Name'), 'John Doe')
    await userEvent.type(screen.getByLabelText('Email'), 'john@example.com')
    await userEvent.type(screen.getByLabelText('Subject'), 'Test')
    await userEvent.type(screen.getByLabelText('Message'), 'Hello')
    await userEvent.click(screen.getByRole('button', { name: 'Send Message' }))

    // Form submission is prevented via e.preventDefault() — no page reload
    expect(screen.getByLabelText('Full Name')).toHaveValue('John Doe')
  })
})

describe('BrandIcon', () => {
  it('renders SVG brand icons in the page', () => {
    const { container } = render(<App />)
    // BrandIcon renders <svg> with fill="currentColor"
    const svgs = container.querySelectorAll('svg[fill="currentColor"]')
    // Navbar has 3 (Facebook, Twitter, LinkedIn), team has 12 (4x3), footer has 3
    expect(svgs.length).toBeGreaterThanOrEqual(3)
  })
})
