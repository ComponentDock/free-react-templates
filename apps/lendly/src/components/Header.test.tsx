import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { contact } from '../data'

describe('Header', () => {
  it('renders the brand, nav links, and call block', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /^LENDLY$/ })).toHaveAttribute('href', '#top')
    expect(screen.getByRole('link', { name: /^Home$/ })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'News' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Call us now!' })).toHaveAttribute(
      'href',
      'tel:' + contact.phone.replace(/[^\d+]/g, ''),
    )
    expect(screen.getByText(contact.phone)).toBeInTheDocument()
  })

  it('opens the Pages dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const pages = screen.getByRole('button', { name: /^Pages$/ })
    expect(screen.queryByRole('link', { name: 'Loans' })).not.toBeInTheDocument()
    await user.hover(pages)
    expect(screen.getByRole('link', { name: 'Loans' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'elements' })).toBeInTheDocument()
  })

  it('closes the Pages dropdown when the mouse leaves', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const pages = screen.getByRole('button', { name: /^Pages$/ })
    await user.hover(pages)
    expect(screen.getByRole('link', { name: 'Loans' })).toBeInTheDocument()
    await user.unhover(pages)
    expect(screen.queryByRole('link', { name: 'Loans' })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })
})
