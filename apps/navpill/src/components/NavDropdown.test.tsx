import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NAV, isParent, type NavParent } from '../lib/site'
import { NavDropdown } from './NavDropdown'

function exploreNode(): NavParent {
  const node = NAV.filter(isParent).find((item) => item.label === 'Explore')

  if (!node) {
    throw new Error('NAV no longer carries the Explore submenu')
  }

  return node
}

function renderBar() {
  return render(
    <ul>
      <NavDropdown node={exploreNode()} variant="bar" />
    </ul>,
  )
}

function panelOf(trigger: HTMLElement): HTMLElement {
  return trigger.parentElement?.querySelector('ul') as HTMLElement
}

describe('NavDropdown (bar)', () => {
  it('ships shut: hidden, transparent, offset 20px, with the white triangle and the accent rule', () => {
    renderBar()

    const trigger = screen.getByRole('button', { name: 'Explore' })
    const panel = panelOf(trigger)

    expect(trigger).toHaveAttribute('aria-haspopup', 'true')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveAttribute('aria-controls', panel.id)
    expect(trigger.querySelector('span')).toHaveClass('px-5', 'pr-[30px]')

    expect(panel).toHaveAttribute('aria-hidden', 'true')
    expect(panel.className.split(' ')).toEqual(
      expect.arrayContaining([
        'absolute',
        'top-full',
        'left-0',
        'bg-white',
        'border-t-2',
        'border-accent',
        'shadow-dropdown',
        'invisible',
        'opacity-0',
        'mt-5',
        'before:border-solid',
        'before:border-b-white',
        'before:border-[10px]',
        'before:left-[20%]',
        'before:bottom-full',
      ]),
    )
    expect(panel.className).not.toContain('left-full')

    expect(within(panel).queryAllByRole('link')).toHaveLength(0)
  })

  it('opens on hover and on focus: flush, opaque and filled with the row list', () => {
    renderBar()

    const trigger = screen.getByRole('button', { name: 'Explore' })
    const panel = panelOf(trigger)

    fireEvent.mouseEnter(trigger.parentElement as HTMLElement)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(panel).toHaveClass('visible', 'opacity-100', 'mt-0')
    expect(panel).not.toHaveClass('invisible')
    expect(trigger.querySelector('span')).toHaveClass('bg-accent', 'text-white')

    const rows = within(panel).getAllByRole('link')
    expect(rows.map((row) => row.textContent)).toEqual(['Overview', 'Guides', 'Pricing'])

    for (const row of rows) {
      expect(row).toHaveClass('px-5', 'py-[9px]')
      expect(row.parentElement).toHaveClass('min-w-[200px]')
    }

    // The panel carries a current row too, exactly as the reference's own
    // `.cl-active` row rule does.
    expect(rows[0]).toHaveAttribute('aria-current', 'page')
    expect(rows[0]).toHaveClass('text-accent')
    expect(rows[1]).not.toHaveAttribute('aria-current')
    expect(rows[1]).toHaveClass('text-row')

    fireEvent.mouseLeave(trigger.parentElement as HTMLElement)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(within(panel).queryAllByRole('link')).toHaveLength(0)

    fireEvent.focusIn(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes on Escape, hands focus back to the trigger, and ignores every other key', async () => {
    const user = userEvent.setup()
    renderBar()

    const trigger = screen.getByRole('button', { name: 'Explore' })

    await user.tab()
    expect(document.activeElement).toBe(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    fireEvent.keyDown(trigger, { key: 'ArrowDown' })
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    fireEvent.keyDown(trigger, { key: 'Escape' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(document.activeElement).toBe(trigger)
  })

  it('opens a second panel beside a nested row and closes it again on leave', () => {
    renderBar()

    const trigger = screen.getByRole('button', { name: 'Explore' })
    const panel = panelOf(trigger)

    fireEvent.mouseEnter(trigger.parentElement as HTMLElement)

    const nestedTrigger = within(panel).getByRole('button', { name: 'Resources' })
    const nestedRow = nestedTrigger.parentElement as HTMLElement
    const flyout = nestedTrigger.parentElement?.querySelector('ul') as HTMLElement

    expect(nestedTrigger).toHaveClass('flex', 'items-center', 'justify-between', 'text-row')
    expect(nestedRow).toHaveClass('relative', 'min-w-[200px]')
    expect(flyout).toHaveClass('top-0', 'left-full', 'invisible', 'opacity-0')
    expect(flyout.className).not.toContain('before:border-b-white')

    fireEvent.mouseEnter(nestedRow)

    expect(nestedTrigger).toHaveAttribute('aria-expanded', 'true')
    expect(flyout).toHaveClass('visible', 'opacity-100', 'mt-0')

    const nestedRows = within(flyout).getAllByRole('link')
    expect(nestedRows.map((row) => row.textContent)).toEqual([
      'Documentation',
      'Changelog',
      'Support',
      'Status',
    ])

    fireEvent.mouseLeave(nestedRow)
    expect(nestedTrigger).toHaveAttribute('aria-expanded', 'false')
    expect(within(flyout).queryAllByRole('link')).toHaveLength(0)
  })

  it('closes the whole menu when Escape is pressed inside the nested panel', () => {
    renderBar()

    const trigger = screen.getByRole('button', { name: 'Explore' })
    const panel = panelOf(trigger)

    fireEvent.mouseEnter(trigger.parentElement as HTMLElement)

    const nestedTrigger = within(panel).getByRole('button', { name: 'Resources' })

    fireEvent.mouseEnter(nestedTrigger.parentElement as HTMLElement)
    fireEvent.keyDown(nestedTrigger, { key: 'Escape' })

    expect(nestedTrigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(document.activeElement).toBe(trigger)
  })
})
