import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the church photo, kicker, headline with gold Jesus and CTAs', () => {
    render(<Hero />)

    const hero = screen.getByRole('region', { name: 'Welcome' })
    expect(hero).toBeInTheDocument()

    const image = screen.getByRole('img', { name: /church building/ })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/id/1081/'))

    expect(screen.getByText('Vesper Church')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Following Jesus wherever we are/ }),
    ).toBeInTheDocument()

    // "Jesus" is wrapped in the gold span
    const jesusSpan = screen.getByText('Jesus')
    expect(jesusSpan.className).toContain('text-gold')

    expect(screen.getByRole('link', { name: 'Be part of us' })).toHaveClass('bg-gold')
    expect(screen.getByRole('link', { name: 'Read more' })).toBeInTheDocument()
  })
})
