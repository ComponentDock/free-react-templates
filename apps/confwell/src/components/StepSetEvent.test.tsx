import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { StepSetEvent } from './StepSetEvent'

describe('StepSetEvent', () => {
  it('renders the heading', () => {
    render(<StepSetEvent />)
    expect(screen.getByRole('heading', { name: /set the event/i })).toBeInTheDocument()
  })

  it('displays the default price', () => {
    render(<StepSetEvent />)
    expect(screen.getByText('$270')).toBeInTheDocument()
  })

  it('displays custom price', () => {
    render(<StepSetEvent price="$350" />)
    expect(screen.getByText('$350')).toBeInTheDocument()
  })

  it('renders people count dropdown with options 1-10', () => {
    render(<StepSetEvent />)
    const select = screen.getByRole('combobox', { name: /number of people/i })
    expect(select).toBeInTheDocument()
    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(10)
  })

  it('calls onPeopleCountChange when dropdown changes', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepSetEvent onPeopleCountChange={onChange} />)

    const select = screen.getByRole('combobox', { name: /number of people/i })
    await user.selectOptions(select, '5')
    expect(onChange).toHaveBeenCalledWith(5)
  })

  it('renders all form fields', () => {
    render(<StepSetEvent />)
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /phone/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /address/i })).toBeInTheDocument()
  })

  it('calls onNameChange when name input changes', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepSetEvent onNameChange={onChange} />)

    await user.type(screen.getByRole('textbox', { name: /name/i }), 'John')
    expect(onChange).toHaveBeenCalledTimes(4)
  })

  it('calls onEmailChange when email input changes', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepSetEvent onEmailChange={onChange} />)

    await user.type(screen.getByRole('textbox', { name: /e-mail/i }), 'a@b.com')
    expect(onChange).toHaveBeenCalled()
  })

  it('calls onPhoneChange when phone input changes', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepSetEvent onPhoneChange={onChange} />)

    await user.type(screen.getByRole('textbox', { name: /phone/i }), '123')
    expect(onChange).toHaveBeenCalled()
  })

  it('calls onAddressChange when address input changes', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepSetEvent onAddressChange={onChange} />)

    await user.type(screen.getByRole('textbox', { name: /address/i }), '123 Main')
    expect(onChange).toHaveBeenCalled()
  })
})
