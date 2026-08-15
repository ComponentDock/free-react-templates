import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an svg with the given brand path', () => {
    const { container } = render(<BrandIcon name="facebook" className="h-3.5 w-3.5" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).toHaveAttribute('class', 'h-3.5 w-3.5')
    expect(svg!.querySelector('path')).toHaveAttribute('d')
  })

  it('renders every supported brand', () => {
    for (const name of ['facebook', 'twitter', 'behance'] as const) {
      const { container } = render(<BrandIcon name={name} />)
      expect(container.querySelector('svg')).toBeInTheDocument()
    }
  })
})
