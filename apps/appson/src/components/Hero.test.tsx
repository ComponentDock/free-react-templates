import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, download button, and phone mockup', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Perfect Landing Page' }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/The Best Template For Your Mobile App To Showcase And Acquire/),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Download Now' })).toHaveAttribute('href', '#download')

    expect(screen.getByRole('img', { name: 'Appson app phone mockup' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/appson-phone/600/900',
    )
  })
})
