import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Festpoint — Conference & Event Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Venue/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Fun/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Event/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest/i })).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('renders desktop nav links', () => {
    render(<App />)
    const desktopNav = screen.getByRole('navigation', { name: 'Primary' })
    expect(desktopNav).toBeInTheDocument()
    expect(desktopNav.querySelectorAll('a').length).toBeGreaterThanOrEqual(6)
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

  it('closes mobile menu when Buy Ticket is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const buyTicket = mobileNav.querySelector('a[href="#register"]')!
    await user.click(buyTicket)
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const aboutLink = mobileNav.querySelector('a[href="#about"]')!
    await user.click(aboutLink)
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })
})

describe('Schedule', () => {
  it('shows Day 1 sessions by default', () => {
    render(<App />)
    expect(screen.getByText('Opening Keynote')).toBeInTheDocument()
  })

  it('switches between day tabs', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Day 2' }))
    expect(screen.getByText('AI in Production')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Day 3' }))
    expect(screen.getByText('Cloud Native Patterns')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Day 4' }))
    expect(screen.getByText('Panel Discussion')).toBeInTheDocument()
  })
})

describe('Services', () => {
  it('renders all service cards', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Venue' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Transport' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Hotel' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Restaurant' })).toBeInTheDocument()
  })
})

describe('Counter', () => {
  it('renders stat values', () => {
    render(<App />)
    expect(screen.getByText('30')).toBeInTheDocument()
    expect(screen.getByText('200')).toBeInTheDocument()
    expect(screen.getByText('2,500')).toBeInTheDocument()
    expect(screen.getByText('40')).toBeInTheDocument()
  })
})

describe('Speakers', () => {
  it('renders speaker names', () => {
    render(<App />)
    expect(screen.getAllByText('John Adams').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Paul George').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('James Smith').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Angelie Crawford').length).toBeGreaterThanOrEqual(1)
  })
})

describe('Blog', () => {
  it('renders blog post cards', () => {
    render(<App />)
    expect(screen.getByText(/Why You Should Attend/)).toBeInTheDocument()
    expect(screen.getByText(/Top 10 Sessions/)).toBeInTheDocument()
    expect(screen.getByText(/How to Make the Most/)).toBeInTheDocument()
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
