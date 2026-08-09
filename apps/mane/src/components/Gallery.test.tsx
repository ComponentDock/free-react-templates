import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading and eight photo tiles', () => {
    render(<Gallery />)

    expect(screen.getByRole('heading', { name: 'Our gallery' })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(8)
  })

  it('labels every tile with a descriptive alt text', () => {
    render(<Gallery />)

    const alts = screen.getAllByRole('img').map((img) => img.getAttribute('alt'))
    expect(alts.every((alt) => alt && alt.length > 0)).toBe(true)
  })
})
