import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TestimonialCard } from './TestimonialCard'

const defaultProps = {
  quote: 'Incredible services and amazing customer support.',
  author: 'Joy Smith',
  position: 'Project Manager',
  imageUrl: 'https://picsum.photos/seed/test-1/600/600',
}

describe('TestimonialCard', () => {
  it('renders the quote text', () => {
    render(<TestimonialCard {...defaultProps} />)
    expect(screen.getByText(/Incredible services/)).toBeInTheDocument()
  })

  it('renders the author name', () => {
    render(<TestimonialCard {...defaultProps} />)
    expect(screen.getByText(/Joy Smith/)).toBeInTheDocument()
  })

  it('renders the position label', () => {
    render(<TestimonialCard {...defaultProps} />)
    expect(screen.getByText('Project Manager')).toBeInTheDocument()
  })

  it('applies the image as background', () => {
    render(<TestimonialCard {...defaultProps} />)
    const imgDiv = screen.getByTestId('card-image')
    expect(imgDiv).toHaveStyle({ backgroundImage: `url(${defaultProps.imageUrl})` })
  })

  it('has a white background on the text panel', () => {
    render(<TestimonialCard {...defaultProps} />)
    const textPanel = screen.getByTestId('card-text')
    expect(textPanel).toHaveClass('bg-white')
  })
})
