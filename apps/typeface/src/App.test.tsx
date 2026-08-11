import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import {
  documentTitle,
  latestHeading,
  menuCloseLabel,
  menuOpenLabel,
  popularHeading,
  siteName,
  skipLabel,
} from './data'

describe('App', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe(documentTitle)
  })

  it('renders all page sections with landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: siteName })).toBeInTheDocument()
    expect(screen.getByText(latestHeading)).toBeInTheDocument()
    expect(screen.getByText(popularHeading)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: skipLabel })).toBeInTheDocument()
  })

  it('opens and closes the mobile navigation via the hamburger', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: menuOpenLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(screen.getByRole('button', { name: menuCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    // The mobile collapse adds a second copy of the dropdown children.
    expect(screen.getAllByRole('link', { name: 'Asia' })).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.getByRole('button', { name: menuOpenLabel })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getAllByRole('link', { name: 'Asia' })).toHaveLength(1)
  })
})
