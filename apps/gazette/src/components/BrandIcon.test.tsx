import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it.each([
    ['twitter', 'M18.901 1.153'],
    ['facebook', 'M24 12.073'],
    ['instagram', 'M12 2.163'],
    ['youtube', 'M23.498 6.186'],
    ['vimeo', 'M23.977 6.416'],
    ['snapchat', 'M12.206.793'],
  ] as const)('renders an accessible hidden svg path for %s', (name, pathPrefix) => {
    const { container } = render(<BrandIcon name={name} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg!.querySelector('path')).toHaveAttribute('d', expect.stringContaining(pathPrefix))
  })

  it('applies a custom className', () => {
    const { container } = render(<BrandIcon name="twitter" className="h-3 w-3" />)
    expect(container.querySelector('svg')).toHaveClass('h-3', 'w-3')
  })
})
