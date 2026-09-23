import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('Nimbus App', () => {
  it('renders the full page with all sections', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /Nimbus/i })).toBeInTheDocument()
    expect(screen.getByText('Organize all with Nimbus')).toBeInTheDocument()
    expect(screen.getByText('Our Most Unique Features')).toBeInTheDocument()
    expect(screen.getByText('Powerful User Interface Design')).toBeInTheDocument()
    expect(screen.getByText('Features That Make Us Unique')).toBeInTheDocument()
    expect(screen.getByText('Got Impressed by our features')).toBeInTheDocument()
    expect(screen.getByText(/Watch tutorial/i)).toBeInTheDocument()
    expect(screen.getByText('24/7 Support system')).toBeInTheDocument()
    expect(screen.getByText('Choose the best pricing for you')).toBeInTheDocument()
    expect(screen.getByText('Testimonial from our Clients')).toBeInTheDocument()
    expect(screen.getByText('Latest from our Blog')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('has a navbar with navigation links', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Features/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Price/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Testimonials/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Get Started/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('has a footer with Component Dock link', () => {
    render(<App />)

    const footerLink = screen.getByRole('link', { name: /Component Dock/i })
    expect(footerLink).toBeInTheDocument()
    expect(footerLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('displays pricing plans', () => {
    render(<App />)

    expect(screen.getByText('Real Basic')).toBeInTheDocument()
    expect(screen.getByText('Real Standard')).toBeInTheDocument()
    expect(screen.getByText('Real Ultimate')).toBeInTheDocument()
    expect(screen.getByText('39')).toBeInTheDocument()
    expect(screen.getByText('69')).toBeInTheDocument()
    expect(screen.getByText('99')).toBeInTheDocument()
  })

  it('displays feature cards', () => {
    render(<App />)

    expect(screen.getByText('Stunning Visuals')).toBeInTheDocument()
    expect(screen.getByText('Clean Code')).toBeInTheDocument()
    expect(screen.getByText('Punctuality')).toBeInTheDocument()
  })

  it('displays testimonials', () => {
    render(<App />)

    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
  })

  it('displays blog posts', () => {
    render(<App />)

    expect(screen.getByText('How to Scale Your SaaS Product Effectively')).toBeInTheDocument()
    expect(screen.getByText('The Future of Cloud-Based Platforms')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuBtn = screen.getByRole('button', { name: /Open menu/i })
    await user.click(menuBtn)

    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()

    // Mobile nav items are now buttons
    const mobileHomeBtn = screen.getAllByRole('button', { name: /Home/i })[1]!
    await user.click(mobileHomeBtn)
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu via close button', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /Close menu/i }))
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Get Started button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()

    // Click mobile Get Started button
    const getStartedBtns = screen.getAllByRole('button', { name: /Get Started/i })
    await user.click(getStartedBtns[getStartedBtns.length - 1]!)
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('applies scrolled header style on scroll', async () => {
    const { act } = await import('@testing-library/react')
    render(<App />)

    // Scroll past threshold
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    const header = document.querySelector('header')
    expect(header?.className).toContain('bg-navy/80')
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Nimbus — SaaS Landing Template')
  })

  it('has newsletter form in footer', () => {
    render(<App />)

    const emailInput = screen.getByPlaceholderText('Enter Email')
    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('renders play button in video section', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: /Play video/i })).toBeInTheDocument()
  })

  it('has proper accessibility on social links', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /Facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument()
  })

  it('renders service items with numbered headings', () => {
    render(<App />)

    const serviceHeadings = screen.getAllByText('User Research')
    expect(serviceHeadings.length).toBeGreaterThanOrEqual(2)

    const uiHeadings = screen.getAllByText('User Interface')
    expect(uiHeadings.length).toBeGreaterThanOrEqual(2)

    expect(screen.getByText('User Experience')).toBeInTheDocument()
    expect(screen.getByText('Sketch & Wireframes')).toBeInTheDocument()
  })

  it('has a newsletter form that prevents default submission', async () => {
    const user = userEvent.setup()
    render(<App />)

    const emailInput = screen.getByPlaceholderText('Enter Email')
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')

    const submitBtn = screen.getByRole('button', { name: /Subscribe/i })
    await user.click(submitBtn)
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('shows CTA buttons with correct links', () => {
    render(<App />)

    const ctaLinks = screen.getAllByRole('link', { name: /Get Started/i })
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1)

    const demoLink = screen.getByRole('link', { name: /Request Free Demo/i })
    expect(demoLink).toBeInTheDocument()
  })
})
