import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { NAV_LINKS } from '../data/site'
import { SiteHeader } from './SiteHeader'

const menuButton = () => screen.getByRole('button', { name: 'Open menu' })

describe('SiteHeader', () => {
  it('carries the wordmark, a labelled nav and one link per entry', () => {
    render(<SiteHeader />)

    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Alpenglow' })).toHaveAttribute('href', '#top')

    const links = screen.getAllByRole('link').filter((link) => link.classList.contains('ap-link'))
    expect(links).toHaveLength(NAV_LINKS.length)
    expect(links.map((link) => link.textContent)).toEqual(NAV_LINKS.map((link) => link.label))
  })

  it('marks exactly one link as the current page', () => {
    render(<SiteHeader />)

    const current = screen.getAllByRole('link').filter((link) => link.getAttribute('aria-current'))
    expect(current).toHaveLength(1)
    expect(current[0]).toHaveAttribute('aria-current', 'page')
    expect(current[0]).toHaveTextContent('Films')
  })

  it('opens the panel and swaps the button label and glyph', async () => {
    const user = userEvent.setup()
    const { container } = render(<SiteHeader />)

    expect(menuButton()).toHaveAttribute('aria-expanded', 'false')
    expect(container.querySelector('.ap-bar')).not.toHaveClass('is-open')

    await user.click(menuButton())

    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(container.querySelector('.ap-bar')).toHaveClass('is-open')
  })

  it('closes the panel when a link inside it is followed', async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)

    await user.click(menuButton())
    await user.click(screen.getByRole('link', { name: 'Expeditions' }))

    expect(menuButton()).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the two marketplace links in a new tab and leaves the in-page ones alone', () => {
    render(<SiteHeader />)

    const collection = screen.getByRole('link', { name: 'Collection' })
    const expeditions = screen.getByRole('link', { name: 'Expeditions' })

    for (const external of [collection, screen.getByRole('link', { name: 'Journal' })]) {
      expect(external).toHaveAttribute('target', '_blank')
      expect(external).toHaveAttribute('rel', 'noreferrer noopener')
      expect(external).toHaveAttribute('href', 'https://www.componentdock.com/')
    }

    expect(expeditions).not.toHaveAttribute('target')
    expect(expeditions).toHaveAttribute('href', '#chapters')
  })
})
