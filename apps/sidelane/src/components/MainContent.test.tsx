import { render, screen } from '@testing-library/react'
import { MainContent } from './MainContent'

describe('MainContent', () => {
  it('renders the page heading', () => {
    render(<MainContent />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Sidelane')
  })

  it('renders descriptive paragraphs', () => {
    render(<MainContent />)
    const paragraphs = screen.getAllByText(/lorem ipsum/i)
    expect(paragraphs.length).toBeGreaterThanOrEqual(2)
  })

  it('has the correct background color', () => {
    const { container } = render(<MainContent />)
    expect(container.firstChild).toHaveClass('bg-page-bg')
  })
})
