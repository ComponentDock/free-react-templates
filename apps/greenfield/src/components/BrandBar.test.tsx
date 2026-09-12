import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandBar } from './BrandBar'

describe('BrandBar', () => {
  it('renders brand name and tagline', () => {
    render(<BrandBar />)
    expect(screen.getByText('Greenfield')).toBeInTheDocument()
    expect(screen.getByText('Agriculture Farming')).toBeInTheDocument()
  })

  it('renders phone and location info', () => {
    render(<BrandBar />)
    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
    expect(screen.getByText('123 Farm Road, Agri City')).toBeInTheDocument()
  })
})
