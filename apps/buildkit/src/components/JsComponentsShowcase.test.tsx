import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JsComponentsShowcase } from './JsComponentsShowcase'

describe('JsComponentsShowcase', () => {
  it('opens the modal, manages focus and saves', async () => {
    render(<JsComponentsShowcase />)

    const trigger = screen.getByRole('button', { name: 'Launch demo modal' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await userEvent.click(trigger)

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(screen.getByRole('heading', { name: 'Modal title' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Dismiss modal' })).toHaveFocus()

    await userEvent.click(screen.getByRole('button', { name: 'Save changes' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })

  it('dismisses the modal from the × and the backdrop', async () => {
    render(<JsComponentsShowcase />)

    await userEvent.click(screen.getByRole('button', { name: 'Launch demo modal' }))
    await userEvent.click(screen.getByRole('button', { name: 'Dismiss modal' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Launch demo modal' }))
    await userEvent.click(screen.getByRole('button', { name: 'Close modal backdrop' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Launch demo modal' }))
    await userEvent.click(screen.getByRole('button', { name: 'Close' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('toggles the directional popovers', async () => {
    render(<JsComponentsShowcase />)

    const popovers = screen.getByRole('group', { name: 'Popovers' })
    const top = within(popovers).getByRole('button', { name: 'On top' })
    expect(top).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(top)
    expect(top).toHaveAttribute('aria-expanded', 'true')
    expect(within(popovers).getByText('Popover on top')).toBeInTheDocument()

    await userEvent.click(top)
    expect(top).toHaveAttribute('aria-expanded', 'false')
    expect(within(popovers).queryByText('Popover on top')).not.toBeInTheDocument()
  })

  it('wires the tooltips and the datetime picker', () => {
    render(<JsComponentsShowcase />)

    const tooltips = screen.getByRole('group', { name: 'Tooltip' })
    const buttons = within(tooltips).getAllByRole('button')
    expect(buttons).toHaveLength(4)
    expect(buttons[0]).toHaveAttribute('aria-describedby', 'buildkit-tooltip-top')
    expect(within(tooltips).getAllByRole('tooltip')).toHaveLength(4)
    expect(within(tooltips).getByRole('button', { name: 'Tooltip on left' })).toBeInTheDocument()

    expect(screen.getByLabelText('Datetime picker')).toHaveAttribute('type', 'datetime-local')
  })
})
