import { render, screen, within } from '@testing-library/react'
import { Blog } from './Blog'
import { describe, expect, it } from 'vitest'

describe('Blog', () => {
  it('renders the heading column with View more and three blog cards', () => {
    const { container } = render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View more' })).toBeInTheDocument()

    const articles = container.querySelectorAll('article')
    expect(articles).toHaveLength(3)
    expect(container.querySelectorAll('img')).toHaveLength(3)

    const first = within(articles[0]!)
    expect(first.getByText('August 12, 2018')).toBeInTheDocument()
    expect(first.getByText('Admin')).toBeInTheDocument()
    expect(first.getByText('3')).toBeInTheDocument()
    expect(
      first.getByRole('heading', { level: 3, name: /Asia's Next Top Model/ }),
    ).toBeInTheDocument()
  })
})
