import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JsComponentsShowcase } from './JsComponentsShowcase'

describe('JsComponentsShowcase', () => {
  it('renders the datetime picker, popovers, tooltips and accordion', () => {
    render(<JsComponentsShowcase />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Javascripts Components' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Datetime picker')).toHaveAttribute('type', 'datetime-local')

    for (const direction of ['On top', 'On right', 'On bottom', 'On left']) {
      expect(
        within(screen.getByRole('group', { name: 'Popovers' })).getByRole('button', {
          name: direction,
        }),
      ).toBeInTheDocument()
    }
    expect(screen.getAllByRole('tooltip')).toHaveLength(4)
    expect(
      within(screen.getByRole('group', { name: 'Tooltip' })).getByRole('button', {
        name: 'On top',
      }),
    ).toHaveAttribute('aria-describedby', 'sorbet-tooltip-top')
  })

  it('opens and closes the demo modal from its trigger, close button and Escape', async () => {
    render(<JsComponentsShowcase />)

    await userEvent.click(screen.getByRole('button', { name: 'Launch demo modal' }))
    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Dismiss modal' })).toHaveFocus()

    await userEvent.click(screen.getByRole('button', { name: 'Close' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Launch demo modal' }))
    await userEvent.click(screen.getByRole('button', { name: 'Dismiss modal' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Launch demo modal' }))
    await userEvent.keyboard('a')
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the modal from the backdrop and the save action', async () => {
    render(<JsComponentsShowcase />)

    const trigger = screen.getByRole('button', { name: 'Launch demo modal' })
    await userEvent.click(trigger)
    await userEvent.click(screen.getByRole('button', { name: 'Close modal backdrop' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()

    await userEvent.click(trigger)
    await userEvent.click(screen.getByRole('button', { name: 'Save changes' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('toggles the four popovers', async () => {
    render(<JsComponentsShowcase />)

    const popovers = within(screen.getByRole('group', { name: 'Popovers' }))
    const top = popovers.getByRole('button', { name: 'On top' })
    await userEvent.click(top)
    expect(top).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Popover on top')).toBeInTheDocument()

    await userEvent.click(top)
    expect(top).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Popover on top')).not.toBeInTheDocument()

    const left = popovers.getByRole('button', { name: 'On left' })
    await userEvent.click(left)
    expect(screen.getByText('Popover on left')).toBeInTheDocument()
  })

  it('expands and collapses the accordion items', async () => {
    render(<JsComponentsShowcase />)

    const first = screen.getByRole('button', { name: 'Collapse Menu 1' })
    const second = screen.getByRole('button', { name: 'Collapse Menu 2' })
    expect(first).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByText(/Far far away/)).toHaveLength(1)

    await userEvent.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')
  })
})
