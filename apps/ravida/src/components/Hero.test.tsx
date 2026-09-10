import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline and CTA button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', {
        name: /modern restaurant in center of the city/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /book a table/i })).toBeInTheDocument()
  })

  it('displays subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText('Expensive but the best')).toBeInTheDocument()
  })

  it('CTA links to contact section', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /book a table/i })
    expect(cta).toHaveAttribute('href', '#contact')
  })
})
