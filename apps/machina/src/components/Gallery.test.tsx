import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'
import { GALLERY_ITEMS } from '../data'

describe('Gallery', () => {
  it('renders three project tiles with titles and lines', () => {
    const { container } = render(<Gallery />)
    GALLERY_ITEMS.forEach((item) => {
      expect(screen.getByRole('link', { name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.line)).toBeInTheDocument()
    })
    expect(container.querySelectorAll('img')).toHaveLength(GALLERY_ITEMS.length)
  })
})
