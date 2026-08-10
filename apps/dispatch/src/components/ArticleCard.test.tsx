import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ArticleCard } from './ArticleCard'
import type { Article } from '../data'

const base: Article = {
  title: 'A Weekend Escape in the Old Town',
  category: 'travel',
  image: 'https://picsum.photos/seed/dispatch-test/263/200',
  variant: 'image',
}

describe('ArticleCard', () => {
  it('renders a small image card with a rounded image and title link', () => {
    const { container } = render(<ArticleCard article={base} />)
    expect(container.querySelector('img')).toHaveAttribute('src', base.image)
    expect(screen.getByRole('link', { name: base.title })).toBeInTheDocument()
  })

  it('renders a large image card', () => {
    const { container } = render(<ArticleCard article={{ ...base, size: 'large' }} />)
    expect(screen.getByRole('link', { name: base.title })).toBeInTheDocument()
    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('renders a background variant with the title over the image', () => {
    const { container } = render(
      <ArticleCard article={{ ...base, variant: 'background', size: 'large' }} />,
    )
    expect(screen.getByRole('link', { name: base.title })).toBeInTheDocument()
    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('renders a small background variant', () => {
    render(<ArticleCard article={{ ...base, variant: 'background' }} />)
    expect(screen.getByRole('link', { name: base.title })).toBeInTheDocument()
  })

  it('renders a text-only variant without an image', () => {
    const { container } = render(
      <ArticleCard article={{ ...base, variant: 'text', image: undefined }} />,
    )
    expect(screen.getByRole('link', { name: base.title })).toBeInTheDocument()
    expect(container.querySelector('img')).not.toBeInTheDocument()
  })

  it('renders an image variant without an image as text-only', () => {
    const { container } = render(
      <ArticleCard article={{ ...base, variant: 'image', image: undefined }} />,
    )
    expect(screen.getByRole('link', { name: base.title })).toBeInTheDocument()
    expect(container.querySelector('img')).not.toBeInTheDocument()
  })
})
