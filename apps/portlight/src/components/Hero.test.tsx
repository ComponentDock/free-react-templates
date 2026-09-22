import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading text', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /hotel for the whole family/i,
    )
  })

  it('renders subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/more than a hotel/i)).toBeInTheDocument()
  })

  it('renders carousel dots', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /go to slide 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /go to slide 2/i })).toBeInTheDocument()
  })

  it('switches slide on dot click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /go to slide 2/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/perfect getaway/i)
  })
})
