import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SizesAndStates } from './SizesAndStates'

describe('SizesAndStates', () => {
  it('renders section heading', () => {
    render(<SizesAndStates />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Sizes & States')
  })

  it('renders size buttons (Small, Medium, Large)', () => {
    render(<SizesAndStates />)
    expect(screen.getByRole('button', { name: 'Small' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Medium' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Large' })).toBeInTheDocument()
  })

  it('renders state buttons (Active, Disabled, Loading)', () => {
    render(<SizesAndStates />)
    expect(screen.getByRole('button', { name: 'Active' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Loading' })).toBeDisabled()
  })
})
