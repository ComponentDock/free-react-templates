import { afterEach, describe, expect, it } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SiteHeader } from './SiteHeader'
import { BAR_CTA, BRAND, COMPONENT_DOCK_URL, MENU_LABEL, NAV_LINKS, SIGN_IN } from '../data/hero'

const originalMatchMedia = window.matchMedia

interface Query {
  listeners: ((event: MediaQueryListEvent) => void)[]
  removed: string[]
}

function stubMatchMedia(matches = false): Query {
  const query: Query = { listeners: [], removed: [] }
  window.matchMedia = ((media: string) => ({
    matches,
    media,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: (_: string, listener: (event: MediaQueryListEvent) => void) => {
      query.listeners.push(listener)
    },
    removeEventListener: (type: string) => {
      query.removed.push(type)
    },
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia
  return query
}

/** jsdom hash-navigation races React's delegated handler; neutralize it. */
function neutralizeAnchor(link: HTMLElement) {
  link.addEventListener('click', (event) => event.preventDefault(), { once: true })
}

afterEach(() => {
  window.matchMedia = originalMatchMedia
})

describe('SiteHeader', () => {
  it('renders the wordmark, four links, a sign-in and one small CTA', () => {
    render(<SiteHeader />)

    expect(screen.getByRole('link', { name: BRAND })).toBeInTheDocument()
    for (const link of NAV_LINKS) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: SIGN_IN.label })).toHaveAttribute('href', SIGN_IN.href)
    expect(screen.getByRole('link', { name: BAR_CTA.label })).toHaveAttribute(
      'href',
      COMPONENT_DOCK_URL,
    )
  })

  it('marks the product link as the current page and nothing else', () => {
    render(<SiteHeader />)
    const links = screen.getAllByRole('link')

    expect(screen.getByRole('link', { name: 'Product' })).toHaveAttribute('aria-current', 'page')
    expect(links.filter((link) => link.getAttribute('aria-current') !== null)).toHaveLength(1)
  })

  it('sizes the bar CTA smaller than the hero CTA', () => {
    render(<SiteHeader />)
    const cta = screen.getByRole('link', { name: BAR_CTA.label })

    expect(cta).toHaveClass('min-h-10', 'rounded-[10px]', 'text-[14.5px]')
    expect(cta.className).not.toContain('min-h-[50px]')
    expect(cta.className).not.toContain('rounded-xl')
  })

  it('shows a 44 px menu button whose panel is closed by default', () => {
    render(<SiteHeader />)
    const button = screen.getByRole('button', { name: MENU_LABEL.open })

    expect(button).toHaveClass('h-11', 'w-11', 'rounded-xl')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-controls', 'site-nav')
    expect(screen.getByRole('navigation', { name: 'Main' })).toHaveClass('heroMd:hidden')
  })

  it('toggles the panel, its label and its expanded state', async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)
    const button = screen.getByRole('button', { name: MENU_LABEL.open })

    await user.click(button)

    const close = screen.getByRole('button', { name: MENU_LABEL.close })
    expect(close).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Main' })).toHaveClass('heroMd:flex')

    await user.click(close)

    expect(screen.getByRole('button', { name: MENU_LABEL.open })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes on Escape and returns focus to the button', async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)
    const button = screen.getByRole('button', { name: MENU_LABEL.open })
    await user.click(button)

    fireEvent.keyDown(document, { key: 'a' })
    expect(screen.getByRole('button', { name: MENU_LABEL.close })).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(screen.getByRole('button', { name: MENU_LABEL.open })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getByRole('button', { name: MENU_LABEL.open })).toHaveFocus()
  })

  it('keeps the panel open for a press inside the bar and closes it outside', async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)
    await user.click(screen.getByRole('button', { name: MENU_LABEL.open }))
    const header = screen.getByRole('banner')

    fireEvent.mouseDown(header)
    expect(screen.getByRole('button', { name: MENU_LABEL.close })).toBeInTheDocument()

    fireEvent.mouseDown(document.body)
    expect(screen.getByRole('button', { name: MENU_LABEL.open })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes when a link inside the panel is followed', async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)
    await user.click(screen.getByRole('button', { name: MENU_LABEL.open }))

    const link = screen.getByRole('link', { name: 'Pricing' })
    neutralizeAnchor(link)
    await user.click(link)

    expect(screen.getByRole('button', { name: MENU_LABEL.open })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes when the viewport crosses 861 px, and stays open otherwise', async () => {
    const query = stubMatchMedia(false)
    const user = userEvent.setup()
    render(<SiteHeader />)
    await user.click(screen.getByRole('button', { name: MENU_LABEL.open }))

    act(() => {
      for (const listener of query.listeners) {
        listener({ matches: false } as MediaQueryListEvent)
      }
    })
    expect(screen.getByRole('button', { name: MENU_LABEL.close })).toBeInTheDocument()

    act(() => {
      for (const listener of query.listeners) {
        listener({ matches: true } as MediaQueryListEvent)
      }
    })
    expect(screen.getByRole('button', { name: MENU_LABEL.open })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('unsubscribes from the media query on unmount', () => {
    const query = stubMatchMedia()
    const { unmount } = render(<SiteHeader />)

    unmount()

    expect(query.removed).toContain('change')
  })

  it('renders without matchMedia at all', () => {
    window.matchMedia = undefined as unknown as typeof window.matchMedia

    render(<SiteHeader />)

    expect(screen.getByRole('link', { name: BRAND })).toBeInTheDocument()
  })
})
