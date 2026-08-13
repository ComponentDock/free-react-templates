import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import {
  componentDockLabel,
  componentDockUrl,
  footerColumns,
  newsletter,
  payments,
  socials,
} from '../data'

describe('Footer', () => {
  it('shows the three link columns and the newsletter widget', () => {
    render(<Footer />)
    for (const column of footerColumns) {
      const heading = screen.getByRole('heading', { name: column.title })
      for (const link of column.links) {
        expect(within(heading.parentElement!).getByRole('link', { name: link })).toBeInTheDocument()
      }
    }
    expect(screen.getByRole('heading', { name: newsletter.title })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: newsletter.inputLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: newsletter.buttonLabel })).toBeInTheDocument()
  })

  it('shows round brand-colored social icon links with accessible names', () => {
    const { container } = render(<Footer />)
    for (const social of socials) {
      expect(screen.getByRole('link', { name: social.name })).toBeInTheDocument()
    }
    const circles = container.querySelectorAll('a[aria-label]')
    expect(circles.length).toBeGreaterThanOrEqual(socials.length)
  })

  it('links Component Dock in the bottom bar with payments', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: componentDockLabel })
    expect(dock).toHaveAttribute('href', componentDockUrl)
    for (const payment of payments) {
      expect(screen.getByText(payment)).toBeInTheDocument()
    }
  })

  it('shows a validation error for an empty or invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: newsletter.buttonLabel }))
    expect(screen.getByRole('alert')).toHaveTextContent(newsletter.emptyMessage)
    await user.type(screen.getByRole('textbox', { name: newsletter.inputLabel }), 'nope')
    await user.click(screen.getByRole('button', { name: newsletter.buttonLabel }))
    expect(screen.getByRole('alert')).toHaveTextContent(newsletter.invalidMessage)
  })

  it('shows a success state for a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(
      screen.getByRole('textbox', { name: newsletter.inputLabel }),
      'jane@example.com',
    )
    await user.click(screen.getByRole('button', { name: newsletter.buttonLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(newsletter.successMessage)
  })

  it('clears the error while typing after a failed submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: newsletter.buttonLabel }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
    await user.type(screen.getByRole('textbox', { name: newsletter.inputLabel }), 'a')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
