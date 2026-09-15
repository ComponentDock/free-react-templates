import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero heading, subtitle, and CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
    expect(screen.getByText('Get Involved')).toBeInTheDocument()
  })

  it('renders dot navigation', () => {
    render(<Hero />)
    expect(screen.getAllByRole('button', { name: /go to slide/i })).toHaveLength(3)
  })

  it('navigates to next slide via arrow', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const nextBtn = screen.getByRole('button', { name: /next slide/i })
    const firstHeading = screen.getByRole('heading', { level: 1 }).textContent
    await user.click(nextBtn)
    const secondHeading = screen.getByRole('heading', { level: 1 }).textContent
    expect(secondHeading).not.toBe(firstHeading)
  })

  it('navigates to previous slide via arrow', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const prevBtn = screen.getByRole('button', { name: /previous slide/i })
    await user.click(prevBtn)
    // Previous from slide 0 wraps to slide 2
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Renewable Energy')
  })

  it('navigates to a specific slide via dot', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    await user.click(dots[2]!)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Renewable Energy')
  })
})
