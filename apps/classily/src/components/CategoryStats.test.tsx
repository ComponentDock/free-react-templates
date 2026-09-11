import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryStats } from './CategoryStats'

describe('CategoryStats', () => {
  it('renders all 6 category items', () => {
    render(<CategoryStats />)
    expect(screen.getByText('Real Estate')).toBeInTheDocument()
    expect(screen.getByText('Jobs')).toBeInTheDocument()
    expect(screen.getByText('Vehicles')).toBeInTheDocument()
    expect(screen.getByText('Electronics')).toBeInTheDocument()
    expect(screen.getByText('Furniture')).toBeInTheDocument()
    expect(screen.getByText('Fashion')).toBeInTheDocument()
  })

  it('shows count badges for each category', () => {
    render(<CategoryStats />)
    expect(screen.getByText('245')).toBeInTheDocument()
    expect(screen.getByText('189')).toBeInTheDocument()
    expect(screen.getByText('312')).toBeInTheDocument()
    expect(screen.getByText('156')).toBeInTheDocument()
    expect(screen.getByText('98')).toBeInTheDocument()
    expect(screen.getByText('203')).toBeInTheDocument()
  })
})
