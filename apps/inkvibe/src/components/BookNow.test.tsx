import { render, screen } from '@testing-library/react'
import { BookNow } from './BookNow'

describe('BookNow', () => {
  it('renders the heading and description', () => {
    render(<BookNow />)
    expect(screen.getByRole('heading', { name: /book your session/i })).toBeInTheDocument()
    expect(screen.getByText(/ready to get inked/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<BookNow />)
    expect(screen.getByRole('link', { name: /book now/i })).toHaveAttribute('href', '#contact')
  })
})
