import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders welcome heading and text', () => {
    render(<Welcome />)
    expect(screen.getByText(/Welcome to CleanSlate/)).toBeInTheDocument()
    expect(screen.getByText(/fresher than ever/)).toBeInTheDocument()
  })

  it('renders business hours card', () => {
    render(<Welcome />)
    expect(screen.getByText('Business Hours')).toBeInTheDocument()
    expect(screen.getByText(/Monday – Friday/)).toBeInTheDocument()
    expect(screen.getByText(/Saturday/)).toBeInTheDocument()
  })

  it('renders emergency phone number', () => {
    render(<Welcome />)
    expect(screen.getByText('For Emergency Cases')).toBeInTheDocument()
    expect(screen.getByText(/\+01\) 123 456 7890/)).toBeInTheDocument()
  })
})
