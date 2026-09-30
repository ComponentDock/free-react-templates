import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an inline SVG for each brand name', () => {
    const { container } = render(
      <>
        <BrandIcon name="facebook" />
        <BrandIcon name="instagram" />
        <BrandIcon name="twitter" />
        <BrandIcon name="linkedin" />
      </>,
    )
    expect(container.querySelectorAll('svg')).toHaveLength(4)
    expect(container.querySelectorAll('path')).toHaveLength(4)
  })

  it('applies the default and custom className', () => {
    const { container, rerender } = render(<BrandIcon name="facebook" />)
    expect(container.querySelector('svg')).toHaveClass('h-4', 'w-4')

    rerender(<BrandIcon name="facebook" className="h-6 w-6" />)
    expect(container.querySelector('svg')).toHaveClass('h-6', 'w-6')
  })

  it('is hidden from assistive technology (decorative)', () => {
    const { container } = render(<BrandIcon name="twitter" />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })
})
