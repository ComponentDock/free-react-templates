import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByText(/We have some awesome features/i)).toBeInTheDocument()
  })

  it('renders all 6 feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Custom design')).toBeInTheDocument()
    expect(screen.getByText('Paid Search result')).toBeInTheDocument()
    expect(screen.getByText('Global Search option')).toBeInTheDocument()
    expect(screen.getByText('Email Marketing')).toBeInTheDocument()
    expect(screen.getByText('Custom Software')).toBeInTheDocument()
    expect(screen.getByText('Setup business goal')).toBeInTheDocument()
  })
})
