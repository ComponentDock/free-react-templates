import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  aboutBlurb,
  aboutTitle,
  authorName,
  copyright,
  emailError,
  emailPlaceholder,
  latestPosts,
  latestTitle,
  newsletterTitle,
  socialLabel,
  subscribeLabel,
  subscribeSuccess,
} from '../data'

describe('Footer', () => {
  it('renders the three columns and the copyright bar', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: aboutTitle })).toBeInTheDocument()
    expect(screen.getByText(authorName)).toBeInTheDocument()
    expect(screen.getByText(aboutBlurb)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: latestTitle })).toBeInTheDocument()
    for (const post of latestPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
    // Every latest-post row shares the same date.
    expect(screen.getAllByText(latestPosts[0]!.date)).toHaveLength(latestPosts.length)

    expect(screen.getByRole('heading', { name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByText(copyright)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: socialLabel('Facebook') })).toBeInTheDocument()
  })

  it('shows an error for an invalid email and a confirmation for a valid one', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText(emailPlaceholder)
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))
    expect(screen.getByRole('alert')).toHaveTextContent(emailError)

    await user.clear(input)
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(subscribeSuccess)
    // The form unmounts once subscribed.
    expect(screen.queryByLabelText(emailPlaceholder)).not.toBeInTheDocument()
  })
})
