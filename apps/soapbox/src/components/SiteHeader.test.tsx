import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { MENU_LABEL, NAV_ID, NAV_LINKS, TICKETS, WORDMARK_HREF } from '../data/site'
import { SiteHeader } from './SiteHeader'

const header = () => screen.getByRole('banner')

describe('SiteHeader', () => {
  it('renders the wordmark, the four links and the Tickets pill', () => {
    render(<SiteHeader />)

    expect(screen.getByRole('link', { name: 'soapbox' })).toHaveAttribute('href', WORDMARK_HREF)
    expect(screen.getByRole('navigation', { name: 'Main' })).toHaveAttribute('id', NAV_ID)

    for (const link of NAV_LINKS) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }

    expect(screen.getByRole('link', { name: TICKETS.label })).toHaveAttribute('href', TICKETS.href)
  })

  it('marks the current page and leaves the other links unmarked', () => {
    render(<SiteHeader />)

    expect(screen.getByRole('link', { name: 'Schedule' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Venue' })).not.toHaveAttribute('aria-current')
  })

  it('starts with the menu collapsed', () => {
    render(<SiteHeader />)

    const button = screen.getByRole('button', { name: MENU_LABEL.open })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-controls', NAV_ID)
    expect(header()).toHaveClass('sp-bar', 'is-enhanced')
    expect(header()).not.toHaveClass('is-open')
  })

  it('opens and closes the panel from the button', async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)

    await user.click(screen.getByRole('button', { name: MENU_LABEL.open }))
    expect(screen.getByRole('button', { name: MENU_LABEL.close })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(header()).toHaveClass('is-open')

    await user.click(screen.getByRole('button', { name: MENU_LABEL.close }))
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
    await user.click(screen.getByRole('link', { name: 'Venue' }))

    expect(screen.getByRole('button', { name: MENU_LABEL.open })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the panel on Escape and on an outside press', async () => {
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

    await user.click(screen.getByRole('button', { name: MENU_LABEL.open }))
    await user.click(screen.getByText('elsewhere'))
    expect(header()).not.toHaveClass('is-open')
  })
})
