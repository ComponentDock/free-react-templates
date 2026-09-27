import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders heading and description', () => {
    render(<Welcome />)
    expect(screen.getByText('Welcome to Dwellpoint Center')).toBeInTheDocument()
    expect(screen.getByText(/dedicated to helping you find/)).toBeInTheDocument()
  })

  it('renders three stats', () => {
    render(<Welcome />)
    expect(screen.getByText('$2.5M')).toBeInTheDocument()
    expect(screen.getByText('1,465')).toBeInTheDocument()
    expect(screen.getByText('3,965')).toBeInTheDocument()
    expect(screen.getByText('Total Donations')).toBeInTheDocument()
    expect(screen.getByText('Total Projects')).toBeInTheDocument()
    expect(screen.getByText('Total Volunteers')).toBeInTheDocument()
  })

  it('renders welcome image', () => {
    render(<Welcome />)
    expect(screen.getByAltText('Welcome to Dwellpoint')).toHaveAttribute(
      'src',
      expect.stringContaining('dwellpoint-welcome'),
    )
  })
})
