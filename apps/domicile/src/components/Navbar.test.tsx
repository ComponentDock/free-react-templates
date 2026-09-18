import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { describe, expect, it } from 'vitest'
describe('Navbar', () => {
  it('renders brand', () => {
    render(<Navbar />)
    expect(screen.getByText('Domicile')).toBeInTheDocument()
  })
  it('renders nav links', () => {
    render(<Navbar />)
    ;['Home', 'Properties', 'Blog', 'About', 'Contact'].forEach((l) =>
      expect(screen.getByRole('link', { name: l })).toBeInTheDocument(),
    )
  })
  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: 'Toggle navigation' })
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })
})
