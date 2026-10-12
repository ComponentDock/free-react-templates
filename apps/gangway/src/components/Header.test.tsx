import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CTA_PRIMARY, CTA_SECONDARY, MENU_LABEL, NAV, SITE_NAME } from '../lib/site'
import { Header } from './Header'

const row = () => screen.getByTestId('header-row')
const hamburger = () => screen.getByRole('button', { name: MENU_LABEL })

describe('Header — the bar that floats on the band', () => {
  it('sits 48px below the top, absolutely placed, one tier, with nothing sticky about it', () => {
    render(<Header />)

    const bar = screen.getByRole('banner')

    expect(bar.className).toContain('absolute')
    expect(bar.className).toContain('inset-x-0')
    expect(bar.className).toContain('top-8')
    expect(bar.className).toContain('mt-4')
    expect(bar.className).toContain('z-[1999]')
    expect(bar.className).not.toContain('sticky')
    expect(bar.className).not.toContain('fixed')
    expect(bar.querySelector('header')).toBeNull()
  })

  it('runs a full-width container with no cap, 112px of padding from 1200px up', () => {
    render(<Header />)

    const container = row().parentElement as HTMLElement

    expect(container.className).toContain('w-full')
    expect(container.className).toContain('px-[15px]')
    expect(container.className).toContain('xl:px-28')
    expect(container.className).not.toContain('max-w-')
    expect(row().className).toContain('flex')
    expect(row().className).toContain('flex-wrap')
    expect(row().className).toContain('-mx-[15px]')
  })

  it('leaves the row no height at all from 768px, because all three anchors are out of the flow', () => {
    render(<Header />)

    const children = Array.from(row().children) as HTMLElement[]

    expect(children).toHaveLength(3)
    expect(screen.getByTestId('wordmark-column').className).toContain('md:absolute')
    expect(screen.getByTestId('cta-column').className).toContain('md:absolute')
    expect(screen.getByTestId('cta-column').className).toContain('justify-end')
    // The centred list is out of the flow at every width, so it contributes nothing either.
    expect(screen.getByRole('navigation', { name: 'Site navigation' }).className).toContain(
      'absolute',
    )
    expect(children.every((child) => child.className.includes('absolute'))).toBe(true)
  })

  it('holds the wordmark at the left, the centred list and the pair at the right', () => {
    render(<Header />)

    const column = screen.getByTestId('cta-column')

    expect(within(column).getByRole('link', { name: CTA_SECONDARY.label })).toHaveAttribute(
      'href',
      CTA_SECONDARY.href,
    )
    expect(within(column).getByRole('link', { name: CTA_PRIMARY.label })).toHaveAttribute(
      'href',
      CTA_PRIMARY.href,
    )
    expect(within(column).getByRole('button', { name: MENU_LABEL })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: SITE_NAME })).toHaveAttribute('href', '#top')

    const nav = screen.getByRole('navigation', { name: 'Site navigation' })

    expect(nav.className).toContain('hidden')
    expect(nav.className).toContain('xl:block')
    expect(nav.className).toContain('left-1/2')
    expect(nav.className).toContain('-translate-x-1/2')
    expect(within(nav).getByTestId('desktop-nav').children).toHaveLength(NAV.length)
  })

  it('opens the drawer from the hamburger, and takes focus back to it on Escape', async () => {
    const user = userEvent.setup()

    render(<Header />)

    expect(screen.queryByTestId('drawer-nav')).toBeNull()
    expect(hamburger()).toHaveAttribute('aria-expanded', 'false')

    await user.click(hamburger())

    expect(hamburger()).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByTestId('drawer-panel').className).toContain('translate-x-0')
    expect(screen.getByTestId('drawer-veil').className).toContain('opacity-100')

    await user.keyboard('{Escape}')

    expect(hamburger()).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByTestId('drawer-nav')).toBeNull()
    expect(document.activeElement).toBe(hamburger())
  })

  it('closes the drawer again from its own control in the panel', async () => {
    const user = userEvent.setup()

    render(<Header />)

    await user.click(hamburger())
    await user.click(screen.getByRole('button', { name: 'Close the site menu' }))

    expect(hamburger()).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByTestId('drawer-nav')).toBeNull()
  })
})
