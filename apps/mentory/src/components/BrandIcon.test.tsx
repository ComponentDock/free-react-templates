import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an svg with the given path for a known brand', () => {
    const { container } = render(<BrandIcon name="react" />)
    const svg = container.querySelector('svg')
    expect(svg).not.toBeNull()
    expect(svg!.querySelector('path')).not.toBeNull()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('returns null for an unknown brand', () => {
    const { container } = render(<BrandIcon name="nope" />)
    expect(container.querySelector('svg')).toBeNull()
  })
})
