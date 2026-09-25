import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { VideoAbout } from './VideoAbout'

describe('VideoAbout', () => {
  it('renders the heading', () => {
    render(<VideoAbout />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('We Love Music')
  })

  it('renders the subtitle', () => {
    render(<VideoAbout />)
    expect(screen.getByText('Join with us today')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<VideoAbout />)
    expect(screen.getByText(/From underground clubs/)).toBeInTheDocument()
  })

  it('renders the Join Us button', () => {
    render(<VideoAbout />)
    const btn = screen.getByRole('link', { name: /join us/i })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('href', '#contact')
  })

  it('has a play button', () => {
    render(<VideoAbout />)
    const playBtn = screen.getByRole('button', { name: /play video/i })
    expect(playBtn).toBeInTheDocument()
  })

  it('play button is clickable', async () => {
    const user = userEvent.setup()
    render(<VideoAbout />)
    const playBtn = screen.getByRole('button', { name: /play video/i })
    await user.click(playBtn)
    // no error = success
  })
})
