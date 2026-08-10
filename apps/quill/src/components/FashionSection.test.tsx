import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FashionSection } from './FashionSection'
import { fashionMorePosts, fashionPosts } from '../data'

describe('FashionSection', () => {
  it('renders the heading, four fashion cards and the Load More button', () => {
    render(<FashionSection />)
    expect(screen.getByRole('heading', { name: /Fashion News This Week/i })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(4)
    expect(screen.getByRole('heading', { name: fashionPosts[0]!.title })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument()
  })

  it('reveals the remaining cards when Load More is clicked', async () => {
    const user = userEvent.setup()
    render(<FashionSection />)

    expect(screen.getAllByRole('article')).toHaveLength(4)
    await user.click(screen.getByRole('button', { name: /load more/i }))

    expect(screen.getAllByRole('article')).toHaveLength(
      fashionPosts.length + fashionMorePosts.length,
    )
    expect(screen.getByRole('heading', { name: fashionMorePosts[0]!.title })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /load more/i })).not.toBeInTheDocument()
  })
})
