import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Chef } from './Chef'

describe('Chef', () => {
  it('renders the chef heading', () => {
    render(<Chef />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/food courses/i)
  })

  it('renders the chef name', () => {
    render(<Chef />)
    expect(screen.getByText('Marco Rivera')).toBeInTheDocument()
  })

  it('renders 4 specialty items', () => {
    render(<Chef />)
    expect(screen.getByText('Wagyu Ribeye')).toBeInTheDocument()
    expect(screen.getByText('Dry-Aged T-Bone')).toBeInTheDocument()
    expect(screen.getByText('Grilled Lamb Rack')).toBeInTheDocument()
    expect(screen.getByText('Smoked Brisket')).toBeInTheDocument()
  })

  it('renders chef portrait image', () => {
    render(<Chef />)
    expect(screen.getByRole('img', { name: /head chef portrait/i })).toBeInTheDocument()
  })
})
