import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Online Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '24/7 Round the Clock' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Handling All Issues' })).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/dedicated support team/i)).toBeInTheDocument()
    expect(screen.getByText(/never close/i)).toBeInTheDocument()
    expect(screen.getByText(/simple questions/i)).toBeInTheDocument()
  })
})
