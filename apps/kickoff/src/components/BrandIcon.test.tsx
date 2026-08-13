import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an svg with the requested brand path', () => {
    const { container } = render(<BrandIcon name="twitter" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.querySelector('path')).toHaveAttribute('d', expect.stringContaining('M23.953'))
  })

  it('applies a custom className', () => {
    const { container } = render(<BrandIcon name="facebook" className="h-6 w-6" />)
    expect(container.querySelector('svg')).toHaveClass('h-6 w-6')
  })

  it('renders the instagram glyph', () => {
    const { container } = render(<BrandIcon name="instagram" />)
    expect(container.querySelector('svg')?.querySelector('path')).toBeInTheDocument()
  })
})
