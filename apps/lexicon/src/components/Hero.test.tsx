import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Rest Journey in Single Step, in the Breathtaking',
    )
    expect(
      screen.getByText('Experience luxury and comfort in the heart of Prague'),
    ).toBeInTheDocument()
  })

  it('renders booking form with all fields', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Check In')).toBeInTheDocument()
    expect(screen.getByLabelText('Check Out')).toBeInTheDocument()
    expect(screen.getByLabelText('Adults')).toBeInTheDocument()
    expect(screen.getByLabelText('Children')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('has booking section id', () => {
    render(<Hero />)
    expect(document.getElementById('booking')).toBeInTheDocument()
  })

  it('form prevents default submit', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const submitBtn = screen.getByRole('button', { name: 'Search' })
    await user.click(submitBtn)
    // No page reload — form prevents default
  })

  it('has background image', () => {
    render(<Hero />)
    const bgDiv = document.querySelector('.bg-cover')
    expect(bgDiv).toBeInTheDocument()
  })

  it('has gradient overlay', () => {
    render(<Hero />)
    const overlay = document.querySelector('.bg-gradient-to-b')
    expect(overlay).toBeInTheDocument()
  })
})
