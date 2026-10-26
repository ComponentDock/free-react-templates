import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ListingHead } from './ListingHead'

describe('ListingHead', () => {
  it('sits the eyebrow over a single heavy title', () => {
    render(<ListingHead />)

    const header = screen.getByRole('banner')
    expect(header.className).toContain('mb-7')

    const eyebrow = screen.getByText('Featured listings')
    expect(eyebrow.tagName).toBe('P')
    expect(eyebrow.className).toContain('text-[14px]')
    expect(eyebrow.className).toContain('font-bold')
    expect(eyebrow.className).toContain('tracking-[.1em]')
    expect(eyebrow.className).toContain('uppercase')
    expect(eyebrow.className).toContain('text-gold-deep')
  })

  it('scales the title on the clamp and keeps exactly one h1', () => {
    render(<ListingHead />)

    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)

    const title = headings[0]!
    expect(title.textContent).toBe('Homes for sale in Coral Bay')
    expect(title.className).toContain('text-[clamp(28px,3.8vw,42px)]')
    expect(title.className).toContain('leading-[1.1]')
    expect(title.className).toContain('font-extrabold')
    expect(title.className).toContain('tracking-[-.02em]')
    expect(title.className).toContain('mt-[6px]')
    expect(title.className).toContain('mb-0')
  })

  it('keeps the eyebrow out of the heading outline', () => {
    render(<ListingHead />)

    expect(screen.queryByRole('heading', { level: 2 })).toBeNull()
    expect(screen.getAllByRole('heading')).toHaveLength(1)
  })
})
