import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'
import { socialLinks, shareLinks } from '../data'

describe('BrandIcon', () => {
  it('renders an inline SVG for every supported brand', () => {
    for (const name of [...socialLinks, ...shareLinks]) {
      const { container } = render(<BrandIcon name={name} />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg!.querySelector('path')).not.toBeNull()
    }
  })
})
