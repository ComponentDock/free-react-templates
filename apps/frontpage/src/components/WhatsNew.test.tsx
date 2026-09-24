import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WhatsNew } from './WhatsNew'

describe('WhatsNew', () => {
  it("renders the What's New heading", () => {
    render(<WhatsNew />)
    expect(screen.getByRole('heading', { name: /What's New/i })).toBeInTheDocument()
  })

  it('renders tab buttons for all categories', () => {
    render(<WhatsNew />)
    for (const tab of ['All', 'Lifestyle', 'Travel', 'Fashion', 'Sports', 'Technology']) {
      expect(screen.getByRole('button', { name: tab })).toBeInTheDocument()
    }
  })

  it('defaults to the All tab with four articles', () => {
    render(<WhatsNew />)
    const region = screen.getByRole('region', { name: /News articles/i })
    const articles = region.querySelectorAll('article')
    expect(articles).toHaveLength(4)
  })

  it('switches articles when a different tab is clicked', async () => {
    const user = userEvent.setup()
    render(<WhatsNew />)

    await user.click(screen.getByRole('button', { name: 'Travel' }))
    const region = screen.getByRole('region', { name: /News articles/i })
    const articles = region.querySelectorAll('article')
    expect(articles).toHaveLength(4)
    expect(screen.getByText(/Exploring the Hidden Temples of Kyoto/i)).toBeInTheDocument()
  })

  it('renders the Follow Us sidebar with social links', () => {
    render(<WhatsNew />)
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'YouTube']) {
      const link = screen.getByRole('link', { name: `Follow us on ${label}` })
      expect(link).toHaveAttribute('target', '_blank')
    }
  })

  it('renders follower counts', () => {
    render(<WhatsNew />)
    expect(screen.getByText('24.5K Fans')).toBeInTheDocument()
    expect(screen.getByText('18.2K Fans')).toBeInTheDocument()
    expect(screen.getByText('32.1K Fans')).toBeInTheDocument()
    expect(screen.getByText('12.8K Fans')).toBeInTheDocument()
  })

  it('renders the ad poster image', () => {
    render(<WhatsNew />)
    expect(screen.getByRole('img', { name: 'Side advertisement' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
