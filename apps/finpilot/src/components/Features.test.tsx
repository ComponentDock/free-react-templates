import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Features from './Features'

describe('Features', () => {
  it('renders all three feature items', () => {
    render(<Features />)
    expect(screen.getByText('Unlimited Control')).toBeInTheDocument()
    expect(screen.getByText('Rapid Growth')).toBeInTheDocument()
    expect(screen.getByText('Problem Solving')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Autem vel illum/)).toBeInTheDocument()
    expect(screen.getByText(/Quis autem vel/)).toBeInTheDocument()
    expect(screen.getByText(/Similique sunt/)).toBeInTheDocument()
  })
})
