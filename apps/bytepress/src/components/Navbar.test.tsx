import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the BytePress logo', () => {
    render(<Navbar />)
    expect(screen.getByText(/Byte/i)).toBeInTheDocument()
    expect(screen.getByText(/Press/i)).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'Tech', 'Innovation', 'Videos', 'World', 'Contact']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuBtn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })
})
