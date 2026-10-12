import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NAV } from '../lib/site'
import { Nav } from './Nav'

function renderDesktop(sticky = false) {
  return render(<Nav variant="desktop" sticky={sticky} />)
}

function desktopRows(): HTMLElement[] {
  return Array.from(screen.getByTestId('desktop-nav').children) as HTMLElement[]
}

function branchRow(name: string): HTMLElement {
  return (screen.getByRole('button', { name }).closest('li') as HTMLElement) ?? document.body
}

function panelElement(id: string): HTMLElement {
  return document.getElementById(id) as HTMLElement
}

describe('Nav — desktop rows', () => {
  it('renders the seven rows in order, white for the current one and 60% for the rest', () => {
    renderDesktop()

    const nav = screen.getByRole('navigation', { name: 'Site sections' })

    expect(nav).toHaveClass('hidden', 'lg:block')

    const rows = desktopRows()

    expect(rows.map((row) => row.querySelector('a, button')?.textContent)).toEqual(
      NAV.map((item) => item.label),
    )
    expect(rows).toHaveLength(7)

    const current = within(nav).getByRole('link', { name: 'Start' })

    expect(current).toHaveAttribute('href', '#start')
    expect(current).toHaveAttribute('aria-current', 'page')
    expect(current).toHaveClass('text-white', 'text-[15px]', 'font-medium', 'py-5', 'px-[10px]')

    const other = within(nav).getByRole('link', { name: 'Programmes' })

    expect(other).toHaveClass('text-white/60')
    expect(other).not.toHaveAttribute('aria-current')

    // Only the last row drops its right padding, the way the source's last child does.
    expect(rows[6]).toHaveClass('pr-0')
    expect(rows[0]).not.toHaveClass('pr-0')
    expect(rows[0]).toHaveClass('inline-block', 'px-[5px]', 'py-[10px]')
  })

  it('tightens the label padding once the row is pinned', () => {
    renderDesktop(true)

    const link = screen.getByRole('link', { name: 'Programmes' })

    expect(link).toHaveClass('py-[10px]')
    expect(link).not.toHaveClass('py-5')
  })
})

describe('Nav — the dropdown', () => {
  it('is a real disclosure control reserving the caret gutter', () => {
    renderDesktop()

    const button = screen.getByRole('button', { name: 'Deck Plan' })

    expect(button).toHaveAttribute('aria-haspopup', 'true')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-controls', 'deck-plan-flyout')
    expect(button).toHaveClass('pr-5', 'flex', 'cursor-pointer')
    expect(button.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('hides a 200px white surface until it is hovered, then fades it in over the caret', async () => {
    const user = userEvent.setup()

    renderDesktop()

    const button = screen.getByRole('button', { name: 'Deck Plan' })
    const flyout = screen.getByTestId('deck-plan-flyout')

    expect(flyout).toHaveClass('invisible', 'opacity-0', 'mt-5')
    expect(flyout).toHaveClass(
      'absolute',
      'w-[200px]',
      'rounded-flyout',
      'shadow-flyout',
      'top-full',
      'left-0',
    )
    expect(flyout.className).toContain('before:border-[10px]')
    expect(flyout.className).toContain('before:border-b-white')
    expect(flyout).toHaveClass('max-w-[calc(100vw-16px)]')

    await user.hover(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(flyout).toHaveClass('visible', 'opacity-100', 'mt-0')
    expect(flyout).not.toHaveClass('invisible')

    await user.unhover(button)

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(flyout).toHaveClass('invisible')
  })

  it('holds four rows in source order, ending with the row that opens a second surface', () => {
    renderDesktop()

    const flyout = screen.getByTestId('deck-plan-flyout')
    const rows = Array.from(flyout.children) as HTMLElement[]

    expect(rows.map((row) => row.querySelector('a, button')?.textContent)).toEqual([
      'Crew',
      'Rates',
      'Questions',
      'Reference',
    ])

    const crew = within(flyout).getByRole('link', { name: 'Crew' })

    expect(crew).toHaveAttribute('href', '#crew')
    expect(crew).toHaveClass('text-[14px]', 'text-ink-soft', 'py-[9px]', 'px-5', 'rounded-t-flyout')

    expect(within(flyout).getByRole('link', { name: 'Questions' })).not.toHaveClass(
      'rounded-t-flyout',
    )

    const reference = within(flyout).getByRole('button', { name: 'Reference' })

    expect(reference).toHaveClass('rounded-b-flyout')
    expect(reference).toHaveAttribute('aria-controls', 'reference-flyout')
  })

  it('opens the second surface to the right of its row', async () => {
    const user = userEvent.setup()

    renderDesktop()

    const reference = screen.getByRole('button', { name: 'Reference' })
    const nested = screen.getByTestId('reference-flyout')

    expect(nested).toHaveClass('invisible', 'opacity-0', 'top-0', 'left-full')
    expect(nested.className).not.toContain('before:border-b-white')

    await user.hover(reference)

    expect(reference).toHaveAttribute('aria-expanded', 'true')
    expect(nested).toHaveClass('visible', 'opacity-100', 'left-full')
    expect(Array.from(nested.children).map((row) => row.textContent)).toEqual([
      'Handbooks',
      'Toolkit',
      'Field Notes',
    ])

    await user.unhover(reference)

    expect(reference).toHaveAttribute('aria-expanded', 'false')
    expect(nested).toHaveClass('invisible', 'opacity-0')
  })

  it('flips the second surface when its right edge would fall outside the window', () => {
    const width = vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1024)

    renderDesktop()

    const reference = screen.getByRole('button', { name: 'Reference' })
    const nested = screen.getByTestId('reference-flyout')

    nested.getBoundingClientRect = () => ({ right: 1400 }) as DOMRect

    fireEvent.click(reference)

    expect(nested).toHaveClass('right-full', 'top-0', 'visible')
    expect(nested).not.toHaveClass('left-full')

    // The same control folds it away again.
    fireEvent.click(reference)

    expect(reference).toHaveAttribute('aria-expanded', 'false')
    expect(nested).toHaveClass('invisible', 'opacity-0')

    width.mockRestore()
  })

  it('opens on focus, closes on Escape, and leaves a non-toggle key alone', () => {
    renderDesktop()

    const button = screen.getByRole('button', { name: 'Deck Plan' })
    const row = branchRow('Deck Plan')

    fireEvent.focus(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    fireEvent.keyDown(row, { key: 'Enter' })
    expect(button).toHaveAttribute('aria-expanded', 'true')

    // Focus moving within the group leaves the surface open...
    fireEvent.blur(row, { relatedTarget: button })
    expect(button).toHaveAttribute('aria-expanded', 'true')

    // ...and focus leaving it closes the surface.
    fireEvent.blur(row, { relatedTarget: document.body })
    expect(button).toHaveAttribute('aria-expanded', 'false')

    fireEvent.focus(button)
    fireEvent.keyDown(row, { key: 'Escape' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles from a click the way a disclosure control does', () => {
    renderDesktop()

    const button = screen.getByRole('button', { name: 'Deck Plan' })

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the second surface on Escape, on focus leaving it, and on a click', () => {
    renderDesktop()

    const reference = screen.getByRole('button', { name: 'Reference' })
    const row = branchRow('Reference')

    fireEvent.focus(reference)
    fireEvent.keyDown(row, { key: 'Enter' })
    expect(reference).toHaveAttribute('aria-expanded', 'true')

    fireEvent.blur(row, { relatedTarget: reference })
    expect(reference).toHaveAttribute('aria-expanded', 'true')

    fireEvent.blur(row, { relatedTarget: document.body })
    expect(reference).toHaveAttribute('aria-expanded', 'false')

    fireEvent.focus(reference)
    fireEvent.keyDown(row, { key: 'Escape' })
    expect(reference).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(reference)
    expect(reference).toHaveAttribute('aria-expanded', 'true')
  })
})

describe('Nav — the panel', () => {
  it('mirrors the same seven rows as 20px block links, current one in brand blue', () => {
    render(<Nav variant="panel" onNavigate={vi.fn()} />)

    const list = screen.getByTestId('panel-nav')
    const rows = Array.from(list.children) as HTMLElement[]

    expect(list).toHaveClass('list-none', 'p-0')
    expect(rows.map((row) => row.textContent)).toEqual(NAV.map((item) => item.label))

    const start = screen.getByRole('link', { name: 'Start' })

    expect(start).toHaveAttribute('href', '#start')
    expect(start).toHaveAttribute('aria-current', 'page')
    expect(start).toHaveClass('text-brand', 'text-[20px]', 'px-5', 'py-[10px]')

    const programmes = screen.getByRole('link', { name: 'Programmes' })

    expect(programmes).toHaveClass('text-ink')
    expect(programmes).not.toHaveAttribute('aria-current')
  })

  it('folds the sub-levels behind a 36px round expander that never navigates', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(<Nav variant="panel" onNavigate={onNavigate} />)

    const expander = screen.getByRole('button', { name: 'Show the Deck Plan submenu' })

    expect(expander).toHaveAttribute('aria-expanded', 'false')
    expect(expander).toHaveAttribute('aria-controls', 'deck-plan-submenu')
    expect(expander).toHaveClass(
      'absolute',
      'top-[10px]',
      'right-0',
      'h-9',
      'w-9',
      'rounded-full',
      'hover:bg-arrow-hover',
    )
    expect(expander.querySelector('svg')).not.toHaveClass('rotate-180')
    expect(document.getElementById('deck-plan-submenu')).toBeNull()

    await user.click(expander)

    expect(onNavigate).not.toHaveBeenCalled()
    expect(expander).toHaveAttribute('aria-expanded', 'true')
    expect(expander.querySelector('svg')).toHaveClass('rotate-180')

    const submenu = panelElement('deck-plan-submenu')
    const levelTwo = Array.from(submenu.children) as HTMLElement[]

    expect(levelTwo.map((row) => row.textContent)).toEqual([
      'Crew',
      'Rates',
      'Questions',
      'Reference',
    ])

    expect(within(submenu).getByRole('link', { name: 'Crew' })).toHaveClass(
      'pl-10',
      'text-[16px]',
      'text-ink',
    )
    expect(within(submenu).getByRole('link', { name: 'Questions' })).toHaveAttribute(
      'href',
      '#questions',
    )

    const nested = within(submenu).getByRole('button', { name: 'Show the Reference submenu' })

    await user.click(nested)

    expect(nested).toHaveAttribute('aria-expanded', 'true')
    expect(nested.querySelector('svg')).toHaveClass('rotate-180')

    const levelThree = within(panelElement('reference-submenu')).getAllByRole('link')

    expect(levelThree.map((link) => link.textContent)).toEqual([
      'Handbooks',
      'Toolkit',
      'Field Notes',
    ])

    for (const link of levelThree) {
      expect(link).toHaveClass('pl-[60px]', 'text-[16px]')
    }
  })

  it('hands a row’s activation back to the panel so it can close on the way out', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(<Nav variant="panel" onNavigate={onNavigate} />)

    for (const name of ['Deck Plan', 'Programmes']) {
      const link = screen.getByRole('link', { name })

      link.addEventListener('click', (event) => event.preventDefault(), { once: true })
      await user.click(link)
    }

    expect(onNavigate).toHaveBeenCalledTimes(2)
  })
})
