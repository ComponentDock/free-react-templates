import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an inline SVG for known brand names', () => {
    for (const name of ['facebook', 'twitter', 'instagram']) {
      const { container } = render(<BrandIcon name={name} />)
      expect(container.querySelector('svg')).not.toBeNull()
      expect(container.querySelector('svg')!.getAttribute('viewBox')).toBe('0 0 24 24')
    }
  })

  it('returns null for unknown names', () => {
    const { container } = render(<BrandIcon name="nope" />)
    expect(container.querySelector('svg')).toBeNull()
  })
})
