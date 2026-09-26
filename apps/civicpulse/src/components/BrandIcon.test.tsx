import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon, type BrandName } from './BrandIcon'

describe('BrandIcon', () => {
  it.each(['facebook', 'twitter', 'dribbble', 'behance'] as BrandName[])(
    'renders %s SVG',
    (name) => {
      const { container } = render(<BrandIcon name={name} />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg!.tagName).toBe('svg')
    },
  )

  it('applies custom className', () => {
    const { container } = render(<BrandIcon name="facebook" className="h-8 w-8" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('h-8', 'w-8')
  })
})
