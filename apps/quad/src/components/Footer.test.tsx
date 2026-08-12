import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four link columns with white headings', () => {
    render(<Footer />)

    const headings = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent)
    expect(headings).toEqual(['Top Products', 'Quick Links', 'Features', 'Resources', 'Newsletter'])

    expect(screen.getByRole('link', { name: 'Managed Website' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Jobs' })).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Guides' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Agencies' })).toBeInTheDocument()
  })

  it('shows the newsletter blurb, email input and subscribe button', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const newsletter = screen.getByText(/You can trust us\. we only send promo offers/)
    expect(newsletter).toBeInTheDocument()

    const input = screen.getByLabelText('Your Email Address')
    const subscribe = screen.getByRole('button', { name: /subscribe/ })
    expect(subscribe).toHaveClass('bg-accent')

    await user.type(input, 'ada@example.com')
    await user.click(subscribe)

    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
    expect(input).toHaveValue('')
  })

  it('links the credit line to Component Dock and renders the social icons', () => {
    render(<Footer />)

    const credit = screen.getByText(/Copyright ©2026 All rights reserved/)
    expect(within(credit).getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Linkedin' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
  })
})
