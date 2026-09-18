import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('Bodega')).toBeInTheDocument()
    expect(screen.getByText("Men's")).toBeInTheDocument()
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('New Arrival')).toBeInTheDocument()
    expect(screen.getByText('Our Satisfied Customer says')).toBeInTheDocument()
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    expect(screen.getByText('Sign Up for a Newsletter')).toBeInTheDocument()
    expect(screen.getByText('About Store')).toBeInTheDocument()
  })

  it('increments cart count when adding to cart', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByText('Cart [0]')).toBeInTheDocument()
    const addButtons = screen.getAllByLabelText(/Add .* to cart/)
    await user.click(addButtons[0]!)
    expect(screen.getByText('Cart [1]')).toBeInTheDocument()
  })

  it('has Component Dock link in footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
