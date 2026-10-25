import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Feed } from './Feed'
import { POSTS } from '../content'

describe('Feed', () => {
  it('renders five posts in the reference order with their circles', () => {
    render(<Feed />)

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(5)

    const first = articles[0] as HTMLElement
    expect(within(first).getByText('Léa Moreau')).toBeInTheDocument()
    expect(within(first).getByText('Sunday Climbers')).toBeInTheDocument()
    expect(within(first).getByText('Photo')).toBeInTheDocument()
    expect(within(first).getByText('24')).toBeInTheDocument()
    expect(within(first).getByText('7')).toBeInTheDocument()

    expect(articles.map((article) => article.querySelector('span')?.textContent)).toEqual([
      'LM',
      'IB',
      'HP',
      'MR',
      'NH',
    ])
  })

  it('carries a badge on three posts and none on the other two', () => {
    render(<Feed />)

    expect(screen.getAllByText('Photo')).toHaveLength(2)
    expect(screen.getAllByText('Poll')).toHaveLength(1)
    expect(POSTS.filter((post) => post.badge === undefined)).toHaveLength(2)
  })

  it('marks its two post images decorative and never ships a source photo', () => {
    const { container } = render(<Feed />)
    const images = container.querySelectorAll('img')

    expect(images).toHaveLength(2)
    for (const image of images) {
      expect(image).toHaveAttribute('alt', '')
      expect(image.getAttribute('src')).toMatch(/^https:\/\/picsum\.photos\/seed\/closeknit-post-/)
    }
  })

  it('states the feed is chronological', () => {
    render(<Feed />)
    expect(
      screen.getByText(
        'No ranking, no suggested posts, no accounts you did not choose. When you reach the end, it says so and stops.',
      ),
    ).toBeInTheDocument()
  })
})
