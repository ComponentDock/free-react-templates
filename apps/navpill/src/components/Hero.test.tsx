import { render, screen } from '@testing-library/react'
import { HERO_PHOTO } from '../lib/site'
import { Hero } from './Hero'

describe('Hero', () => {
  it('is a frame-filling cover band over a seeded placeholder and carries no copy', () => {
    render(<Hero />)

    const band = screen.getByRole('region', { name: 'Hero band' })

    expect(band.tagName).toBe('SECTION')
    expect(band.className.split(' ')).toEqual(
      expect.arrayContaining(['h-screen', 'w-full', 'bg-cover', 'bg-center', 'bg-no-repeat']),
    )
    expect(band.getAttribute('style')).toContain(HERO_PHOTO)
    expect(band).toBeEmptyDOMElement()
  })
})
