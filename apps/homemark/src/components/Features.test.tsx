import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders heading and all feature items', () => {
    render(<Features />)
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('ECO-FRIENDLY HOMES')).toBeInTheDocument()
    expect(screen.getByText('SECURE AREA')).toBeInTheDocument()
    expect(screen.getByText('FREE PARKING')).toBeInTheDocument()
    expect(screen.getByText('COMMUNITY POOL')).toBeInTheDocument()
    expect(screen.getByText('BEST DEALS')).toBeInTheDocument()
  })

  it('renders feature boxes with correct count', () => {
    render(<Features />)
    // 5 feature cards rendered
    const titles = [
      'ECO-FRIENDLY HOMES',
      'SECURE AREA',
      'FREE PARKING',
      'COMMUNITY POOL',
      'BEST DEALS',
    ]
    for (const t of titles) {
      expect(screen.getByText(t)).toBeInTheDocument()
    }
  })
})
