import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Experience } from './Experience'

describe('Experience', () => {
  it('renders the heading, description text, and View Details button', () => {
    render(<Experience />)

    expect(
      screen.getByRole('heading', { name: /from the root of experience/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/our approach to art and crafting/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view details/i })).toBeInTheDocument()
  })

  it('has two placeholder images', () => {
    render(<Experience />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
