import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandIcon } from './social-icons'

describe('BrandIcon', () => {
  it('renders the requested brand glyph with an accessible-hidden svg', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
    expect(container.querySelector('path')).not.toBeNull()
  })

  it('applies a custom className', () => {
    const { container } = render(<BrandIcon name="linkedin" className="h-5 w-5" />)
    expect(container.querySelector('svg')).toHaveClass('h-5', 'w-5')
  })

  it('renders each supported brand', () => {
    for (const name of ['facebook', 'twitter', 'linkedin'] as const) {
      const { unmount } = render(<BrandIcon name={name} />)
      expect(screen.getByTestId(`brand-${name}`)).toBeInTheDocument()
      unmount()
    }
  })
})
