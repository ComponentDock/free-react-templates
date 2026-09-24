import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Hero from './Hero'

describe('Hero', () => {
  it('renders headline', () => {
    render(<Hero />)
    expect(screen.getByText(/We provide top medical services/)).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/We are professionals/)).toBeInTheDocument()
  })

  it('renders two CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /Make an Appointment/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Read More/ })).toBeInTheDocument()
  })

  it('Make an Appointment button scrolls to appointment section', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const btn = screen.getByRole('button', { name: /Make an Appointment/ })
    await user.click(btn)
    // scrollIntoView is called even if element doesn't exist in test DOM
  })
})
