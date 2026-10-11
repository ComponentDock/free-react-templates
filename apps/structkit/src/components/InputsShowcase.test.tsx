import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { InputsShowcase } from './InputsShowcase'

describe('InputsShowcase', () => {
  it('renders the plain and shadowed field rows', () => {
    render(<InputsShowcase />)

    expect(screen.getByLabelText('Default')).toBeInTheDocument()
    expect(screen.getByLabelText('Default-shadow')).toBeInTheDocument()
    expect(screen.getByLabelText('Success')).toHaveClass('border-success')
    expect(screen.getByLabelText('Error Input')).toHaveClass('border-danger')
    expect(screen.getByLabelText('With Leading Icon')).toBeInTheDocument()
    expect(screen.getByLabelText('With Trailing Icon')).toBeInTheDocument()
    expect(screen.getAllByLabelText('With Floating Label')).toHaveLength(2)
  })

  it('raises the floating label on focus and typing, then drops it on blur', async () => {
    const user = userEvent.setup()
    render(<InputsShowcase />)

    const field = screen.getAllByLabelText('With Floating Label')[0]!
    const label = screen.getAllByText('With Floating Label', { selector: 'label' })[0]!

    expect(label).toHaveClass('top-6')

    await user.click(field)
    expect(label).toHaveClass('top-0')

    await user.type(field, 'hello@example.com')
    expect(field).toHaveValue('hello@example.com')

    await user.tab()
    expect(label).toHaveClass('top-0')

    await user.clear(field)
    expect(label).toHaveClass('top-0')

    await user.click(field)
    await user.tab()
    expect(label).toHaveClass('top-6')
  })
})
