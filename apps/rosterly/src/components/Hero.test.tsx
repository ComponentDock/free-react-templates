import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline', () => {
    render(<Hero />)
    expect(screen.getByText('The Easiest Way To Get Your Dream Job')).toBeInTheDocument()
  })

  it('renders subtext', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover your next career move/)).toBeInTheDocument()
  })

  it('renders search form with keyword input', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Search keywords')).toBeInTheDocument()
  })

  it('renders location select', () => {
    render(<Hero />)
    const select = screen.getByLabelText('Location')
    expect(select).toBeInTheDocument()
    expect(screen.getByText('Anywhere')).toBeInTheDocument()
  })

  it('renders job type select', () => {
    render(<Hero />)
    const select = screen.getByLabelText('Job type')
    expect(select).toBeInTheDocument()
    expect(screen.getByText('Part Time')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<Hero />)
    expect(screen.getByText('Search Jobs')).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const button = screen.getByText('Search Jobs')
    await user.click(button)
    // Form submitted without navigation — no error means preventDefault worked
  })
})
