import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Smart New Future')).toBeInTheDocument()
    expect(screen.getByText('Now you can feel the heat')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('links CTA to products section', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /buy now/i })
    expect(cta).toHaveAttribute('href', '#products')
  })
})
