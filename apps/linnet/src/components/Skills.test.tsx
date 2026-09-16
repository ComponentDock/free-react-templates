import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  it('renders the heading and skill percentages', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { name: /Our Professional Skill/i })).toBeInTheDocument()
    expect(screen.getAllByText(/95%/).length).toBe(2)
    expect(screen.getAllByText(/85%/).length).toBe(2)
    expect(screen.getAllByText(/90%/).length).toBe(2)
  })
})
