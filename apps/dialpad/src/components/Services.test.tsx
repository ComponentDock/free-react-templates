import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: /Some Awesomeness/i })).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)
    expect(screen.getByText('Expert Technicians')).toBeInTheDocument()
    expect(screen.getByText('Professional Service')).toBeInTheDocument()
    expect(screen.getByText('Great Support')).toBeInTheDocument()
    expect(screen.getByText('Technical Skills')).toBeInTheDocument()
    expect(screen.getByText('Highly Recommended')).toBeInTheDocument()
    expect(screen.getByText('Positive Reviews')).toBeInTheDocument()
  })
})
