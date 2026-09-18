import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /why choose us/i })).toBeInTheDocument()
  })

  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /ux\/ui designer/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /web designer/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /accounting & finance/i })).toBeInTheDocument()
  })
})
