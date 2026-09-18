import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the page title', () => {
    render(<App />)
    expect(document.title).toBe('Clarity — Professional Coaching Template')
  })

  it('renders the navbar with logo and navigation links', () => {
    render(<App />)
    expect(screen.getByText('Clarity')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByText(/I'm Professional/)).toBeInTheDocument()
    expect(screen.getByText('Contact Me', { selector: 'a' })).toBeInTheDocument()
  })

  it('rotates the hero role text after interval', () => {
    render(<App />)
    expect(screen.getByText('Coach')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByText('Speaker')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByText('Mentor')).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<App />)
    expect(screen.getByText('Welcome To My Website')).toBeInTheDocument()
    expect(screen.getByText('Means of Living')).toBeInTheDocument()
    expect(screen.getByText('Transform Lives')).toBeInTheDocument()
  })

  it('renders the training section', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 2, name: 'Life Coach Training' })
    expect(heading).toBeInTheDocument()
  })

  it('renders the testimonials section', () => {
    render(<App />)
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Ricky Fisher')).toBeInTheDocument()
    expect(screen.getByText('Ken Davis')).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<App />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Online Coaching')).toBeInTheDocument()
  })

  it('renders the blog section', () => {
    render(<App />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getAllByText('Read More..')).toHaveLength(4)
  })

  it('renders the contact section with form', () => {
    render(<App />)
    const contactHeading = screen.getByRole('heading', { level: 2, name: 'Contact Me' })
    expect(contactHeading).toBeInTheDocument()
    expect(screen.getByPlaceholderText('First name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Write your message.')).toBeInTheDocument()
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('About Clarity')).toBeInTheDocument()
    const cdLink = screen.getByText('Component Dock')
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('toggles mobile menu on button click', async () => {
    vi.useRealTimers()
    const user = userEvent.setup()
    render(<App />)
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    vi.useRealTimers()
    const user = userEvent.setup()
    render(<App />)
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const aboutLink = mobileNav.querySelector('a[href="#about-section"]') as HTMLElement
    await user.click(aboutLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('allows typing in the contact form', async () => {
    vi.useRealTimers()
    const user = userEvent.setup()
    render(<App />)
    const firstNameInput = screen.getByPlaceholderText('First name')
    await user.type(firstNameInput, 'John')
    expect(firstNameInput).toHaveValue('John')
  })

  it('submits the contact form', async () => {
    vi.useRealTimers()
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByPlaceholderText('First name'), 'John')
    await user.type(screen.getByPlaceholderText('Last name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email address'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Write your message.'), 'Hello')
    await user.click(screen.getByText('Send Message'))
    expect(screen.getByText(/Thank you for your message/)).toBeInTheDocument()
  })

  it('renders footer social links', () => {
    render(<App />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders footer quick links', () => {
    render(<App />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getAllByText('Our Training').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Services').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Testimonials').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('allows typing in newsletter email input', async () => {
    vi.useRealTimers()
    const user = userEvent.setup()
    render(<App />)
    const emailInput = screen.getByPlaceholderText('Enter Email')
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('allows typing last name in contact form', async () => {
    vi.useRealTimers()
    const user = userEvent.setup()
    render(<App />)
    const lastNameInput = screen.getByPlaceholderText('Last name')
    await user.type(lastNameInput, 'Doe')
    expect(lastNameInput).toHaveValue('Doe')
  })

  it('allows typing email in contact form', async () => {
    vi.useRealTimers()
    const user = userEvent.setup()
    render(<App />)
    const emailInput = screen.getByPlaceholderText('Email address')
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('allows typing message in contact form', async () => {
    vi.useRealTimers()
    const user = userEvent.setup()
    render(<App />)
    const messageInput = screen.getByPlaceholderText('Write your message.')
    await user.type(messageInput, 'Hello world')
    expect(messageInput).toHaveValue('Hello world')
  })

  it('submits the newsletter form', async () => {
    vi.useRealTimers()
    const user = userEvent.setup()
    render(<App />)
    const sendButtons = screen.getAllByText('Send')
    const sendButton = sendButtons[0]
    if (sendButton) await user.click(sendButton)
    // Form should not crash - onSubmit calls preventDefault
    expect(screen.getByText('About Clarity')).toBeInTheDocument()
  })
})
