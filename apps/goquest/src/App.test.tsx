import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('GoQuest — Travel & Tour Booking Template')
  })

  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the hero headline', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Find your Next tour/i }),
    ).toBeInTheDocument()
  })

  it('toggles mobile menu via Navbar', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuBtn = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuBtn)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileHomeLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(mobileHomeLinks[mobileHomeLinks.length - 1]!)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
