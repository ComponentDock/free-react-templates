import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders', () => {
    const { container } = render(<CtaBand />)
    expect(container).toBeInTheDocument()
  })
})
