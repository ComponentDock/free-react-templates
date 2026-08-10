import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an inline svg with the brand path and aria-hidden', () => {
    const { container } = render(<BrandIcon name="facebook" className="h-4 w-4" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg?.querySelector('path')).toHaveAttribute('d')
    expect(svg).toHaveClass('h-4', 'w-4')
  })
})
