import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Quote } from './Quote'

describe('Quote', () => {
  it('renders the quote heading, image, and descriptive copy', () => {
    render(<Quote />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Animals has come to mean so much/)
    expect(screen.getByRole('img', { name: /dogs resting/i })).toBeInTheDocument()
    expect(screen.getByText(/far from the countries vokalia/i)).toBeInTheDocument()
  })
})
