import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading and content', () => {
    render(<About />)
    expect(screen.getByText('Welcome to Coachly')).toBeInTheDocument()
    expect(screen.getByAltText('Coaching session')).toBeInTheDocument()
  })
})
