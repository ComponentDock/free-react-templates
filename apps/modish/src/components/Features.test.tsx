import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the three feature tiles', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /fast secure payments/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /premium products/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /free & fast delivery/i })).toBeInTheDocument()
  })
})
