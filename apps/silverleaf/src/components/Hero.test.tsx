import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Expert Care for the Elderly',
    )
  })

  it('renders descriptive text', () => {
    render(<Hero />)
    expect(screen.getByText(/compassionate and professional care/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /get in touch/i })).toBeInTheDocument()
  })

  it('has minimum height class', () => {
    const { container } = render(<Hero />)
    expect(container.firstElementChild).toHaveClass('min-h-[760px]')
  })
})
