import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders nothing', () => {
    const { container } = render(<Navbar />)
    expect(container.firstChild).toBeNull()
  })
})
