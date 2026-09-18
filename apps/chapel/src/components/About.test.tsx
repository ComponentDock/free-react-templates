import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('renders the heading and paragraphs', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: about.heading })).toBeInTheDocument()
    about.paragraphs.forEach((p) => {
      expect(screen.getByText(p)).toBeInTheDocument()
    })
  })

  it('renders the CTA button and image', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: about.ctaLabel })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: about.imageAlt })).toBeInTheDocument()
  })
})
