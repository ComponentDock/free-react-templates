import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an inline SVG for every supported brand', () => {
    const { container } = render(
      <>
        <BrandIcon name="twitter" />
        <BrandIcon name="facebook" />
        <BrandIcon name="linkedin" />
        <BrandIcon name="pinterest" />
      </>,
    )
    const svgs = container.querySelectorAll('svg')
    expect(svgs).toHaveLength(4)
    for (const svg of svgs) {
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg.querySelector('path')).toHaveAttribute('d')
    }
  })

  it('accepts a custom className on the icon', () => {
    const { container } = render(<BrandIcon name="pinterest" className="h-6 w-6" />)
    expect(container.querySelector('svg')).toHaveClass('h-6 w-6')
  })

  it('falls back to the default icon size when no className is given', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    expect(container.querySelector('svg')).toHaveClass('h-4 w-4')
  })
})
