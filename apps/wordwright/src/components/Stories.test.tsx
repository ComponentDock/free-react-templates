import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Stories } from './Stories'
import { stories } from '../data'

describe('Stories', () => {
  it('renders the dark band with the experience box and two story cards', () => {
    const { container } = render(<Stories />)

    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-ink')

    expect(screen.getByRole('heading', { name: stories.title })).toBeInTheDocument()

    const box = Array.from(container.querySelectorAll('div')).find((node) =>
      node.className.includes('bg-brand'),
    )!
    expect(box.textContent).toContain(stories.years)
    expect(box.textContent).toContain(stories.yearsLabel)

    const articles = Array.from(container.querySelectorAll('article'))
    expect(articles).toHaveLength(2)
    stories.items.forEach((item, index) => {
      const article = articles[index]!
      expect(within(article).getByRole('link', { name: item.title })).toBeInTheDocument()
      expect(within(article).getByText(item.description)).toBeInTheDocument()
      expect(within(article).getByText(item.meta)).toBeInTheDocument()
      expect(within(article).getByRole('img', { name: item.imageAlt })).toBeInTheDocument()
    })
  })
})
