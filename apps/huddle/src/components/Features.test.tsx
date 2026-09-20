import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders heading and all 3 features', () => {
    render(<Features />)
    expect(screen.getByText('Why Us?')).toBeInTheDocument()
    expect(screen.getByText('Our Mission')).toBeInTheDocument()
    expect(screen.getByText('Expert Panels')).toBeInTheDocument()
    expect(screen.getByText('Great Reviews')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Empowering innovators/)).toBeInTheDocument()
    expect(screen.getByText(/Learn from world-class/)).toBeInTheDocument()
    expect(screen.getByText(/Thousands of past attendees/)).toBeInTheDocument()
  })
})
