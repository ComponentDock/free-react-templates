import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { JsComponentsShowcase } from './JsComponentsShowcase'

describe('JsComponentsShowcase', () => {
  it('opens the modal and closes it from each affordance', async () => {
    const user = userEvent.setup()
    render(<JsComponentsShowcase />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Launch demo modal' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Modal title')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Save changes' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Launch demo modal' }))
    await user.click(screen.getByRole('button', { name: 'Close modal' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Launch demo modal' }))
    await user.click(screen.getByRole('button', { name: 'Close modal overlay' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the modal on Escape and ignores other keys', async () => {
    const user = userEvent.setup()
    render(<JsComponentsShowcase />)

    await user.click(screen.getByRole('button', { name: 'Launch demo modal' }))
    await user.keyboard('m')
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the datetime picker', () => {
    render(<JsComponentsShowcase />)

    expect(screen.getByLabelText('Datetime picker')).toHaveAttribute('type', 'datetime-local')
  })

  it('toggles popovers on and off', async () => {
    const user = userEvent.setup()
    render(<JsComponentsShowcase />)

    const trigger = screen.getAllByRole('button', { name: 'On top' })[0]!
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('note', { name: 'Popover On top' })).toBeInTheDocument()

    await user.click(trigger)
    expect(screen.queryByRole('note')).not.toBeInTheDocument()
  })

  it('shows tooltips on hover and on focus', async () => {
    const user = userEvent.setup()
    render(<JsComponentsShowcase />)

    const onRight = screen.getAllByRole('button', { name: 'On right' })[1]!
    await user.hover(onRight)
    expect(screen.getByRole('tooltip')).toHaveTextContent('Tooltip on right')
    expect(onRight).toHaveAttribute('aria-describedby', 'tip-On right')

    await user.unhover(onRight)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()

    const onLeft = screen.getAllByRole('button', { name: 'On left' })[1]!
    fireEvent.focus(onLeft)
    expect(screen.getByRole('tooltip')).toHaveTextContent('Tooltip on left')

    fireEvent.blur(onLeft)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })
})
