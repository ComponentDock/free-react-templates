import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header, navLinks } from './Header'

describe('Header', () => {
  it('renders the FitCraft logo', () => {
    render(<Header />)
    expect(screen.getByText('Fit')).toBeInTheDocument()
    expect(screen.getByText('Craft')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Header />)
    for (const link of navLinks) {
      expect(screen.getAllByText(link.label).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('has Main navigation landmark', () => {
    render(<Header />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })

  it('renders Join Now button', () => {
    render(<Header />)
    expect(screen.getAllByText('Join Now').length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeInTheDocument()
  })

  it('closes mobile menu on Escape key', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })

  it('does not close mobile menu on non-Escape key', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeInTheDocument()
    await user.keyboard('{a}')
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeInTheDocument()
  })

  it('closes mobile menu when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const closeBtn = screen.getByRole('button', { name: /close mobile menu/i })
    await user.click(closeBtn)
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const mobileLinks = screen.getAllByText('Home')
    const mobileHomeLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileHomeLink)
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when Join Now is clicked in mobile', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const joinButtons = screen.getAllByText('Join Now')
    const mobileJoin = joinButtons[joinButtons.length - 1]!
    await user.click(mobileJoin)
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })

  it('has aria-expanded on mobile toggle', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('cleans up body overflow on unmount', () => {
    const { unmount } = render(<Header />)
    unmount()
    expect(document.body.style.overflow).toBe('')
  })
})
