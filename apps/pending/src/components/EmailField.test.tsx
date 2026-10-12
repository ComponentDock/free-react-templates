import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { EmailField } from './EmailField'

function renderField(hasError = false) {
  const onChange = vi.fn()
  const onFocus = vi.fn()
  const view = render(
    <EmailField
      id="pending-email"
      value=""
      hasError={hasError}
      errorId="pending-email-error"
      onChange={onChange}
      onFocus={onFocus}
    />,
  )

  return { ...view, onChange, onFocus }
}

describe('EmailField', () => {
  it('is a bare underline field: square, transparent, inset 40px for the arrow lane', () => {
    renderField()

    const field = screen.getByPlaceholderText('Your email address')

    expect(field).toHaveAttribute('name', 'email')
    expect(field).toHaveAttribute('type', 'email')
    expect(field).toHaveAttribute('placeholder', 'Your email address')
    expect(field).toHaveClass(
      'block',
      'h-full',
      'w-full',
      'rounded-none',
      'pr-[40px]',
      'pl-[3px]',
      'bg-transparent',
      'border-b',
      'border-b-white/10',
      'text-[15px]',
      'text-white',
      'placeholder:text-placeholder',
      'transition-all',
      'duration-[400ms]',
      'focus:bg-white/5',
    )
    expect(field.className).not.toContain('border-l')
    expect(field.className).not.toContain('border-t')
  })

  it('records keystrokes and clears the error on focus', () => {
    const { onChange, onFocus } = renderField()

    const field = screen.getByPlaceholderText('Your email address')

    fireEvent.change(field, { target: { value: 'ada@example.com' } })
    fireEvent.focus(field)

    expect(onChange).toHaveBeenCalledWith('ada@example.com')
    expect(onFocus).toHaveBeenCalled()
  })

  it('stays silent while the value is accepted', () => {
    renderField()

    const field = screen.getByPlaceholderText('Your email address')

    expect(field).not.toHaveAttribute('aria-invalid')
    expect(field).not.toHaveAttribute('aria-describedby')
  })

  it('marks itself invalid and points at the bubble once a submit is rejected', () => {
    renderField(true)

    const field = screen.getByPlaceholderText('Your email address')

    expect(field).toHaveAttribute('aria-invalid', 'true')
    expect(field).toHaveAttribute('aria-describedby', 'pending-email-error')
  })

  it('accepts a className override', () => {
    render(
      <EmailField
        id="pending-email"
        value=""
        hasError={false}
        errorId="pending-email-error"
        onChange={vi.fn()}
        onFocus={vi.fn()}
        className="pl-0"
      />,
    )

    expect(screen.getByPlaceholderText('Your email address')).toHaveClass('pl-0')
  })
})
