import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ImageWithText } from './ImageWithText'

describe('ImageWithText', () => {
  it('renders the heading and body text', () => {
    render(<ImageWithText />)
    expect(screen.getByRole('heading', { name: 'Made to last' })).toBeInTheDocument()
    expect(screen.getByText(/Natural fibres/)).toBeInTheDocument()
  })

  it('renders the Our story CTA link', () => {
    render(<ImageWithText />)
    expect(screen.getByRole('link', { name: 'Our story' })).toHaveAttribute('href', '#about')
  })

  it('renders the image with correct alt text', () => {
    render(<ImageWithText />)
    expect(screen.getByAltText('Rail of natural fibre clothing')).toBeInTheDocument()
  })
})
