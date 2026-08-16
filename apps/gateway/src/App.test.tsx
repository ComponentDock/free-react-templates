import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title and composes launch section + footer', () => {
    render(<App />)

    expect(document.title).toBe('Gateway — Signup Form Modal')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent('Gateway')
    expect(within(main).getByRole('button', { name: /launch/i })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    // Modal is closed initially — not in the DOM.
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens the signup modal when the launch button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch/i }))

    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    expect(
      within(dialog).getByRole('heading', { name: /create your account/i }),
    ).toBeInTheDocument()

    // Closing the modal removes it from the DOM again.
    await user.click(within(dialog).getByRole('button', { name: /^close$/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
