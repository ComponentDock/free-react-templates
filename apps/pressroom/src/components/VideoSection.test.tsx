import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VideoSection } from './VideoSection'
import { VIDEO_ITEMS } from '../data'

describe('VideoSection', () => {
  it('renders the Latest Video heading and first video caption', () => {
    render(<VideoSection />)
    expect(screen.getByRole('heading', { name: 'Latest Video - 2020' })).toBeInTheDocument()
    expect(screen.getByText(VIDEO_ITEMS[0]!.caption)).toBeInTheDocument()
  })

  it('renders play buttons on video cards', () => {
    render(<VideoSection />)
    expect(
      screen.getByRole('button', { name: `Play ${VIDEO_ITEMS[0]!.caption}` }),
    ).toBeInTheDocument()
  })

  it('navigates the video carousel', async () => {
    const user = userEvent.setup()
    render(<VideoSection />)
    await user.click(screen.getByRole('button', { name: 'Next videos' }))
    expect(screen.getByText(VIDEO_ITEMS[1]!.caption)).toBeInTheDocument()
  })
})
