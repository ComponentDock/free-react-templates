import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders the requested brand path as a decorative svg', () => {
    const { container, rerender } = render(<BrandIcon name="facebook" />)

    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg!.querySelector('path')).toHaveAttribute('d', expect.stringContaining('M24 12.073'))

    rerender(<BrandIcon name="linkedin" className="h-5 w-5" />)
    expect(container.querySelector('svg')).toHaveAttribute('class', 'h-5 w-5')
  })
})
