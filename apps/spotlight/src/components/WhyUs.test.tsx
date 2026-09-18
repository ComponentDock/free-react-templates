import { render, screen } from '@testing-library/react'
import { WhyUs } from './WhyUs'

describe('WhyUs', () => {
  it('renders the section heading', () => {
    render(<WhyUs />)
    expect(screen.getByText('Why Us')).toBeInTheDocument()
  })

  it('renders the description paragraphs', () => {
    render(<WhyUs />)
    expect(
      screen.getByText(/Spotlight connects you with the best local businesses/),
    ).toBeInTheDocument()
    expect(screen.getByText(/Every listing is verified by our team/)).toBeInTheDocument()
  })

  it('renders the checklist items', () => {
    render(<WhyUs />)
    expect(screen.getByText('Verified and trusted listings')).toBeInTheDocument()
    expect(screen.getByText('Real customer reviews and ratings')).toBeInTheDocument()
    expect(screen.getByText('Easy and fast listing process')).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<WhyUs />)
    expect(screen.getByAltText('Why choose Spotlight')).toBeInTheDocument()
  })
})
