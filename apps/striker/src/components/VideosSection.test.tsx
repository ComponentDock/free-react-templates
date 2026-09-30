import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { videos } from '../data'
import { VideosSection } from './VideosSection'

describe('VideosSection', () => {
  it('renders the red-bar heading, nav arrows and three video cards', () => {
    render(<VideosSection />)
    expect(screen.getByRole('heading', { level: 2, name: 'Videos' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous videos' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next videos' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(3)
    expect(screen.getByText(videos[0].title)).toBeInTheDocument()
    expect(screen.queryByText(videos[3].title)).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: `Play ${videos[0].title}` })).toBeInTheDocument()
  })

  it('advances and rewinds the carousel via the arrow buttons', async () => {
    const user = userEvent.setup()
    render(<VideosSection />)

    await user.click(screen.getByRole('button', { name: 'Next videos' }))
    expect(screen.queryByText(videos[0].title)).not.toBeInTheDocument()
    expect(screen.getByText(videos[3].title)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous videos' }))
    expect(screen.getByText(videos[0].title)).toBeInTheDocument()
  })

  it('wraps around when going back from the first card', async () => {
    const user = userEvent.setup()
    render(<VideosSection />)

    await user.click(screen.getByRole('button', { name: 'Previous videos' }))
    expect(screen.getByText(videos[5].title)).toBeInTheDocument()
    expect(screen.getByText(videos[0].title)).toBeInTheDocument()
    expect(screen.queryByText(videos[4].title)).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next videos' }))
    expect(screen.getByText(videos[0].title)).toBeInTheDocument()
  })
})
