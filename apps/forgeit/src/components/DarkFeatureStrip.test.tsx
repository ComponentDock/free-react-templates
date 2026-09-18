import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DarkFeatureStrip } from './DarkFeatureStrip'

describe('DarkFeatureStrip', () => {
  it('renders four capability items', () => {
    render(<DarkFeatureStrip />)
    expect(screen.getByText('Strategy')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Art Direction')).toBeInTheDocument()
    expect(screen.getByText('Copywriting')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<DarkFeatureStrip />)
    const links = screen.getAllByText('Read More')
    expect(links.length).toBe(4)
  })

  it('renders image', () => {
    render(<DarkFeatureStrip />)
    const img = screen.getByAltText('Our approach')
    expect(img).toBeInTheDocument()
  })
})
