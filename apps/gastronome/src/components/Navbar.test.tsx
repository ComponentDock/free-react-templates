import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { describe, it, expect } from 'vitest'

describe('Navbar', () => {
  it('renders logo and all nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Gastronome')).toBeInTheDocument()
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(7)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link').length).toBeGreaterThan(7)
  })

  it('closes mobile menu when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('has correct href on nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Menu' })).toHaveAttribute('href', '#menu')
    expect(screen.getByRole('link', { name: 'Reservation' })).toHaveAttribute(
      'href',
      '#reservation',
    )
  })

  it('closes mobile menu when a link in the mobile menu is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    // Find the mobile menu link via DOM query (CSS classes don't apply in jsdom)
    const mobileLink = container.querySelector('.bg-surface-dark a') as HTMLElement
    expect(mobileLink).toBeInTheDocument()
    await user.click(mobileLink)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })
})
