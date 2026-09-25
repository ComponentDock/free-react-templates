import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WorkingProcess } from './components/WorkingProcess'
import { FeaturedArea } from './components/FeaturedArea'
import { RemarkableWorks } from './components/RemarkableWorks'
import { StoryArea } from './components/StoryArea'
import { Subscription } from './components/Subscription'
import { ContactForm } from './components/ContactForm'
import { FooterWidget } from './components/FooterWidget'
import { Footer } from './components/Footer'

describe('ArtWave App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('ArtWave').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Don't look anywhere/)).toBeInTheDocument()
    expect(screen.getByText('Our Working Process')).toBeInTheDocument()
    expect(screen.getByText('Our Exclusive Features')).toBeInTheDocument()
    expect(screen.getByText('Remarkable Works')).toBeInTheDocument()
    expect(screen.getByText('From the part of beginning')).toBeInTheDocument()
    expect(screen.getByText('Subscribe for our Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Keep in Touch')).toBeInTheDocument()
    expect(screen.getByText(/Copyright/)).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('renders desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)
    expect(screen.getByLabelText(/mobile navigation/i)).toBeInTheDocument()
    await user.click(toggle)
    expect(screen.queryByLabelText(/mobile navigation/i)).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)
    const links = screen.getAllByRole('link', { name: 'Home' })
    await user.click(links[1]!)
    expect(screen.queryByLabelText(/mobile navigation/i)).not.toBeInTheDocument()
  })
})

describe('Hero', () => {
  it('renders hero content', () => {
    render(<Hero />)
    expect(screen.getByText(/Don't look anywhere/)).toBeInTheDocument()
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })
})

describe('WorkingProcess', () => {
  it('renders all 4 steps', () => {
    render(<WorkingProcess />)
    expect(screen.getByText(/1\. Researching/)).toBeInTheDocument()
    expect(screen.getByText(/2\. Wireframing/)).toBeInTheDocument()
    expect(screen.getByText(/3\. Prototyping/)).toBeInTheDocument()
    expect(screen.getByText(/4\. Final Design/)).toBeInTheDocument()
  })
})

describe('FeaturedArea', () => {
  it('renders 3 feature cards', () => {
    render(<FeaturedArea />)
    expect(screen.getByText('Creative Design')).toBeInTheDocument()
    expect(screen.getByText('Appropriate UX')).toBeInTheDocument()
    expect(screen.getByText('Super Clean Code')).toBeInTheDocument()
    expect(screen.getAllByText('Read More')).toHaveLength(3)
  })
})

describe('RemarkableWorks', () => {
  it('renders 3 project rows', () => {
    render(<RemarkableWorks />)
    expect(screen.getAllByText('Vector Illustration')).toHaveLength(3)
    expect(screen.getAllByText('View Project')).toHaveLength(3)
  })
})

describe('StoryArea', () => {
  it('renders story content', () => {
    render(<StoryArea />)
    expect(screen.getByText('From the part of beginning')).toBeInTheDocument()
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })
})

describe('Subscription', () => {
  it('renders newsletter form', () => {
    render(<Subscription />)
    expect(screen.getByText('Subscribe for our Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText(/email address for newsletter/i)).toBeInTheDocument()
  })

  it('submits newsletter form', async () => {
    const user = userEvent.setup()
    render(<Subscription />)
    const input = screen.getByLabelText(/email address for newsletter/i)
    await user.type(input, 'test@example.com')
    const btn = screen.getByRole('button', { name: /get started/i })
    await user.click(btn)
    expect(input).toHaveValue('test@example.com')
  })
})

describe('ContactForm', () => {
  it('renders contact form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your message/i)).toBeInTheDocument()
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('submits contact form', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText(/your name/i), 'John')
    await user.type(screen.getByLabelText(/your email/i), 'john@test.com')
    await user.type(screen.getByLabelText(/your message/i), 'Hello')
    await user.click(screen.getByText('Send Message'))
  })
})

describe('FooterWidget', () => {
  it('renders contact info columns', () => {
    render(<FooterWidget />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Email Address')).toBeInTheDocument()
    expect(screen.getByText('Phone Number')).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('renders copyright and social links', () => {
    render(<Footer />)
    expect(screen.getByText(/Copyright/)).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
