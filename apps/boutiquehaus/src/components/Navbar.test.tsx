import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getAllByRole('link').some((el) => el.textContent?.includes('Boutique'))).toBe(
      true,
    )
    expect(screen.getByRole('link', { name: /^Home$/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /Main/i })).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
    const mobileLinks = screen.getAllByRole('link', { name: /^Home$/i })
    await user.click(mobileLinks[1]!)
    expect(screen.queryByRole('button', { name: /Close menu/i })).not.toBeInTheDocument()
  })

  it('renders top bar with contact info', () => {
    render(<Navbar />)
    expect(screen.getByText('+12312-3-1209')).toBeInTheDocument()
    expect(screen.getByText('login')).toBeInTheDocument()
  })
})
