import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CookieBanner } from './CookieBanner'
import {
  cookieAcceptLabel,
  cookieDeclineLabel,
  cookieStorageKey,
  cookieText,
  cookieTitle,
} from '../data'

describe('CookieBanner', () => {
  beforeEach(() => {
    window.localStorage.removeItem(cookieStorageKey)
  })

  it('renders the banner with title, text, and both actions when no choice is stored', () => {
    render(<CookieBanner />)
    expect(screen.getByText(cookieTitle)).toBeInTheDocument()
    expect(screen.getByText(cookieText)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: cookieAcceptLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: cookieDeclineLabel })).toBeInTheDocument()
  })

  it('does not render when a consent choice is already stored', () => {
    window.localStorage.setItem(cookieStorageKey, 'accepted')
    render(<CookieBanner />)
    expect(screen.queryByText(cookieTitle)).not.toBeInTheDocument()
  })

  it('dismisses the banner and persists the choice on Accept All', async () => {
    const user = userEvent.setup()
    render(<CookieBanner />)

    await user.click(screen.getByRole('button', { name: cookieAcceptLabel }))
    expect(window.localStorage.getItem(cookieStorageKey)).toBe('accepted')
    expect(screen.queryByText(cookieTitle)).not.toBeInTheDocument()
  })

  it('dismisses the banner and persists the choice on Decline', async () => {
    const user = userEvent.setup()
    render(<CookieBanner />)

    await user.click(screen.getByRole('button', { name: cookieDeclineLabel }))
    expect(window.localStorage.getItem(cookieStorageKey)).toBe('declined')
    expect(screen.queryByText(cookieTitle)).not.toBeInTheDocument()
  })
})
