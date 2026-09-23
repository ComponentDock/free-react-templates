import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('ByteOps — Digital Agency Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('renders desktop nav links', () => {
    render(<App />)
    const desktopNav = screen.getByRole('navigation', { name: 'Primary' })
    expect(desktopNav).toBeInTheDocument()
    expect(desktopNav.querySelectorAll('a').length).toBeGreaterThanOrEqual(7)
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getByRole('button', { name: /Open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /Close menu/i }))
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const servicesLink = mobileNav.querySelector('a[href="#services"]')!
    await user.click(servicesLink)
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Get in touch is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const links = mobileNav.querySelectorAll('a')
    const cta = Array.from(links).find((a) => a.textContent?.includes('Get in touch'))!
    await user.click(cta)
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })
})

describe('Services', () => {
  it('renders all service tabs', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /Business Strategy/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Research/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Data Analysis/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /UI Design/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /UX Design/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Technology/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Creative/i })).toBeInTheDocument()
  })

  it('shows Business Strategy content by default', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Business Strategy' })).toBeInTheDocument()
  })

  it('switches between service tabs', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /Research/i }))
    expect(screen.getByRole('heading', { name: 'Research' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /UI Design/i }))
    expect(screen.getByRole('heading', { name: 'UI Design' })).toBeInTheDocument()
  })
})

describe('FAQ', () => {
  it('shows first question expanded by default', () => {
    render(<App />)
    expect(screen.getByText('What services do you offer?')).toBeInTheDocument()
  })

  it('expands and collapses questions', async () => {
    const user = userEvent.setup()
    render(<App />)

    const btn = screen.getByRole('button', { name: /How long does a typical project take/i })
    await user.click(btn)
    expect(screen.getByText(/Project timelines vary/)).toBeInTheDocument()

    await user.click(btn)
    expect(screen.queryByText(/Project timelines vary/)).not.toBeInTheDocument()
  })
})

describe('Stats', () => {
  it('renders stat values', () => {
    render(<App />)
    expect(screen.getByText('500')).toBeInTheDocument()
    expect(screen.getByText('850')).toBeInTheDocument()
    expect(screen.getAllByText('20').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('24')).toBeInTheDocument()
  })
})

describe('Team', () => {
  it('renders team member names', () => {
    render(<App />)
    expect(screen.getByText('Lloyd Wilson')).toBeInTheDocument()
    expect(screen.getByText('Rachel Parker')).toBeInTheDocument()
    expect(screen.getByText('Ian Smith')).toBeInTheDocument()
    expect(screen.getByText('Alicia Henderson')).toBeInTheDocument()
  })
})

describe('Blog', () => {
  it('renders blog post titles', () => {
    render(<App />)
    expect(screen.getByText(/Why Lead Generation/)).toBeInTheDocument()
    expect(screen.getByText(/Top Digital Marketing/)).toBeInTheDocument()
    expect(screen.getByText(/How to Build a Strong/)).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('renders footer with Component Dock link', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})

describe('Contact', () => {
  it('renders contact form and info boxes', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
    expect(
      screen.getByText('198 West 21th Street, Suite 721 New York NY 10016'),
    ).toBeInTheDocument()
  })

  it('prevents default on form submit', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
  })
})
