import { render, screen } from '@testing-library/react'
import { ContentArea } from './ContentArea'

describe('ContentArea', () => {
  it('renders the page heading', () => {
    render(<ContentArea />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Vagabond')
  })

  it('renders descriptive paragraphs', () => {
    render(<ContentArea />)
    const paragraphs = screen.getAllByText(/travel|journey|destination/i)
    expect(paragraphs.length).toBeGreaterThanOrEqual(2)
  })

  it('has the correct background color', () => {
    const { container } = render(<ContentArea />)
    expect(container.firstChild).toHaveClass('bg-page-bg')
  })

  it('is the main content element', () => {
    render(<ContentArea />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('contains travel-related content', () => {
    render(<ContentArea />)
    expect(screen.getByText(/curated travel experiences/)).toBeInTheDocument()
  })
})
