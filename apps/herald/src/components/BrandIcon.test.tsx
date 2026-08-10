import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an svg path for every brand name', () => {
    for (const name of ['facebook', 'twitter', 'pinterest', 'google', 'rss'] as const) {
      const { container } = render(<BrandIcon name={name} />)
      expect(container.querySelector('svg path')).toHaveAttribute('d')
    }
  })

  it('applies the default size class when no className is given', () => {
    const { container } = render(<BrandIcon name="rss" />)
    expect(container.querySelector('svg')).toHaveClass('h-5', 'w-5')
  })

  it('applies a custom className', () => {
    const { container } = render(<BrandIcon name="rss" className="h-4 w-4" />)
    expect(container.querySelector('svg')).toHaveClass('h-4', 'w-4')
  })
})
