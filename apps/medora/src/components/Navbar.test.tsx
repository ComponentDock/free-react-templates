import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

const linkHrefs: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Departments', href: '#departments' },
  { label: 'Services', href: '#departments' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Contact', href: '#appointment' },
]

describe('Navbar', () => {
  it('renders the wordmark and all nav links with their anchors', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Medora' })).toHaveAttribute('href', '#home')
    for (const { label, href } of linkHrefs) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', href)
    }
  })

  it('marks the Home link as the current page', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const menu = screen.getByRole('navigation', { name: /mobile menu/i })
    for (const { label } of linkHrefs) {
      expect(within(menu).getByRole('link', { name: label })).toBeInTheDocument()
    }
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('navigation', { name: /mobile menu/i })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const menu = screen.getByRole('navigation', { name: /mobile menu/i })
    await user.click(within(menu).getByRole('link', { name: 'Doctors' }))
    expect(screen.queryByRole('navigation', { name: /mobile menu/i })).not.toBeInTheDocument()
  })
})
