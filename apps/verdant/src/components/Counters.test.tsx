import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('renders', () => {
    const { container } = render(<Counters />)
    expect(container).toBeInTheDocument()
  })
})
