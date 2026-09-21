import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Crispshot')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Gallery', 'Blog', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders a search icon button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders a mobile menu toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument()
  })

  it('opens mobile menu on toggle click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /toggle menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('closes mobile menu on second toggle click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /toggle menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    // Mobile menu shows links - click one to close
    const mobileAbout = screen.getAllByText('About')
    // The last 'About' is in the mobile menu
    await user.click(mobileAbout.at(-1)!)
    expect(screen.getByRole('button', { name: /toggle menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
