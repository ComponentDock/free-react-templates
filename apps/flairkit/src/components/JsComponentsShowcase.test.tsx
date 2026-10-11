import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JsComponentsShowcase } from './JsComponentsShowcase'

describe('JsComponentsShowcase', () => {
  it('renders the band heading and the four demo groups', () => {
    render(<JsComponentsShowcase />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'Javascript Components' }),
    ).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { level: 4 }).map((heading) => heading.textContent),
    ).toEqual(['Datetime Picker', 'Modal', 'Popovers', 'Tooltips'])
  })

  it('renders the native datetime picker field', () => {
    render(<JsComponentsShowcase />)

    const field = screen.getByLabelText('Datetime Picker')

    expect(field).toHaveAttribute('type', 'datetime-local')
    expect(field).toHaveAttribute('id', 'flairkit-datetime')
  })

  it('opens the modal, moves focus into it and closes it four ways', async () => {
    const user = userEvent.setup()
    const { container } = render(<JsComponentsShowcase />)

    const trigger = screen.getByRole('button', { name: /Basic Modal/ })

    await user.keyboard('a')
    await user.click(trigger)

    const dialog = screen.getByRole('dialog', { name: 'Modal title' })

    expect(document.activeElement).toBe(dialog)
    expect(
      within(dialog).getByRole('heading', { level: 5, name: 'Modal title' }),
    ).toBeInTheDocument()
    expect(within(dialog).getAllByRole('paragraph')).toHaveLength(2)

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(trigger)
    await user.click(screen.getByRole('button', { name: 'Close modal' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(trigger)
    const backdrop = container.querySelector('div[aria-hidden="true"].absolute') as HTMLElement

    await user.click(backdrop)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('toggles each popover on click', async () => {
    const user = userEvent.setup()
    render(<JsComponentsShowcase />)

    const top = screen.getByRole('button', { name: 'Popover on top' })

    await user.click(top)

    expect(top).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('dialog', { name: 'Popover on Top' })).toBeInTheDocument()

    await user.click(top)
    expect(screen.queryByRole('dialog', { name: 'Popover on Top' })).not.toBeInTheDocument()
    expect(top).toHaveAttribute('aria-expanded', 'false')

    for (const [label, position] of [
      ['Popover on right', 'Right'],
      ['Popover on bottom', 'Bottom'],
      ['Popover on left', 'Left'],
    ] as const) {
      await user.click(screen.getByRole('button', { name: label }))
      expect(screen.getByRole('dialog', { name: `Popover on ${position}` })).toBeInTheDocument()
    }
  })

  it('shows tooltips on hover and focus and hides them again', async () => {
    const user = userEvent.setup()
    render(<JsComponentsShowcase />)

    const top = screen.getByRole('button', { name: 'Tooltip on top' })

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()

    await user.hover(top)
    expect(screen.getByRole('tooltip')).toHaveTextContent('Tooltip on Top')
    expect(top).toHaveAttribute('aria-describedby', 'tooltip-top')

    await user.unhover(top)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()

    fireEvent.focus(top)
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
    fireEvent.blur(top)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()

    for (const [label, position] of [
      ['Tooltip on right', 'Right'],
      ['Tooltip on bottom', 'Bottom'],
      ['Tooltip on left', 'Left'],
    ] as const) {
      const button = screen.getByRole('button', { name: label })

      fireEvent.mouseEnter(button)
      expect(screen.getByRole('tooltip')).toHaveTextContent(`Tooltip on ${position}`)
      fireEvent.mouseLeave(button)
    }
  })
})
