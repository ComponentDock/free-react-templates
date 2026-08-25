import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the Features heading', () => {
    render(<Features />)
    expect(screen.getByText('Features')).toBeInTheDocument()
  })

  it('renders 6 feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Easy to use')).toBeInTheDocument()
    expect(screen.getByText('Fast and Secure')).toBeInTheDocument()
    expect(screen.getByText('Robust and Intuitive')).toBeInTheDocument()
    expect(screen.getByText('Smart Analytics')).toBeInTheDocument()
    expect(screen.getByText('Mobile Ready')).toBeInTheDocument()
    expect(screen.getByText('Developer Friendly')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Intuitive interface/)).toBeInTheDocument()
    expect(screen.getByText(/Lightning-fast performance/)).toBeInTheDocument()
  })
})
