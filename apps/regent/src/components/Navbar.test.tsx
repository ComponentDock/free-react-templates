import { render, screen, act } from '@testing-library/react'
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

  it('has transparent background initially', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('bg-transparent')
  })

  it('shows Rooms dropdown on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const roomsBtn = screen.getByRole('button', { name: /rooms/i })
    expect(roomsBtn).toHaveAttribute('aria-expanded', 'false')
    await user.click(roomsBtn)
    expect(roomsBtn).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Standard')).toBeInTheDocument()
    expect(screen.getByText('Family')).toBeInTheDocument()
    expect(screen.getByText('Suite')).toBeInTheDocument()
  })

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div data-testid="outside">
        <Navbar />
      </div>,
    )
    const roomsBtn = screen.getByRole('button', { name: /rooms/i })
    await user.click(roomsBtn)
    expect(roomsBtn).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByTestId('outside'))
    expect(roomsBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('changes to white background when scrolled', () => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    // Simulate scroll
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(nav).toHaveClass('bg-white')
  })
})
