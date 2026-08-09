import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'What We Offers' })).toBeInTheDocument()
    expect(screen.getByText('Rental A Cars')).toBeInTheDocument()
    expect(screen.getByText('Buying A Cars')).toBeInTheDocument()
    expect(screen.getByText('Car Maintenance')).toBeInTheDocument()
    expect(screen.getByText('Support 24/7')).toBeInTheDocument()
  })
})
