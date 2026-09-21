import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { VideoReviews } from './VideoReviews'

describe('VideoReviews', () => {
  it('renders the section', () => {
    render(<VideoReviews />)
    expect(screen.getByLabelText('Video Reviews')).toBeDefined()
  })

  it('renders 4 video nav items', () => {
    render(<VideoReviews />)
    const items = screen.getAllByRole('button', { name: /^Play (?!video)/ })
    expect(items).toHaveLength(4)
  })

  it('highlights first video as active by default', () => {
    render(<VideoReviews />)
    const firstBtn = screen.getByLabelText('Play Assemble Your Squad and Join the Battle')
    expect(firstBtn.className).toContain('bg-primary-400')
  })

  it('switches active video on click', async () => {
    const user = userEvent.setup()
    render(<VideoReviews />)
    await user.click(screen.getByLabelText('Play Tips to Improve Your Game'))
    const secondBtn = screen.getByLabelText('Play Tips to Improve Your Game')
    expect(secondBtn.className).toContain('bg-primary-400')
  })

  it('renders play button in main area', () => {
    render(<VideoReviews />)
    expect(screen.getByLabelText('Play video')).toBeDefined()
  })

  it('displays video ratings', () => {
    render(<VideoReviews />)
    expect(screen.getAllByText('8.3/10').length).toBeGreaterThanOrEqual(1)
  })
})
