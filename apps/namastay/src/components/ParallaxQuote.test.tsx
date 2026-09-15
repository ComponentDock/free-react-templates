import { render, screen } from '@testing-library/react'
import { ParallaxQuote } from './ParallaxQuote'

describe('ParallaxQuote', () => {
  it('renders the quote text', () => {
    render(<ParallaxQuote />)
    expect(screen.getByText(/Do Yoga Today For Better Tomorrow/)).toBeInTheDocument()
  })
})
