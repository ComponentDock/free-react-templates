import { act, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { App } from '../App'
import { Header } from '../components/Header'
import { nav } from '../content'
import { setScroll } from './helpers'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Header', () => {
  it('lays out the eight labels, the CTA and the hamburger', () => {
    render(<Header />)

    const primaryNav = screen.getByRole('navigation', { name: 'Sections' })
    expect(within(primaryNav).getAllByRole('link')).toHaveLength(8)
    nav.forEach((item) => {
      expect(within(primaryNav).getByRole('link', { name: item.label })).toHaveAttribute(
        'href',
        item.target,
      )
    })

    expect(screen.getByRole('link', { name: 'Book a site visit' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getByLabelText('Hedgerow home')).toHaveAttribute('href', '#top')
    expect(screen.queryByRole('button', { name: /theme|dark/i })).toBeNull()
  })

  it('opens and closes the mobile disclosure', () => {
    render(<Header />)

    const panel = document.getElementById('mobile-menu')
    expect(panel).toHaveAttribute('hidden')

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(panel).not.toHaveAttribute('hidden')
    expect(within(panel as HTMLElement).getAllByRole('link')).toHaveLength(9)

    fireEvent.click(within(panel as HTMLElement).getByRole('link', { name: 'Planting' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(panel).toHaveAttribute('hidden')

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const panelCta = within(panel as HTMLElement).getByRole('link', { name: 'Book a site visit' })
    expect(panelCta).toHaveAttribute('href', '#contact')
    fireEvent.click(panelCta)
    expect(panel).toHaveAttribute('hidden')
  })

  it('gains its shadow past 50 px of scroll', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('[data-header]')

    expect(header).not.toHaveClass('shadow-lg')

    act(() => setScroll(120, 4000, 800))
    expect(header).toHaveClass('shadow-lg')

    act(() => setScroll(0, 4000, 800))
    expect(header).not.toHaveClass('shadow-lg')
  })

  it('lights the first label for whichever band has crossed the reading line', () => {
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function (
      this: Element,
    ) {
      const top = this.id === 'work' ? 120 : 2400
      return {
        top,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      } as DOMRect
    })

    render(<App />)

    const primaryNav = screen.getByRole('navigation', { name: 'Sections' })

    act(() => setScroll(600, 9000, 800))
    expect(within(primaryNav).getByRole('link', { name: 'Recent gardens' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(within(primaryNav).getByRole('link', { name: 'Planting' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('leaves every label plain when no band has crossed the line', () => {
    render(<Header />)

    const primaryNav = screen.getByRole('navigation', { name: 'Sections' })
    nav.forEach((item) => {
      expect(
        within(primaryNav).getByRole('link', { name: item.label }),
      ).not.toHaveAttribute('aria-current')
    })
  })
})
