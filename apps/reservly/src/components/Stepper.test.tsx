import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Stepper } from './Stepper'

describe('Stepper', () => {
  it('renders the label, value, and plus/minus buttons', () => {
    render(<Stepper label="Rooms" value={2} min={1} onChange={() => {}} />)
    expect(screen.getByText('Rooms')).toBeInTheDocument()
    expect(screen.getByTestId('stepper-rooms')).toHaveTextContent('2')
    expect(screen.getByRole('button', { name: 'Decrease Rooms' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Increase Rooms' })).toBeInTheDocument()
  })

  it('disables the minus button at the minimum', () => {
    render(<Stepper label="Children" value={0} min={0} onChange={() => {}} />)
    expect(screen.getByRole('button', { name: 'Decrease Children' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Increase Children' })).toBeEnabled()
  })

  it('calls onChange with the decremented and incremented values', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Stepper label="Adults" value={2} min={1} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: 'Decrease Adults' }))
    expect(onChange).toHaveBeenLastCalledWith(1)
    await user.click(screen.getByRole('button', { name: 'Increase Adults' }))
    expect(onChange).toHaveBeenLastCalledWith(3)
  })
})
