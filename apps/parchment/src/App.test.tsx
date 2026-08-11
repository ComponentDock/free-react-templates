import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import {
  closeSearchLabel,
  documentTitle,
  menuCloseLabel,
  menuOpenLabel,
  openSearchLabel,
  popularHeading,
  searchHint,
  skipLabel,
} from './data'

describe('App', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe(documentTitle)
  })

  it('composes all sections with proper landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: skipLabel })).toBeInTheDocument()

    expect(screen.getByRole('region', { name: 'Featured posts' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Latest entries' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: popularHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Parchment' })).toBeInTheDocument()
  })

  it('opens and closes the mobile navigation from the header', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    expect(screen.getByRole('button', { name: menuCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    // "Lifestyle" appears in the desktop dropdown, the mobile panel, the
    // s-extra categories list, and three entry-card category labels.
    const lifestyleLinks = () => screen.getAllByRole('link', { name: 'Lifestyle' }).length
    const before = lifestyleLinks()
    expect(screen.getAllByRole('navigation', { name: 'Main navigation' })).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(lifestyleLinks()).toBe(before - 1)
    expect(screen.getAllByRole('navigation', { name: 'Main navigation' })).toHaveLength(1)
  })

  it('opens the search overlay from the header and closes it', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: openSearchLabel }))
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByText(searchHint)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: closeSearchLabel }))
    expect(screen.queryByRole('search')).not.toBeInTheDocument()
  })
})
