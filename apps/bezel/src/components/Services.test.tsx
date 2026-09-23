import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders 6 service items with icons and descriptions', () => {
    render(<Services />)
    expect(screen.getByText('Services We Provide')).toBeInTheDocument()
    expect(screen.getByText('Expert Technicians')).toBeInTheDocument()
    expect(screen.getByText('Professional Service')).toBeInTheDocument()
    expect(screen.getByText('Great Support')).toBeInTheDocument()
    expect(screen.getByText('Technical Skills')).toBeInTheDocument()
    expect(screen.getByText('Highly Recommended')).toBeInTheDocument()
    expect(screen.getByText('Positive Reviews')).toBeInTheDocument()
  })
})
