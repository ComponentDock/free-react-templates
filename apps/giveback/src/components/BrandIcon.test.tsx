import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an inline svg with the given brand path', () => {
    const { container } = render(<BrandIcon name="github" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.querySelector('path')).toHaveAttribute('d')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('applies a custom className', () => {
    const { container } = render(<BrandIcon name="x" className="h-6 w-6" />)
    expect(container.querySelector('svg')).toHaveAttribute('class', 'h-6 w-6')
  })
})
