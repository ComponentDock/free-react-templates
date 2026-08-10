import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { categories, footerLinks, footerTags, siteName } from '../data'

function setup() {
  const user = userEvent.setup()
  return { user }
}

describe('Footer', () => {
  it('renders the brand widget with wordmark, blurb and social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: new RegExp(siteName) })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Facebook' }).length).toBeGreaterThan(0)
  })

  it('renders the categories, tags and newsletter widgets', async () => {
    const { user } = setup()
    render(<Footer />)
    for (const category of categories) {
      expect(screen.getAllByText(new RegExp(category.name)).length).toBeGreaterThan(0)
    }
    for (const tag of footerTags) {
      expect(screen.getAllByRole('link', { name: tag }).length).toBeGreaterThan(0)
    }
    const input = screen.getByRole('textbox', { name: /email/i })
    expect(input).toBeInTheDocument()
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('reader@example.com')
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders the bottom bar with footer links and the copyright line', () => {
    render(<Footer />)
    for (const link of footerLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument()
  })
})
