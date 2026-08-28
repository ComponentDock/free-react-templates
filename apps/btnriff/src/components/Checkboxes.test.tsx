import { render, screen } from '@testing-library/react'
import { Checkboxes } from './Checkboxes'

describe('Checkboxes', () => {
  it('renders 5 checkboxes', () => {
    render(<Checkboxes />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes.length).toBe(5)
  })

  it('4 checkboxes are checked by default', () => {
    render(<Checkboxes />)
    const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[]
    const checked = checkboxes.filter((cb) => cb.checked)
    expect(checked.length).toBe(4)
  })

  it('1 checkbox is disabled', () => {
    render(<Checkboxes />)
    const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[]
    const disabled = checkboxes.filter((cb) => cb.disabled)
    expect(disabled.length).toBe(1)
  })

  it('toggles checkbox on click', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Checkboxes />)
    const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[]
    expect(checkboxes[0]!.checked).toBe(true)
    await user.click(checkboxes[0]!)
    expect(checkboxes[0]!.checked).toBe(false)
  })
})
