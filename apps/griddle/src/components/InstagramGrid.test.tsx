import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { InstagramGrid } from './InstagramGrid'
import { INSTAGRAM_SEEDS } from '../data'

describe('InstagramGrid', () => {
  it('renders four images', () => {
    const { container } = render(<InstagramGrid />)
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(INSTAGRAM_SEEDS.length)
  })

  it('renders images with correct seeds', () => {
    const { container } = render(<InstagramGrid />)
    const images = container.querySelectorAll('img')
    INSTAGRAM_SEEDS.forEach((seed, i) => {
      expect(images[i]).toHaveAttribute('src', `https://picsum.photos/seed/${seed}/400/400`)
    })
  })

  it('renders Instagram icon overlays', () => {
    const { container } = render(<InstagramGrid />)
    const icons = container.querySelectorAll('svg[aria-hidden="true"]')
    expect(icons).toHaveLength(INSTAGRAM_SEEDS.length)
  })
})
