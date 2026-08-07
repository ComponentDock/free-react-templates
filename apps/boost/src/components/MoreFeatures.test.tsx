import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MoreFeatures } from './MoreFeatures'

describe('MoreFeatures', () => {
  it('renders the heading and both image cards', () => {
    const { container } = render(<MoreFeatures />)

    expect(screen.getByRole('heading', { name: 'More Features' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Strategic Partners' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Business in Mind' })).toBeInTheDocument()

    const images = container.querySelectorAll('img')
    expect(images.length).toBe(2)
    expect(images[0]).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/boost-more'),
    )
  })
})
