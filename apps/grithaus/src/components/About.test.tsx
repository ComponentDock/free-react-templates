import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('renders the heading, both paragraphs, the button pair and the portrait', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: about.heading })).toBeInTheDocument()
    for (const paragraph of about.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: about.primaryCta.label })).toHaveAttribute(
      'href',
      '#pricing',
    )
    expect(screen.getByRole('link', { name: about.secondaryCta.label })).toHaveAttribute(
      'href',
      '#services',
    )
    expect(screen.getByRole('img', { name: about.imageAlt })).toBeInTheDocument()
  })
})
