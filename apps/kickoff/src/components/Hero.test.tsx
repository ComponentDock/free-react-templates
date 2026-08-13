import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtext, watch link, and background image', () => {
    const { container } = render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'How long can you last?' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
    expect(screen.getByText('Watch Games')).toBeInTheDocument()

    const play = screen.getByRole('link', { name: 'Watch Games' })
    expect(play).toHaveAttribute('href', '#games')

    const image = container.querySelector('img')
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/kickoff-hero'))
  })
})
