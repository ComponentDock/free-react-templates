import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Programs } from './Programs'

describe('Programs', () => {
  it('renders the heading and four program cards', () => {
    render(<Programs />)
    expect(screen.getByRole('heading', { name: /Choose Your Program/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Crossfit Level 1' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'BootCamp' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Energy Blast' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Body Balance' })).toBeInTheDocument()
  })
})
