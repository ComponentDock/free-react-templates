import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  footerColumns,
  footerCreditBy,
  footerSocials,
  newsletterEmailLabel,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  newsletterSuccess,
  newsletterTitle,
} from '../data'

describe('Footer', () => {
  it('renders the four link columns, newsletter widget and bottom row', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    for (const column of footerColumns) {
      expect(screen.getByRole('navigation', { name: column.title })).toBeInTheDocument()
      for (const link of column.links) {
        expect(screen.getAllByText(link).length).toBeGreaterThan(0)
      }
    }

    expect(screen.getByRole('heading', { level: 2, name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: newsletterSubmitLabel })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: newsletterEmailLabel })).toHaveAttribute(
      'placeholder',
      newsletterPlaceholder,
    )

    expect(
      screen.getByText(
        new RegExp(
          `Copyright © \\d{4} All rights reserved \\| This template is made with ${footerCreditBy}`,
        ),
      ),
    ).toBeInTheDocument()
    for (const name of footerSocials) {
      expect(screen.getByRole('link', { name: `Visit our ${name} page` })).toBeInTheDocument()
    }
    // The gradient newsletter button is the only gradient element.
    const button = container.querySelector('button')!
    expect(button.getAttribute('class')).toContain('linear-gradient')
  })

  it('shows an error for an invalid email and does not submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByRole('textbox', { name: newsletterEmailLabel }), 'not-an-email')
    await user.click(screen.getByRole('button', { name: newsletterSubmitLabel }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')
    expect(screen.getByRole('textbox', { name: newsletterEmailLabel })).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('swaps to a success message after a valid submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(
      screen.getByRole('textbox', { name: newsletterEmailLabel }),
      'student@example.com',
    )
    await user.click(screen.getByRole('button', { name: newsletterSubmitLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(newsletterSuccess)
    expect(screen.queryByRole('textbox', { name: newsletterEmailLabel })).not.toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
