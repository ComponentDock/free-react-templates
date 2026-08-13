import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an inline svg with the given brand path', () => {
    const { container } = render(<BrandIcon name="facebook" />)

    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
    expect(svg!.querySelector('path')).toHaveAttribute('d', expect.stringContaining('M24'))
  })

  it('accepts a custom className', () => {
    const { container } = render(<BrandIcon name="twitter" className="h-5 w-5" />)

    expect(container.querySelector('svg')).toHaveAttribute('class', 'h-5 w-5')
  })

  it('renders every supported brand', () => {
    for (const name of ['facebook', 'twitter', 'skype', 'instagram'] as const) {
      const { container } = render(<BrandIcon name={name} />)
      expect(container.querySelector('path')).toHaveAttribute('d', expect.any(String))
    }
  })

  it('is hidden from assistive technology', () => {
    const { container } = render(<BrandIcon name="instagram" />)

    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })
})
