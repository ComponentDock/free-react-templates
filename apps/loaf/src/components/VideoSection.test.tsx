import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders the heading and description', () => {
    render(<VideoSection />)
    expect(screen.getByRole('heading', { name: /Watch our baking process/i })).toBeInTheDocument()
    expect(screen.getByText(/selecting the finest ingredients/i)).toBeInTheDocument()
  })

  it('renders the Get Started Now button', () => {
    render(<VideoSection />)
    expect(screen.getByRole('button', { name: 'Get Started Now' })).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<VideoSection />)
    const playBtn = screen.getByRole('button', { name: 'Play video' })
    expect(playBtn).toBeInTheDocument()
  })

  it('play button is clickable', async () => {
    const user = userEvent.setup()
    render(<VideoSection />)
    const playBtn = screen.getByRole('button', { name: 'Play video' })
    await user.click(playBtn)
    // Clicking should not throw
    expect(playBtn).toBeInTheDocument()
  })

  it('has the video preview image', () => {
    render(<VideoSection />)
    const img = screen.getByRole('img', { name: 'Baking video preview' })
    expect(img).toHaveAttribute('src', expect.stringContaining('loaf-video'))
  })
})
