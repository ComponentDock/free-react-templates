import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an svg for known brand names', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    expect(container.querySelector('svg')).not.toBeNull()
  })

  it('renders nothing for an unknown brand name', () => {
    const { container } = render(<BrandIcon name="unknown" />)
    expect(container.querySelector('svg')).toBeNull()
  })
})
