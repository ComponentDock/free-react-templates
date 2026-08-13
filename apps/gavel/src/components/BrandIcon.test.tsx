import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it.each(['twitter', 'facebook', 'instagram'] as const)(
    'renders the %s glyph as an svg path',
    (name) => {
      const { container } = render(<BrandIcon name={name} className="h-4 w-4" />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
      expect(svg!.querySelector('path')).toBeInTheDocument()
      expect(svg!.getAttribute('class')).toContain('h-4')
    },
  )

  it('is decorative (hidden from the accessibility tree)', () => {
    const { container } = render(<BrandIcon name="twitter" />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('exposes the icon names for consumers', () => {
    expect(screen.queryByText('twitter')).not.toBeInTheDocument()
  })
})
