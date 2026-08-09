import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the kicker, headline, and circular play button', () => {
    render(<Hero />)

    expect(screen.getByText('A free template by Kraft')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'We create awesome stuff.' }),
    ).toBeInTheDocument()

    const play = screen.getByRole('link', { name: 'Play video' })
    expect(play).toHaveAttribute('href', 'https://www.youtube.com/watch?v=_VnYSoMI-9Q')
    expect(play).toHaveAttribute('target', '_blank')
  })
})
