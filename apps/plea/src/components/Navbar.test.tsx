import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Plea')).toBeInTheDocument()
  })

  it('renders navigation links in desktop nav', () => {
    render(<Navbar />)
    const nav = screen.getByLabelText('Primary')
    expect(nav).toHaveTextContent('Home')
    expect(nav).toHaveTextContent('About')
    expect(nav).toHaveTextContent('Practice Areas')
    expect(nav).toHaveTextContent('Attorney')
    expect(nav).toHaveTextContent('Blog')
    expect(nav).toHaveTextContent('Contact')
  })

  it('mobile menu is hidden by default', () => {
    render(<Navbar />)
    const mobileNav = screen.getByLabelText('Mobile')
    expect(mobileNav).toHaveClass('hidden')
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByLabelText('Mobile')).toHaveClass('block')

    const closeBtn = screen.getByRole('button', { name: /close menu/i })
    await user.click(closeBtn)
    expect(screen.getByLabelText('Mobile')).toHaveClass('hidden')
  })

  it('aria-expanded reflects toggle state', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const btn = screen.getByRole('button', { name: /open menu/i })
    expect(btn).toHaveAttribute('aria-expanded', 'false')

    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })

  it('clicking a mobile link closes the menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNav = screen.getByLabelText('Mobile')
    const homeLink = mobileNav.querySelectorAll('a')[0]!
    await user.click(homeLink)
    expect(mobileNav).toHaveClass('hidden')
  })
})
