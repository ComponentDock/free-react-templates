import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first slide', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome To Soulflow')).toBeInTheDocument()
    expect(screen.getByText('Yoga for everybody')).toBeInTheDocument()
  })

  it('navigates with arrow buttons', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const nextBtn = screen.getByLabelText('Next slide')
    await user.click(nextBtn)

    expect(screen.getByText('Yoga & Meditation')).toBeInTheDocument()
  })

  it('navigates to previous slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const prevBtn = screen.getByLabelText('Previous slide')
    await user.click(prevBtn)

    expect(screen.getByText('Yoga & Meditation')).toBeInTheDocument()
  })

  it('has slider region', () => {
    render(<Hero />)
    expect(screen.getByRole('region', { name: /hero slider/i })).toBeInTheDocument()
  })
})
