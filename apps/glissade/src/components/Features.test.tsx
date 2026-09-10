import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section title', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /Our Exclusive Features/i })).toBeInTheDocument()
  })

  it('renders three feature cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Creative Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Appropriate UX' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Super Clean Code' })).toBeInTheDocument()
  })

  it('renders Read More buttons for each feature', () => {
    render(<Features />)
    const buttons = screen.getAllByRole('link', { name: 'Read More' })
    expect(buttons).toHaveLength(3)
  })
})
