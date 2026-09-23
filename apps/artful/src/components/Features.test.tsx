import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /Why Choose Us/i })).toBeInTheDocument()
  })

  it('renders three feature cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /Award Winning/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Passionate Team/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Fast Delivery/i })).toBeInTheDocument()
  })
})
