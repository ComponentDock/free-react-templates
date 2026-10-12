import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DESKTOP_NAV_ID, NAV, PANEL_ID, PANEL_NAV_LABEL, PRIMARY_NAV_LABEL, SITE_NAME, TOGGLER_LABEL } from '../lib/site'
import { PANEL_RESET_QUERY } from '../lib/use-panel'
import { mockMatchMedia } from '../test/match-media'
import { Bar } from './Bar'

const labels = NAV.map((item) => item.label)

describe('Bar — one solid band, seven rows and the panel the toggler opens', () => {
  it('is a full bleed brand blue landmark in the flow, never pinned', () => {
    render(<Bar />)

    const bar = screen.getByTestId('bar')

    expect(bar.tagName).toBe('NAV')
    expect(bar).toHaveAttribute('aria-label', PRIMARY_NAV_LABEL)
    expect(bar.className).toContain('bg-brand')
    expect(bar.className).toContain('p-0')
    expect(bar.className).toContain('z-[3]')
    expect(bar.className).toContain('max-lg:bg-bar-mobile')
    expect(bar.className).not.toMatch(/sticky|fixed/)
    expect(bar.querySelector('div')?.className).toContain('mx-auto')
    expect(screen.getByTestId('bar-row').className).toContain('justify-between')
  })

  it('pins the wordmark to the left edge, pointing at the top of the page', () => {
    render(<Bar />)

    const wordmark = screen.getByRole('link', { name: SITE_NAME })

    expect(wordmark).toHaveAttribute('href', '#top')
    expect(wordmark.className).toContain('uppercase')
    expect(screen.getByTestId('bar-row').children[0]).toBe(wordmark)
  })

  it('carries all seven rows in order, the open one marked', () => {
    render(<Bar />)

    const rows = within(screen.getByTestId(DESKTOP_NAV_ID)).getAllByRole('link')

    expect(rows).toHaveLength(7)
    expect(rows.map((row) => row.textContent)).toEqual(labels)
    expect(rows[0]).toHaveAttribute('aria-current', 'page')
    expect(rows[1]).not.toHaveAttribute('aria-current')
    expect(rows[0]?.className).toContain('shadow-[inset_0_-3px_0_0_#ffffff]')
  })

  it('ends the list in the solid orange block', () => {
    render(<Bar />)

    const rows = within(screen.getByTestId(DESKTOP_NAV_ID)).getAllByRole('link')
    const cta = rows[rows.length - 1]!

    expect(cta.textContent).toBe('Reserve a berth')
    expect(cta.className).toContain('bg-cta')
    expect(cta.className).toContain('px-5')
    expect(cta.className).toContain('py-6')
  })

  it('hides the wide presentation below 992px and shows the toggler there', () => {
    render(<Bar />)

    expect(screen.getByTestId('bar-wide').className).toContain('hidden')
    expect(screen.getByTestId('bar-wide').className).toContain('lg:flex')
    expect(screen.getByRole('button', { name: TOGGLER_LABEL }).className).toContain('lg:hidden')
  })

  it('opens shut: a zero height track with nothing inside it', () => {
    render(<Bar />)

    const toggler = screen.getByRole('button', { name: TOGGLER_LABEL })

    expect(toggler).toHaveAttribute('aria-expanded', 'false')
    expect(toggler).toHaveAttribute('aria-controls', PANEL_ID)

    const collapse = screen.getByTestId('bar-collapse')

    expect(collapse).toHaveAttribute('id', PANEL_ID)
    expect(collapse).toHaveAttribute('data-open', 'false')
    expect(collapse.className).toContain('grid-rows-[0fr]')
    expect(collapse.className).toContain('lg:hidden')
    expect(screen.queryByTestId('panel-nav')).toBeNull()
  })

  it('opens the panel on the toggler, carrying the same seven rows', async () => {
    const user = userEvent.setup()

    render(<Bar />)

    await user.click(screen.getByRole('button', { name: TOGGLER_LABEL }))

    expect(screen.getByRole('button', { name: TOGGLER_LABEL })).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByTestId('bar-collapse').className).toContain('grid-rows-[1fr]')

    const panel = screen.getByTestId('panel-nav')

    expect(panel).toHaveAttribute('aria-label', PANEL_NAV_LABEL)
    expect(within(panel).getAllByRole('link')).toHaveLength(7)
    expect(within(panel).getAllByRole('link').map((row) => row.textContent)).toEqual(labels)
    expect(within(panel).getAllByRole('link')[0]).toHaveAttribute('aria-current', 'page')
    expect(within(panel).getAllByRole('link')[0]?.className).toContain('py-[14.4px]')
    expect(within(panel).getAllByRole('link')[6]?.className).toContain('rounded-[5px]')
  })

  it('folds the panel away when one of its own rows is chosen', async () => {
    const user = userEvent.setup()

    render(<Bar />)

    await user.click(screen.getByRole('button', { name: TOGGLER_LABEL }))

    const panel = screen.getByTestId('panel-nav')

    await user.click(within(panel).getByRole('link', { name: 'Berths' }))

    expect(screen.queryByTestId('panel-nav')).toBeNull()
    expect(screen.getByTestId('bar-collapse')).toHaveAttribute('data-open', 'false')
  })

  it('folds the panel away on Escape', () => {
    render(<Bar />)

    fireEvent.click(screen.getByRole('button', { name: TOGGLER_LABEL }))

    expect(screen.getByTestId('panel-nav')).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(screen.queryByTestId('panel-nav')).toBeNull()
  })

  it('keeps the panel open for any other key', () => {
    render(<Bar />)

    fireEvent.click(screen.getByRole('button', { name: TOGGLER_LABEL }))
    fireEvent.keyDown(document, { key: 'ArrowDown' })

    expect(screen.getByTestId('panel-nav')).toBeInTheDocument()
  })

  it('folds the panel away once the bar own list takes over', () => {
    const control = mockMatchMedia(PANEL_RESET_QUERY, false)

    render(<Bar />)

    fireEvent.click(screen.getByRole('button', { name: TOGGLER_LABEL }))

    expect(screen.getByTestId('panel-nav')).toBeInTheDocument()

    control.change(true)

    expect(screen.queryByTestId('panel-nav')).toBeNull()
    expect(screen.getByRole('button', { name: TOGGLER_LABEL })).toHaveAttribute('aria-expanded', 'false')
  })

  it('leaves the panel alone while the viewport stays under 992px', () => {
    const control = mockMatchMedia(PANEL_RESET_QUERY, false)

    render(<Bar />)

    fireEvent.click(screen.getByRole('button', { name: TOGGLER_LABEL }))
    control.change(false)

    expect(screen.getByTestId('panel-nav')).toBeInTheDocument()
  })

  it('opens the disclosure inside the folded panel in the flow', () => {
    render(<Bar />)

    fireEvent.click(screen.getByRole('button', { name: TOGGLER_LABEL }))

    const panel = screen.getByTestId('panel-nav')

    fireEvent.click(within(panel).getByRole('link', { name: 'Fleet' }))

    const subList = screen.getByTestId('fleet-panel')

    expect(within(subList).getAllByRole('link')).toHaveLength(4)
    expect(subList.className).not.toContain('absolute')
    expect(subList.className).toContain('bg-black')
  })

  it('keeps every id on the page unique while both presentations are mounted', () => {
    const { container } = render(<Bar />)

    fireEvent.click(screen.getByRole('button', { name: TOGGLER_LABEL }))
    fireEvent.click(within(screen.getByTestId('panel-nav')).getByRole('link', { name: 'Fleet' }))

    const ids = Array.from(container.querySelectorAll('[id]')).map((node) => node.id)

    expect(new Set(ids).size).toBe(ids.length)
    expect(ids.filter((id) => id.startsWith('fleet-trigger'))).toHaveLength(2)

    const foldedTrigger = container.querySelector('#fleet-trigger-folded') as HTMLElement
    const wideTrigger = container.querySelector('#fleet-trigger-wide') as HTMLElement

    expect(foldedTrigger).not.toBeNull()
    expect(wideTrigger).not.toBeNull()
    expect(foldedTrigger).toHaveAttribute('aria-controls', 'fleet-panel-folded')
    expect(wideTrigger).toHaveAttribute('aria-controls', 'fleet-panel-wide')
  })
})
