import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText(/Introduce About/)).toBeDefined()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/decade of experience/)).toBeDefined()
  })

  it('renders the Learn More button', () => {
    render(<About />)
    expect(screen.getByText('Learn More')).toBeDefined()
  })

  it('renders images', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(2)
  })
})
