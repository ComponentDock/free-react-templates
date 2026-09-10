import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders a play button', () => {
    render(<VideoSection />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeDefined()
  })

  it('play button is clickable', async () => {
    const user = userEvent.setup()
    render(<VideoSection />)
    const btn = screen.getByRole('button', { name: /play video/i })
    await user.click(btn)
    // Button exists and is clickable (no error thrown)
    expect(btn).toBeDefined()
  })
})
