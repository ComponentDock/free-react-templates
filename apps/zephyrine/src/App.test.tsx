import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByText('Re-imagining the way').length).toBeGreaterThan(0)
    expect(screen.getByText('We grow money, Guaranteed')).toBeInTheDocument()
    expect(screen.getByText('Stunning Visuals')).toBeInTheDocument()
    expect(screen.getByText('Clean Code')).toBeInTheDocument()
    expect(screen.getByText('Punctuality')).toBeInTheDocument()
    expect(screen.getByText('Our Amazing Works')).toBeInTheDocument()
    expect(screen.getByText('Our Untold Story')).toBeInTheDocument()
    expect(screen.getByText('Subscribe for our Newsletter')).toBeInTheDocument()
    expect(screen.getAllByText('Zephyrine').length).toBeGreaterThanOrEqual(2)
  })
})

describe('Header', () => {
  it('renders logo and navigation links', () => {
    render(<App />)
    const logo = screen.getAllByText('Zephyrine')[0]
    expect(logo).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Generic')).toBeInTheDocument()
    expect(screen.getByText('Elements')).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    expect(menuButton).toBeInTheDocument()
    await user.click(menuButton)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    const mobileLinks = screen.getAllByText('Home')
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2)
    await user.click(mobileLinks[1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})

describe('Banner', () => {
  it('renders hero content with gradient background', () => {
    render(<App />)
    expect(screen.getAllByText('Re-imagining the way').length).toBeGreaterThan(0)
    expect(screen.getByText('We grow money, Guaranteed')).toBeInTheDocument()
    const getStartedButtons = screen.getAllByText('Get Started')
    expect(getStartedButtons.length).toBeGreaterThan(0)
  })

  it('renders Get Started button in banner', () => {
    render(<App />)
    const heroButton = screen
      .getByText('We grow money, Guaranteed')
      .closest('section')!
      .querySelector('a[href="#get-started"]')
    expect(heroButton).toBeInTheDocument()
  })
})

describe('Featured', () => {
  it('renders all three feature cards', () => {
    render(<App />)
    expect(screen.getByText('Stunning Visuals')).toBeInTheDocument()
    expect(screen.getByText('Clean Code')).toBeInTheDocument()
    expect(screen.getByText('Punctuality')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<App />)
    expect(screen.getByText(/visually compelling designs/)).toBeInTheDocument()
    expect(screen.getByText(/maintainable, efficient code/)).toBeInTheDocument()
    expect(screen.getByText(/respect deadlines/)).toBeInTheDocument()
  })
})

describe('ServiceArea', () => {
  it('renders all 8 service cards', () => {
    render(<App />)
    expect(screen.getByText('Creative Design')).toBeInTheDocument()
    expect(screen.getByText('Driving Lesson')).toBeInTheDocument()
    expect(screen.getByText('Climbing Stairs')).toBeInTheDocument()
    expect(screen.getByText('Bike Accident')).toBeInTheDocument()
    expect(screen.getByText('Car Driving')).toBeInTheDocument()
    expect(screen.getByText('Beach Hotel')).toBeInTheDocument()
    expect(screen.getByText('Under Passway')).toBeInTheDocument()
    expect(screen.getByText('Dawn to Dusk')).toBeInTheDocument()
  })

  it('renders service images with picsum source', () => {
    render(<App />)
    const images = screen.getAllByRole('img')
    const serviceImages = images.filter((img) =>
      img.getAttribute('src')?.includes('picsum.photos/seed/'),
    )
    expect(serviceImages.length).toBeGreaterThanOrEqual(8)
  })

  it('shows hover overlay with Get Started button', () => {
    render(<App />)
    const serviceSection = screen.getByText('Creative Design').closest('section')!
    const getStartedBtns = serviceSection.querySelectorAll('a[href="#get-started"]')
    expect(getStartedBtns.length).toBe(8)
  })
})

describe('AmazingWorks', () => {
  it('renders section title and subtitle', () => {
    render(<App />)
    expect(screen.getByText('Our Amazing Works')).toBeInTheDocument()
    const subtitles = screen.getAllByText('Re-imagining the way')
    expect(subtitles.length).toBeGreaterThanOrEqual(2)
  })

  it('renders 5 carousel items', () => {
    render(<App />)
    const workCards = screen.getAllByText('Vector Illustration')
    expect(workCards).toHaveLength(5)
  })
})

describe('StoryArea', () => {
  it('renders story content', () => {
    render(<App />)
    expect(screen.getByText('Our Untold Story')).toBeInTheDocument()
    expect(screen.getByText('From the part of beginning')).toBeInTheDocument()
    expect(screen.getByText(/We started with a simple vision/)).toBeInTheDocument()
  })

  it('renders Get Started CTA in story section', () => {
    render(<App />)
    const storySection = screen.getByText('Our Untold Story').closest('section')!
    const cta = storySection.querySelector('a[href="#get-started"]')
    expect(cta).toBeInTheDocument()
    expect(cta!.textContent).toContain('Get Started')
  })
})

describe('Subscription', () => {
  it('renders subscription form', () => {
    render(<App />)
    expect(screen.getByText('Subscribe for our Newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    const submitButtons = screen.getAllByText('Get Started')
    expect(submitButtons.length).toBeGreaterThan(0)
  })

  it('accepts email input', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('submits the subscription form', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    const submitBtn = screen.getByRole('button', { name: /get started/i })
    await user.click(submitBtn)
    expect(input).toHaveValue('test@example.com')
  })
})

describe('FooterWidgets', () => {
  it('renders address, email, and phone widgets', () => {
    render(<App />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
  })

  it('renders contact details', () => {
    render(<App />)
    expect(screen.getByText('123 Creative Avenue')).toBeInTheDocument()
    expect(screen.getByText('hello@zephyrine.com')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('renders footer with Component Dock link', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    const componentDockLink = within(footer).getByText('Component Dock')
    expect(componentDockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(componentDockLink).toHaveAttribute('target', '_blank')
  })

  it('renders Zephyrine logo in footer', () => {
    render(<App />)
    const footerLogos = screen.getAllByText('Zephyrine')
    expect(footerLogos.length).toBeGreaterThanOrEqual(2)
  })

  it('renders social media links', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    const facebook = within(footer).getByLabelText('Facebook')
    const twitter = within(footer).getByLabelText('Twitter')
    const dribbble = within(footer).getByLabelText('Dribbble')
    expect(facebook).toBeInTheDocument()
    expect(twitter).toBeInTheDocument()
    expect(dribbble).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    render(<App />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
  })
})
