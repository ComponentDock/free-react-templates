import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders the heading and thumbnail', () => {
    render(<VideoSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured Video')
    expect(screen.getByAltText('Featured video thumbnail')).toBeInTheDocument()
  })

  it('opens modal on play button click', async () => {
    const user = userEvent.setup()
    render(<VideoSection />)
    await user.click(screen.getByRole('button', { name: /play video/i }))
    expect(screen.getByRole('dialog', { name: /video player/i })).toBeInTheDocument()
    expect(screen.getByText('Video player placeholder')).toBeInTheDocument()
  })

  it('closes modal on close button click', async () => {
    const user = userEvent.setup()
    render(<VideoSection />)
    await user.click(screen.getByRole('button', { name: /play video/i }))
    await user.click(screen.getByRole('button', { name: /close video/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens modal on keyboard Enter', async () => {
    const user = userEvent.setup()
    render(<VideoSection />)
    const thumbnail = screen.getByRole('button', { name: /play video/i })
    thumbnail.focus()
    await user.keyboard('{Enter}')
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('opens modal on keyboard Space', async () => {
    const user = userEvent.setup()
    render(<VideoSection />)
    const thumbnail = screen.getByRole('button', { name: /play video/i })
    thumbnail.focus()
    await user.keyboard(' ')
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('does not open modal on other keys', async () => {
    const user = userEvent.setup()
    render(<VideoSection />)
    const thumbnail = screen.getByRole('button', { name: /play video/i })
    thumbnail.focus()
    await user.keyboard('{ArrowDown}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
