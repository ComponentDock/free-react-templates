import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders three photo cards with titles and muted paragraphs', () => {
    render(<Services />)
    for (const title of ['Creative Photography', 'Wedding Photography', 'Nature Photography']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    const photos = document.querySelectorAll('section#services img')
    expect(photos.length).toBe(3)
  })

  it('renders service links that turn brand-coral on hover', () => {
    render(<Services />)
    const link = screen.getByRole('link', { name: 'Wedding Photography' })
    expect(link.className).toContain('hover:text-brand')
  })
})
