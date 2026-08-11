import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Sidebar } from './Sidebar'
import { instagramTileLabel, recentPosts, sidebarInstaCount } from '../data'

describe('Sidebar', () => {
  it('renders the About me widget with avatar, name, role, and bio', () => {
    render(<Sidebar />)
    expect(screen.getByRole('region', { name: 'About the author' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Emily Hart' })).toBeInTheDocument()
    expect(screen.getByText('Travel writer & photographer')).toBeInTheDocument()
    expect(screen.getByText(/slow travel/)).toBeInTheDocument()
  })

  it('renders the Newsletter widget and confirms a valid subscription', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    expect(screen.getByRole('region', { name: 'Newsletter' })).toBeInTheDocument()
    const input = screen.getByRole('textbox', { name: 'Email Address' })
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
  })

  it('shows an error for an invalid email in the Newsletter widget', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const input = screen.getByRole('textbox', { name: 'Email Address' })
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
  })

  it('renders the Instagram grid with the sidebar tile count', () => {
    render(<Sidebar />)
    expect(screen.getByRole('region', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByAltText(instagramTileLabel(0))).toBeInTheDocument()
    const tiles = screen.getAllByAltText(/Instagram feed image/)
    expect(tiles).toHaveLength(sidebarInstaCount)
  })

  it('renders the Recent Posts list with thumbnails, titles, and dates', () => {
    render(<Sidebar />)
    expect(screen.getByRole('region', { name: 'Recent Posts' })).toBeInTheDocument()
    for (const post of recentPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
    }
  })

  it('renders the ad placeholder', () => {
    render(<Sidebar />)
    expect(screen.getByRole('region', { name: 'Advertisement' })).toBeInTheDocument()
    expect(screen.getByAltText('Advertisement placeholder')).toBeInTheDocument()
  })
})
