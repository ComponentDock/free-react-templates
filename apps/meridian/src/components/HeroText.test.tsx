import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HERO_HEADLINE } from '../data'
import { HeroText } from './HeroText'
import { PhotoBand } from './PhotoBand'

describe('HeroText', () => {
  it('renders the big black headline on a white band with no image or button', () => {
    render(<HeroText />)
    expect(screen.getByRole('heading', { level: 1, name: HERO_HEADLINE })).toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})

describe('PhotoBand', () => {
  it('renders an empty full-screen band with a cover background image', () => {
    const { container } = render(<PhotoBand />)
    const band = screen.getByRole('region', { name: 'Office team' })
    expect(band.style.backgroundImage).toContain('meridian-team')
    expect(container.textContent).toBe('')
  })
})
