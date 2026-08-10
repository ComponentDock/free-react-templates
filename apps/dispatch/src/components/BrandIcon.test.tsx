import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an inline svg with the given brand path', () => {
    const { container } = render(<BrandIcon name="facebook" className="h-4 w-4" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
    expect(svg!.querySelector('path')).toHaveAttribute('d', expect.stringContaining('M24'))
  })

  it('supports every footer brand', () => {
    for (const name of [
      'facebook',
      'twitter',
      'pinterest',
      'vimeo',
      'instagram',
      'google',
    ] as const) {
      const { container } = render(<BrandIcon name={name} />)
      expect(container.querySelector('path')).not.toBeNull()
    }
  })
})
