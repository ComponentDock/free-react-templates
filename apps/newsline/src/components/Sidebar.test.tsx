import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'
import {
  channels,
  hotChannelsHeading,
  latestVideoHeading,
  latestVideoVideos,
  mostViewedHeading,
  mostViewedVideos,
  newsletterHeading,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  sidebarLabel,
  subscribeLabel,
} from '../data'

describe('Sidebar', () => {
  it('renders the latest video widget with title and meta', () => {
    render(<Sidebar />)
    const sidebar = screen.getByRole('complementary', { name: sidebarLabel })
    expect(within(sidebar).getByRole('heading', { name: latestVideoHeading })).toBeInTheDocument()
    const latest = latestVideoVideos[0]!
    const heading = within(sidebar).getByRole('heading', { name: latest.title })
    const card = heading.closest('article')
    expect(card).not.toBeNull()
    expect(within(card as HTMLElement).getByText(latest.meta.comments)).toBeInTheDocument()
  })

  it('lists hot channels with avatars and toggling subscribe buttons', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const sidebar = screen.getByRole('complementary', { name: sidebarLabel })
    expect(within(sidebar).getByRole('heading', { name: hotChannelsHeading })).toBeInTheDocument()
    for (const channel of channels) {
      const name = within(sidebar).getByText(channel.name)
      const row = name.closest('li')
      expect(row).not.toBeNull()
      const button = within(row as HTMLElement).getByRole('button', { name: subscribeLabel })
      await user.click(button)
      expect(button).toHaveAttribute('aria-pressed', 'true')
      expect(button).toHaveTextContent('Subscribed')
      await user.click(button)
      expect(button).toHaveAttribute('aria-pressed', 'false')
      expect(button).toHaveTextContent(subscribeLabel)
    }
  })

  it('submits the newsletter form and clears the email input', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const sidebar = screen.getByRole('complementary', { name: sidebarLabel })
    const form = within(sidebar).getByRole('form', { name: newsletterHeading })
    const input = within(form).getByRole('textbox', { name: newsletterPlaceholder })
    await user.type(input, 'reader@example.com')
    expect(input).toHaveValue('reader@example.com')
    await user.click(within(form).getByRole('button', { name: newsletterSubmitLabel }))
    expect(input).toHaveValue('')
  })

  it('renders the most viewed playlist rows', () => {
    render(<Sidebar />)
    const sidebar = screen.getByRole('complementary', { name: sidebarLabel })
    expect(within(sidebar).getByRole('heading', { name: mostViewedHeading })).toBeInTheDocument()
    for (const video of mostViewedVideos) {
      expect(within(sidebar).getByRole('heading', { name: video.title })).toBeInTheDocument()
      expect(within(sidebar).getAllByText(video.meta.views).length).toBeGreaterThan(0)
    }
  })
})
