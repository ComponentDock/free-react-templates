import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { SidebarContent } from './SidebarContent'
import {
  brandName,
  creditBrand,
  newsletterLabel,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  newsletterSuccess,
  navLinks,
} from '../data'

describe('SidebarContent', () => {
  it('renders the brand logo, vertical nav with active Home link, and the credit line', () => {
    render(<SidebarContent />)

    const heading = screen.getByRole('heading', { level: 1, name: brandName })
    expect(heading.querySelector('a')).toHaveAttribute('href', '#top')

    const nav = screen.getByRole('navigation', { name: 'Main' })
    for (const link of navLinks) {
      expect(within(nav).getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')

    expect(screen.getByText(/Copyright © \d{4} All rights reserved/)).toHaveTextContent(
      `by ${creditBrand}`,
    )
  })

  it('shows a confirmation message when the newsletter is submitted', async () => {
    const user = userEvent.setup()
    render(<SidebarContent />)

    const input = screen.getByLabelText(newsletterLabel)
    expect(input).toHaveAttribute('placeholder', newsletterPlaceholder)

    await user.type(input, 'ada@example.com')
    await user.click(screen.getByRole('button', { name: newsletterSubmitLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(newsletterSuccess)
    expect(screen.queryByLabelText(newsletterLabel)).not.toBeInTheDocument()
  })
})
