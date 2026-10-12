import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import { BRAND, MENU_LABEL, NAV, isGroup } from '../lib/site'
import { Header, STICKY_AT } from './Header'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

function scrollTo(y: number): void {
  Object.defineProperty(window, 'scrollY', { value: y, configurable: true, writable: true })
  fireEvent.scroll(window)
}

function primaryNav(): HTMLElement {
  return screen.getByRole('navigation', { name: 'Primary' })
}

afterEach(() => {
  Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true })
})

describe('the header', () => {
  it('carries the wordmark with its bright dot and the label row the design sets', () => {
    const { container } = render(<Header />)
    const brand = screen.getByRole('link', { name: `${BRAND} — back to the top` })
    const nav = primaryNav()

    expect(brand.textContent).toBe(`${BRAND}.`)
    expect(within(brand).getByText('.')).toHaveClass('text-dot')
    expect(tokens(brand)).toContain('text-brand')

    for (const item of NAV) {
      if (isGroup(item)) {
        continue
      }
      expect(within(nav).getByRole('link', { name: item.label })).toHaveAttribute('href', item.href)
    }

    expect(within(nav).getAllByRole('link')).toHaveLength(5)
    expect(within(nav).getByRole('button', { name: 'Pages' })).toBeInTheDocument()

    const story = within(nav).getByRole('link', { name: 'Our Story' })

    expect(tokens(story)).toContain('py-[39px]')
    expect(tokens(story)).toContain('px-[19px]')
    expect(tokens(story)).toContain('text-nav')
    expect(tokens(story)).toContain('capitalize')

    expect(container.querySelectorAll('nav')).toHaveLength(1)
  })

  it('opens its one panel on hover and folds it away again', async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)
    const trigger = screen.getByRole('button', { name: 'Pages' })
    const item = trigger.closest('li') as HTMLElement
    const panel = container.querySelector('#pages-panel') as HTMLElement

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(panel).toHaveAttribute('aria-hidden', 'true')
    expect(within(panel).queryByRole('link', { name: 'Blog' })).toBeNull()
    expect(tokens(panel)).toContain('invisible')
    expect(tokens(panel)).toContain('border-brand')

    await user.hover(item)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(panel).toHaveAttribute('aria-hidden', 'false')
    expect(tokens(panel)).toContain('visible')
    expect(within(panel).getAllByRole('link')).toHaveLength(3)
    expect(within(panel).getByRole('link', { name: 'Blog Details' })).toHaveAttribute('href', '#story')

    await user.unhover(item)

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(within(panel).queryByRole('link', { name: 'Element' })).toBeNull()
  })

  it('opens the panel on a click and on keyboard focus as well as on hover', () => {
    render(<Header />)
    const trigger = screen.getByRole('button', { name: 'Pages' })

    fireEvent.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    fireEvent.mouseLeave(trigger.closest('li') as HTMLElement)

    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    fireEvent.focusIn(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('folds the whole label row into a grey bar with a menu control', () => {
    const { container } = render(<Header />)
    const menu = screen.getByRole('button', { name: MENU_LABEL })

    expect(menu).toHaveAttribute('aria-expanded', 'false')
    expect(tokens(menu)).toContain('bg-menu-btn')
    expect(tokens(menu)).toContain('rounded-[4px]')
    expect(container.querySelector('#folded-menu')).toBeNull()

    fireEvent.click(menu)

    const panel = container.querySelector('#folded-menu') as HTMLElement

    expect(menu).toHaveAttribute('aria-expanded', 'true')
    expect(within(panel).getAllByRole('link')).toHaveLength(8)
    expect(within(panel).getByText('+')).toBeInTheDocument()

    fireEvent.click(within(panel).getByRole('link', { name: 'Location' }))

    expect(container.querySelector('#folded-menu')).toBeNull()
  })

  it('pins itself to the viewport once the page has scrolled past the bar', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    const story = within(primaryNav()).getByRole('link', { name: 'Our Story' })

    expect(tokens(header)).not.toContain('fixed')
    expect(tokens(story)).toContain('py-[39px]')

    scrollTo(STICKY_AT + 1)

    expect(tokens(header)).toContain('fixed')
    expect(tokens(header)).toContain('shadow-sticky')
    expect(tokens(header)).toContain('bar-drop')
    expect(tokens(story)).toContain('py-[26px]')
    expect(tokens(story)).toContain('px-[20px]')

    scrollTo(0)

    expect(tokens(header)).not.toContain('fixed')
    expect(tokens(story)).toContain('py-[39px]')
  })
})
