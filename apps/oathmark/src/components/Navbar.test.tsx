import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name Oathmark', () => {
    render(<Navbar />)
    expect(screen.getByText('Oathmark')).toBeInTheDocument()
  })

  it('renders nav links: Home, Practice Areas, Testimonials, About, Contact', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Practice Areas')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('mobile hamburger toggles menu visibility', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const hamburger = screen.getByRole('button', { name: /open menu/i })
    expect(hamburger).toBeInTheDocument()

    expect(screen.queryByText('Home', { selector: 'a.block' })).not.toBeInTheDocument()

    await user.click(hamburger)

    expect(screen.getByText('Home', { selector: 'a.block' })).toBeInTheDocument()
  })

  it('Practice Areas dropdown shows 6 items on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const dropdownButton = screen.getByRole('button', { name: /practice areas/i })
    expect(dropdownButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(dropdownButton)
    expect(dropdownButton).toHaveAttribute('aria-expanded', 'true')

    expect(screen.getByText('Bankruptcy Law')).toBeInTheDocument()
    expect(screen.getByText('Business Law')).toBeInTheDocument()
    expect(screen.getByText('Civil Rights Law')).toBeInTheDocument()
    expect(screen.getByText('Criminal Law')).toBeInTheDocument()
    expect(screen.getByText('Immigration Law')).toBeInTheDocument()
    expect(screen.getByText('Family Law')).toBeInTheDocument()
  })

  it('clicking dropdown again hides it', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const dropdownButton = screen.getByRole('button', { name: /practice areas/i })

    await user.click(dropdownButton)
    expect(dropdownButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Bankruptcy Law')).toBeInTheDocument()

    await user.click(dropdownButton)
    expect(dropdownButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('clicking desktop dropdown item closes dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const dropdownButton = screen.getByRole('button', { name: /practice areas/i })
    await user.click(dropdownButton)
    expect(dropdownButton).toHaveAttribute('aria-expanded', 'true')

    const item = screen.getByText('Bankruptcy Law')
    await user.click(item)
    expect(dropdownButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('mobile dropdown opens and items are clickable', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open mobile menu
    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await user.click(hamburger)

    // Find mobile Practice Areas button — the one inside the mobile menu (pb-4 container)
    const mobileContainer = document.querySelector('.pb-4')
    const mobileDropdownBtn = mobileContainer!.querySelector('button')!
    await user.click(mobileDropdownBtn)

    // Mobile dropdown items should appear inside the mobile container
    const mobileItems = mobileContainer!.querySelectorAll('a')
    expect(mobileItems.length).toBeGreaterThanOrEqual(6)
  })

  it('clicking mobile dropdown item closes mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open mobile menu
    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await user.click(hamburger)

    // Open mobile dropdown
    const mobileContainer = document.querySelector('.pb-4')
    const mobileDropdownBtn = mobileContainer!.querySelector('button')!
    await user.click(mobileDropdownBtn)

    // Click a mobile dropdown item — use fireEvent to ensure React handler fires
    const pl4 = mobileContainer!.querySelector('.pl-4')
    const firstItem = pl4!.querySelector('a')!
    fireEvent.click(firstItem)

    // Mobile menu should close
    expect(screen.queryByText('Home', { selector: 'a.block' })).not.toBeInTheDocument()
  })

  it('clicking mobile nav link closes mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open mobile menu
    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await user.click(hamburger)
    expect(screen.getByText('Home', { selector: 'a.block' })).toBeInTheDocument()

    // Click a mobile nav link using fireEvent
    const mobileContainer = document.querySelector('.pb-4')
    const contactLink = mobileContainer!.querySelector('a[href="#contact"]')!
    fireEvent.click(contactLink)

    // Mobile menu should close
    expect(screen.queryByText('Home', { selector: 'a.block' })).not.toBeInTheDocument()
  })

  it('clicking outside dropdown closes it', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const dropdownButton = screen.getByRole('button', { name: /practice areas/i })
    await user.click(dropdownButton)
    expect(dropdownButton).toHaveAttribute('aria-expanded', 'true')

    await user.click(document.body)
    expect(dropdownButton).toHaveAttribute('aria-expanded', 'false')
  })
})
