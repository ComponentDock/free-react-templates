import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { SiteHalf } from './SiteHalf'

describe('SiteHalf', () => {
  it('renders', () => {
    const { container } = render(<SiteHalf />)
    expect(container).toBeInTheDocument()
  })
})
