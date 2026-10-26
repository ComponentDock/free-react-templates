import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SiteHeader } from './SiteHeader'
import { BRAND, LOGIN, MENU_LABEL, NAV_LINKS } from '../data/hero'

describe('SiteHeader', () => {
  it('renders a wordmark, four links, a log-in and one menu button', () => {
    const { container } = render(<SiteHeader />)

    expect(container.querySelectorAll('header')).toHaveLength(1)
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(NAV_LINKS.length + 2)
    expect(screen.getByRole('button', { name: MENU_LABEL.open })).toBeInTheDocument()
    expect(screen.getByText(BRAND)).toBeInTheDocument()
    expect(screen.getByText(LOGIN.label)).toBeInTheDocument()
  })

  it('marks exactly one link as the current page and gives every anchor a real target', () => {
    render(<SiteHeader />)

    const current = document.querySelectorAll('[aria-current="page"]')
    expect(current).toHaveLength(1)
    expect(current[0]).toHaveTextContent('Product')

    for (const link of screen.getAllByRole('link')) {
      expect(link.getAttribute('href')).not.toBe('#')
      expect(link.getAttribute('href')).not.toBe('')
    }
  })

  it('is enhanced from the first render, so the stylesheet’s menu branch applies', () => {
    const { container } = render(<SiteHeader />)

    expect(container.querySelector('header')).toHaveClass('is-enhanced')
    expect(container.querySelector('header')).not.toHaveClass('is-open')
  })

  it('opens on the button, flipping aria-expanded and the label', async () => {
    const user = userEvent.setup()
    const { container } = render(<SiteHeader />)
    const button = screen.getByRole('button', { name: MENU_LABEL.open })

    expect(button).toHaveAttribute('aria-expanded', 'false')

    await user.click(button)

    expect(screen.getByRole('button', { name: MENU_LABEL.close })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(container.querySelector('header')).toHaveClass('is-open')
    expect(screen.getByRole('button')).toHaveAttribute('aria-controls', 'site-nav')
  })

  it('closes on a nav link click', async () => {
    const user = userEvent.setup()
    const { container } = render(<SiteHeader />)

    await user.click(screen.getByRole('button', { name: MENU_LABEL.open }))
    fireEvent.click(screen.getByRole('link', { name: NAV_LINKS[1]!.label }))

    expect(container.querySelector('header')).not.toHaveClass('is-open')
    expect(screen.getByRole('button', { name: MENU_LABEL.open })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes on Escape and returns focus to the button', async () => {
    const user = userEvent.setup()
    const { container } = render(<SiteHeader />)

    await user.click(screen.getByRole('button', { name: MENU_LABEL.open }))
    await user.keyboard('{Escape}')

    expect(container.querySelector('header')).not.toHaveClass('is-open')
    expect(document.activeElement).toBe(screen.getByRole('button', { name: MENU_LABEL.open }))
  })

  it('closes on a press outside the bar', async () => {
    const user = userEvent.setup()
    const { container } = render(<SiteHeader />)

    await user.click(screen.getByRole('button', { name: MENU_LABEL.open }))
    fireEvent.mouseDown(document.body)

    expect(container.querySelector('header')).not.toHaveClass('is-open')
  })
})
