import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PHOTO } from '../data/site'
import { HeroMedia } from './HeroMedia'

describe('HeroMedia', () => {
  it('renders one decorative, declared-size photograph', () => {
    const { container } = render(<HeroMedia />)

    const photo = container.querySelector('img')
    expect(photo).not.toBeNull()
    expect(photo).toHaveAttribute('src', PHOTO.src)
    expect(photo).toHaveAttribute('width', String(PHOTO.width))
    expect(photo).toHaveAttribute('height', String(PHOTO.height))
    expect(photo).toHaveAttribute('alt', '')
    expect(photo).toHaveAttribute('fetchpriority', 'high')
    expect(photo).toHaveClass('tt-media')
  })

  it('uses a deterministic placeholder rather than a bundled asset', () => {
    const { container } = render(<HeroMedia />)

    expect(container.querySelector('img')?.getAttribute('src')).toMatch(
      /^https:\/\/picsum\.photos\/seed\/[\w-]+\/\d+\/\d+$/,
    )
  })
})
