import { render, screen } from '@testing-library/react'
import { Radios } from './Radios'

describe('Radios', () => {
  it('renders 5 radio buttons', () => {
    render(<Radios />)
    const radios = screen.getAllByRole('radio')
    expect(radios.length).toBe(5)
  })

  it('1 radio is checked by default', () => {
    render(<Radios />)
    const radios = screen.getAllByRole('radio') as HTMLInputElement[]
    const checked = radios.filter((r) => r.checked)
    expect(checked.length).toBe(1)
  })

  it('1 radio is disabled', () => {
    render(<Radios />)
    const radios = screen.getAllByRole('radio') as HTMLInputElement[]
    const disabled = radios.filter((r) => r.disabled)
    expect(disabled.length).toBe(1)
  })

  it('selects a different radio on click', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Radios />)
    const radios = screen.getAllByRole('radio') as HTMLInputElement[]
    await user.click(radios[2]!)
    expect(radios[2]!.checked).toBe(true)
    expect(radios[0]!.checked).toBe(false)
  })
})
