import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { CONTACT_INFO, FOOTER_COLUMNS, SOCIAL_LINKS } from '../data'

describe('Footer', () => {
  it('renders the brand, link columns, contact rows and social icons', () => {
    render(<Footer />)

    expect(screen.getByText('Stay', { selector: 'footer span.text-brand' })).toBeInTheDocument()
    expect(screen.getByText('Haven', { selector: 'footer span' })).toBeInTheDocument()

    for (const column of FOOTER_COLUMNS) {
      const nav = screen.getByRole('navigation', { name: column.title })
      for (const link of column.links) {
        expect(within(nav).getByRole('link', { name: link })).toHaveAttribute('href', '#home')
      }
    }

    for (const info of CONTACT_INFO) {
      expect(screen.getByText(info.value)).toBeInTheDocument()
    }

    for (const social of SOCIAL_LINKS) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('links to Component Dock and subscribes the newsletter without reloading', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const dock = screen.getByRole('link', { name: 'More templates at Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')

    const email = screen.getByLabelText('Email address')
    await user.type(email, 'guest@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe to newsletter' }))
    expect(email).toHaveValue('guest@example.com')
    expect(screen.getByRole('button', { name: 'Subscribe to newsletter' })).toBeInTheDocument()
  })
})
