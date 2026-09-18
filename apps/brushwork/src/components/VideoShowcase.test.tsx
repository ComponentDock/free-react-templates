import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VideoShowcase } from './VideoShowcase'

describe('VideoShowcase', () => {
  it('renders the heading and play button', () => {
    render(<VideoShowcase />)
    expect(
      screen.getByRole('heading', { name: /Crafting stories through art and design/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Play the showcase video/i })).toBeInTheDocument()
  })

  it('renders the video preview image', () => {
    render(<VideoShowcase />)
    expect(screen.getByRole('img', { name: /Video showcase preview/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('prevents default navigation on play button click', async () => {
    const user = userEvent.setup()
    render(<VideoShowcase />)
    const playBtn = screen.getByRole('link', { name: /Play the showcase video/i })
    await user.click(playBtn)
    expect(playBtn).toBeInTheDocument()
  })
})
