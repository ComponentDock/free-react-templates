import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialIcons } from './SocialIcons'

describe('SocialIcons', () => {
  it('renders a social link for every platform with an accessible name', () => {
    render(<SocialIcons />)

    expect(screen.getByRole('link', { name: 'Pinterest' })).toHaveAttribute(
      'href',
      'https://pinterest.com',
    )
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://facebook.com',
    )
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('href', 'https://x.com')
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'href',
      'https://instagram.com',
    )
  })
})
