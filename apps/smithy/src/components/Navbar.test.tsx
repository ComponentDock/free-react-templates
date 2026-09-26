import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Smithy logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Smithy')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Services', 'Portfolio', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('has a toggle button for mobile menu', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
