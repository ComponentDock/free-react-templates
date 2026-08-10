import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'
import { socialLinks } from '../data'

describe('BrandIcon', () => {
  it('renders an inline svg for every social brand', () => {
    for (const name of socialLinks) {
      const { container } = render(<BrandIcon name={name} className="h-4 w-4" />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg!.querySelector('path')).toBeInTheDocument()
    }
  })
})
