import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

function hearts() {
  return screen.getAllByRole('button').map((button) => button.getAttribute('aria-pressed'))
}

describe('App', () => {
  it('renders one content-height stage holding head, grid and footer', () => {
    render(<App />)

    const mains = screen.getAllByRole('main')
    expect(mains).toHaveLength(1)

    const main = mains[0]!
    expect(main.className).toContain('max-w-[1212px]')
    expect(main.className).toContain('mx-auto')
    expect(main.className).toContain('px-4')
    expect(main.className).toContain('py-[clamp(32px,6vw,72px)]')
    expect(main.className).not.toContain('min-h')

    expect([...main.children].map((child) => child.tagName)).toEqual(['HEADER', 'DIV', 'FOOTER'])
  })

  it('lays three listing cards on the auto-fit grid', () => {
    render(<App />)

    const grid = screen.getByRole('main').children[1]!
    expect(grid.className).toContain('grid')
    expect(grid.className).toContain('grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))]')
    expect(grid.className).toContain('gap-6')
    expect(grid.className).not.toMatch(/(sm|md|lg|xl):/)
    expect(grid.children).toHaveLength(3)
  })

  it('walks one h1, three h2 and three card links in listing order', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    const addresses = screen.getAllByRole('heading', { level: 2 }).map((h2) => h2.textContent)
    expect(addresses).toEqual(['14 Seaview Terrace', '7 Banyan Lane', '22 Lagoon Drive'])
    expect(screen.getAllByRole('article')).toHaveLength(3)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(4)
    expect(links.map((link) => link.textContent)).toEqual([
      '14 Seaview Terrace',
      '7 Banyan Lane',
      '22 Lagoon Drive',
      'Component Dock',
    ])
    expect(document.querySelectorAll('a[href="#"]')).toHaveLength(0)
    expect(document.querySelectorAll('form, input')).toHaveLength(0)
  })

  it('keeps exactly six focusables in heart-then-address order per card', () => {
    render(<App />)

    const focusables = [...document.querySelectorAll('button, a')].map((node) => node.tagName)
    expect(focusables).toEqual(['BUTTON', 'A', 'BUTTON', 'A', 'BUTTON', 'A', 'A'])

    const firstCard = screen.getAllByRole('article')[0]!
    const cardFocusables = [...firstCard.querySelectorAll('button, a')].map(
      (node) => node.getAttribute('aria-label') ?? node.textContent,
    )
    expect(cardFocusables).toEqual(['Save 14 Seaview Terrace to favourites', '14 Seaview Terrace'])
  })

  it('gives every photograph an alt and hides all fifteen glyphs', () => {
    render(<App />)

    const images = screen.getAllByRole('img') as HTMLImageElement[]
    expect(images).toHaveLength(3)
    images.forEach((image) => expect(image.getAttribute('alt')!.length).toBeGreaterThan(10))

    const glyphs = [...document.querySelectorAll('svg')]
    expect(glyphs).toHaveLength(15)
    glyphs.forEach((glyph) => expect(glyph).toHaveAttribute('aria-hidden', 'true'))
  })

  it('opens with the middle listing already saved', () => {
    render(<App />)

    expect(hearts()).toEqual(['false', 'true', 'false'])
    const middle = screen.getAllByRole('article')[1]!
    expect(middle.querySelector('svg')).toHaveAttribute('fill', 'currentColor')
    expect(document.querySelectorAll('img')[0]!.getAttribute('fetchpriority')).toBe('high')
    expect(document.querySelectorAll('img')[2]!.getAttribute('loading')).toBe('lazy')
  })

  it('toggles one heart without announcing anything or touching its neighbours', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Save 14 Seaview Terrace to favourites' }))
    expect(hearts()).toEqual(['true', 'true', 'false'])

    await user.click(screen.getByRole('button', { name: 'Remove 7 Banyan Lane from favourites' }))
    expect(hearts()).toEqual(['true', 'false', 'false'])

    expect(
      screen.getByRole('button', { name: 'Remove 14 Seaview Terrace from favourites' }),
    ).toHaveAttribute('aria-pressed', 'true')
    expect(document.querySelector('[role="status"], [aria-live]')).toBeNull()
    expect(screen.getByRole('main').textContent).not.toMatch(/saved (jobs|listings)/i)
  })

  it('credits Component Dock in the footer', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.textContent).toContain('More templates at')
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
