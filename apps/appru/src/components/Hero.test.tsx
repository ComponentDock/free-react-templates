import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, store buttons, and phone mockup', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'App That Suits You Better' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Inappropriate behavior is often laughed off/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Available on App Store' })).toHaveAttribute(
      'href',
      '#pricing',
    )
    expect(screen.getByRole('link', { name: 'Available on Play Store' })).toHaveAttribute(
      'href',
      '#pricing',
    )

    expect(screen.getByRole('img', { name: 'Appru app phone mockup' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/appru-phone/600/900',
    )
  })
})
