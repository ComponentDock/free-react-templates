import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Field } from './Field'

const baseProps = {
  id: 'imminent-email',
  name: 'email',
  label: 'Email Address',
  value: '',
  onChange: () => {},
  onFocus: () => {},
}

describe('Field', () => {
  it('renders one square-cornered 490px field with its bloom ring', () => {
    const { container } = render(<Field {...baseProps} />)

    const well = container.firstElementChild

    expect(well).toHaveClass(
      'group',
      'relative',
      'z-[1]',
      'mb-[20px]',
      'h-[50px]',
      'w-[490px]',
      'max-w-full',
    )

    const input = screen.getByLabelText('Email Address')

    expect(input).toHaveAttribute('placeholder', 'Email Address')
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveClass(
      'peer',
      'h-full',
      'w-full',
      'bg-white',
      'px-[25px]',
      'font-sans',
      'text-[16px]',
      'leading-[1.333333]',
      'text-field-text',
      'placeholder:text-placeholder',
    )
    // the design declares no radius here
    expect(input).not.toHaveClass('rounded-full')
    expect(input).not.toHaveAttribute('aria-invalid')
    expect(input).not.toHaveAttribute('aria-describedby')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    expect(well?.querySelector('[aria-hidden="true"]')).toHaveClass(
      'pointer-events-none',
      'absolute',
      'inset-0',
      '-z-10',
      'shadow-[0_0_0_0_var(--color-bloom)]',
      'peer-focus:animate-bloom',
    )
  })

  it('reveals the square bubble and the warning triangle when the field carries an error', () => {
    render(<Field {...baseProps} error="Valid email is required: ex@abc.xyz" />)

    const input = screen.getByLabelText('Email Address')

    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('aria-describedby', 'imminent-email-error')

    const bubble = screen.getByRole('alert')

    expect(bubble).toHaveTextContent('Valid email is required: ex@abc.xyz')
    expect(bubble).toHaveClass(
      'pointer-events-none',
      'invisible',
      'absolute',
      'top-1/2',
      'right-[12px]',
      'max-w-[70%]',
      '-translate-y-1/2',
      'border',
      'border-error',
      'bg-white',
      'pt-[5px]',
      'pr-[30px]',
      'pb-[6px]',
      'pl-[10px]',
      'text-[15px]',
      'text-error',
      'opacity-0',
      'group-hover:visible',
      'group-hover:opacity-100',
      'max-[992px]:visible',
      'max-[992px]:opacity-100',
    )
    expect(bubble.className).not.toContain('rounded-')

    expect(document.querySelector('svg.text-error')).not.toBeNull()
  })

  it('reports typing and focus to its parent', async () => {
    const onChange = vi.fn()
    const onFocus = vi.fn()
    const user = userEvent.setup()

    render(<Field {...baseProps} onChange={onChange} onFocus={onFocus} />)

    const input = screen.getByLabelText('Email Address')

    fireEvent.focus(input)
    expect(onFocus).toHaveBeenCalledTimes(1)

    await user.type(input, 'ada')

    expect(onChange).toHaveBeenCalledTimes(3)
    expect(onChange).toHaveBeenLastCalledWith('a')
  })

  it('accepts a className override on the well', () => {
    const { container } = render(<Field {...baseProps} className="mb-0" />)

    expect(container.firstElementChild).toHaveClass('mb-0')
  })
})
