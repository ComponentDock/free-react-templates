import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog heading and 4 blog entries', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Blog')

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)
  })

  it('renders blog post titles and images', () => {
    render(<Blog />)

    expect(screen.getByText('My New Photography Has Been Featured in Forbes')).toBeInTheDocument()
    expect(screen.getByText('Behind the Scenes of My Latest Exhibition')).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })

  it('renders pagination controls', () => {
    render(<Blog />)

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})
