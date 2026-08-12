import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GALLERY_HEADLINE, GALLERY_PARAGRAPH } from '../data'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the eyebrow, headline, paragraph and six photos in a grid', () => {
    const { container } = render(<Gallery />)
    expect(screen.getByText('Office Gallery')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: GALLERY_HEADLINE })).toBeInTheDocument()
    expect(screen.getByText(GALLERY_PARAGRAPH)).toBeInTheDocument()
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(6)
    expect(images[0]!.getAttribute('src')).toContain('meridian-office-1')
  })
})
