import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo with link to home', () => {
    render(<Footer />)
    const logo = screen.getByRole('link', { name: /nectar home/i })
    expect(logo).toHaveAttribute('href', '#home')
  })

  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Nectar')).toBeInTheDocument()
  })

  it('renders the about text', () => {
    render(<Footer />)
    expect(screen.getByText(/professional construction services/i)).toBeInTheDocument()
  })

  it('renders social link icons', () => {
    render(<Footer />)
    const socialLinks = screen.getAllByRole('link', { name: /follow us on/i })
    expect(socialLinks).toHaveLength(4)
  })

  it('renders social links with correct hrefs', () => {
    render(<Footer />)
    const fbLinks = screen.getAllByRole('link', { name: /follow us on facebook/i })
    fbLinks.forEach((link) => expect(link).toHaveAttribute('href', '#facebook'))
    const twLinks = screen.getAllByRole('link', { name: /follow us on twitter/i })
    twLinks.forEach((link) => expect(link).toHaveAttribute('href', '#twitter'))
    const liLinks = screen.getAllByRole('link', { name: /follow us on linkedin/i })
    liLinks.forEach((link) => expect(link).toHaveAttribute('href', '#linkedin'))
    const igLinks = screen.getAllByRole('link', { name: /follow us on instagram/i })
    igLinks.forEach((link) => expect(link).toHaveAttribute('href', '#instagram'))
  })

  it('renders the Services heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
  })

  it('renders all 6 services', () => {
    render(<Footer />)
    expect(screen.getByText('Building Construction')).toBeInTheDocument()
    expect(screen.getByText('Home Renovation')).toBeInTheDocument()
    expect(screen.getByText('Interior Design')).toBeInTheDocument()
    expect(screen.getByText('Project Management')).toBeInTheDocument()
    expect(screen.getByText('Consulting Services')).toBeInTheDocument()
    expect(screen.getByText('Maintenance & Repair')).toBeInTheDocument()
  })

  it('renders services with correct links', () => {
    render(<Footer />)
    const serviceNames = [
      'Building Construction',
      'Home Renovation',
      'Interior Design',
      'Project Management',
      'Consulting Services',
      'Maintenance & Repair',
    ]
    serviceNames.forEach((name) => {
      const link = screen.getByRole('link', { name })
      expect(link).toHaveAttribute('href', '#services')
    })
  })

  it('renders the Recent Blog heading', () => {
    render(<Footer />)
    const headings = screen.getAllByRole('heading', { name: /recent blog/i })
    expect(headings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders recent blog posts', () => {
    render(<Footer />)
    expect(screen.getByText('Modern Construction Trends to Watch')).toBeInTheDocument()
    expect(screen.getByText('Tips for Home Renovation Success')).toBeInTheDocument()
  })

  it('renders recent blog post images', () => {
    render(<Footer />)
    expect(
      screen.getByRole('img', { name: 'Modern Construction Trends to Watch' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Tips for Home Renovation Success' }),
    ).toBeInTheDocument()
  })

  it('renders the Newsletter heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
  })

  it('renders newsletter subscription text', () => {
    render(<Footer />)
    expect(screen.getByText(/subscribe to our newsletter/i)).toBeInTheDocument()
  })

  it('renders newsletter form with aria-label', () => {
    render(<Footer />)
    expect(screen.getByRole('form', { name: /newsletter subscription/i })).toBeInTheDocument()
  })

  it('renders email input in newsletter form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Footer />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders the copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Nectar/)).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders the newsletter form sr-only label', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('allows typing in email input', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByPlaceholderText('Your email')
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('submits newsletter form without page reload', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const form = screen.getByRole('form', { name: /newsletter subscription/i })
    const emailInput = screen.getByPlaceholderText('Your email')
    await user.type(emailInput, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(form).toBeInTheDocument()
  })

  it('renders social link first letters', () => {
    render(<Footer />)
    expect(screen.getAllByText('F').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('T').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('L').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('I').length).toBeGreaterThanOrEqual(1)
  })

  it('renders service arrow indicators', () => {
    render(<Footer />)
    const arrows = screen.getAllByText('›')
    expect(arrows).toHaveLength(6)
  })

  it('renders the logo SVG with aria-hidden', () => {
    render(<Footer />)
    const logo = screen.getByRole('link', { name: /nectar home/i })
    const svg = logo.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the subscribe button SVG icon with aria-hidden', () => {
    render(<Footer />)
    const subscribeButton = screen.getByRole('button', { name: /subscribe/i })
    const svg = subscribeButton.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders recent blog links to #blog', () => {
    render(<Footer />)
    const blogLinks = screen.getAllByRole('link', {
      name: /modern construction trends|tips for home renovation/i,
    })
    blogLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '#blog')
    })
  })

  it('renders decorative brand dividers in all columns', () => {
    const { container } = render(<Footer />)
    const dividers = container.querySelectorAll('[aria-hidden="true"]')
    expect(dividers.length).toBeGreaterThanOrEqual(8)
  })
})
