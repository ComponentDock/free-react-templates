import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CategorySection } from './CategorySection'
import { categoryPosts } from '../data'

const firstCard = () => within(screen.getAllByRole('article')[0]!)

describe('CategorySection', () => {
  it('renders the heading and three category cards with date chips', () => {
    render(<CategorySection />)
    expect(
      screen.getByRole('heading', { name: /Latest News from all categories/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(3)
    expect(screen.getAllByText('Jan 2018')).toHaveLength(3)
    expect(screen.getByRole('heading', { name: categoryPosts[0]!.title })).toBeInTheDocument()
  })

  it('rotates the visible cards with the up/down carousel controls', async () => {
    const user = userEvent.setup()
    render(<CategorySection />)

    expect(firstCard().getByRole('heading')).toHaveTextContent(categoryPosts[0]!.title)

    await user.click(screen.getByRole('button', { name: 'Next category' }))
    expect(firstCard().getByRole('heading')).toHaveTextContent(categoryPosts[1]!.title)

    await user.click(screen.getByRole('button', { name: 'Previous category' }))
    expect(firstCard().getByRole('heading')).toHaveTextContent(categoryPosts[0]!.title)

    await user.click(screen.getByRole('button', { name: 'Previous category' }))
    expect(firstCard().getByRole('heading')).toHaveTextContent(categoryPosts[2]!.title)
  })
})
