import { render, screen } from '@testing-library/react'
import { AddListing } from './AddListing'

describe('AddListing', () => {
  it('renders the heading', () => {
    render(<AddListing />)
    expect(screen.getByText('Reach millions of People')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<AddListing />)
    expect(screen.getByText(/Add your Business/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<AddListing />)
    expect(screen.getByText('ADD LISTING')).toBeInTheDocument()
  })

  it('CTA links to a page', () => {
    render(<AddListing />)
    const cta = screen.getByText('ADD LISTING').closest('a')
    expect(cta).toHaveAttribute('href', '#')
  })

  it('applies custom className', () => {
    const { container } = render(<AddListing className="custom-add" />)
    expect(container.firstChild).toHaveClass('custom-add')
  })
})
