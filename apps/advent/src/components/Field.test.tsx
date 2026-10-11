import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Field } from './Field'

const baseProps = {
  id: 'advent-name',
  name: 'name',
  label: 'Name',
  value: '',
  onChange: () => {},
  onFocus: () => {},
}

describe('Field', () => {
  it('renders one white pill holding a labelled text field', () => {
    const { container } = render(<Field {...baseProps} />)

    expect(container.firstElementChild).toHaveClass(
      'group',
      'relative',
      'mx-[10px]',
      'mb-[20px]',
      'h-[50px]',
      'w-[280px]',
      'max-w-[calc(100%_-_20px)]',
      'rounded-pill',
      'bg-white',
    )

    const input = screen.getByLabelText('Name')

    expect(input).toHaveAttribute('placeholder', 'Name')
    expect(input).toHaveClass(
      'h-full',
      'w-full',
      'rounded-pill',
      'pl-[30px]',
      'pr-[20px]',
      'font-heading',
      'text-[15px]',
      'font-bold',
      'text-sub',
      'placeholder:text-muted',
      'focus:shadow-[0_0_10px_1px_rgba(255,255,255,0.5)]',
    )
    expect(input).not.toHaveAttribute('aria-invalid')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('reveals the validation bubble and warning glyph when it carries an error', () => {
    render(<Field {...baseProps} error="Name is required" />)

    const input = screen.getByLabelText('Name')
    expect(input).toHaveAttribute('aria-invalid', 'true')

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
      'bg-white',
      'py-[4px]',
      'pr-[25px]',
      'pl-[10px]',
      'text-[13px]',
      'text-error',
      'opacity-0',
      'group-hover:visible',
      'group-hover:opacity-100',
      'max-[992px]:visible',
      'max-[992px]:opacity-100',
    )
  })

  it('reports typing and focus to the parent', async () => {
    const onChange = vi.fn()
    const onFocus = vi.fn()
    const user = userEvent.setup()

    render(<Field {...baseProps} value="" onChange={onChange} onFocus={onFocus} />)

    const input = screen.getByLabelText('Name')

    fireEvent.focus(input)
    expect(onFocus).toHaveBeenCalledTimes(1)

    await user.type(input, 'Ada')

    expect(onChange).toHaveBeenCalledTimes(3)
    expect(onChange).toHaveBeenLastCalledWith('a')
  })

  it('accepts a className override on the well', () => {
    const { container } = render(<Field {...baseProps} className="opacity-90" />)

    expect(container.firstElementChild).toHaveClass('opacity-90')
  })
})
