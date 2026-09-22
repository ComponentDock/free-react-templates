import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VideoArea } from './VideoArea'

describe('VideoArea', () => {
  it('renders the headline text', () => {
    render(<VideoArea />)
    expect(screen.getByText(/Love where you/i)).toBeInTheDocument()
  })

  it('renders the platform description', () => {
    render(<VideoArea />)
    expect(
      screen.getByText(/GoQuest is a World Leading Online Tour Booking Platform/i),
    ).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<VideoArea />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('has a parallax background image', () => {
    const { container } = render(<VideoArea />)
    const section = container.querySelector('section')!
    expect(section.style.backgroundImage).toContain('goquest-video')
  })

  it('play button is clickable', async () => {
    const user = userEvent.setup()
    render(<VideoArea />)
    const btn = screen.getByRole('button', { name: /play video/i })
    await user.click(btn)
    expect(btn).toBeInTheDocument()
  })
})
