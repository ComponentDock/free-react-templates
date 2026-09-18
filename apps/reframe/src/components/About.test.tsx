import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByText(/We Are Expert In/i)).toBeInTheDocument()
  })

  it('renders descriptive paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
    expect(screen.getByText(/At sed impedit/i)).toBeInTheDocument()
  })

  it('renders construction image', () => {
    render(<About />)
    const img = screen.getByAltText('Construction worker on site')
    expect(img).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(<About className="extra" />)
    expect(screen.getByTestId('about').className).toContain('extra')
  })
})
