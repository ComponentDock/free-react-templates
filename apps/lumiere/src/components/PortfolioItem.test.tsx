import { render, screen } from '@testing-library/react'
import { PortfolioItem } from './PortfolioItem'

const defaultProps = {
  category: 'Portrait',
  title: 'Test Title',
  description: 'Test description text',
  imageSrc: 'https://example.com/image.jpg',
  imageAlt: 'Test image',
}

describe('PortfolioItem', () => {
  it('renders the category', () => {
    render(<PortfolioItem {...defaultProps} />)
    expect(screen.getByText('Portrait')).toBeInTheDocument()
  })

  it('renders the title', () => {
    render(<PortfolioItem {...defaultProps} />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<PortfolioItem {...defaultProps} />)
    expect(screen.getByText('Test description text')).toBeInTheDocument()
  })

  it('renders the image with correct alt text', () => {
    render(<PortfolioItem {...defaultProps} />)
    const img = screen.getByAltText('Test image')
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg')
  })

  it('renders the View Portfolio button', () => {
    render(<PortfolioItem {...defaultProps} />)
    expect(screen.getByText('View Portfolio')).toBeInTheDocument()
  })

  it('links View Portfolio to #portfolio', () => {
    render(<PortfolioItem {...defaultProps} />)
    expect(screen.getByText('View Portfolio')).toHaveAttribute('href', '#portfolio')
  })

  it('applies reversed layout when reversed=true', () => {
    const { container } = render(<PortfolioItem {...defaultProps} reversed />)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).toContain('lg:flex-row')
  })

  it('does not apply reversed layout by default', () => {
    const { container } = render(<PortfolioItem {...defaultProps} />)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).toContain('flex-col')
  })
})
