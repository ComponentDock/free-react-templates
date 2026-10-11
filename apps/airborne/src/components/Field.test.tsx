import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Field } from './Field'

const baseProps = {
  id: 'airborne-name',
  name: 'name',
  label: 'Name',
  value: '',
  onChange: () => {},
  onFocus: () => {},
}

describe('Field', () => {
  it('renders one centred pill field with its bloom ring', () => {
    const { container } = render(<Field {...baseProps} />)

    const well = container.firstElementChild

    expect(well).toHaveClass('group', 'relative', 'z-[1]', 'h-[50px]', 'w-full')

    const input = screen.getByLabelText('Name')

    expect(input).toHaveAttribute('placeholder', 'Name')
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveClass(
      'peer',
      'h-full',
      'w-full',
      'rounded-pill',
      'bg-field',
      'px-[20px]',
      'text-center',
      'font-heading',
      'text-[15px]',
      'font-bold',
      'text-field-text',
      'placeholder:text-placeholder',
    )
    expect(input).not.toHaveAttribute('aria-invalid')
    expect(input).not.toHaveAttribute('aria-describedby')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    expect(well?.querySelector('[aria-hidden="true"]')).toHaveClass(
      'pointer-events-none',
      'absolute',
      'inset-0',
      '-z-10',
      'rounded-bloom',
      'shadow-[0_0_0_0_var(--color-bloom)]',
      'peer-focus:animate-bloom',
    )
  })

  it('reveals the bubble and the warning glyph when the field carries an error', () => {
    render(<Field {...baseProps} error="Name is required" />)

    const input = screen.getByLabelText('Name')

    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('aria-describedby', 'airborne-name-error')

    const bubble = screen.getByRole('alert')

    expect(bubble).toHaveTextContent('Name is required')
    expect(bubble).toHaveClass(
      'pointer-events-none',
      'invisible',
      'absolute',
      'top-1/2',
      'right-[12px]',
      'max-w-[70%]',
      '-translate-y-1/2',
      'rounded-bubble',
      'border',
      'border-error',
      'bg-card',
      'pt-[5px]',
      'pr-[30px]',
      'pb-[6px]',
      'pl-[10px]',
      'text-[12px]',
      'text-error',
      'opacity-0',
      'group-hover:visible',
      'group-hover:opacity-100',
      'max-[992px]:visible',
      'max-[992px]:opacity-100',
    )

    expect(document.querySelector('svg.text-error')).not.toBeNull()
  })

  it('reports typing and focus to its parent', async () => {
    const onChange = vi.fn()
    const onFocus = vi.fn()
    const user = userEvent.setup()

    render(<Field {...baseProps} onChange={onChange} onFocus={onFocus} />)

    const input = screen.getByLabelText('Name')

    fireEvent.focus(input)
    expect(onFocus).toHaveBeenCalledTimes(1)

    await user.type(input, 'Ada')

    expect(onChange).toHaveBeenCalledTimes(3)
    expect(onChange).toHaveBeenLastCalledWith('a')
  })

  it('accepts a className override on the well', () => {
    const { container } = render(<Field {...baseProps} className="mb-[10px]" />)

    expect(container.firstElementChild).toHaveClass('mb-[10px]')
  })
})
