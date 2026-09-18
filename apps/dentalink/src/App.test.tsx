import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('opening-hours')).toBeInTheDocument()
    expect(screen.getByTestId('services')).toBeInTheDocument()
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getByTestId('testimonials')).toBeInTheDocument()
    expect(screen.getByTestId('team')).toBeInTheDocument()
    expect(screen.getByTestId('features')).toBeInTheDocument()
    expect(screen.getByTestId('appointment')).toBeInTheDocument()
    expect(screen.getByTestId('blog')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})

describe('Header', () => {
  it('renders logo and navigation links', () => {
    render(<App />)
    const header = screen.getByTestId('header')
    expect(within(header).getByText('Dentalink')).toBeInTheDocument()
    expect(within(header).getByText('Home')).toBeInTheDocument()
    expect(within(header).getByText('About')).toBeInTheDocument()
    expect(within(header).getByText('Blog')).toBeInTheDocument()
    expect(within(header).getByText('Pricing')).toBeInTheDocument()
    expect(within(header).getByText('Contact')).toBeInTheDocument()
  })

  it('renders phone and email in top bar', () => {
    render(<App />)
    const header = screen.getByTestId('header')
    expect(within(header).getByText('+1 (234) 567-890')).toBeInTheDocument()
    expect(within(header).getByText('info@dentalink.com')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<App />)
    const header = screen.getByTestId('header')
    const socialLinks = within(header).getAllByRole('link', {
      name: /facebook|twitter|instagram|linkedin/i,
    })
    expect(socialLinks.length).toBeGreaterThanOrEqual(4)
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: /mobile navigation/i })
    const aboutLink = within(mobileNav).getByText('About')
    await user.click(aboutLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})

describe('Hero', () => {
  it('renders heading and subheading', () => {
    render(<App />)
    expect(screen.getByText('Authentic Dental Service')).toBeInTheDocument()
    expect(screen.getByText("Don't look further, This is your Dentist")).toBeInTheDocument()
  })

  it('renders Get Started button', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
  })
})

describe('OpeningHours', () => {
  it('renders heading and open status', () => {
    render(<App />)
    const section = screen.getByTestId('opening-hours')
    expect(within(section).getByText('Opening Hours')).toBeInTheDocument()
    expect(within(section).getByText('We are open Now')).toBeInTheDocument()
  })

  it('renders schedule rows', () => {
    render(<App />)
    const section = screen.getByTestId('opening-hours')
    expect(within(section).getByText('Monday – Friday')).toBeInTheDocument()
    expect(within(section).getByText('10:00 AM – 5:00 PM')).toBeInTheDocument()
    expect(within(section).getByText('Saturday')).toBeInTheDocument()
    expect(within(section).getByText('12:00 PM – 3:00 PM')).toBeInTheDocument()
    expect(within(section).getByText('Sunday')).toBeInTheDocument()
    expect(within(section).getByText('Closed')).toBeInTheDocument()
  })
})

describe('Services', () => {
  it('renders all service cards', () => {
    render(<App />)
    const section = screen.getByTestId('services')
    expect(within(section).getByText('Our Services')).toBeInTheDocument()
    expect(within(section).getByText('Preventive Care')).toBeInTheDocument()
    expect(within(section).getByText('Cosmetic Dentistry')).toBeInTheDocument()
    expect(within(section).getByText('Orthodontics')).toBeInTheDocument()
    expect(within(section).getByText('Dental Implants')).toBeInTheDocument()
  })

  it('renders service images', () => {
    render(<App />)
    const section = screen.getByTestId('services')
    const images = within(section).getAllByRole('img')
    const svcImages = images.filter((img) => img.getAttribute('src')?.includes('dentalink-svc'))
    expect(svcImages).toHaveLength(4)
  })
})

describe('About', () => {
  it('renders heading and description', () => {
    render(<App />)
    expect(screen.getByText('Who we are to Serve the nation')).toBeInTheDocument()
  })

  it('renders sub-features', () => {
    render(<App />)
    expect(screen.getByText('Expert Services')).toBeInTheDocument()
    expect(screen.getByText('Great Support')).toBeInTheDocument()
  })

  it('renders about image', () => {
    render(<App />)
    const img = screen.getByAltText('About Dentalink')
    expect(img).toBeInTheDocument()
    expect(img.getAttribute('src')).toContain('dentalink-about')
  })
})

describe('Testimonials', () => {
  it('renders heading', () => {
    render(<App />)
    expect(screen.getByText('Feedback from our real clients')).toBeInTheDocument()
  })

  it('renders all testimonial cards', () => {
    render(<App />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<App />)
    expect(
      screen.getByText(/The team at Dentalink made my visit completely painless/),
    ).toBeInTheDocument()
    expect(screen.getByText(/Professional, caring, and thorough/)).toBeInTheDocument()
    expect(screen.getByText(/My family has been coming here for years/)).toBeInTheDocument()
  })
})

describe('Team', () => {
  it('renders heading', () => {
    render(<App />)
    const section = screen.getByTestId('team')
    expect(within(section).getByText('Our Consultants')).toBeInTheDocument()
  })

  it('renders team member names and roles', () => {
    render(<App />)
    expect(screen.getAllByText('Dr. James Wilson').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Dr. Lisa Anderson').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Dr. Robert Kim').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Dr. Maria Santos').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Lead Dentist').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Orthodontist').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Oral Surgeon').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Dental Hygienist').length).toBeGreaterThanOrEqual(1)
  })
})

describe('Features', () => {
  it('renders heading and all feature items', () => {
    render(<App />)
    const section = screen.getByTestId('features')
    expect(within(section).getByText('Features that make us unique')).toBeInTheDocument()
    expect(within(section).getByText('24/7 Emergency')).toBeInTheDocument()
    expect(within(section).getByText('Expert Consultation')).toBeInTheDocument()
    expect(within(section).getByText('X-Ray Service')).toBeInTheDocument()
    expect(within(section).getByText('Dental Science')).toBeInTheDocument()
    expect(within(section).getByText('Intensive Care')).toBeInTheDocument()
    expect(within(section).getByText('Family Planning')).toBeInTheDocument()
  })
})

describe('Appointment', () => {
  it('renders form heading', () => {
    render(<App />)
    expect(screen.getByText('Book an Appointment')).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<App />)
    expect(screen.getByLabelText('Patient Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Date of Birth')).toBeInTheDocument()
    expect(screen.getByLabelText('Appointment Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Confirm Booking' })).toBeInTheDocument()
  })

  it('shows confirmation after form submission', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Patient Name'), 'John Doe')
    await user.type(screen.getByLabelText('Phone'), '555-1234')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Date of Birth'), '1990-01-01')
    await user.type(screen.getByLabelText('Appointment Date'), '2026-10-01')
    await user.type(screen.getByLabelText('Message'), 'Check-up')
    await user.click(screen.getByRole('button', { name: 'Confirm Booking' }))

    expect(screen.getByTestId('booking-confirmation')).toBeInTheDocument()
    expect(screen.getByText('Booking Confirmed!')).toBeInTheDocument()
    expect(screen.getByText('We will get back to you shortly.')).toBeInTheDocument()
  })
})

describe('Blog', () => {
  it('renders heading', () => {
    render(<App />)
    expect(screen.getByText('Latest From Our Blog')).toBeInTheDocument()
  })

  it('renders all blog posts', () => {
    render(<App />)
    expect(screen.getByText('The Importance of Regular Dental Check-ups')).toBeInTheDocument()
    expect(screen.getByText('Tips for Better Oral Hygiene')).toBeInTheDocument()
    expect(screen.getByText('Understanding Dental Implants')).toBeInTheDocument()
    expect(screen.getByText('Cosmetic Dentistry Options Explained')).toBeInTheDocument()
  })

  it('renders blog dates', () => {
    render(<App />)
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2026')).toBeInTheDocument()
    expect(screen.getByText('Aug 28, 2026')).toBeInTheDocument()
    expect(screen.getByText('Aug 20, 2026')).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('renders Top Products links', () => {
    render(<App />)
    const footer = screen.getByTestId('footer')
    expect(within(footer).getByText('Top Products')).toBeInTheDocument()
    expect(within(footer).getByText('Preventive Care')).toBeInTheDocument()
    expect(within(footer).getByText('Cosmetic Dentistry')).toBeInTheDocument()
    expect(within(footer).getByText('Orthodontics')).toBeInTheDocument()
    expect(within(footer).getByText('Dental Implants')).toBeInTheDocument()
    expect(within(footer).getByText('Teeth Whitening')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<App />)
    const footer = screen.getByTestId('footer')
    expect(within(footer).getByText('Contact Us')).toBeInTheDocument()
    expect(
      within(footer).getByText('123 Dental Street, Suite 100, New York, NY 10001'),
    ).toBeInTheDocument()
    expect(within(footer).getByText('+1 (234) 567-890')).toBeInTheDocument()
    expect(within(footer).getByText('info@dentalink.com')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<App />)
    const footer = screen.getByTestId('footer')
    expect(within(footer).getByText('Newsletter')).toBeInTheDocument()
    expect(within(footer).getByLabelText('Email for newsletter')).toBeInTheDocument()
    expect(
      within(footer).getByRole('button', { name: 'Subscribe to newsletter' }),
    ).toBeInTheDocument()
  })

  it('renders copyright with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social icons in footer', () => {
    render(<App />)
    const footer = screen.getByTestId('footer')
    const socials = within(footer).getAllByRole('link', {
      name: /facebook|twitter|instagram|linkedin/i,
    })
    expect(socials.length).toBeGreaterThanOrEqual(4)
  })

  it('allows newsletter subscription', async () => {
    const user = userEvent.setup()
    render(<App />)
    const footer = screen.getByTestId('footer')
    const input = within(footer).getByLabelText('Email for newsletter')
    await user.type(input, 'test@example.com')
    await user.click(within(footer).getByRole('button', { name: 'Subscribe to newsletter' }))
    expect(input).toHaveValue('')
  })
})
