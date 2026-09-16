import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'

describe('News', () => {
  it('renders section heading', () => {
    render(<News />)
    expect(screen.getByText('Our News')).toBeInTheDocument()
  })

  it('renders 4 news articles', () => {
    render(<News />)
    expect(screen.getByText('Modern Construction Techniques')).toBeInTheDocument()
    expect(screen.getByText('Sustainable Building Materials')).toBeInTheDocument()
    expect(screen.getByText('Project Management Best Practices')).toBeInTheDocument()
    expect(screen.getByText('Safety Standards in Construction')).toBeInTheDocument()
  })

  it('renders article dates', () => {
    render(<News />)
    expect(screen.getByText('15 Mar, 2024')).toBeInTheDocument()
    expect(screen.getByText('12 Mar, 2024')).toBeInTheDocument()
  })

  it('renders article images with alt text', () => {
    render(<News />)
    expect(screen.getByAltText('Modern Construction Techniques')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(<News className="extra" />)
    expect(screen.getByTestId('news').className).toContain('extra')
  })
})
