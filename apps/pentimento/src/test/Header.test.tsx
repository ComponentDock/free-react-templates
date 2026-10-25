import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { Header } from '../components/Header'
import { THEME_KEY } from '../lib/theme'
import {
  installMedia,
  installMockIntersectionObserver,
  removeMockIntersectionObserver,
  setScroll,
} from './helpers'

beforeEach(() => {
  localStorage.clear()
  document.documentElement.classList.remove('dark')
})

afterEach(() => {
  removeMockIntersectionObserver()
})

describe('Header', () => {
  it('shows the six band labels and the enquiry action on desktop', () => {
    installMedia({ reduce: false })
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: 'Sections' })
    expect(nav).toHaveTextContent('Works')
    expect(nav).toHaveTextContent('Acquiring work')
    expect(nav.querySelectorAll('a')).toHaveLength(6)
    expect(screen.getAllByRole('link', { name: 'Enquire' })).toHaveLength(1)
  })

  it('takes the shadow past 50 px without changing its ground', () => {
    installMedia({ reduce: false })
    render(<Header />)
    const header = document.querySelector('header')

    expect(header).not.toHaveClass('shadow-lg')

    act(() => setScroll(120, 3000, 900))
    expect(header).toHaveClass('shadow-lg')
    expect(header).toHaveClass('sticky', 'bg-white/80')
  })

  it('switches theme, and remembers which one', async () => {
    const user = userEvent.setup()
    installMedia({ reduce: false })
    localStorage.setItem(THEME_KEY, 'light')
    render(<Header />)

    const toggle = screen.getByTestId('theme-toggle')
    expect(toggle).toHaveAccessibleName('Switch to the dark theme')

    await user.click(toggle)
    expect(document.documentElement).toHaveClass('dark')
    expect(localStorage.getItem(THEME_KEY)).toBe('dark')
    expect(toggle).toHaveAccessibleName('Switch to the light theme')

    await user.click(toggle)
    expect(document.documentElement).not.toHaveClass('dark')
    expect(toggle).toHaveAccessibleName('Switch to the dark theme')
  })

  it('opens and closes the mobile panel, closing on a chosen band', async () => {
    const user = userEvent.setup()
    installMedia({ reduce: false })
    render(<Header />)

    const trigger = screen.getByRole('button', { name: 'Open the menu' })
    expect(screen.queryByTestId('mobile-menu')).toBeNull()
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await user.click(trigger)
    const panel = screen.getByTestId('mobile-menu')
    expect(panel.querySelectorAll('a')).toHaveLength(7)
    expect(screen.getByRole('button', { name: 'Close the menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(within(panel).getByRole('link', { name: 'Exhibitions' }))
    expect(screen.queryByTestId('mobile-menu')).toBeNull()
  })

  it('closes the panel from its own enquiry action', async () => {
    const user = userEvent.setup()
    installMedia({ reduce: false })
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open the menu' }))
    const panel = screen.getByTestId('mobile-menu')

    await user.click(within(panel).getByRole('link', { name: 'Enquire' }))
    expect(screen.queryByTestId('mobile-menu')).toBeNull()
  })

  it('marks the band that is in view', () => {
    installMedia({ reduce: false })
    const io = installMockIntersectionObserver()
    const band = document.createElement('section')
    band.id = 'works'
    document.body.append(band)

    render(<Header />)
    const observer = io.observers.find((entry) => entry.observed.length > 0)
    expect(observer).toBeDefined()
    observer?.trigger([{ isIntersecting: true, target: band }])

    expect(screen.getByRole('link', { name: 'Works' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('link', { name: 'Exhibitions' })).not.toHaveAttribute('aria-current')

    band.remove()
  })
})
