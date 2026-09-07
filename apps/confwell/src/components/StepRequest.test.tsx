import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { StepRequest } from './StepRequest'

describe('StepRequest', () => {
  it('renders the heading', () => {
    render(<StepRequest />)
    expect(screen.getByRole('heading', { name: /request from you/i })).toBeInTheDocument()
  })

  it('renders special request input', () => {
    render(<StepRequest />)
    expect(screen.getByRole('textbox', { name: /special request/i })).toBeInTheDocument()
  })

  it('renders additional notes input', () => {
    render(<StepRequest />)
    expect(screen.getByRole('textbox', { name: /additional notes/i })).toBeInTheDocument()
  })

  it('renders staffed input', () => {
    render(<StepRequest />)
    expect(screen.getByRole('textbox', { name: /staffed/i })).toBeInTheDocument()
  })

  it('renders associates input', () => {
    render(<StepRequest />)
    expect(screen.getByRole('textbox', { name: /number of associates/i })).toBeInTheDocument()
  })

  it('renders terms checkbox', () => {
    render(<StepRequest />)
    expect(screen.getByRole('checkbox', { name: /accept terms/i })).toBeInTheDocument()
  })

  it('checkbox is checked by default', () => {
    render(<StepRequest />)
    expect(screen.getByRole('checkbox', { name: /accept terms/i })).toBeChecked()
  })

  it('calls onAcceptTermsChange when checkbox is toggled', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepRequest onAcceptTermsChange={onChange} />)

    await user.click(screen.getByRole('checkbox', { name: /accept terms/i }))
    expect(onChange).toHaveBeenCalledWith(false)
  })

  it('calls onSpecialRequestChange when input changes', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepRequest onSpecialRequestChange={onChange} />)

    await user.type(screen.getByRole('textbox', { name: /special request/i }), 'VIP')
    expect(onChange).toHaveBeenCalled()
  })

  it('calls onAdditionalNotesChange when input changes', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepRequest onAdditionalNotesChange={onChange} />)

    await user.type(screen.getByRole('textbox', { name: /additional notes/i }), 'note')
    expect(onChange).toHaveBeenCalled()
  })

  it('calls onStaffedChange when input changes', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepRequest onStaffedChange={onChange} />)

    await user.type(screen.getByRole('textbox', { name: /staffed/i }), 'yes')
    expect(onChange).toHaveBeenCalled()
  })

  it('calls onAssociatesChange when input changes', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepRequest onAssociatesChange={onChange} />)

    await user.type(screen.getByRole('textbox', { name: /number of associates/i }), '3')
    expect(onChange).toHaveBeenCalled()
  })
})
