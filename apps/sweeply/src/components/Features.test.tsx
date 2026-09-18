import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { describe, expect, it } from 'vitest'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByText('Why Choose Us?')).toBeInTheDocument()
  })

  it('renders all 4 feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Highly Trained Staff')).toBeInTheDocument()
    expect(screen.getByText('Best Equipments')).toBeInTheDocument()
    expect(screen.getByText('100% Warranty')).toBeInTheDocument()
    expect(screen.getByText('Fast & Effective Service')).toBeInTheDocument()
  })
})
