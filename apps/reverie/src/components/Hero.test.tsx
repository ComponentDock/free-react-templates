import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { HERO_EYEBROW, HERO_LEAD, HERO_PHOTO, HERO_TITLE, SECTION_IDS } from '../lib/site'

describe('Hero', () => {
  it('renders the cover band with the three registers the design prints', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')

    expect(section?.id).toBe(SECTION_IDS.home)
    expect(screen.getByRole('heading', { level: 1, name: HERO_TITLE })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 5, name: HERO_EYEBROW })).toBeInTheDocument()
    expect(screen.getByText(HERO_LEAD)).toBeInTheDocument()
  })

  it('loads its photograph eagerly and keeps the frame decorative', () => {
    const { container } = render(<Hero />)
    const photo = container.querySelector('img')

    expect(photo).toHaveAttribute('src', HERO_PHOTO)
    expect(photo).toHaveAttribute('alt', '')
    expect(photo).toHaveAttribute('width', '1920')
    expect(photo).toHaveAttribute('height', '1080')
    expect(photo).not.toHaveAttribute('loading')
  })

  it('carries no call to action, matching the reference', () => {
    render(<Hero />)

    expect(screen.queryAllByRole('link')).toHaveLength(0)
    expect(screen.queryAllByRole('button')).toHaveLength(0)
  })
})
