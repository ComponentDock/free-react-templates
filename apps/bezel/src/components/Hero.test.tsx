import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline, subtitle, and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Now you can feel the Heat')).toBeInTheDocument()
    expect(screen.getByText('Smart New Future')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Buy Now' })).toHaveAttribute('href', '#products')
  })

  it('has accessible CTA button', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: 'Buy Now' })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveClass('rounded-full')
  })
})
