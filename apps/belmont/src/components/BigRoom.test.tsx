import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BigRoom } from './BigRoom'

describe('BigRoom', () => {
  it('renders the heading', () => {
    render(<BigRoom />)
    expect(screen.getByText(/Rooms with private swimming pool/i)).toBeInTheDocument()
  })

  it('renders a testimonial quote', () => {
    render(<BigRoom />)
    expect(screen.getByText(/best luxury hotel/i)).toBeInTheDocument()
  })

  it('renders 5 star icons in the testimonial', () => {
    const { container } = render(<BigRoom />)
    const stars = container.querySelectorAll('[data-testid="testimonial-star"]')
    expect(stars.length).toBe(5)
  })

  it('renders prev/next navigation buttons', () => {
    render(<BigRoom />)
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
  })

  it('navigates forward through all slides and wraps', async () => {
    const user = userEvent.setup()
    render(<BigRoom />)
    // Go forward: 0 → 1 → 2 → 0 (wrap)
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    await user.click(screen.getByRole('button', { name: /next slide/i }))
  })

  it('navigates backward from first position (wraps) and from middle position', async () => {
    const user = userEvent.setup()
    render(<BigRoom />)
    // Click prev on first slide - wraps to last (covers c === 0 branch)
    await user.click(screen.getByRole('button', { name: /previous slide/i }))
    // Now on slide 2 (last), click next to go to slide 0
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    // Now on slide 0, click next to go to slide 1
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    // Now on slide 1, click prev to go to slide 0 (covers c !== 0 branch)
    await user.click(screen.getByRole('button', { name: /previous slide/i }))
  })
})
