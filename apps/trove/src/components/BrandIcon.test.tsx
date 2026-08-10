import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an inline svg with the brand path and default size', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
    expect(svg).toHaveClass('h-5 w-5')
    expect(svg!.querySelector('path')).toHaveAttribute('d', expect.stringContaining('M24 12.073'))
  })

  it('applies a custom className', () => {
    const { container } = render(<BrandIcon name="instagram" className="h-4 w-4" />)
    expect(container.querySelector('svg')).toHaveClass('h-4 w-4')
  })
})
