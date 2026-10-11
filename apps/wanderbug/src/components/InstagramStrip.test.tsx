import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramStrip } from './InstagramStrip'

describe('InstagramStrip', () => {
  it('renders six edge-to-edge tiles with an instagram overlay link', () => {
    const { container } = render(<InstagramStrip />)

    expect(container.querySelector('#instagram')).not.toBeNull()

    // The tiles are decorative photos (empty alt) inside labelled links.
    const images = Array.from(container.querySelectorAll('img'))
    expect(images).toHaveLength(6)
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/wanderbug-insta-1/400/400')
    expect(images[5]).toHaveAttribute('src', 'https://picsum.photos/seed/wanderbug-insta-6/400/400')

    const links = screen.getAllByRole('link', { name: 'Wanderbug on Instagram' })
    expect(links).toHaveLength(6)
    expect(links[0]).toHaveAttribute('href', '#instagram')

    const overlays = container.querySelectorAll('.overlay-brand')
    expect(overlays).toHaveLength(6)
    expect(overlays[0]?.querySelector('svg')).not.toBeNull()
  })
})
