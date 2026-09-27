import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { describe, expect, it } from 'vitest'

describe('Services', () => {
  it('renders the heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'We will help you find your home',
    )
  })

  it('renders 4 service items', () => {
    render(<Services />)
    expect(screen.getByText('Buy Property')).toBeInTheDocument()
    expect(screen.getByText('Modern Amenities')).toBeInTheDocument()
    expect(screen.getByText('Comfortable Living')).toBeInTheDocument()
    expect(screen.getByText('House Size')).toBeInTheDocument()
  })
})
