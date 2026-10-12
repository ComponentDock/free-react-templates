import { createRef } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CTA, NAV } from '../lib/site'
import { Nav } from './Nav'

function renderWide() {
  const onClose = vi.fn()
  const onSettle = vi.fn()

  const view = render(
    <Nav
      isDesktop
      isOpen={false}
      onClose={onClose}
      onSettle={onSettle}
      regionRef={createRef<HTMLDivElement>()}
      regionStyle={undefined}
    />,
  )

  return { onClose, onSettle, ...view }
}

function renderNarrow(isOpen: boolean) {
  const onClose = vi.fn()
  const onSettle = vi.fn()

  const view = render(
    <Nav
      isDesktop={false}
      isOpen={isOpen}
      onClose={onClose}
      onSettle={onSettle}
      regionRef={createRef<HTMLDivElement>()}
      regionStyle={undefined}
    />,
  )

  return { onClose, onSettle, ...view }
}

const branchRow = () =>
  (screen.getByRole('button', { name: 'Supplies' }).closest('li') as HTMLElement) ??
  document.body

const toggle = () => screen.getByRole('button', { name: 'Supplies' })
const surface = () => screen.getByTestId('supplies-flyout')

describe('Nav — the wide row', () => {
  it('renders the five labels and the call to action as two lists, the current row fully white', () => {
    renderWide()

    const list = screen.getByTestId('desktop-nav')
    const rows = Array.from(list.children) as HTMLElement[]

    expect(rows.map((row) => row.querySelector('a, button')?.textContent)).toEqual(
      NAV.map((item) => item.label),
    )
    expect(list).toHaveClass('ml-auto', 'lg:pl-12', 'flex')
    expect(screen.getByTestId('desktop-cta')).toHaveClass('ml-auto')

    const current = screen.getByRole('link', { name: 'Dock' })

    expect(current).toHaveAttribute('href', '#dock')
    expect(current).toHaveAttribute('aria-current', 'page')
    expect(current).toHaveClass('text-white', 'text-[16px]', 'py-2', 'md:px-2', 'xl:py-[27.2px]')

    const other = screen.getByRole('link', { name: 'Galley' })

    expect(other).toHaveClass('text-white/80')
    expect(other).not.toHaveAttribute('aria-current')

    const cta = screen.getByRole('link', { name: CTA.label })

    expect(cta).toHaveAttribute('href', CTA.href)
    expect(cta).toHaveClass(
      'bg-brand',
      'px-5',
      'py-[15px]',
      'text-[12.8px]',
      'leading-none',
      'font-bold',
      'uppercase',
      'hover:bg-white',
      'hover:text-brand',
      'hover:shadow-cta',
    )
    expect(cta).not.toHaveClass('w-full')
  })

  it('is a real disclosure control over a 182px surface carrying a 7px triangle', () => {
    renderWide()

    const button = toggle()

    expect(button).toHaveAttribute('aria-haspopup', 'true')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-controls', 'supplies-flyout')
    expect(button).toHaveClass('flex', 'cursor-pointer', 'items-center')
    expect(button.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    expect(button.querySelector('svg')).not.toHaveClass('rotate-180')

    const flyout = surface()

    expect(flyout).toHaveClass('absolute', 'top-full', 'min-w-[13em]', 'rounded-flyout', 'py-2', 'shadow-flyout', 'mt-[-10px]', 'left-0')
    expect(flyout.className).toContain('before:border-[7px]')
    expect(flyout.className).toContain('before:border-b-white')
    expect(flyout.className).toContain('before:left-[10%]')
    expect(flyout.style.visibility).toBe('hidden')
    expect(screen.queryByRole('link', { name: 'Catering' })).toBeNull()
  })

  it('opens on hover and folds away when the pointer leaves the row', async () => {
    const user = userEvent.setup()

    renderWide()

    await user.hover(toggle())

    expect(toggle()).toHaveAttribute('aria-expanded', 'true')
    expect(surface().style.visibility).toBe('visible')
    expect(surface()).toHaveClass('left-0')
    expect(screen.getByRole('link', { name: 'Catering' })).toHaveAttribute('href', '#catering')
    expect( Array.from(surface().children).map((row) => row.textContent)).toEqual([
      'Catering',
      'Cellar',
      'Celebrations',
    ])

    await user.unhover(toggle())

    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
    expect(surface().style.visibility).toBe('hidden')
  })

  it('stays open while focus moves inside the row and closes when it leaves', () => {
    renderWide()

    fireEvent.click(toggle())
    expect(toggle()).toHaveAttribute('aria-expanded', 'true')

    fireEvent.blur(branchRow(), { relatedTarget: toggle() })
    expect(toggle()).toHaveAttribute('aria-expanded', 'true')

    fireEvent.blur(branchRow(), { relatedTarget: document.body })
    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles from a click, and ArrowDown opens it with focus moved onto the first destination', () => {
    renderWide()

    fireEvent.click(toggle())
    expect(toggle()).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(toggle())
    expect(toggle()).toHaveAttribute('aria-expanded', 'false')

    fireEvent.keyDown(toggle(), { key: 'Enter' })
    expect(toggle()).toHaveAttribute('aria-expanded', 'false')

    fireEvent.keyDown(toggle(), { key: 'ArrowDown' })

    expect(toggle()).toHaveAttribute('aria-expanded', 'true')
    expect(document.activeElement).toBe(screen.getByRole('link', { name: 'Catering' }))
  })

  it('keeps the surface a hover opened when the click that follows it arrives', async () => {
    const user = userEvent.setup()

    renderWide()

    await user.hover(toggle())

    expect(toggle()).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle())
    expect(toggle()).toHaveAttribute('aria-expanded', 'true')
  })

  it('walks its destinations with the arrow keys and stops at both ends', () => {
    renderWide()

    fireEvent.click(toggle())

    const catering = screen.getByRole('link', { name: 'Catering' })
    const cellar = screen.getByRole('link', { name: 'Cellar' })
    const celebrations = screen.getByRole('link', { name: 'Celebrations' })

    fireEvent.keyDown(catering, { key: 'ArrowDown' })
    expect(document.activeElement).toBe(cellar)

    fireEvent.keyDown(cellar, { key: 'ArrowUp' })
    expect(document.activeElement).toBe(catering)

    // Neither end wraps: an arrow past the last row and before the first leaves focus alone.
    celebrations.focus()
    fireEvent.keyDown(celebrations, { key: 'ArrowDown' })
    expect(document.activeElement).toBe(celebrations)

    catering.focus()
    fireEvent.keyDown(catering, { key: 'ArrowUp' })
    expect(document.activeElement).toBe(catering)

    // Any other key inside a destination is left to the browser.
    fireEvent.keyDown(cellar, { key: 'Tab' })
    expect(document.activeElement).toBe(catering)
  })

  it('closes on Escape and hands focus back to the toggle', () => {
    renderWide()

    fireEvent.click(toggle())
    fireEvent.keyDown(branchRow(), { key: 'Escape' })

    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
    expect(document.activeElement).toBe(toggle())
  })

  it('closes on a press outside the row and stays open for one inside it', () => {
    renderWide()

    fireEvent.click(toggle())

    fireEvent.mouseDown(surface())
    expect(toggle()).toHaveAttribute('aria-expanded', 'true')

    fireEvent.mouseDown(document.body)
    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
  })

  it('pins the surface to the row’s right edge when opening leftwards would leave the window', () => {
    const width = vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1024)

    renderWide()

    surface().getBoundingClientRect = () => ({ right: 1400 }) as DOMRect

    fireEvent.click(toggle())

    expect(surface()).toHaveClass('right-0')
    expect(surface()).not.toHaveClass('left-0')

    width.mockRestore()
  })
})

describe('Nav — the narrow list', () => {
  it('renders the same five rows as full-width blocks, and folds the extras behind the toggle', async () => {
    const user = userEvent.setup()

    const { onClose } = renderNarrow(true)

    const list = screen.getByTestId('collapse-nav')
    const rows = Array.from(list.children) as HTMLElement[]

    expect(rows.map((row) => row.querySelector('a, button')?.textContent)).toEqual(
      NAV.map((item) => item.label),
    )
    expect(list).toHaveClass('flex-col', 'w-full')
    expect(screen.getByTestId('collapse-cta')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: CTA.label })).toHaveClass('w-full')

    expect(document.getElementById('supplies-flyout')).toBeNull()
    expect(toggle().querySelector('svg')).not.toHaveClass('rotate-180')

    await user.click(toggle())

    expect(toggle()).toHaveAttribute('aria-expanded', 'true')
    expect(toggle().querySelector('svg')).toHaveClass('rotate-180')

    const sublist = screen.getByTestId('supplies-flyout')

    expect(sublist.tagName).toBe('UL')
    expect(within(sublist).getAllByRole('link').map((link) => link.textContent)).toEqual([
      'Catering',
      'Cellar',
      'Celebrations',
    ])

    const catering = within(sublist).getByRole('link', { name: 'Catering' })

    catering.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(catering)

    expect(onClose).toHaveBeenCalledTimes(1)

    await user.click(toggle())
    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
  })

  it('keeps the region empty at rest, and folds a row’s activation back into the bar', async () => {
    const user = userEvent.setup()

    renderNarrow(false)

    expect(screen.queryByTestId('collapse-nav')).toBeNull()
    expect(screen.queryByTestId('collapse-cta')).toBeNull()

    const { onClose } = renderNarrow(true)

    for (const name of ['Dock', CTA.label]) {
      const link = screen.getByRole('link', { name })

      link.addEventListener('click', (event) => event.preventDefault(), { once: true })
      await user.click(link)
    }

    expect(onClose).toHaveBeenCalledTimes(2)
  })

  it('hands the settling transition back to the bar only for the region’s own stated height', () => {
    const { onSettle } = renderNarrow(true)

    const region = screen.getByTestId('nav-region')
    const settled = new Event('transitionend', { bubbles: true })

    Object.defineProperty(settled, 'propertyName', { value: 'height' })
    fireEvent(region, settled)
    expect(onSettle).toHaveBeenCalledTimes(1)

    const other = new Event('transitionend', { bubbles: true })

    Object.defineProperty(other, 'propertyName', { value: 'opacity' })
    fireEvent(region, other)
    expect(onSettle).toHaveBeenCalledTimes(1)

    const bubbled = new Event('transitionend', { bubbles: true })

    Object.defineProperty(bubbled, 'propertyName', { value: 'height' })
    fireEvent(toggle().querySelector('svg') as SVGSVGElement, bubbled)
    expect(onSettle).toHaveBeenCalledTimes(1)
  })
})
