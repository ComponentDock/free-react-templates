import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon, type BrandName } from './BrandIcon'

const names: BrandName[] = ['facebook', 'x', 'instagram', 'pinterest']

describe('BrandIcon', () => {
  it('renders an inline svg for every brand name', () => {
    for (const name of names) {
      const { container } = render(<BrandIcon name={name} />)
      const svg = container.querySelector('svg')
      expect(svg).not.toBeNull()
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg!.querySelector('path')).not.toBeNull()
    }
  })

  it('applies the custom className', () => {
    const { container } = render(<BrandIcon name="x" className="h-6 w-6" />)
    expect(container.querySelector('svg')).toHaveClass('h-6', 'w-6')
  })
})
