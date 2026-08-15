import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and the Visit Our Works CTA', () => {
    render(<Hero />)

    const section = screen.getByRole('region', { name: 'Intro' })
    expect(
      within(section).getByRole('heading', {
        level: 1,
        name: /Launch a startup website online with a proven builder/,
      }),
    ).toBeInTheDocument()

    const cta = within(section).getByRole('link', { name: 'Visit Our Works' })
    expect(cta).toHaveAttribute('href', '#portfolio')
  })
})
