import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all 6 feature cards with titles', () => {
    render(<Features />)
    expect(screen.getByText('Responsive Layout')).toBeInTheDocument()
    expect(screen.getByText('Light & Dark Themes')).toBeInTheDocument()
    expect(screen.getByText('Parallax Support')).toBeInTheDocument()
    expect(screen.getByText('Retina Ready Graphics')).toBeInTheDocument()
    expect(screen.getByText('HTML5 Video')).toBeInTheDocument()
    expect(screen.getByText('Powerful Performance')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    const descriptions = screen.getAllByText(/lorem ipsum dolor sit amet/i)
    expect(descriptions).toHaveLength(6)
  })
})
