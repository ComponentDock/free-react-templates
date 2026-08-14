import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SiteHalf } from './SiteHalf'

const band = {
  image: 'https://picsum.photos/seed/verdant-half-1/900/700',
  eyebrow: 'Outstanding Services',
  heading: 'Clean Design',
  paragraphs: ['First paragraph.', 'Second paragraph.'],
}

describe('SiteHalf', () => {
  it('renders the image on the left and content on the right by default', () => {
    render(<SiteHalf {...band} />)
    const image = screen.getByRole('img', { name: /Clean Design/ })
    expect(image).toHaveAttribute('src', band.image)
    expect(screen.getByText('Outstanding Services')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 2, name: 'Clean Design' })
    expect(heading.className).toMatch(/uppercase/)
    expect(screen.getByText('First paragraph.')).toBeInTheDocument()
    expect(screen.getByText('Second paragraph.')).toBeInTheDocument()
    // image column precedes content column in the DOM
    const row = heading.closest('.grid')!
    expect(row.children[0]!.querySelector('img')).not.toBeNull()
  })

  it('reverses the layout with the image on the right when flipped', () => {
    render(<SiteHalf {...band} flipped heading="Free Website Templates" />)
    const heading = screen.getByRole('heading', { level: 2, name: 'Free Website Templates' })
    const row = heading.closest('.grid')!
    expect(row.children[0]!.querySelector('img')).toBeNull()
    expect(row.children[1]!.querySelector('img')).not.toBeNull()
  })
})
