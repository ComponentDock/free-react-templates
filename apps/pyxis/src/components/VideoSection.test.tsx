import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders heading and play button', () => {
    render(<VideoSection />)
    expect(screen.getByText(/being unique is the preference/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<VideoSection />)
    expect(screen.getByText(/watch our story unfold/i)).toBeInTheDocument()
  })

  it('play button is clickable', async () => {
    const user = userEvent.setup()
    render(<VideoSection />)
    const playBtn = screen.getByRole('button', { name: /play video/i })
    await user.click(playBtn)
    expect(playBtn).toBeInTheDocument()
  })
})
