import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders a page of three post cards with tags, title, excerpt and date', () => {
    const { container } = render(<Blog />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Latest from Our Blog')

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(3)
    expect(cards[0]?.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/tripquest-blog-1/600/400',
    )
    expect(cards[0]?.textContent).toContain('Low Cost Advertising')
    expect(cards[0]?.textContent).toContain('Travel')
    expect(cards[0]?.textContent).toContain('Life Style')
    expect(cards[0]?.textContent).toContain('31st January, 2018')
    expect(cards).toHaveLength(3)
    expect(screen.getByTestId('blog-page')).toHaveTextContent('Page 1 of 2')
  })

  it('pages forward and back through the post set', async () => {
    const user = userEvent.setup()
    const { container } = render(<Blog />)

    await user.click(screen.getByRole('button', { name: 'Next blog page' }))
    expect(screen.getByTestId('blog-page')).toHaveTextContent('Page 2 of 2')
    expect(container.textContent).toContain('Low Cost Advertising')

    await user.click(screen.getByRole('button', { name: 'Next blog page' }))
    expect(screen.getByTestId('blog-page')).toHaveTextContent('Page 1 of 2')

    await user.click(screen.getByRole('button', { name: 'Previous blog page' }))
    expect(screen.getByTestId('blog-page')).toHaveTextContent('Page 2 of 2')

    await user.click(screen.getByRole('button', { name: 'Previous blog page' }))
    expect(screen.getByTestId('blog-page')).toHaveTextContent('Page 1 of 2')
  })
})
