import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { EmailField } from './EmailField'

function renderField(overrides: Partial<Parameters<typeof EmailField>[0]> = {}) {
  const onChange = vi.fn()
  const onFocus = vi.fn()

  const view = render(
    <EmailField
      id="looming-email"
      value=""
      hasError={false}
      errorId="looming-email-error"
      onChange={onChange}
      onFocus={onFocus}
      {...overrides}
    />,
  )

  return { ...view, onChange, onFocus }
}

describe('EmailField', () => {
  it('renders the flat white slab with its shadow and reserved insets', () => {
    renderField()

    const field = screen.getByPlaceholderText('Your email address')

    expect(field).toHaveAttribute('id', 'looming-email')
    expect(field).toHaveAttribute('name', 'email')
    expect(field).toHaveAttribute('type', 'email')
    expect(field).toHaveAttribute('inputMode', 'email')
    expect(field).toHaveAttribute('placeholder', 'Your email address')
    expect(field).toHaveClass(
      'block',
      'h-full',
      'w-full',
      'rounded-none',
      'border-0',
      'bg-white',
      'pt-0',
      'pr-[90px]',
      'pb-0',
      'pl-[35px]',
      'font-sans',
      'text-[15px]',
      'leading-[1.2]',
      'font-medium',
      'text-ink',
      'placeholder:text-placeholder',
      'shadow-[0_10px_15px_rgba(0,0,0,0.1)]',
      'transition-all',
      'duration-[400ms]',
      'focus:shadow-[0_10px_15px_rgba(0,0,0,0.2)]',
    )
    expect(field).not.toHaveAttribute('aria-invalid')
    expect(field).not.toHaveAttribute('aria-describedby')
  })

  it('describes itself with the bubble once the last submit was rejected', () => {
    renderField({ hasError: true })

    const field = screen.getByPlaceholderText('Your email address')

    expect(field).toHaveAttribute('aria-invalid', 'true')
    expect(field).toHaveAttribute('aria-describedby', 'looming-email-error')
  })

  it('reports keystrokes and focus to its owner', () => {
    const { onChange, onFocus } = renderField()

    const field = screen.getByPlaceholderText('Your email address')

    fireEvent.change(field, { target: { value: 'ada@example.com' } })
    fireEvent.focus(field)

    expect(onChange).toHaveBeenCalledWith('ada@example.com')
    expect(onFocus).toHaveBeenCalledTimes(1)
  })

  it('accepts layout overrides', () => {
    renderField({ className: 'pr-0' })

    expect(screen.getByPlaceholderText('Your email address')).toHaveClass('pr-0')
  })
})
