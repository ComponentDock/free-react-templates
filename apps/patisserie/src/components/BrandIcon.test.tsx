import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an accessible-hidden svg with the brand path', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg?.querySelector('path')).toHaveAttribute('d', expect.stringContaining('M24'))
  })

  it('supports all three brand names used by the template', () => {
    for (const name of ['facebook', 'instagram', 'twitter'] as const) {
      const { container, unmount } = render(<BrandIcon name={name} className="h-6 w-6" />)
      expect(container.querySelector('svg')).toHaveClass('h-6', 'w-6')
      unmount()
    }
  })

  it('renders nothing that leaks the source brand', () => {
    const { container } = render(<BrandIcon name="instagram" />)
    expect(container.textContent).toBe('')
  })
})
