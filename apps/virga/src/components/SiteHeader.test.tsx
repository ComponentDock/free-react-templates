import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  BRAND,
  MENU_LABEL,
  NAV_ID,
  NAV_LINKS,
  SIGN_IN,
  DEPLOY_NOW,
  WORDMARK_HREF,
} from '../data/site'
import { SiteHeader } from './SiteHeader'

const header = () => screen.getByRole('banner')

describe('SiteHeader', () => {
  it('renders the gradient wordmark, four links and the two end controls', () => {
    render(<SiteHeader />)

    const logo = screen.getByRole('link', { name: new RegExp(BRAND.name, 'i') })
    expect(logo).toHaveAttribute('href', WORDMARK_HREF)
    expect(logo).toHaveTextContent(BRAND.name)
    expect(logo.querySelectorAll('svg')).toHaveLength(1)
    expect(logo.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')

    expect(screen.getByRole('navigation', { name: 'Main' })).toHaveAttribute('id', NAV_ID)

    for (const link of NAV_LINKS) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }

    expect(screen.getByRole('link', { name: SIGN_IN.label })).toHaveAttribute('href', SIGN_IN.href)
    expect(screen.getByRole('link', { name: DEPLOY_NOW.label })).toHaveAttribute(
      'href',
      DEPLOY_NOW.href,
    )
  })

  it('opens outbound links in a new tab and leaves the internal ones in place', () => {
    render(<SiteHeader />)

    const docs = screen.getByRole('link', { name: 'Docs' })
    expect(docs).toHaveAttribute('target', '_blank')
    expect(docs).toHaveAttribute('rel', 'noreferrer noopener')

    const platform = screen.getByRole('link', { name: 'Platform' })
    expect(platform).not.toHaveAttribute('target')
    expect(platform).not.toHaveAttribute('rel')
  })

  it('marks exactly one link as the current page', () => {
    render(<SiteHeader />)

    const current = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('aria-current') === 'page')

    expect(current).toHaveLength(1)
    expect(current[0]).toHaveTextContent('Platform')
  })

  it('starts collapsed, with the three-line glyph and no open class', () => {
    render(<SiteHeader />)

    const button = screen.getByRole('button', { name: MENU_LABEL.open })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-controls', NAV_ID)
    expect(button.querySelectorAll('svg')).toHaveLength(1)
    expect(header()).toHaveClass('vg-bar', 'is-enhanced')
    expect(header()).not.toHaveClass('is-open')
  })

  it('swaps the glyph and the label when the panel opens and closes', async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)

    await user.click(screen.getByRole('button', { name: MENU_LABEL.open }))
    const closeButton = screen.getByRole('button', { name: MENU_LABEL.close })
    expect(closeButton).toHaveAttribute('aria-expanded', 'true')
    expect(header()).toHaveClass('is-open')

    await user.click(closeButton)
    expect(screen.getByRole('button', { name: MENU_LABEL.open })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(header()).not.toHaveClass('is-open')
  })

  it('closes the panel when a link inside it is used', async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)

    await user.click(screen.getByRole('button', { name: MENU_LABEL.open }))
    await user.click(screen.getByRole('link', { name: 'Network' }))

    expect(screen.getByRole('button', { name: MENU_LABEL.open })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes on Escape, returns focus to the button and ignores outside presses on the bar', async () => {
    const user = userEvent.setup()
    render(
      <>
        <SiteHeader />
        <p>elsewhere</p>
      </>,
    )

    await user.click(screen.getByRole('button', { name: MENU_LABEL.open }))
    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: MENU_LABEL.open })).toHaveFocus()
    expect(header()).not.toHaveClass('is-open')

    await user.click(screen.getByRole('button', { name: MENU_LABEL.open }))
    await user.click(header())
    expect(header()).toHaveClass('is-open')

    await user.click(screen.getByText('elsewhere'))
    expect(header()).not.toHaveClass('is-open')
  })
})
