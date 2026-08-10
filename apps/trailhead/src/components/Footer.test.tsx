import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  aboutHeading,
  aboutText,
  connectHeading,
  footerCopyright,
  footerCredit,
  quickMenuHeading,
  quickMenuLeft,
  quickMenuRight,
  socialLabels,
  socialLinks,
  subscribeConfirmation,
  subscribeHeading,
  subscribeLabel,
  subscribePlaceholder,
  subscribeText,
} from '../data'

describe('Footer', () => {
  it('renders About Us, Quick Menu, Subscribe and Connect With Us blocks', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: aboutHeading })).toBeInTheDocument()
    expect(screen.getByText(aboutText)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: quickMenuHeading })).toBeInTheDocument()
    for (const label of [...quickMenuLeft, ...quickMenuRight]) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: subscribeHeading })).toBeInTheDocument()
    expect(screen.getByText(subscribeText)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(subscribePlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: subscribeLabel })).toBeInTheDocument()
    expect(screen.getByText(connectHeading)).toBeInTheDocument()
    for (const name of socialLinks) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
  })

  it('subscribes via the form and shows a confirmation', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByPlaceholderText(subscribePlaceholder)
    await user.type(input, 'hiker@example.com')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(subscribeConfirmation)
  })

  it('renders the copyright bar with the current year', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(screen.getByText(footerCopyright(year))).toBeInTheDocument()
    expect(screen.getByText(footerCredit)).toBeInTheDocument()
  })
})
