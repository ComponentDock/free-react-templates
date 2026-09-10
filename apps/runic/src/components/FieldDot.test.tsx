import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { FieldDot } from './FieldDot'

describe('FieldDot', () => {
  it('renders without active state by default', () => {
    const { container } = render(<FieldDot />)
    const dot = container.querySelector('span')
    expect(dot).toBeInTheDocument()
    expect(dot).not.toHaveClass('bg-dot-active')
  })

  it('renders with active state when active prop is true', () => {
    const { container } = render(<FieldDot active />)
    const dot = container.querySelector('span')
    expect(dot).toHaveClass('bg-dot-active')
  })
})
