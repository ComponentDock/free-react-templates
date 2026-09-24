import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', { level: 2, name: /get every single update/i }),
    ).toBeInTheDocument()
  })

  it('renders three blog posts', () => {
    render(<Blog />)
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })

  it('renders post titles and tags', () => {
    render(<Blog />)
    expect(screen.getByText(/hath is gathering from hath/i)).toBeInTheDocument()
    expect(screen.getAllByText('medical,').length).toBeGreaterThanOrEqual(3)
  })

  it('renders comment counts with singular and plural forms', () => {
    render(<Blog />)
    // Post 1 has 1 comment (singular), posts 0 and 2 have 8 and 5 (plural)
    expect(screen.getByText('1 comment')).toBeInTheDocument()
    expect(screen.getAllByText(/comments/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders like counts with singular and plural forms', () => {
    render(<Blog />)
    // Post 1 has 1 like (singular), posts 0 and 2 have 0 (plural)
    expect(screen.getByText('1 like')).toBeInTheDocument()
    expect(screen.getAllByText(/likes/).length).toBeGreaterThanOrEqual(1)
  })
})
