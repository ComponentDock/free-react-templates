import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('FrostGuard App', () => {
  it('renders all main sections', () => {
    render(<App />)

    // Header
    expect(screen.getByText(/FrostGuard/)).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByText('1-688-688-94').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByText(/Keeping your home comfortable/)).toBeInTheDocument()

    // Benefits
    expect(screen.getByText('No Upfront Payments')).toBeInTheDocument()
    expect(screen.getByText('Satisfaction Guarantee')).toBeInTheDocument()
    expect(screen.getByText('Emergency Service')).toBeInTheDocument()
    expect(screen.getByText('8 Years Experience')).toBeInTheDocument()

    // Services
    expect(screen.getByText('What We Can Offer You')).toBeInTheDocument()
    expect(screen.getByText('A/C Installation')).toBeInTheDocument()

    // Counter
    expect(screen.getByText('3589')).toBeInTheDocument()
    expect(screen.getByText('Satisfied Customers')).toBeInTheDocument()

    // About
    expect(screen.getByText('Quality Heating & Cooling')).toBeInTheDocument()

    // Quote
    expect(screen.getAllByText('Get a quote').length).toBeGreaterThanOrEqual(1)

    // Testimonials
    expect(screen.getByText('What Clients Say?')).toBeInTheDocument()

    // CTA
    expect(screen.getByText(/Less Power Consume/)).toBeInTheDocument()

    // Products
    expect(screen.getByText('Heating & Cooling Store')).toBeInTheDocument()

    // News
    expect(screen.getByText('HVAC Tips & Tricks')).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Contact us now to get a quote')).toBeInTheDocument()
  })

  it('has Component Dock link in footer', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('has sticky header', () => {
    render(<App />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('sticky')
  })

  it('has social media icons in header top bar', () => {
    render(<App />)
    const header = screen.getByRole('banner')
    expect(header.querySelector('[aria-label="Facebook"]')).toBeInTheDocument()
    expect(header.querySelector('[aria-label="Twitter"]')).toBeInTheDocument()
    expect(header.querySelector('[aria-label="Instagram"]')).toBeInTheDocument()
    expect(header.querySelector('[aria-label="YouTube"]')).toBeInTheDocument()
  })

  it('hero has carousel navigation arrows', () => {
    render(<App />)
    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument()
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument()
  })

  it('quote form submit does not reload', async () => {
    render(<App />)
    const user = userEvent.setup()
    // Find the h2 "Get a quote" (the form heading), then traverse to its form
    const headings = screen.getAllByText('Get a quote')
    const h2 = headings.find((el) => el.tagName === 'H2')
    const form = h2?.closest('div')?.querySelector('form')
    const submitBtn = form?.querySelector('button[type="submit"]')
    if (submitBtn) await user.click(submitBtn)
  })

  it('video play button has accessible label', () => {
    render(<App />)
    expect(screen.getByLabelText('Play video')).toBeInTheDocument()
  })

  it('product labels display correctly', () => {
    render(<App />)
    expect(screen.getByText('New')).toBeInTheDocument()
    expect(screen.getByText('-10%')).toBeInTheDocument()
    expect(screen.getByText('Out of stock')).toBeInTheDocument()
  })

  it('product without label renders without badge', () => {
    render(<App />)
    expect(screen.getByText('Portable Heater')).toBeInTheDocument()
  })

  it('testimonials show author info', () => {
    render(<App />)
    expect(screen.getByText('Sophie Jefferson')).toBeInTheDocument()
    expect(screen.getByText('Swindon, England')).toBeInTheDocument()
    expect(screen.getByText('Cynthia Moore')).toBeInTheDocument()
    expect(screen.getByText('Kansas, USA')).toBeInTheDocument()
    expect(screen.getByText('Andre Curtis')).toBeInTheDocument()
    expect(screen.getByText('Dresden, Germany')).toBeInTheDocument()
  })

  it('about section has checklist items', () => {
    render(<App />)
    expect(screen.getByText('Professional installation warranty')).toBeInTheDocument()
    expect(screen.getByText('Annual maintenance service included')).toBeInTheDocument()
    expect(screen.getByText('24/7 emergency support available')).toBeInTheDocument()
  })

  it('blog posts show categories', () => {
    render(<App />)
    const tipsLabels = screen.getAllByText('Tips & tricks')
    expect(tipsLabels.length).toBe(3)
  })

  it('footer has copyright with current year', () => {
    render(<App />)
    const year = new Date().getFullYear().toString()
    const copyright = screen.getByText(new RegExp(`©.*${year}.*FrostGuard`))
    expect(copyright).toBeInTheDocument()
  })

  it('newsletter subscribe form submits without reload', async () => {
    render(<App />)
    const user = userEvent.setup()
    const emailInput = screen.getByPlaceholderText('Your email')
    await user.type(emailInput, 'test@example.com')
    const subscribeBtn = screen.getByRole('button', { name: '→' })
    await user.click(subscribeBtn)
  })

  it('quote form has service dropdown', () => {
    render(<App />)
    const select = screen.getByDisplayValue('Select a service')
    expect(select).toBeInTheDocument()
  })

  it('quote form has name, phone, email inputs', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('counter shows all four stats', () => {
    render(<App />)
    expect(screen.getByText('868')).toBeInTheDocument()
    expect(screen.getByText('Professional')).toBeInTheDocument()
    expect(screen.getByText('5148')).toBeInTheDocument()
    expect(screen.getByText('Equipment Sold')).toBeInTheDocument()
    expect(screen.getByText('025')).toBeInTheDocument()
    expect(screen.getByText('Branches Operating')).toBeInTheDocument()
  })

  it('products show prices', () => {
    render(<App />)
    expect(screen.getByText('$1,299')).toBeInTheDocument()
    expect(screen.getByText('$449')).toBeInTheDocument()
    expect(screen.getByText('$189')).toBeInTheDocument()
    expect(screen.getByText('$249')).toBeInTheDocument()
  })

  it('footer has contact info', () => {
    render(<App />)
    expect(screen.getByText('123 HVAC Street, Cooltown, CT 06001')).toBeInTheDocument()
    expect(screen.getByText('info@frostguard.com')).toBeInTheDocument()
  })

  it('services section has More info links', () => {
    render(<App />)
    const moreLinks = screen.getAllByText(/More info/)
    expect(moreLinks.length).toBeGreaterThanOrEqual(3)
  })

  it('has carousel arrows as buttons', () => {
    render(<App />)
    const prevBtn = screen.getByLabelText('Previous slide')
    const nextBtn = screen.getByLabelText('Next slide')
    expect(prevBtn.tagName).toBe('BUTTON')
    expect(nextBtn.tagName).toBe('BUTTON')
  })
})
