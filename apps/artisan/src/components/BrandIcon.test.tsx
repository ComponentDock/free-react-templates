import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders a path for every supported brand', () => {
    for (const name of ['facebook', 'twitter', 'dribbble', 'behance'] as const) {
      const { container } = render(<BrandIcon name={name} />)
      expect(container.querySelector('path')).toHaveAttribute('d', expect.any(String))
    }
  })

  it('applies the className to the svg', () => {
    const { container } = render(<BrandIcon name="facebook" className="h-8 w-8" />)
    expect(container.querySelector('svg')).toHaveClass('h-8 w-8')
  })
})
