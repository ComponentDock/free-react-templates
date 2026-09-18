import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Stunning Visuals')).toBeInTheDocument()
    expect(screen.getByText('Clean Code')).toBeInTheDocument()
    expect(screen.getByText('Punctuality')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/range of items and features/i)).toBeInTheDocument()
    expect(screen.getByText(/92% of computers/i)).toBeInTheDocument()
    expect(screen.getByText(/own an iPhone/i)).toBeInTheDocument()
  })
})
