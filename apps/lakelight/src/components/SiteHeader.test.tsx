import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { SiteHeader } from './SiteHeader'

describe('SiteHeader', () => {
  it('renders the wordmark, the four links and the login pill', () => {
    render(<SiteHeader />)

    expect(screen.getByRole('link', { name: 'lakelight' })).toHaveAttribute('href', '#top')

    const nav = screen.getByRole('navigation', { name: 'Main' })
    const links = within(nav).getAllByRole('link')
    expect(links.map((link) => link.textContent)).toEqual([
      'Stays',
      'Experiences',
      'Guides',
      'List your place',
      'Log in',
    ])
    expect(screen.getByRole('link', { name: 'Stays' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Experiences' })).not.toHaveAttribute('aria-current')
  })

  it('sends every external link to the marketplace in a new tab', () => {
    render(<SiteHeader />)

    for (const name of ['Experiences', 'Guides', 'List your place', 'Log in']) {
      const link = screen.getByRole('link', { name })
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer noopener')
    }
    expect(screen.getByRole('link', { name: 'Stays' })).toHaveAttribute('href', '#stays')
  })

  it('opens the panel from the menu button and swaps its label', async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)

    const button = screen.getByRole('button', { name: 'Open menu' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-controls', 'lk-nav')

    await user.click(button)

    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByRole('navigation', { name: 'Main' }).closest('.lk-bar')).toHaveClass(
      'is-open',
    )
  })

  it('closes the panel when a link inside it is used', async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('link', { name: 'Guides' }))

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the panel from the login pill as well', async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('link', { name: 'Log in' }))

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
