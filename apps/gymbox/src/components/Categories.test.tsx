import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders For Girls and For Boys headings', () => {
    render(<Categories />)
    expect(screen.getByRole('heading', { level: 2, name: 'For Girls' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'For Boys' })).toBeInTheDocument()
  })

  it('renders description text for each category', () => {
    render(<Categories />)
    expect(screen.getByText(/transform your body and confidence/i)).toBeInTheDocument()
    expect(screen.getByText(/push your limits/i)).toBeInTheDocument()
  })

  it('renders Join Now buttons', () => {
    render(<Categories />)
    const buttons = screen.getAllByText('Join Now')
    expect(buttons.length).toBe(2)
  })
})
