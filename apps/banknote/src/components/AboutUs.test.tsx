import { render, screen } from '@testing-library/react'
import { AboutUs } from './AboutUs'

describe('AboutUs', () => {
  it('renders the section title', () => {
    render(<AboutUs />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders the heading and content', () => {
    render(<AboutUs />)
    expect(screen.getByText('We Solve Your Financial Problem')).toBeInTheDocument()
    expect(
      screen.getByText(/dedicated to providing exceptional financial services/),
    ).toBeInTheDocument()
  })
})
