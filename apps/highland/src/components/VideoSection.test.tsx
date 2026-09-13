import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders the video section with overlay', () => {
    render(<VideoSection />)
    expect(screen.getByTestId('video-section')).toBeInTheDocument()
    expect(screen.getByText('Highland Sea View')).toBeInTheDocument()
    expect(screen.getByText('Relax and Enjoy your Vacation')).toBeInTheDocument()
  })

  it('renders play button', () => {
    render(<VideoSection />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('play button is clickable', async () => {
    const user = userEvent.setup()
    render(<VideoSection />)
    const btn = screen.getByRole('button', { name: /play video/i })
    await user.click(btn)
    expect(btn).toBeInTheDocument()
  })
})
