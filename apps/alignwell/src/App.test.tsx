import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByText(/AlignWell/i)).toBeInTheDocument()
    expect(screen.getByText(/Welcome to our chiropractic centre/i)).toBeInTheDocument()
    expect(screen.getByText(/Free Consultation/i)).toBeInTheDocument()
    expect(screen.getByText(/Our Benefits/i)).toBeInTheDocument()
    expect(screen.getByText(/Our Expert/i)).toBeInTheDocument()
    expect(screen.getByText(/About AlignWell/i)).toBeInTheDocument()
    expect(screen.getByText(/Happy Clients/i)).toBeInTheDocument()
    expect(screen.getByText(/Conditions We Treat/i)).toBeInTheDocument()
    expect(screen.getByText(/Latest News/i)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toContain('AlignWell')
  })
})

describe('TopBar', () => {
  it('shows email and help desk link', () => {
    render(<App />)
    expect(screen.getByText('hello@alignwell.com')).toBeInTheDocument()
    expect(screen.getByText('Help Desk')).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Team/i })).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /Open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Close menu/i }))
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('navigates and closes mobile menu on link click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /Open menu/i })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: /Mobile/i })
    const mobileLink = within(mobileNav).getByText('Blog')
    await user.click(mobileLink)
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })
})

describe('Hero', () => {
  it('shows hero heading and CTA', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Welcome to our chiropractic centre/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Book an Appointment/i })).toBeInTheDocument()
  })
})

describe('Appointment', () => {
  it('shows form fields', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone number')).toBeInTheDocument()
    expect(screen.getByLabelText(/Select Service/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Select Doctor/i)).toBeInTheDocument()
  })

  it('shows business hours', () => {
    render(<App />)
    const contactSection = document.querySelector('#contact')!
    expect(contactSection).toHaveTextContent('Business Hours')
  })

  it('shows emergency phone', () => {
    render(<App />)
    expect(screen.getByText('For Emergency Cases')).toBeInTheDocument()
  })

  it('submits form successfully', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByPlaceholderText('Your Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Phone number'), '555-1234')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByText(/appointment request has been received/i)).toBeInTheDocument()
  })

  it('selects service and doctor', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.selectOptions(screen.getByLabelText(/Select Service/i), 'Electrotherapy')
    await user.selectOptions(screen.getByLabelText(/Select Doctor/i), 'Dr. Rachel Parker')
    expect(screen.getByLabelText(/Select Service/i)).toHaveValue('Electrotherapy')
    expect(screen.getByLabelText(/Select Doctor/i)).toHaveValue('Dr. Rachel Parker')
  })

  it('sets date and time', async () => {
    const user = userEvent.setup()
    render(<App />)
    const dateInput = screen.getByLabelText(/Date/i)
    const timeInput = screen.getByLabelText(/Time/i)
    await user.type(dateInput, '2024-12-25')
    await user.type(timeInput, '10:30')
    expect(dateInput).toHaveValue('2024-12-25')
    expect(timeInput).toHaveValue('10:30')
  })

  it('does not submit when name is empty', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByPlaceholderText('Phone number'), '555-1234')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.queryByText(/appointment request has been received/i)).not.toBeInTheDocument()
  })
})

describe('Services', () => {
  it('lists all services', () => {
    render(<App />)
    const servicesSection = document.querySelector('#services')!
    expect(servicesSection).toHaveTextContent('Spinal Manipulation')
    expect(servicesSection).toHaveTextContent('Electrotherapy')
    expect(servicesSection).toHaveTextContent('Medical Acupuncture')
    expect(servicesSection).toHaveTextContent('Therapeutic Exercise')
    expect(servicesSection).toHaveTextContent('Manual Lymphatic')
    expect(servicesSection).toHaveTextContent('Joint Mobilization')
  })
})

describe('Team', () => {
  it('shows team members', () => {
    render(<App />)
    expect(screen.getByText('Lloyd Wilson')).toBeInTheDocument()
    expect(screen.getByText('Rachel Parker')).toBeInTheDocument()
    expect(screen.getByText('Ian Smith')).toBeInTheDocument()
  })
})

describe('About', () => {
  it('shows about content and stats', () => {
    render(<App />)
    expect(screen.getByText(/dedicated team/i)).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Awards Winning')).toBeInTheDocument()
  })

  it('displays counter values', () => {
    render(<App />)
    expect(screen.getByText('45+')).toBeInTheDocument()
    expect(screen.getByText('2342+')).toBeInTheDocument()
    expect(screen.getByText('30+')).toBeInTheDocument()
  })
})

describe('Testimonials', () => {
  it('shows testimonial quotes', () => {
    render(<App />)
    expect(screen.getByText(/changed my life/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })
})

describe('Gallery', () => {
  it('shows gallery items', () => {
    render(<App />)
    expect(screen.getByText('Foot Pain')).toBeInTheDocument()
    expect(screen.getByText('Back Pain')).toBeInTheDocument()
    expect(screen.getByText('Lower Back Pain')).toBeInTheDocument()
  })
})

describe('Blog', () => {
  it('shows blog posts', () => {
    render(<App />)
    expect(screen.getByText(/What Every Athlete Needs/i)).toBeInTheDocument()
    expect(screen.getByText(/Regular Chiropractic/i)).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('shows footer links and Component Dock', () => {
    render(<App />)
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
    const dockLink = screen.getByRole('link', { name: /Component Dock/ })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows business hours in footer', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent('Opening Days')
  })

  it('shows contact info', () => {
    render(<App />)
    expect(screen.getByText(/203 Fake St/i)).toBeInTheDocument()
  })

  it('shows services list in footer', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent('Spinal Manipulation')
    expect(footer).toHaveTextContent('Electrotherapy')
  })
})
