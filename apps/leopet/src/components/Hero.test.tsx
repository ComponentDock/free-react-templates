import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the eyebrow, headline, supporting copy, and CTA buttons', () => {
    const { container } = render(<Hero />)

    expect(screen.getByText('Welcome to Leopet')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(
      'Give your pet Best Care',
    )
    expect(screen.getByText(/Compassionate veterinary care/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Services' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'Become a Volunteer' })).toHaveAttribute(
      'href',
      '#adopt',
    )

    const image = container.querySelector('img')
    expect(image).not.toBeNull()
    expect(image?.getAttribute('src')).toMatch(/picsum\.photos\/seed\/leopet-hero/)
  })
})
