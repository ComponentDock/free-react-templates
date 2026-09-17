import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, store buttons, and phone mockup', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Your App, Reimagined' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Appnova brings a fresh, modern approach/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Download on the App Store' })).toHaveAttribute(
      'href',
      '#pricing',
    )
    expect(screen.getByRole('link', { name: 'Get it on Google Play' })).toHaveAttribute(
      'href',
      '#pricing',
    )

    expect(screen.getByRole('img', { name: 'Appnova app phone mockup' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/appnova-phone/600/900',
    )
  })
})
