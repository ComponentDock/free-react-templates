import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an inline svg for a brand with a default size', () => {
    const { container } = render(<BrandIcon name="facebook" />)

    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg!.querySelector('path')).toHaveAttribute('d', expect.stringContaining('M24'))
  })

  it('applies a custom className', () => {
    const { container } = render(<BrandIcon name="twitter" className="h-6 w-6" />)

    expect(container.querySelector('svg')).toHaveClass('h-6', 'w-6')
  })
})
