import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Credix').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('displays contact info in the top bar', () => {
    render(<Navbar />)
    expect(screen.getByText(/25th Street Avenue/)).toBeInTheDocument()
    expect(screen.getByText(/office@yourfirm.com/)).toBeInTheDocument()
  })

  it('displays the phone number', () => {
    render(<Navbar />)
    expect(screen.getByText('+800 49 900 900')).toBeInTheDocument()
  })

  it('toggles the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    // Click a nav link to close
    const homeLinks = screen.getAllByText('Home')
    const lastHome = homeLinks[homeLinks.length - 1]
    if (lastHome) await user.click(lastHome)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('has correct aria-expanded on toggle', async () => {
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
})
