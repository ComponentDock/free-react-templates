import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceCards } from './ServiceCards'

describe('ServiceCards', () => {
  it('renders the section heading', () => {
    render(<ServiceCards />)
    expect(screen.getByRole('heading', { name: /Best Interior Services/i })).toBeInTheDocument()
  })

  it('renders three service cards with correct titles', () => {
    render(<ServiceCards />)
    expect(screen.getByText('Lighting')).toBeInTheDocument()
    expect(screen.getByText('Interior Design')).toBeInTheDocument()
    expect(screen.getByText('Office Decoration')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<ServiceCards />)
    expect(screen.getByText(/Strategic lighting design/)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive interior design/)).toBeInTheDocument()
    expect(screen.getByText(/Professional office environments/)).toBeInTheDocument()
  })
})
