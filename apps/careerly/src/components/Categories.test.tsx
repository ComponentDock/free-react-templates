import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders section heading', () => {
    render(<Categories />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Popular Categories')
  })

  it('renders all 8 category cards', () => {
    render(<Categories />)
    expect(screen.getByText('Accounting / Finance')).toBeDefined()
    expect(screen.getByText('Automotive Jobs')).toBeDefined()
    expect(screen.getByText('Construction')).toBeDefined()
    expect(screen.getByText('Telecommunications')).toBeDefined()
    expect(screen.getByText('Healthcare')).toBeDefined()
    expect(screen.getByText('Design & Multimedia')).toBeDefined()
    expect(screen.getByText('Transportation')).toBeDefined()
    expect(screen.getByText('Restaurant / Food')).toBeDefined()
  })

  it('renders job counts for each category', () => {
    render(<Categories />)
    expect(screen.getByText('10,391 jobs')).toBeDefined()
    expect(screen.getByText('2,845 jobs')).toBeDefined()
  })
})
