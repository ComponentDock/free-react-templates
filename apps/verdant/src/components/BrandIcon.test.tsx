import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders', () => {
    const { container } = render(<BrandIcon />)
    expect(container).toBeInTheDocument()
  })
})
