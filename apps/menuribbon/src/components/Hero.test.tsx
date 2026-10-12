import { render, screen } from '@testing-library/react'
import { HERO_PHOTO } from '../lib/site'
import { Hero } from './Hero'

describe('Hero', () => {
  it('is an empty frame-filling cover band with no copy', () => {
    render(<Hero />)

    const band = screen.getByRole('region', { name: 'Hero band' })

    expect(band).toHaveClass('h-screen', 'w-full', 'bg-cover', 'bg-center', 'bg-no-repeat')
    expect(band).toHaveStyle({ backgroundImage: `url(${HERO_PHOTO})` })
    expect(band).toBeEmptyDOMElement()
    expect(HERO_PHOTO).toContain('picsum.photos/seed/menuribbon-hero')
  })
})
