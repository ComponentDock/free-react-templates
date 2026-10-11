import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ControlsShowcase } from './ControlsShowcase'

describe('ControlsShowcase', () => {
  it('renders the four checkbox states and toggles the live one', async () => {
    const user = userEvent.setup()
    render(<ControlsShowcase />)

    const live = screen.getByRole('checkbox', { name: 'Unchecked' })
    expect(live).not.toBeChecked()

    await user.click(live)
    expect(live).toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Checked' })).toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Disabled Unchecked' })).toBeDisabled()
    expect(screen.getByRole('checkbox', { name: 'Disabled Checked' })).toBeDisabled()
  })

  it('renders the radio group with an off, an on and a disabled option', () => {
    render(<ControlsShowcase />)

    expect(screen.getByRole('radio', { name: 'Radio is off' })).not.toBeChecked()
    expect(screen.getByRole('radio', { name: 'Radio is on' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Disabled radio is off' })).toBeDisabled()
  })

  it('flips the toggle switch between on and off', async () => {
    const user = userEvent.setup()
    render(<ControlsShowcase />)

    const toggle = screen.getByRole('switch', { name: 'Toggle is on' })
    expect(toggle).toHaveAttribute('aria-checked', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-checked', 'false')
    expect(screen.getByText('ON')).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: 'Toggle is Off' })).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-checked', 'true')
  })

  it('renders the sliders and updates the controlled one', () => {
    render(<ControlsShowcase />)

    expect(screen.getByLabelText('Contrast')).toHaveValue('70')

    const brightness = screen.getByLabelText('Brightness')
    expect(brightness).toHaveValue('50')

    fireEvent.change(brightness, { target: { value: '80' } })
    expect(brightness).toHaveValue('80')
  })

  it('renders the badge palette', () => {
    render(<ControlsShowcase />)

    for (const label of ['Primary', 'Info', 'Success', 'Warning', 'Danger', 'Rose']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('renders the determinate progress bars', () => {
    render(<ControlsShowcase />)

    const bars = screen.getAllByRole('progressbar')
    expect(bars).toHaveLength(6)
    expect(screen.getByRole('progressbar', { name: '40% Complete' })).toHaveAttribute(
      'aria-valuenow',
      '40',
    )
    expect(screen.getByRole('progressbar', { name: '35% Complete (success)' })).toBeInTheDocument()
    expect(screen.getByRole('progressbar', { name: '20% Complete (warning)' })).toBeInTheDocument()
    expect(screen.getByRole('progressbar', { name: '30% Complete (danger)' })).toBeInTheDocument()
  })

  it('moves the active page in both paginations', async () => {
    const user = userEvent.setup()
    render(<ControlsShowcase />)

    const compact = within(screen.getByRole('navigation', { name: 'Compact pagination' }))
    const pageThree = compact.getByRole('button', { name: '3' })
    expect(pageThree).not.toHaveAttribute('aria-current')

    await user.click(pageThree)
    expect(pageThree).toHaveAttribute('aria-current', 'page')

    await user.click(compact.getByRole('button', { name: 'Next page' }))
    expect(pageThree).not.toHaveAttribute('aria-current')
    expect(compact.getByRole('button', { name: '4' })).toHaveAttribute('aria-current', 'page')

    await user.click(compact.getByRole('button', { name: 'Previous page' }))
    expect(pageThree).toHaveAttribute('aria-current', 'page')

    const full = within(screen.getByRole('navigation', { name: 'Pagination' }))
    expect(full.getByRole('button', { name: 'Previous' })).toBeInTheDocument()
    expect(full.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('clamps the previous control at the first page', async () => {
    const user = userEvent.setup()
    render(<ControlsShowcase />)

    const compact = within(screen.getByRole('navigation', { name: 'Compact pagination' }))
    await user.click(compact.getByRole('button', { name: 'Previous page' }))
    expect(compact.getByRole('button', { name: '1' })).toHaveAttribute('aria-current', 'page')
  })
})
