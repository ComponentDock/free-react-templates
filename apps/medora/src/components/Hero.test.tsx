import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, sub-headline, paragraph, and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /quality care/i })).toBeInTheDocument()
    expect(screen.getByText('Your Health Is Our Priority.')).toBeInTheDocument()
    expect(screen.getByText(/compassionate, patient-first medical care/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#departments')
  })

  it('renders a full-width background photo', () => {
    const { container } = render(<Hero />)
    const image = container.querySelector('img')
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/medora-hero'))
    expect(image).toHaveAttribute('aria-hidden', 'true')
  })
})
