import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders a known brand glyph as an aria-hidden svg with the given class', () => {
    const { container } = render(<BrandIcon name="instagram" className="h-4 w-4" />)
    const svg = container.querySelector('svg')
    expect(svg).not.toBeNull()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).toHaveAttribute('class', 'h-4 w-4')
  })

  it('renders nothing for an unknown brand name', () => {
    const { container } = render(<BrandIcon name="nope" />)
    expect(container.querySelector('svg')).toBeNull()
  })
})
