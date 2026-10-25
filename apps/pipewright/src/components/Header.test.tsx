import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import { BRAND, BRAND_NOTE, NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from '../content'

describe('Header', () => {
  it('renders the two-line wordmark and the four uppercase labels', () => {
    render(<Header lifted={false} />)

    expect(screen.getByText(BRAND)).toHaveClass('font-serif', 'text-2xl', 'lg:text-3xl')
    expect(screen.getByText(BRAND_NOTE)).toHaveClass(
      'truncate',
      'text-[0.65rem]',
      'uppercase',
      'tracking-[0.18em]',
      'text-ink-400',
    )

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav).toHaveClass('hidden', 'xl:flex', 'xl:gap-8')
    expect(
      within(nav)
        .getAllByRole('link')
        .map((link) => link.textContent),
    ).toEqual(NAV_LINKS.map((link) => link.label))
    for (const link of within(nav).getAllByRole('link')) {
      expect(link).toHaveClass('uppercase', 'tracking-[0.05em]', 'text-ink-500')
    }
  })

  it('pairs the phone pill with a disclosure button and no dark-mode control', () => {
    const { container } = render(<Header lifted={false} />)

    const pill = screen.getAllByRole('link', { name: PHONE_DISPLAY })[0]!
    expect(pill).toHaveAttribute('href', PHONE_HREF)
    expect(container.querySelector('[data-dark-toggle]')).toBeNull()

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveClass('xl:hidden')
  })

  it('opens and closes the mobile panel, keeping the labels and the pill', () => {
    render(<Header lifted={false} />)

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const panel = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(panel).toHaveClass('border-t', 'border-ink-200')
    expect(within(panel).getAllByRole('link').length).toBeGreaterThanOrEqual(NAV_LINKS.length)
    expect(within(panel).getByRole('link', { name: PHONE_DISPLAY })).toHaveClass(
      'w-full',
      'justify-center',
    )

    const close = screen.getByRole('button', { name: 'Close menu' })
    expect(close).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(close)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).toBeNull()
  })

  it('closes the panel when a label inside it is used', () => {
    render(<Header lifted={false} />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const panel = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.click(within(panel).getByRole('link', { name: 'Meet Sam' }))

    expect(panel.isConnected).toBe(false)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('gains its shadow past the 50 px threshold and loses it again', () => {
    const { rerender } = render(<Header lifted={false} />)
    const header = document.querySelector('header') as HTMLElement
    expect(header).toHaveClass('sticky', 'top-0', 'bg-ink-50/95', 'backdrop-blur')
    expect(header).not.toHaveClass('shadow-lg')

    rerender(<Header lifted />)
    expect(document.querySelector('header')).toHaveClass('shadow-lg')
  })
})
