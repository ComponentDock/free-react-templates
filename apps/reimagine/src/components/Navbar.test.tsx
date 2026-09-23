import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Reimagine')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Generic' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const hamburger = screen.getByRole('button', { name: /open menu/i })
    expect(hamburger).toBeInTheDocument()

    await user.click(hamburger)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
