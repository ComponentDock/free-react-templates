import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it.each(['facebook', 'twitter', 'instagram', 'youtube'] as const)(
    'renders the %s glyph with currentColor fill',
    (name) => {
      const { container } = render(<BrandIcon name={name} className="h-4 w-4" />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
      expect(svg).toHaveAttribute('fill', 'currentColor')
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg!.getAttribute('class')).toContain('h-4')
      expect(svg!.querySelector('path')).toHaveAttribute('d')
    },
  )
})
