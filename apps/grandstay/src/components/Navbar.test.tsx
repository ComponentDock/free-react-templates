import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'
import { BRAND, NAV_LINKS } from '../data'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText(BRAND)).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of NAV_LINKS) {
      expect(screen.getByText(link.label)).toBeInTheDocument()
    }
  })

  it('has dark charcoal background', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('bg-charcoal')
  })

  it('shows Facilities dropdown on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const facilitiesBtn = screen.getByRole('button', { name: /facilities/i })
    expect(facilitiesBtn).toHaveAttribute('aria-expanded', 'false')
    await user.click(facilitiesBtn)
    expect(facilitiesBtn).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Junior Suite')).toBeInTheDocument()
    expect(screen.getByText('Double Room')).toBeInTheDocument()
    expect(screen.getByText('Senior Suite')).toBeInTheDocument()
    expect(screen.getByText('Single Room')).toBeInTheDocument()
  })

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div data-testid="outside">
        <Navbar />
      </div>,
    )
    const facilitiesBtn = screen.getByRole('button', { name: /facilities/i })
    await user.click(facilitiesBtn)
    expect(facilitiesBtn).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByTestId('outside'))
    expect(facilitiesBtn).toHaveAttribute('aria-expanded', 'false')
  })
})
