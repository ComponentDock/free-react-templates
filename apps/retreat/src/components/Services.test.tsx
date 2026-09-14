import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all 5 service items', () => {
    render(<Services />)
    expect(screen.getByText('Transport')).toBeInTheDocument()
    expect(screen.getByText('Travel Service')).toBeInTheDocument()
    expect(screen.getByText('Spa & Relaxation')).toBeInTheDocument()
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Bar & Drinks')).toBeInTheDocument()
  })
})
