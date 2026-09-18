import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Quote } from './Quote'

describe('Quote', () => {
  it('renders the quote text', () => {
    render(<Quote />)
    expect(screen.getByText(/Customers may forget what you said/)).toBeDefined()
    expect(screen.getByText(/never forget how you made them feel/)).toBeDefined()
  })

  it('renders two paragraphs of description', () => {
    render(<Quote />)
    const paragraphs = screen.getAllByText(/Lorem ipsum/)
    expect(paragraphs.length).toBe(2)
  })
})
