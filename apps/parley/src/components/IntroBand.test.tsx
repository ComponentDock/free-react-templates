import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IntroBand } from './IntroBand'
import { introBand } from '../data'

describe('IntroBand', () => {
  it('renders the heading, the quote link and the Our Services pill on a gradient overlay', () => {
    render(<IntroBand />)
    const band = screen.getByRole('region', { name: 'Intro band' })
    expect(screen.getByRole('heading', { level: 2, name: introBand.heading })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Request A Quote' })).toHaveAttribute(
      'href',
      '#consult',
    )
    expect(screen.getByRole('link', { name: 'Our Services' })).toHaveAttribute('href', '#services')
    const overlay = band.querySelector('.from-band-blue')
    expect(overlay).not.toBeNull()
  })
})
