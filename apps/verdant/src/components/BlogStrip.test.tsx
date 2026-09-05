import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { BlogStrip } from './BlogStrip'

describe('BlogStrip', () => {
  it('renders', () => {
    const { container } = render(<BlogStrip />)
    expect(container).toBeInTheDocument()
  })
})
