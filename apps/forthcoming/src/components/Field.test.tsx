import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Field } from './Field'

function renderField(error?: string) {
  const onChange = vi.fn()
  const onFocus = vi.fn()

  const view = render(
    <Field
      id="forthcoming-email"
      name="email"
      label="Email Address"
      value=""
      error={error}
      onChange={onChange}
      onFocus={onFocus}
    />,
  )

  return { ...view, onChange, onFocus, input: screen.getByLabelText('Email Address') }
}

describe('Field', () => {
  it('renders a 500px round translucent-bordered well with a transparent fill', () => {
    const { input } = renderField()

    const well = input.closest('div')

    expect(well).toHaveClass(
      'group',
      'relative',
      'mx-[5px]',
      'mt-[20px]',
      'h-[50px]',
      'w-[500px]',
      'max-w-[calc(100%_-_10px)]',
      'rounded-[25px]',
      'border-2',
      'border-field-border',
      'bg-transparent',
    )
    expect(input).toHaveClass(
      'h-full',
      'w-full',
      'bg-transparent',
      'px-[38px]',
      'text-[15px]',
      'leading-[1.2]',
      'text-white',
      'placeholder:text-white',
    )
    expect(input).toHaveAttribute('placeholder', 'Email Address')
    expect(input).toHaveAttribute('name', 'email')
    expect(input).toHaveAttribute('autocomplete', 'off')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(input).not.toHaveAttribute('aria-invalid')
    expect(input).not.toHaveAttribute('aria-describedby')
  })

  it('keeps the blue outline ring hidden until the field is focused', () => {
    renderField()

    expect(screen.getByTestId('focus-ring')).toHaveClass(
      'pointer-events-none',
      'absolute',
      'top-[-2px]',
      'left-[-2px]',
      'h-[calc(100%_+_4px)]',
      'w-[calc(100%_+_4px)]',
      'invisible',
      'rounded-[25px]',
      'border-2',
      'border-brand',
      'opacity-0',
      'scale-x-[1.1]',
      'scale-y-[1.2]',
      'peer-focus:visible',
      'peer-focus:scale-100',
      'peer-focus:opacity-100',
    )
  })

  it('reports typing and focus back to the parent', () => {
    const { onChange, onFocus, input } = renderField()

    fireEvent.change(input, { target: { value: 'ada' } })
    fireEvent.focus(input)

    expect(onChange).toHaveBeenCalledWith('ada')
    expect(onFocus).toHaveBeenCalledTimes(1)
  })

  it('reveals the rounded bubble and warning triangle when it carries an error', () => {
    const { input } = renderField('Email is required: ex@abc.xyz')

    const bubble = screen.getByRole('alert')

    expect(bubble).toHaveTextContent('Email is required: ex@abc.xyz')
    expect(bubble).toHaveClass(
      'invisible',
      'absolute',
      'top-1/2',
      'right-[12px]',
      'max-w-[70%]',
      '-translate-y-1/2',
      'rounded-[15px]',
      'border',
      'border-error',
      'bg-white',
      'py-[4px]',
      'pr-[25px]',
      'pl-[10px]',
      'text-[14px]',
      'leading-[1.4]',
      'text-error',
      'opacity-0',
      'transition-opacity',
      'group-hover:visible',
      'group-hover:opacity-100',
      'max-[992px]:visible',
      'max-[992px]:opacity-100',
    )
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('aria-describedby', 'forthcoming-email-error')

    const triangle = input.closest('div')?.querySelector('svg')

    expect(triangle).toHaveClass('size-[14px]', 'text-error', 'right-[18px]')
  })

  it('accepts a className override', () => {
    const { input } = renderField()

    expect(input.closest('div')).toBeInTheDocument()
    expect(screen.getByTestId('focus-ring')).toBeInTheDocument()
  })
})
