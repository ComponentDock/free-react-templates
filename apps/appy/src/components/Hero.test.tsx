import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, download button, and phone mockup', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Start your amazing stuff through appy.' }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Build, launch, and grow your mobile app with Appy/),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Download App' })).toHaveAttribute('href', '#download')

    expect(screen.getByRole('img', { name: 'Appy app phone mockup' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/appy-phone/600/900',
    )
  })
})
