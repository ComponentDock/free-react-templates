import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders nothing', () => {
    const { container } = render(<ErrorSection />)
    expect(container.firstChild).toBeNull()
  })
})
