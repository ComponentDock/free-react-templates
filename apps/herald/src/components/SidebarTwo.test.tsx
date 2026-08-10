import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SidebarTwo } from './SidebarTwo'
import {
  articlesByAuthorTitle,
  authors,
  bannerCardBlurb,
  bannerCardTitle,
  mostRead,
  mostReadTitle,
  newsletterBlurb,
  newsletterError,
  newsletterPlaceholder,
  readMoreLabel,
  reporterRole,
  subscribeLabel,
} from '../data'

describe('SidebarTwo', () => {
  it('shows the MOST READ list with six items', () => {
    render(<SidebarTwo />)
    expect(screen.getByRole('heading', { name: mostReadTitle })).toBeInTheDocument()
    for (const item of mostRead) {
      expect(screen.getByRole('img', { name: item.headline })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: item.headline })).toBeInTheDocument()
    }
  })

  it('shows ARTICLES BY AUTHOR with four avatars, names and the Reporter role', () => {
    render(<SidebarTwo />)
    expect(screen.getByRole('heading', { name: articlesByAuthorTitle })).toBeInTheDocument()
    for (const author of authors) {
      expect(screen.getByRole('img', { name: author.name })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: author.name })).toBeInTheDocument()
    }
    expect(screen.getAllByText(reporterRole)).toHaveLength(authors.length)
  })

  it('shows the photo banner card with title, blurb and READ MORE button', () => {
    render(<SidebarTwo />)
    expect(screen.getByRole('heading', { name: bannerCardTitle })).toBeInTheDocument()
    expect(screen.getByText(bannerCardBlurb)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: readMoreLabel })).toBeInTheDocument()
  })

  it('shows the NEWSLETTER card with portrait, email input and subscribe button', () => {
    render(<SidebarTwo />)
    expect(screen.getByRole('heading', { name: 'NEWSLETTER' })).toBeInTheDocument()
    expect(screen.getByText(newsletterBlurb)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'NEWSLETTER' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(newsletterPlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: subscribeLabel })).toBeInTheDocument()
  })

  it('rejects an invalid email with a validation error', async () => {
    const user = userEvent.setup()
    render(<SidebarTwo />)
    await user.type(screen.getByPlaceholderText(newsletterPlaceholder), 'not-an-email')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))
    expect(screen.getByRole('alert')).toHaveTextContent(newsletterError)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('subscribes with a valid email and shows the confirmation', async () => {
    const user = userEvent.setup()
    render(<SidebarTwo />)
    const input = screen.getByPlaceholderText(newsletterPlaceholder)
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))
    expect(screen.getByRole('status')).toHaveTextContent('Thank you for subscribing!')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
