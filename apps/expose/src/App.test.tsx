import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { NAV_LINKS, PHOTOS, SOCIAL_LINKS } from './data'

describe('App', () => {
  it('sets the document title to the Expose photography portfolio', () => {
    render(<App />)

    expect(document.title).toBe('Expose — Photography Portfolio')
  })

  it('composes the sections in order: sidebar header → photo grid → footer', () => {
    const { container } = render(<App />)

    const sidebar = screen.getByRole('banner', { hidden: true })
    expect(sidebar).toBeInTheDocument()

    const gallery = screen.getByRole('region', { name: 'Photo gallery' })
    expect(gallery.querySelectorAll('img')).toHaveLength(PHOTOS.length)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()

    // Sidebar comes before the gallery, which comes before the footer.
    expect(
      container.compareDocumentPosition(gallery) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(
      container.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(
      container.compareDocumentPosition(sidebar) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })

  it('renders the desktop sidebar nav and social links', () => {
    render(<App />)

    for (const link of NAV_LINKS) {
      expect(screen.getByRole('link', { name: link.label, hidden: true })).toBeInTheDocument()
    }
    for (const { label } of SOCIAL_LINKS) {
      expect(screen.getByRole('link', { name: label, hidden: true })).toBeInTheDocument()
    }
  })

  it('opens the mobile navigation from the top bar', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const panel = screen.getByRole('dialog', { name: 'Mobile navigation' })
    expect(within(panel).getByRole('link', { name: 'Home' })).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
