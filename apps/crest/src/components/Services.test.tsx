import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Improved Digital Experience/ }),
    ).toBeInTheDocument()
  })

  it('renders service cards', () => {
    render(<Services />)
    expect(screen.getByText('Design & Development')).toBeInTheDocument()
    expect(screen.getByText('Engineering & Delivery')).toBeInTheDocument()
  })

  it('renders Learn More links', () => {
    render(<Services />)
    const learnMoreLinks = screen.getAllByText('Learn More')
    expect(learnMoreLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('renders description text', () => {
    render(<Services />)
    expect(screen.getByText(/Apply for a business loan today/)).toBeInTheDocument()
  })
})
