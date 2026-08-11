import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { appointmentLabel, heroBlurb, heroEyebrow, heroImageAlt, heroTitle } from '../data'

describe('Hero', () => {
  it('renders the eyebrow, headline, paragraph and CTA', () => {
    render(<Hero />)

    expect(screen.getByText(heroEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: heroTitle })).toBeInTheDocument()
    expect(screen.getByText(heroBlurb)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: appointmentLabel })).toBeInTheDocument()
  })

  it('renders the illustration placeholder with alt text', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: heroImageAlt })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/medico-hero'))
  })
})
