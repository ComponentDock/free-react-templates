import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('shows the photo on the left and the caption with pink CTA on the right', () => {
    render(<About />)

    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/id/1'))

    expect(screen.getByText(about.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: about.heading })).toBeInTheDocument()
    expect(screen.getByText(about.paragraph)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: new RegExp(about.ctaLabel) })
    expect(cta).toHaveAttribute('href', '#services')
    expect(cta.className).toMatch(/from-brand/)
  })
})
