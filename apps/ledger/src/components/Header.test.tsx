import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo, centered nav and social icons', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Ledger.' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /main/i })).toBeInTheDocument()
    for (const label of ['Home', 'Archive', 'Category', 'Contact', 'Pages']) {
      expect(screen.getByRole('link', { name: new RegExp(`^${label}`) })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders the Pages dropdown links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Single blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'elements' })).toBeInTheDocument()
  })

  it('expands the search input on focus and collapses on blur', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const input = screen.getByRole('searchbox', { name: /search/i })
    expect(input).toHaveAttribute('placeholder', 'Search here')
    expect(input.className).toContain('w-0')
    await user.click(input)
    expect(input.className).toContain('w-44')
    await user.tab()
    expect(input.className).toContain('w-0')
  })

  it('opens and closes the mobile menu with the burger toggle', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const burger = screen.getByRole('button', { name: /open menu/i })
    expect(burger).toHaveAttribute('aria-expanded', 'false')
    await user.click(burger)
    expect(burger).toHaveAttribute('aria-expanded', 'true')
    // both the desktop nav (hidden on mobile via CSS) and the panel render
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)
    await user.click(burger)
    expect(burger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)
  })

  it('closes the mobile menu when a panel dropdown link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const panelLink = screen.getAllByRole('link', { name: 'elements' })[1]!
    await user.click(panelLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
