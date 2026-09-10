import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the Services We Offered heading', () => {
    render(<Services />)
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('We Offered')).toBeInTheDocument()
  })

  it('renders four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Graphics Design')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Mobile Apps')).toBeInTheDocument()
    expect(screen.getByText('SEO Marketing')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/Usage of the Internet/)
    expect(descriptions).toHaveLength(4)
  })
})
