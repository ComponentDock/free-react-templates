import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an inline SVG for every supported brand', () => {
    for (const name of ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'] as const) {
      const { container, unmount } = render(<BrandIcon name={name} />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg?.querySelector('path')).toHaveAttribute('d')
      unmount()
    }
  })

  it('applies the default and custom className values', () => {
    const { container, rerender } = render(<BrandIcon name="facebook" />)
    expect(container.querySelector('svg')).toHaveClass('h-4', 'w-4')
    rerender(<BrandIcon name="facebook" className="h-6 w-6 text-[#ccc]" />)
    expect(container.querySelector('svg')).toHaveClass('h-6', 'w-6', 'text-[#ccc]')
  })
})
