import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { PostSlider } from './PostSlider'
import { sliderPosts } from '../data'

const getTrack = () => {
  const track = screen.getByRole('region', { name: 'Featured posts' }).querySelector('.flex')
  expect(track).not.toBeNull()
  return track as HTMLElement
}

describe('PostSlider', () => {
  it('renders the featured post slides with meta, title, excerpt, and Read More', () => {
    render(<PostSlider />)
    expect(screen.getByRole('region', { name: 'Featured posts' })).toBeInTheDocument()
    expect(screen.getAllByText('Marvel Maison')).toHaveLength(sliderPosts.length)
    expect(screen.getAllByText('13th Oct, 2018')).toHaveLength(sliderPosts.length)
    expect(screen.getAllByText('Image Post')).toHaveLength(sliderPosts.length)
    expect(screen.getAllByText('Food & Travel')).toHaveLength(sliderPosts.length)
    expect(screen.getAllByText('03 Comments')).toHaveLength(sliderPosts.length)
    expect(screen.getByRole('heading', { name: sliderPosts[0]!.title })).toBeInTheDocument()
    expect(screen.getAllByText('Read More')).toHaveLength(sliderPosts.length)
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()
  })

  it('advances to the following slide when the next control is activated', async () => {
    const user = userEvent.setup()
    render(<PostSlider />)
    expect(getTrack().style.transform).toBe('translateX(-0%)')
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(getTrack().style.transform).toBe('translateX(-100%)')
  })

  it('wraps around from the last slide back to the first', async () => {
    const user = userEvent.setup()
    render(<PostSlider />)
    for (let i = 0; i < sliderPosts.length; i += 1) {
      await user.click(screen.getByRole('button', { name: 'Next slide' }))
    }
    expect(getTrack().style.transform).toBe('translateX(-0%)')
  })

  it('moves to the previous slide when the previous control is activated', async () => {
    const user = userEvent.setup()
    render(<PostSlider />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(getTrack().style.transform).toBe('translateX(-0%)')
  })
})
