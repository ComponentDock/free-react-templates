import { render, screen } from '@testing-library/react'
import { ClientHighlights } from './ClientHighlights'

describe('ClientHighlights', () => {
  it('renders all three highlights', () => {
    render(<ClientHighlights />)
    expect(screen.getByText('Happier customers')).toBeInTheDocument()
    expect(screen.getByText('Faster growth')).toBeInTheDocument()
    expect(screen.getByText('Connected workflow')).toBeInTheDocument()
  })

  it('renders images for each highlight', () => {
    const { container } = render(<ClientHighlights />)
    const images = container.querySelectorAll('img')
    expect(images.length).toBe(3)
  })

  it('renders description text for each highlight', () => {
    render(<ClientHighlights />)
    const descriptions = screen.getAllByText(
      'Design better websites and spend less with Essentials.',
    )
    expect(descriptions.length).toBe(3)
  })
})
