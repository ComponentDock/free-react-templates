import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Chambers — Law Firm Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Chambers').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText("Don't Feel Helpless We Fight for Justice")).toBeInTheDocument()
    expect(screen.getByText('Contact us')).toBeInTheDocument()
    expect(screen.getByText('Read more')).toBeInTheDocument()
    expect(screen.getByText('Welcome to Chambers')).toBeInTheDocument()
    expect(screen.getByText('What We Cover')).toBeInTheDocument()
    expect(screen.getByText('Recent Cases')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})

describe('TopBar', () => {
  it('shows contact info and social links', () => {
    render(<App />)
    const topbar = screen.getByTestId('topbar')
    expect(topbar).toHaveTextContent('+00 1234 567')
    expect(topbar).toHaveTextContent('youremail@email.com')
    const socialLabels = [
      'topbar-Twitter',
      'topbar-Facebook',
      'topbar-Instagram',
      'topbar-Dribbble',
    ]
    socialLabels.forEach((label) => {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    })
  })
})

describe('Navbar', () => {
  it('shows all navigation links', () => {
    render(<App />)
    const nav = screen.getByRole('navigation')
    const links = ['Home', 'About', 'Practice Areas', 'Cases', 'Attorneys', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(nav).toHaveTextContent(link)
    })
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})

describe('Hero', () => {
  it('renders hero content with background image', () => {
    render(<App />)
    const hero = screen.getByText("Don't Feel Helpless We Fight for Justice").closest('section')
    expect(hero).toBeInTheDocument()
    expect(hero?.querySelector('[aria-label="Play video"]')).toBeInTheDocument()
  })
})

describe('IntroFeatures', () => {
  it('renders four feature cards', () => {
    render(<App />)
    const section = screen.getByTestId('intro-features')
    expect(section).toBeInTheDocument()
    expect(section).toHaveTextContent('Expert Attorneys')
    expect(section).toHaveTextContent('Case Dismissed')
    expect(section).toHaveTextContent('Court Performance')
    expect(section).toHaveTextContent('Legal Protection')
  })
})

describe('About', () => {
  it('renders about section with services', () => {
    render(<App />)
    const section = screen.getByTestId('about')
    expect(section).toBeInTheDocument()
    expect(section).toHaveTextContent('Welcome to Chambers')
    expect(section).toHaveTextContent('Why to Put Your Trust In Chambers')
    expect(section).toHaveTextContent('Great Discount')
    expect(section).toHaveTextContent('Legal Advisory')
    expect(section).toHaveTextContent('Quick Charges')
  })
})

describe('CounterStats', () => {
  it('renders stat blocks', () => {
    render(<App />)
    const section = screen.getByTestId('counter-stats')
    expect(section).toBeInTheDocument()
    expect(section).toHaveTextContent('3000+')
    expect(section).toHaveTextContent('1000+')
    expect(section).toHaveTextContent('2000+')
    expect(section).toHaveTextContent('10540+')
    expect(section).toHaveTextContent('Trusted Clients')
    expect(section).toHaveTextContent('Honors & Awards')
    expect(section).toHaveTextContent('Expert Lawyers')
    expect(section).toHaveTextContent('Successful Cases')
  })
})

describe('PracticeAreas', () => {
  it('renders practice area heading and cards', () => {
    render(<App />)
    const section = screen.getByTestId('practice-areas')
    expect(section).toBeInTheDocument()
    expect(section).toHaveTextContent('Practice Area')
    expect(section).toHaveTextContent('Business Law')
    expect(section).toHaveTextContent('Family Law')
    expect(section).toHaveTextContent('Criminal Law')
    expect(section).toHaveTextContent('Insurance Law')
  })
})

describe('Cases', () => {
  it('renders case gallery with images', () => {
    render(<App />)
    const section = screen.getByTestId('cases')
    expect(section).toBeInTheDocument()
    expect(section).toHaveTextContent('Recent Cases')
    const images = section.querySelectorAll('img')
    expect(images.length).toBe(6)
  })
})

describe('Attorneys', () => {
  it('renders attorney cards', () => {
    render(<App />)
    const section = screen.getByTestId('attorneys')
    expect(section).toBeInTheDocument()
    expect(section).toHaveTextContent('Our Team')
    expect(section).toHaveTextContent('John Anderson')
    expect(section).toHaveTextContent('Jane Smith')
    expect(section).toHaveTextContent('Robert Wilson')
    expect(section).toHaveTextContent('Emily Davis')
  })
})

describe('Footer', () => {
  it('renders footer with links and contact info', () => {
    render(<App />)
    const footer = screen.getByTestId('footer')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveTextContent('Chambers')
    expect(footer).toHaveTextContent('Explore')
    expect(footer).toHaveTextContent('Legal')
    expect(footer).toHaveTextContent('Company')
    expect(footer).toHaveTextContent('Have a Questions?')
    expect(footer).toHaveTextContent('203 Fake St. Mountain View, San Francisco, California, USA')
    expect(footer).toHaveTextContent('+2 392 3929 210')
    expect(footer).toHaveTextContent('info@yourdomain.com')
  })

  it('links to Component Dock in bottom bar', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
