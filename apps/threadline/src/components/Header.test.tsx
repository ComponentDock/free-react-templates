import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getAllByText('Threadline')[0]).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /^Home$/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /^Shop$/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('link', { name: /^About$/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /^Contacts$/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders search and cart buttons', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Shopping cart/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const menuBtn = screen.getByRole('button', { name: /Open menu/i })
    await user.click(menuBtn)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    // Mobile menu has links; click the last Home link (mobile)
    const homeLinks = screen.getAllByRole('link', { name: /^Home$/i })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await user.click(homeLinks.at(-1)!)
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('renders sign in and FAQs links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /Sign in/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /FAQs/i })).toBeInTheDocument()
  })
})
