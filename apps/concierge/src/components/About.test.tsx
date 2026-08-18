import { render, screen } from '@testing-library/react'
import { About } from './About'
import { ABOUT, IMAGES } from '../data'
import { describe, expect, it } from 'vitest'

describe('About', () => {
  it('renders the heading, two paragraphs, and a rounded photo', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: ABOUT.heading })).toBeInTheDocument()
    expect(screen.getByText(ABOUT.paragraph1)).toBeInTheDocument()
    expect(screen.getByText(ABOUT.paragraph2)).toBeInTheDocument()
    const section = document.querySelector('section#about')!
    const img = section.querySelector('img')
    expect(img).not.toBeNull()
    expect(img).toHaveAttribute('src', IMAGES.about)
    expect(img).toHaveAttribute('loading', 'lazy')
  })

  it('bleeds a teal panel behind the photo', () => {
    render(<About />)
    const section = document.querySelector('section#about')!
    const panel = section.querySelector('[aria-hidden="true"]')
    expect(panel).not.toBeNull()
    expect(panel!.className).toContain('bg-brand')
  })
})
