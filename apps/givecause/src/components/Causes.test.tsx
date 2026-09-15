import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Causes } from './Causes'

describe('Causes', () => {
  it('renders section heading', () => {
    render(<Causes />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Causes')
  })

  it('renders three cause cards with images', () => {
    render(<Causes />)
    expect(screen.getByText('Clean Water Initiative')).toBeInTheDocument()
    expect(screen.getByText('Education for All')).toBeInTheDocument()
    expect(screen.getByText('Medical Aid Program')).toBeInTheDocument()
    expect(screen.getByAltText('Clean Water Initiative')).toBeInTheDocument()
  })

  it('displays fundraising progress', () => {
    render(<Causes />)
    expect(screen.getByText('Raised: $12,500')).toBeInTheDocument()
    expect(screen.getByText('Goal: $20,000')).toBeInTheDocument()
  })
})
