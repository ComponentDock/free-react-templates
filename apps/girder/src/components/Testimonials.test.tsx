import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and four attributed quotes', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /People Says/i })).toBeInTheDocument()
    for (const name of ['Alan Crew', 'Jean Doe', 'Jessica Smith', 'Ben Miller']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/far away, behind the word mountains/i)).toHaveLength(4)
  })
})
