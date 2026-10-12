import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { EmailField } from './EmailField'

function renderField(overrides: Partial<Parameters<typeof EmailField>[0]> = {}) {
  const props = {
    id: 'prologue-email',
    value: '',
    hasError: false,
    errorId: 'prologue-email-error',
    onChange: vi.fn(),
    onFocus: vi.fn(),
    ...overrides,
  }

  render(<EmailField {...props} />)

  return { props, field: screen.getByPlaceholderText('Add your email') }
}

describe('EmailField', () => {
  it('renders the flat brand-coloured slab with both insets and its own placeholder', () => {
    const { field } = renderField()

    expect(field).toHaveAttribute('type', 'email')
    expect(field).toHaveAttribute('name', 'email')
    expect(field).toHaveAttribute('inputmode', 'email')
    expect(field).toHaveAttribute('autocomplete', 'off')
    expect(field).toHaveAttribute('placeholder', 'Add your email')
    expect(field).toHaveClass(
      'block',
      'h-full',
      'w-full',
      'rounded-none',
      'border-0',
      'bg-accent',
      'pt-0',
      'pr-[80px]',
      'pb-0',
      'pl-[172px]',
      'font-sans',
      'text-[15px]',
      'leading-[1.2]',
      'font-medium',
      'text-ink',
      'placeholder:text-placeholder',
      'shadow-[0_10px_15px_0_rgba(0,0,0,0.1)]',
      'focus:shadow-[0_10px_15px_0_rgba(0,0,0,0.2)]',
      'focus:outline-none',
      'max-[576px]:pr-[60px]',
      'max-[576px]:pl-[25px]',
    )
  })

  it('stays silent about an accepted value', () => {
    const { field } = renderField()

    expect(field).not.toHaveAttribute('aria-invalid')
    expect(field).not.toHaveAttribute('aria-describedby')
  })

  it('describes itself through the bubble once the value was rejected', () => {
    const { field } = renderField({ hasError: true, value: 'ada@example' })

    expect(field).toHaveValue('ada@example')
    expect(field).toHaveAttribute('aria-invalid', 'true')
    expect(field).toHaveAttribute('aria-describedby', 'prologue-email-error')
  })

  it('reports keystrokes and focus to its owner and takes layout overrides', () => {
    const { props, field } = renderField({ className: 'pr-0' })

    fireEvent.change(field, { target: { value: 'ada@example.com' } })
    fireEvent.focus(field)

    expect(props.onChange).toHaveBeenCalledWith('ada@example.com')
    expect(props.onFocus).toHaveBeenCalledTimes(1)
    expect(field).toHaveClass('pr-0')
  })
})
