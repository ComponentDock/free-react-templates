import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { footer, phoneHref, socials, topBar } from '../data'

describe('Footer', () => {
  it('renders the four widgets on a black background', () => {
    render(<Footer />)
    const contentinfo = screen.getByRole('contentinfo')
    expect(contentinfo.className).toContain('bg-black')
    expect(screen.getByRole('heading', { name: footer.questionsHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: footer.linksHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: footer.recentBlogHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: footer.newsletterHeading })).toBeInTheDocument()
  })

  it('shows contact details with tel/mailto hrefs and the social icons', () => {
    render(<Footer />)
    expect(screen.getByText(topBar.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: topBar.phone })).toHaveAttribute('href', phoneHref)
    expect(screen.getByRole('link', { name: topBar.email })).toHaveAttribute(
      'href',
      `mailto:${topBar.email}`,
    )
    for (const social of socials) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('lists the Links and Recent Blog widgets', () => {
    render(<Footer />)
    for (const link of footer.links) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getAllByText(footer.recentBlog[0]!.title)).toHaveLength(2)
    expect(screen.getAllByText(footer.recentBlog[0]!.meta)).toHaveLength(2)
  })

  it('subscribes and replaces the newsletter input with a confirmation', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText(footer.newsletterSuccess)).toBeInTheDocument()
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('renders the copyright bar with the Component Dock credit link', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: /Component Dock/i })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
