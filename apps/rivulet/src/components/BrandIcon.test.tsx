import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an svg path for every brand name', () => {
    for (const name of ['twitter', 'linkedin', 'dribbble', 'instagram'] as const) {
      const { container } = render(<BrandIcon name={name} />)
      expect(container.querySelector('svg path')).toHaveAttribute('d')
    }
  })

  it('applies the default size class when no className is given', () => {
    const { container } = render(<BrandIcon name="twitter" />)
    expect(container.querySelector('svg')).toHaveClass('h-5', 'w-5')
  })

  it('applies a custom className', () => {
    const { container } = render(<BrandIcon name="twitter" className="h-6 w-6" />)
    expect(container.querySelector('svg')).toHaveClass('h-6', 'w-6')
  })
})
