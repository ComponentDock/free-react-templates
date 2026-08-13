import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows about text, newsletter, Instagram grid, socials, and Component Dock credit', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Instagram' })).toBeInTheDocument()

    for (const social of ['facebook', 'twitter', 'instagram', 'skype']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }

    expect(container.querySelectorAll('img')).toHaveLength(6)

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('submits the newsletter form without navigation and clears the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'hello@example.com')
    expect(input).toHaveValue('hello@example.com')

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('')
  })
})
