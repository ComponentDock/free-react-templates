import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Programs } from './Programs'

describe('Programs', () => {
  it('renders heading and program rows', () => {
    render(<Programs />)
    expect(screen.getByText('Our Programs')).toBeInTheDocument()
    expect(screen.getByText('We Are Excellent In Education')).toBeInTheDocument()
    expect(screen.getByText('Strive for Excellent')).toBeInTheDocument()
    expect(screen.getByText('Education is life')).toBeInTheDocument()
  })

  it('renders stats for each program', () => {
    render(<Programs />)
    const stats = screen.getAllByText('22,931 Yearly Graduates')
    expect(stats.length).toBe(3)
  })
})
