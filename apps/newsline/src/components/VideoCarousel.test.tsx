import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VideoCarousel } from './VideoCarousel'
import { durationBadgeLabel, nextLabel, prevLabel, type Video } from '../data'

const videos: Video[] = [
  {
    id: 'a',
    title: 'Alpha',
    category: 'Sports',
    seed: 's-a',
    duration: '01.00',
    meta: { comments: '1', views: '2', likes: '3' },
  },
  {
    id: 'b',
    title: 'Bravo',
    category: 'World',
    seed: 's-b',
    duration: '02.00',
    meta: { comments: '4', views: '5', likes: '6' },
  },
  {
    id: 'c',
    title: 'Charlie',
    category: 'Tech',
    seed: 's-c',
    duration: '03.00',
    meta: { comments: '7', views: '8', likes: '9' },
  },
]

const cardTitles = (section: HTMLElement) =>
  within(section)
    .getAllByRole('heading', { level: 4 })
    .map((node) => node.textContent)

describe('VideoCarousel', () => {
  it('renders the heading, all cards and prev/next controls', () => {
    render(<VideoCarousel heading="Featured Videos" videos={videos} />)
    const section = screen.getByRole('region', { name: 'Featured Videos' })
    expect(within(section).getByRole('heading', { name: 'Featured Videos' })).toBeInTheDocument()
    for (const video of videos) {
      expect(within(section).getByRole('heading', { name: video.title })).toBeInTheDocument()
      expect(within(section).getByText(video.duration)).toBeInTheDocument()
      expect(within(section).getByTitle(durationBadgeLabel(video.duration))).toBeInTheDocument()
    }
    expect(within(section).getByRole('button', { name: prevLabel })).toBeInTheDocument()
    expect(within(section).getByRole('button', { name: nextLabel })).toBeInTheDocument()
  })

  it('rotates the card order with next and previous', async () => {
    const user = userEvent.setup()
    render(<VideoCarousel heading="Sport Videos" videos={videos} />)
    const section = screen.getByRole('region', { name: 'Sport Videos' })
    const next = within(section).getByRole('button', { name: nextLabel })
    await user.click(next)
    expect(cardTitles(section)).toEqual(['Bravo', 'Charlie', 'Alpha'])
    const prev = within(section).getByRole('button', { name: prevLabel })
    await user.click(prev)
    expect(cardTitles(section)).toEqual(['Alpha', 'Bravo', 'Charlie'])
  })

  it('wraps around when rotating past the end', async () => {
    const user = userEvent.setup()
    render(<VideoCarousel heading="Business Videos" videos={videos} />)
    const section = screen.getByRole('region', { name: 'Business Videos' })
    const prev = within(section).getByRole('button', { name: prevLabel })
    await user.click(prev)
    expect(cardTitles(section)).toEqual(['Charlie', 'Alpha', 'Bravo'])
  })

  it('renders large cards with the aspect-video class when large is set', () => {
    render(<VideoCarousel heading="Featured Videos" videos={videos} large />)
    const section = screen.getByRole('region', { name: 'Featured Videos' })
    const images = within(section).getAllByRole('img')
    expect(images[0]!.className).toContain('aspect-video')
  })
})
