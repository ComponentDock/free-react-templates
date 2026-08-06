import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, sections, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Launch — App Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Promote Your Products/)

    expect(
      screen.getByRole('heading', { level: 2, name: /Simple, Transparent Pricing/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Advantage of using our products/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Our Customers Feedback/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /About Us/ })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Start a Conversation/ }),
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('opens and closes the auth modal from the navbar', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Sign in' }))
    expect(screen.getByRole('dialog', { name: /Sign in or Sign up/ })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close sign-in modal' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
