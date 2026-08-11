import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeaturedImage } from './FeaturedImage'

describe('FeaturedImage', () => {
  it('renders a full-height cover-fit image panel with a seeded placeholder', () => {
    const { container } = render(<FeaturedImage />)

    const panel = container.querySelector('.featured-image') as HTMLElement | null
    expect(panel).not.toBeNull()
    expect(panel?.style.backgroundImage).toContain('picsum.photos/seed/scribble-1')
    expect(panel).toHaveAttribute('aria-hidden', 'true')
  })
})
