import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { FREE_QUOTE_LABEL, TOP_EMAIL, TOP_PHONE } from '../data'

describe('TopBar', () => {
  it('shows the phone and email with contact links', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: TOP_PHONE })).toHaveAttribute(
      'href',
      'tel:+880278367367',
    )
    expect(screen.getByRole('link', { name: TOP_EMAIL })).toHaveAttribute(
      'href',
      `mailto:${TOP_EMAIL}`,
    )
  })

  it('shows the red Free Quote button linking to the contact section', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: FREE_QUOTE_LABEL })).toHaveAttribute('href', '#contact')
  })
})
