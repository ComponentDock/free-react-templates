import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, vi } from 'vitest'
import { NAV } from '../lib/site'
import { Dropdown } from './Dropdown'

const FLEET = NAV.find((item) => item.children.length > 0)

if (!FLEET) {
  throw new Error('the model no longer carries a disclosing row')
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Dropdown — the row that discloses its own four destinations', () => {
  it('opens shut: the trigger claims a menu and owns no panel yet', () => {
    render(<Dropdown item={FLEET} variant="desktop" onNavigate={vi.fn()} />)

    const trigger = screen.getByRole('link', { name: FLEET.label })

    expect(trigger).toHaveAttribute('aria-haspopup', 'true')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveAttribute('href', '#fleet')
    expect(screen.getByTestId('fleet-row')).toHaveAttribute('data-open', 'false')
    expect(screen.queryByTestId('fleet-panel')).toBeNull()
    expect(within(trigger).getByText(FLEET.label)).toBeInTheDocument()
  })

  it('opens on a resting pointer and shuts again when it leaves the row', async () => {
    const user = userEvent.setup()

    render(<Dropdown item={FLEET} variant="desktop" onNavigate={vi.fn()} />)

    const row = screen.getByTestId('fleet-row')

    await user.hover(row)

    expect(screen.getByRole('link', { name: FLEET.label })).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByTestId('fleet-panel')).toBeInTheDocument()
    expect(within(screen.getByTestId('fleet-panel')).getAllByRole('link')).toHaveLength(4)
    // The row itself is the panel's positioning context, which is what keeps the panel
    // flush with its own trigger rather than with the bar.
    expect(row.className).toContain('relative')

    await user.unhover(row)

    expect(screen.queryByTestId('fleet-panel')).toBeNull()
    expect(screen.getByTestId('fleet-row')).toHaveAttribute('data-open', 'false')
  })

  it('toggles on a click of its trigger, the design own second path', () => {
    render(<Dropdown item={FLEET} variant="desktop" onNavigate={vi.fn()} />)

    const trigger = screen.getByRole('link', { name: FLEET.label })

    fireEvent.click(trigger)

    expect(screen.getByTestId('fleet-panel')).toBeInTheDocument()
    expect(screen.getByTestId('fleet-row')).toHaveAttribute('data-open', 'true')

    fireEvent.click(trigger)

    expect(screen.queryByTestId('fleet-panel')).toBeNull()
  })

  it('lands on the first row from ArrowDown on the trigger', () => {
    render(<Dropdown item={FLEET} variant="desktop" onNavigate={vi.fn()} />)

    const trigger = screen.getByRole('link', { name: FLEET.label })

    fireEvent.keyDown(trigger, { key: 'ArrowDown' })

    const items = within(screen.getByTestId('fleet-panel')).getAllByRole('link')

    expect(document.activeElement).toBe(items[0])
  })

  it('leaves the panel shut for any other key on the trigger', () => {
    render(<Dropdown item={FLEET} variant="desktop" onNavigate={vi.fn()} />)

    fireEvent.keyDown(screen.getByRole('link', { name: FLEET.label }), { key: 'ArrowUp' })

    expect(screen.queryByTestId('fleet-panel')).toBeNull()
  })

  it('steps forward through the panel and wraps past its last row', () => {
    render(<Dropdown item={FLEET} variant="desktop" onNavigate={vi.fn()} />)

    fireEvent.keyDown(screen.getByRole('link', { name: FLEET.label }), { key: 'ArrowDown' })

    const items = within(screen.getByTestId('fleet-panel')).getAllByRole('link')

    fireEvent.keyDown(items[2]!, { key: 'ArrowDown' })

    expect(document.activeElement).toBe(items[3])

    fireEvent.keyDown(items[3]!, { key: 'ArrowDown' })

    expect(document.activeElement).toBe(items[0])
  })

  it('steps backwards through the panel and wraps before its first row', () => {
    render(<Dropdown item={FLEET} variant="desktop" onNavigate={vi.fn()} />)

    fireEvent.keyDown(screen.getByRole('link', { name: FLEET.label }), { key: 'ArrowDown' })

    const items = within(screen.getByTestId('fleet-panel')).getAllByRole('link')

    fireEvent.keyDown(items[0]!, { key: 'ArrowUp' })

    expect(document.activeElement).toBe(items[3])
  })

  it('dismisses on Escape and hands focus back to the trigger', () => {
    render(<Dropdown item={FLEET} variant="desktop" onNavigate={vi.fn()} />)

    const trigger = screen.getByRole('link', { name: FLEET.label })

    fireEvent.keyDown(trigger, { key: 'ArrowDown' })

    const items = within(screen.getByTestId('fleet-panel')).getAllByRole('link')

    fireEvent.keyDown(items[0]!, { key: 'Escape' })

    expect(screen.queryByTestId('fleet-panel')).toBeNull()
    expect(document.activeElement).toBe(trigger)
  })

  it('keeps the panel open for any other key pressed inside it', () => {
    render(<Dropdown item={FLEET} variant="desktop" onNavigate={vi.fn()} />)

    fireEvent.keyDown(screen.getByRole('link', { name: FLEET.label }), { key: 'ArrowDown' })

    const items = within(screen.getByTestId('fleet-panel')).getAllByRole('link')

    fireEvent.keyDown(items[1]!, { key: 'Tab' })

    expect(screen.getByTestId('fleet-panel')).toBeInTheDocument()
  })

  it('dismisses on a press anywhere outside the row', () => {
    render(<Dropdown item={FLEET} variant="desktop" onNavigate={vi.fn()} />)

    fireEvent.click(screen.getByRole('link', { name: FLEET.label }))

    expect(screen.getByTestId('fleet-panel')).toBeInTheDocument()

    fireEvent.mouseDown(document.body)

    expect(screen.queryByTestId('fleet-panel')).toBeNull()
  })

  it('stays put for a press inside the row', () => {
    render(<Dropdown item={FLEET} variant="desktop" onNavigate={vi.fn()} />)

    fireEvent.click(screen.getByRole('link', { name: FLEET.label }))
    fireEvent.mouseDown(screen.getByTestId('fleet-row'))

    expect(screen.getByTestId('fleet-panel')).toBeInTheDocument()
  })

  it('dismisses and reports the activation when one of its rows is chosen', () => {
    const onNavigate = vi.fn()

    render(<Dropdown item={FLEET} variant="desktop" onNavigate={onNavigate} />)

    fireEvent.click(screen.getByRole('link', { name: FLEET.label }))

    const target = screen.getByRole('link', { name: 'Ketches' })

    expect(target).toHaveAttribute('href', '#ketches')

    fireEvent.click(target)

    expect(onNavigate).toHaveBeenCalledTimes(1)
    expect(screen.queryByTestId('fleet-panel')).toBeNull()
  })

  it('hangs from the trigger right edge only when the panel would leave the viewport', () => {
    render(<Dropdown item={FLEET} variant="desktop" onNavigate={vi.fn()} />)

    fireEvent.click(screen.getByRole('link', { name: FLEET.label }))

    expect(screen.getByTestId('fleet-panel')).toHaveAttribute('data-align', 'left')

    fireEvent.mouseDown(document.body)

    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      right: window.innerWidth,
    } as DOMRect)

    fireEvent.click(screen.getByRole('link', { name: FLEET.label }))

    expect(screen.getByTestId('fleet-panel')).toHaveAttribute('data-align', 'right')
    expect(screen.getByTestId('fleet-panel').className).toContain('right-0')
  })

  it('drives the folded presentation by its click path alone', () => {
    render(<Dropdown item={FLEET} variant="panel" onNavigate={vi.fn()} />)

    const row = screen.getByTestId('fleet-row')

    fireEvent.mouseOver(row)

    expect(screen.queryByTestId('fleet-panel')).toBeNull()

    fireEvent.click(screen.getByRole('link', { name: FLEET.label }))

    const panel = screen.getByTestId('fleet-panel')

    expect(panel.className).not.toContain('absolute')
    expect(panel.className).toContain('bg-black')
    expect(within(panel).getAllByRole('link')).toHaveLength(4)
  })

  it('folds its rows away on activation inside the panel too', () => {
    const onNavigate = vi.fn()

    render(<Dropdown item={FLEET} variant="panel" onNavigate={onNavigate} />)

    fireEvent.click(screen.getByRole('link', { name: FLEET.label }))
    fireEvent.click(screen.getByRole('link', { name: 'Sloops' }))

    expect(onNavigate).toHaveBeenCalledTimes(1)
    expect(screen.queryByTestId('fleet-panel')).toBeNull()
  })
})
