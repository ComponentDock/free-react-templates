import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { HERO_IMAGE } from '../data'

describe('Hero', () => {
  it('renders a full-viewport hero with the headline and scroll indicator', () => {
    const { container } = render(<Hero />)

    const section = container.querySelector('#home') as HTMLElement
    expect(section).not.toBeNull()
    expect(section.style.backgroundImage).toContain(HERO_IMAGE)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Stay With Us & Relax' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Scroll to the about section' })).toHaveAttribute(
      'href',
      '#about',
    )

    // Dark overlay for text readability.
    expect(container.querySelector('section > div.bg-black\\/45')).not.toBeNull()
  })
})
