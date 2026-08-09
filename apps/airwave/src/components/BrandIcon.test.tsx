import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it.each(['spotify', 'apple', 'google', 'youtube'] as const)(
    'renders an inline SVG for %s with aria-hidden',
    (name) => {
      const { container } = render(<BrandIcon name={name} />)

      const svg = container.querySelector('svg')
      expect(svg).not.toBeNull()
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg).not.toHaveAttribute('data-brand')
      expect(svg!.getAttribute('viewBox')).toBe('0 0 24 24')
    },
  )
})
