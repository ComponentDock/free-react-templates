import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Resume — Personal Portfolio Template')
  })

  it('composes every section in the reference order', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()

    // Hero headline (both slides) present
    expect(screen.getAllByRole('heading', { level: 1, hidden: true }).length).toBe(2)
    // About
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Designing With Passion While Exploring The World.',
      }),
    ).toBeInTheDocument()
    // Services + Portfolio share the same heading text
    expect(
      screen.getAllByRole('heading', { level: 2, name: 'What Services you will Get from me!' })
        .length,
    ).toBe(2)
    // CTA band
    expect(
      screen.getByRole('heading', { level: 2, name: 'Dont worry for contact i`m available' }),
    ).toBeInTheDocument()
    // Testimonials
    expect(
      screen.getByRole('heading', { level: 2, name: 'Some Possitive Feedback That Encourage Us' }),
    ).toBeInTheDocument()
    // Contact
    expect(
      screen.getByRole('heading', { level: 2, name: 'If Not Now, When? Let’s Work Together!' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
