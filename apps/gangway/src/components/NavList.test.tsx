import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NAV, isBranch, submenuLabel } from '../lib/site'
import { NavList } from './NavList'

const renderWide = () => render(<NavList variant="desktop" />)

const renderDrawer = () => {
  const onNavigate = vi.fn()

  return { onNavigate, ...render(<NavList variant="drawer" onNavigate={onNavigate} />) }
}

const desktopList = () => screen.getByTestId('desktop-nav')
const drawerList = () => screen.getByTestId('drawer-nav')
const branchLink = (label: string) => screen.getByRole('link', { name: label })
const branchRow = (label: string) =>
  screen.getByTestId('desktop-nav').querySelector(`[data-branch="${label}"]`) as HTMLElement
const flyout = (slug: string) => screen.getByTestId(`${slug}-flyout`)
const submenu = (slug: string) => screen.getByTestId(`${slug}-submenu`)
const arrow = (label: string) => screen.getByRole('button', { name: submenuLabel(label, false) })

/** The wide row's list items, keyed by the label they carry. */
const rowByLabel = () =>
  new Map(
    (Array.from(desktopList().children) as HTMLElement[]).map((row) => [row.textContent, row]),
  )

/** The labels the source declares, which none of these rows may reproduce. */
const SOURCE_LABELS = ['Home', 'About', 'Job Listings', 'Pages', 'Services', 'Contact', 'Log In']

describe('NavList — the wide row (1200px and up)', () => {
  it('renders the eight rows in the design’s order, led by the current destination', () => {
    renderWide()

    const rows = Array.from(desktopList().children) as HTMLElement[]

    expect(rows).toHaveLength(8)
    expect(rows.map((row) => row.querySelector('a, button')?.textContent)).toEqual([
      'Deck',
      'Crew',
      'Billets',
      'Harbour',
      "Ship's log",
      'Berth',
      'Publish a billet',
      'Sign aboard',
    ])
    expect(desktopList()).toHaveAttribute('id', 'gangway-nav')
    expect(desktopList().className).toContain('list-none')
    expect(desktopList().className).not.toContain('flex-col')

    const current = within(desktopList()).getByRole('link', { name: 'Deck' })

    expect(current).toHaveAttribute('href', '#deck')
    expect(current).toHaveAttribute('aria-current', 'page')
    expect(current.className).toContain('text-white')
    expect(current.className).toContain('px-5')
    expect(current.className).toContain('py-5')

    const other = within(desktopList()).getByRole('link', { name: 'Crew' })

    expect(other).not.toHaveAttribute('aria-current')
    expect(other.className).toContain('text-label')
    expect(other.className).toContain('hover:text-white')
    expect(other.className).toContain('text-[16px]')
  })

  it('hides the two rows the drawer adds from 992px up, where the pair carries them', () => {
    renderWide()

    const rows = rowByLabel()

    for (const item of NAV.filter((entry) => !isBranch(entry) && entry.drawerOnly)) {
      const row = rows.get(item.label) as HTMLElement

      expect(row.className).toContain('lg:hidden')
      expect(row.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    }

    const hidden = Array.from(rows.values()).filter((row) => row.className.includes('lg:hidden'))

    expect(hidden).toHaveLength(2)

    for (const item of NAV.filter((entry) => !isBranch(entry) && !entry.drawerOnly)) {
      expect((rows.get(item.label) as HTMLElement).className).not.toContain('lg:hidden')
    }
  })

  it('never reproduces a label the source template declares', () => {
    renderWide()

    for (const label of SOURCE_LABELS) {
      expect(within(desktopList()).queryByText(label, { exact: true })).toBeNull()
    }
    expect(within(desktopList()).queryByText('Brand', { exact: true })).toBeNull()
  })

  it('keeps every row inline-block and gives each one a real destination', () => {
    renderWide()

    const rows = Array.from(desktopList().children) as HTMLElement[]

    for (const row of rows) {
      const control = row.querySelector('a') as HTMLAnchorElement

      expect(control.getAttribute('href')).toMatch(/^#[a-z]/)
      expect(row.className).toContain('inline-block')
    }
  })
})

describe('NavList — the two submenus on the wide row', () => {
  it('hangs a square 200px surface, 2px green hairline and all, under its own row', () => {
    renderWide()

    const link = branchLink('Harbour')

    expect(link).toHaveAttribute('href', '#harbour')
    expect(link).toHaveAttribute('aria-haspopup', 'true')
    expect(link).toHaveAttribute('aria-expanded', 'false')
    expect(link).toHaveAttribute('aria-controls', 'harbour-flyout')
    expect(link.className).toContain('pr-5')
    expect(link.className).toContain('relative')

    const caret = link.querySelector('svg') as SVGSVGElement

    expect(caret).toHaveAttribute('aria-hidden', 'true')
    expect(caret).toHaveAttribute('width', '16')
    expect(caret.className.baseVal).toContain('absolute')
    expect(caret.className.baseVal).toContain('top-1/2')
    expect(caret.className.baseVal).toContain('right-0')
    expect(caret.className.baseVal).toContain('-translate-y-1/2')
    expect(caret.className.baseVal).not.toContain('-rotate-180')

    const surface = flyout('harbour')

    expect(surface.className).toContain('min-w-[200px]')
    expect(surface.className).toContain('border-t-2')
    expect(surface.className).toContain('border-brand')
    expect(surface.className).toContain('shadow-flyout')
    expect(surface.className).toContain('invisible')
    expect(surface.className).toContain('mt-5')
    expect(surface).toHaveAttribute('id', 'harbour-flyout')
    expect(surface.tagName).toBe('UL')

    const rows = Array.from(surface.querySelectorAll('a')) as HTMLAnchorElement[]

    expect(rows.map((row) => row.textContent)).toEqual([
      'Chandlery',
      'Chandlery detail',
      'Log entry',
      'The yard',
      'Yard detail',
      'Crew voices',
      'Questions we get asked',
      'Dry dock',
    ])
    expect(rows.map((row) => row.getAttribute('href'))).toEqual([
      '#chandlery',
      '#chandlery-detail',
      '#log-entry',
      '#yard',
      '#yard-detail',
      '#crew-voices',
      '#questions',
      '#dry-dock',
    ])
    // A closed surface is out of the tab order, and its rows are 16px ink on 9px 20px.
    for (const row of rows) {
      expect(row).toHaveAttribute('tabindex', '-1')
      expect(row.className).toContain('px-5')
      expect(row.className).toContain('py-[9px]')
      expect(row.className).toContain('text-flyout-ink')
      expect(row.className).toContain('hover:bg-flyout-wash')
    }
    expect(flyout('billets').querySelectorAll('a')).toHaveLength(2)
    expect(rows.some((row) => row.textContent!.length > 20)).toBe(true)
  })

  it('opens on hover, closes when the pointer leaves, and takes its rows back into the tab order', async () => {
    const user = userEvent.setup()

    renderWide()

    await user.hover(branchLink('Billets'))

    expect(branchLink('Billets')).toHaveAttribute('aria-expanded', 'true')
    expect(flyout('billets').className).toContain('visible')
    expect(flyout('billets').className).toContain('mt-0')
    expect(flyout('billets').className).not.toContain('mt-5')
    expect(within(flyout('billets')).getByRole('link', { name: 'Billet detail' })).not.toHaveAttribute(
      'tabindex',
    )

    await user.unhover(branchLink('Billets'))

    expect(branchLink('Billets')).toHaveAttribute('aria-expanded', 'false')
    expect(flyout('billets').className).toContain('invisible')
  })

  it('pins the surface on a click and unpins it on the next one', () => {
    renderWide()

    fireEvent.click(branchLink('Billets'))
    expect(branchLink('Billets')).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(branchLink('Billets'))
    expect(branchLink('Billets')).toHaveAttribute('aria-expanded', 'false')

    // A key that is not an arrow is left to the browser.
    fireEvent.keyDown(branchLink('Billets'), { key: 'Enter' })
    expect(branchLink('Billets')).toHaveAttribute('aria-expanded', 'false')
  })

  it('keeps a surface a hover opened when the click that follows it arrives', async () => {
    const user = userEvent.setup()

    renderWide()

    await user.hover(branchLink('Crew'))
    await user.hover(branchLink('Harbour'))
    await user.click(branchLink('Harbour'))

    expect(branchLink('Harbour')).toHaveAttribute('aria-expanded', 'true')

    await user.unhover(branchLink('Harbour'))

    // The click pinned it, so leaving with the pointer no longer folds it away.
    expect(branchLink('Harbour')).toHaveAttribute('aria-expanded', 'true')
  })

  it('leaves an already-open surface open when ArrowDown lands on it again', () => {
    renderWide()

    fireEvent.click(branchLink('Billets'))
    fireEvent.keyDown(branchLink('Billets'), { key: 'ArrowDown' })

    expect(branchLink('Billets')).toHaveAttribute('aria-expanded', 'true')
    expect(document.activeElement).toBe(
      within(flyout('billets')).getByRole('link', { name: 'Billet detail' }),
    )
  })

  it('hands every key inside a destination back to the browser', () => {
    renderWide()

    fireEvent.click(branchLink('Billets'))

    const detail = within(flyout('billets')).getByRole('link', { name: 'Billet detail' })

    detail.focus()
    fireEvent.keyDown(detail, { key: 'Tab' })

    expect(document.activeElement).toBe(detail)
    expect(branchLink('Billets')).toHaveAttribute('aria-expanded', 'true')
  })

  it('keeps its own row pinned when the pointer arrives on it again', async () => {
    const user = userEvent.setup()

    renderWide()

    fireEvent.click(branchLink('Harbour'))
    await user.hover(branchLink('Harbour'))

    expect(branchLink('Harbour')).toHaveAttribute('aria-expanded', 'true')

    await user.unhover(branchLink('Harbour'))

    expect(branchLink('Harbour')).toHaveAttribute('aria-expanded', 'true')
  })

  it('holds one surface open at a time', async () => {
    const user = userEvent.setup()

    renderWide()

    fireEvent.click(branchLink('Billets'))
    expect(branchLink('Billets')).toHaveAttribute('aria-expanded', 'true')

    await user.hover(branchLink('Harbour'))

    expect(branchLink('Harbour')).toHaveAttribute('aria-expanded', 'true')
    expect(branchLink('Billets')).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens on ArrowDown with focus on the first destination, and walks the rows from there', () => {
    renderWide()

    fireEvent.keyDown(branchLink('Billets'), { key: 'ArrowDown' })

    expect(branchLink('Billets')).toHaveAttribute('aria-expanded', 'true')

    const detail = within(flyout('billets')).getByRole('link', { name: 'Billet detail' })
    const post = within(flyout('billets')).getByRole('link', { name: 'Post a billet' })

    expect(document.activeElement).toBe(detail)

    fireEvent.keyDown(detail, { key: 'ArrowDown' })
    expect(document.activeElement).toBe(post)

    fireEvent.keyDown(post, { key: 'ArrowUp' })
    expect(document.activeElement).toBe(detail)

    // Neither end wraps: an arrow past the last row, and one before the first,
    // both leave focus where it was.
    post.focus()
    fireEvent.keyDown(post, { key: 'ArrowDown' })
    expect(document.activeElement).toBe(post)

    detail.focus()
    fireEvent.keyDown(detail, { key: 'ArrowUp' })
    expect(document.activeElement).toBe(detail)
  })

  it('closes on Escape and hands focus back to the row’s own link', () => {
    renderWide()

    fireEvent.click(branchLink('Harbour'))
    fireEvent.keyDown(branchRow('Harbour'), { key: 'Escape' })

    expect(branchLink('Harbour')).toHaveAttribute('aria-expanded', 'false')
    expect(document.activeElement).toBe(branchLink('Harbour'))
  })

  it('closes on a press outside the row, and stays open for one inside it', () => {
    renderWide()

    fireEvent.click(branchLink('Billets'))

    fireEvent.mouseDown(flyout('billets'))
    expect(branchLink('Billets')).toHaveAttribute('aria-expanded', 'true')

    fireEvent.mouseDown(document.body)
    expect(branchLink('Billets')).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes when focus leaves the row and stays open while it moves inside it', () => {
    renderWide()

    fireEvent.click(branchLink('Harbour'))

    fireEvent.blur(branchRow('Harbour'), { relatedTarget: branchLink('Harbour') })
    expect(branchLink('Harbour')).toHaveAttribute('aria-expanded', 'true')

    fireEvent.blur(branchRow('Harbour'), { relatedTarget: document.body })
    expect(branchLink('Harbour')).toHaveAttribute('aria-expanded', 'false')
  })

  it('pins a surface to its row’s right edge when opening leftwards would leave the window', () => {
    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1024)

    renderWide()

    flyout('harbour').getBoundingClientRect = () => ({ right: 1400 }) as DOMRect

    fireEvent.click(branchLink('Harbour'))

    expect(flyout('harbour').className).toContain('right-0')
    expect(flyout('harbour').className).not.toContain('left-0')

    vi.restoreAllMocks()
  })

  it('leaves a closing surface where it is while the pointer is inside another row', () => {
    renderWide()

    fireEvent.click(branchLink('Billets'))
    fireEvent.mouseLeave(branchRow('Harbour'))

    expect(branchLink('Billets')).toHaveAttribute('aria-expanded', 'true')
  })

  it('adds no outside-press listener while every surface is closed', () => {
    const add = vi.spyOn(document, 'addEventListener')

    renderWide()

    expect(add).not.toHaveBeenCalledWith('mousedown', expect.any(Function))

    vi.restoreAllMocks()
  })
})

describe('NavList — the drawer’s list (below 1200px)', () => {
  it('renders the same eight rows as 50px blocks, the current one solid black', () => {
    renderDrawer()

    const rows = Array.from(drawerList().children) as HTMLElement[]

    expect(rows).toHaveLength(8)
    expect(rows.map((row) => row.querySelector('a, button')?.textContent)).toEqual(
      NAV.map((item) => item.label),
    )
    expect(drawerList().className).toContain('relative')

    const current = within(drawerList()).getByRole('link', { name: 'Deck' })

    expect(current).toHaveAttribute('aria-current', 'page')
    expect(current.className).toContain('text-black')
    expect(current.className).toContain('py-[10px]')
    expect(current.className).toContain('px-5')
    expect(current.className).toContain('text-[20px]')

    const other = within(drawerList()).getByRole('link', { name: 'Crew' })

    expect(other.className).toContain('text-ink')
    expect(other.className).toContain('hover:text-brand')

    // The two rows the wide row hides are ordinary rows here.
    for (const label of ['Publish a billet', 'Sign aboard']) {
      const row = rows.find((entry) => entry.textContent === label) as HTMLElement

      expect(row.className).not.toContain('lg:hidden')
      expect(row.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    }
  })

  it('starts each submenu owner closed, with a round 36px disclosure and no sub-list', () => {
    renderDrawer()

    const control = arrow('Billets')

    expect(control).toHaveAttribute('type', 'button')
    expect(control).toHaveAttribute('aria-expanded', 'false')
    expect(control).toHaveAttribute('aria-controls', 'billets-submenu')
    expect(control.className).toContain('h-9')
    expect(control.className).toContain('w-9')
    expect(control.className).toContain('rounded-full')
    expect(control.className).toContain('right-0')
    expect(control.className).toContain('top-[10px]')
    expect(control.className.split(' ')).not.toContain('bg-arrow-hover')
    expect(control.querySelector('svg')).toHaveAttribute('width', '12')
    expect(control.querySelector('svg')).not.toHaveClass('-rotate-180')
    expect(screen.queryByTestId('billets-submenu')).toBeNull()

    const owner = within(drawerList()).getByRole('link', { name: 'Billets' })

    expect(owner).toHaveAttribute('href', '#billets')
    expect(owner.className).toContain('pr-14')
  })

  it('expands a sub-list of 44px indented rows behind its arrow, and folds it away again', async () => {
    const user = userEvent.setup()

    renderDrawer()

    await user.click(arrow('Billets'))

    const expanded = screen.getByRole('button', { name: submenuLabel('Billets', true) })

    expect(expanded).toHaveAttribute('aria-expanded', 'true')
    expect(expanded.className.split(' ')).toContain('bg-arrow-hover')
    expect(expanded.querySelector('svg')).toHaveClass('-rotate-180')

    const list = submenu('billets')

    expect(list.tagName).toBe('UL')

    const rows = Array.from(list.querySelectorAll('a')) as HTMLAnchorElement[]

    expect(rows.map((row) => row.textContent)).toEqual(['Billet detail', 'Post a billet'])
    for (const row of rows) {
      expect(row.className).toContain('pl-10')
      expect(row.className).toContain('py-[10px]')
      expect(row.className).toContain('text-[16px]')
      expect(row.className).toContain('hover:text-brand')
    }

    await user.click(expanded)

    expect(screen.queryByTestId('billets-submenu')).toBeNull()
    expect(arrow('Harbour')).toHaveAttribute('aria-expanded', 'false')
  })

  it('hands every destination back to the drawer, nested rows included', async () => {
    const user = userEvent.setup()

    const { onNavigate } = renderDrawer()

    for (const name of ['Crew', 'Publish a billet']) {
      const link = within(drawerList()).getByRole('link', { name })

      link.addEventListener('click', (event) => event.preventDefault(), { once: true })
      await user.click(link)
    }

    await user.click(arrow('Billets'))

    const nested = within(submenu('billets')).getByRole('link', { name: 'Post a billet' })

    nested.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(nested)

    expect(onNavigate).toHaveBeenCalledTimes(3)
  })

  it('keeps a long label whole rather than truncating it, as the design does', async () => {
    const user = userEvent.setup()

    renderDrawer()

    await user.click(arrow('Harbour'))

    const long = within(submenu('harbour')).getByRole('link', { name: 'Questions we get asked' })

    expect(long.className).toContain('block')
    expect(long.className).toContain('pl-10')
    expect(long.className).not.toContain('truncate')
  })
})
