import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('HAMMER')).toBeInTheDocument()
    expect(screen.getByText('LY')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('link', { name: /services/i })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: /blog/i })).toHaveAttribute('href', '#blog')
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#contact')
  })

  it('renders search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('closes mobile menu on link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileLinks = screen.getAllByRole('link', { name: /home/i })
    await user.click(mobileLinks[1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
