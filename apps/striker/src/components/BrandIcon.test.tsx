import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon, type BrandName } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders every brand glyph as a decorative inline svg', () => {
    const names: BrandName[] = ['twitter', 'facebook', 'instagram', 'youtube']
    for (const name of names) {
      const { container, unmount } = render(<BrandIcon name={name} />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
      unmount()
    }
  })

  it('applies the default size when no className is given', () => {
    const { container } = render(<BrandIcon name="youtube" />)
    expect(container.querySelector('svg')).toHaveClass('h-4', 'w-4')
  })
})
