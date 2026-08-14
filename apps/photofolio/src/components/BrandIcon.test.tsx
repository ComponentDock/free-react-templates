import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it.each(['pinterest', 'facebook', 'twitter', 'dribbble', 'behance'] as const)(
    'renders the %s icon with a path',
    (name) => {
      const { container } = render(<BrandIcon name={name} />)
      const svg = container.querySelector('svg')!
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
      expect(svg.querySelector('path')).toHaveAttribute('d')
      expect(svg).toHaveAttribute('aria-hidden', 'true')
    },
  )
})
