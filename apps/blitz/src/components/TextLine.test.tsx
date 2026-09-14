import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TextLine } from './TextLine'

describe('TextLine', () => {
  it('renders headline', () => {
    render(<TextLine />)
    expect(screen.getByText('We integrate the future')).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<TextLine />)
    expect(screen.getByText(/Etiam nec odio vestibulum/)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<TextLine />)
    expect(screen.getByRole('link', { name: /discover more/i })).toBeInTheDocument()
  })

  it('renders image', () => {
    render(<TextLine />)
    const img = screen.getByRole('img', { name: /integration showcase/i })
    expect(img).toHaveAttribute('loading', 'lazy')
  })
})
