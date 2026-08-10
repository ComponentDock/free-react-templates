import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { footerAbout, instaImages } from '../data'

describe('Footer', () => {
  it('renders About Us, Newsletter, Instagram Feed and Follow Us columns', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(within(footer).getByText(footerAbout)).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Instagram Feed' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
    expect(within(footer).getByRole('list', { name: 'Footer social links' })).toBeInTheDocument()
  })

  it('renders every Instagram image', () => {
    render(<Footer />)
    for (const image of instaImages) {
      expect(screen.getByRole('link', { name: image.alt })).toBeInTheDocument()
    }
  })

  it('shows a per-field error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
  })

  it('shows a success message for a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
  })

  it('clears the error as soon as the user edits the email again', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'bad')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
    await user.type(input, '@ok.com')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
