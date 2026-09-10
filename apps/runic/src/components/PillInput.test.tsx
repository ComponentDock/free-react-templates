import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PillInput } from './PillInput'

describe('PillInput', () => {
  it('renders with placeholder text', () => {
    render(<PillInput placeholder="FIRST NAME" />)
    expect(screen.getByPlaceholderText('FIRST NAME')).toBeInTheDocument()
  })

  it('displays the value', () => {
    render(<PillInput value="John" onChange={() => {}} placeholder="FIRST NAME" />)
    expect(screen.getByDisplayValue('John')).toBeInTheDocument()
  })

  it('calls onChange when typing', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<PillInput placeholder="FIRST NAME" onChange={handleChange} />)
    await user.type(screen.getByPlaceholderText('FIRST NAME'), 'A')
    expect(handleChange).toHaveBeenCalled()
  })

  it('renders field dot', () => {
    const { container } = render(<PillInput placeholder="EMAIL" />)
    const dot = container.querySelector('span[aria-hidden="true"]')
    expect(dot).toBeInTheDocument()
  })

  it('activates dot when active prop is true', () => {
    const { container } = render(<PillInput placeholder="EMAIL" active />)
    const dot = container.querySelector('span[aria-hidden="true"]')
    expect(dot).toHaveClass('bg-dot-active')
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<PillInput ref={ref as React.Ref<HTMLInputElement>} placeholder="TEST" />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
