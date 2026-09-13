import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Latest From Our Blog Posts',
    )
  })

  it('renders three blog posts', () => {
    render(<Blog />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
  })

  it('renders blog titles', () => {
    render(<Blog />)
    const titles = screen.getAllByText('Addiction When Gambling Becomes A Problem')
    expect(titles).toHaveLength(3)
  })

  it('renders blog dates', () => {
    render(<Blog />)
    const dates = screen.getAllByText(/25 June, 2018/)
    expect(dates).toHaveLength(3)
  })
})
