import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogList } from './BlogList'
import { blogEntries, socialLinks } from '../data'

describe('BlogList', () => {
  it('renders exactly nine blog entries matching the reference', () => {
    render(<BlogList />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(9)
    expect(blogEntries).toHaveLength(9)
  })

  it('renders a 400px-tall picsum placeholder image with alt text per entry', () => {
    const { container } = render(<BlogList />)
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(9)
    images.forEach((image, index) => {
      const entry = blogEntries[index]!
      expect(image.getAttribute('src')).toMatch(
        new RegExp(`^https://picsum\\.photos/seed/${entry.seed}/800/400$`),
      )
      expect(image.getAttribute('alt')).toBe(entry.title)
      expect(image.className).toContain('h-[400px]')
    })
  })

  it('shows category, bold title link and date | read-time meta per entry', () => {
    render(<BlogList />)
    const articles = screen.getAllByRole('article')

    expect(within(articles[0]!).getByText('Illustration')).toBeInTheDocument()
    expect(within(articles[1]!).getByText('Application')).toBeInTheDocument()
    expect(within(articles[2]!).getByText('Design')).toBeInTheDocument()

    const first = articles[0]!
    const titleLinks = within(first).getAllByRole('link', { name: blogEntries[0]!.title })
    expect(titleLinks).toHaveLength(2)
    expect(titleLinks[1]!).toHaveClass('hover:text-brand')
    expect(
      within(first).getByRole('heading', { level: 2, name: blogEntries[0]!.title }),
    ).toHaveClass('font-bold')
    expect(
      within(first).getByText(`${blogEntries[0]!.date} | ${blogEntries[0]!.readTime}`),
    ).toBeInTheDocument()
  })

  it('renders share icons that are always visible on mobile and reveal on hover on desktop', () => {
    render(<BlogList />)
    const articles = screen.getAllByRole('article')
    for (const social of socialLinks) {
      expect(within(articles[0]!).getByRole('link', { name: social.label })).toBeInTheDocument()
    }
    const shareWrapper = within(articles[0]!)
      .getByRole('link', { name: socialLinks[0]!.label })
      .closest('div')
    expect(shareWrapper).toHaveClass('lg:opacity-0', 'lg:group-hover:opacity-100')
  })
})
