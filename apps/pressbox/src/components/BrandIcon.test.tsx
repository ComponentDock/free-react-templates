import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an SVG for each brand name', () => {
    const names = ['facebook', 'twitter', 'instagram', 'youtube', 'rss'] as const
    for (const name of names) {
      const { unmount } = render(<BrandIcon name={name} />)
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg?.querySelector('path')).toBeInTheDocument()
      unmount()
    }
  })

  it('applies custom className', () => {
    render(<BrandIcon name="facebook" className="h-8 w-8" />)
    const svg = document.querySelector('svg')
    expect(svg).toHaveClass('h-8', 'w-8')
  })
})
