import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Hostpeak')).toBeInTheDocument()
  })

  it('renders nav links (desktop + mobile)', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Home')).toHaveLength(2)
    expect(screen.getAllByText('Features')).toHaveLength(2)
    expect(screen.getAllByText('Services')).toHaveLength(2)
    expect(screen.getAllByText('Pricing')).toHaveLength(2)
    expect(screen.getAllByText('Contact')).toHaveLength(2)
  })

  it('renders Live Chat and Login (desktop + mobile)', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Live Chat')).toHaveLength(2)
    expect(screen.getAllByText('Login')).toHaveLength(2)
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
