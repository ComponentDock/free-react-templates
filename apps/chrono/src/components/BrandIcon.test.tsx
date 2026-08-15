import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an svg with the given brand path', () => {
    const { container } = render(<BrandIcon name="twitter" className="h-4 w-4" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).toHaveAttribute('class', 'h-4 w-4')
    expect(svg!.querySelector('path')).toHaveAttribute('d')
  })

  it('renders every supported brand', () => {
    for (const name of ['twitter', 'facebook', 'behance'] as const) {
      const { container } = render(<BrandIcon name={name} />)
      expect(container.querySelector('svg')).toBeInTheDocument()
    }
  })
})
