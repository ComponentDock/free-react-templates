import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it.each(['facebook', 'twitter', 'instagram', 'google'] as const)(
    'renders the %s glyph as a decorative inline svg',
    (name) => {
      const { container } = render(<BrandIcon name={name} />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg?.querySelector('path')).toHaveAttribute('d')
    },
  )

  it('applies a custom className', () => {
    const { container } = render(<BrandIcon name="facebook" className="h-6 w-6" />)
    expect(container.querySelector('svg')).toHaveClass('h-6', 'w-6')
  })
})
