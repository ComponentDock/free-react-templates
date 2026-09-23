import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading, description, and CTA button', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We Fight')
    expect(screen.getByText(/Dedicated legal professionals/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Free Consultation/ })).toBeInTheDocument()
  })

  it('CTA links to contact section', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: /Free Consultation/ })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
