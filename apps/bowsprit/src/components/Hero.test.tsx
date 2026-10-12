import { render, screen } from '@testing-library/react'
import { HERO_PHOTO } from '../lib/site'
import { Hero } from './Hero'

describe('Hero', () => {
  it('is a single frame-filling photographic band the bar can float on', () => {
    const { container } = render(<Hero />)

    const band = screen.getByRole('region', { name: 'Hero band' })

    expect(band.id).toBe('hero')
    expect(band).toHaveClass('relative', 'h-screen', 'w-full', 'bg-cover', 'bg-center', 'bg-no-repeat')
    expect(band.style.backgroundImage).toBe(`url("${HERO_PHOTO}")`)
    expect(container.firstElementChild).toBe(band)
    expect(band.childElementCount).toBe(0)
  })
})
