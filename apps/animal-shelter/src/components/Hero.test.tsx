import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subheading, and primary CTA over a darkened banner', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Adopt Us. We need your help.')

    const cta = screen.getByRole('button', { name: 'Find a pet to adopt' })
    expect(cta).toHaveClass('bg-brand')
  })
})
