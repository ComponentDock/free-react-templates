import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  componentDockLabel,
  componentDockUrl,
  footerCredit,
  footerNavItems,
  siteName,
  socialItems,
  subscribeButtonLabel,
  subscribeLabel,
  subscribeSuccess,
} from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo, nav links, subscribe form, social icons, and copyright bar', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: new RegExp(siteName) })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Footer navigation' })
    for (const item of footerNavItems) {
      expect(within(nav).getByRole('link', { name: item.label })).toBeInTheDocument()
    }

    expect(screen.getByRole('textbox', { name: subscribeLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: subscribeButtonLabel })).toBeInTheDocument()

    for (const item of socialItems) {
      expect(screen.getByRole('link', { name: item.name })).toBeInTheDocument()
    }

    const credit = screen.getByText(new RegExp(footerCredit(new Date().getFullYear())))
    expect(credit).toBeInTheDocument()
    const link = screen.getByRole('link', { name: componentDockLabel })
    expect(link).toHaveAttribute('href', componentDockUrl)
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows a success message after subscribing', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByRole('textbox', { name: subscribeLabel }), 'a@b.com')
    await user.click(screen.getByRole('button', { name: subscribeButtonLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(subscribeSuccess)
    expect(screen.queryByRole('textbox', { name: subscribeLabel })).not.toBeInTheDocument()
  })
})
