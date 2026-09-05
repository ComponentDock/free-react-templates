import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/plants exist in the weather/i)).toBeInTheDocument()
    expect(screen.getByText(/we create beautiful outdoor spaces/i)).toBeInTheDocument()
  })

  it('renders two CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument()
  })

  it('GET STARTED button is outlined, CONTACT US is filled', () => {
    render(<Hero />)
    const getStarted = screen.getByRole('link', { name: /get started/i })
    const contactUs = screen.getByRole('link', { name: /contact us/i })
    expect(getStarted).toHaveClass('border-brand')
    expect(contactUs).toHaveClass('bg-brand')
  })
})
