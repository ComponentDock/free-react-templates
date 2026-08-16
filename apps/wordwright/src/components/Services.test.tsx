import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Services } from './Services'
import { services, servicesIntro, servicesTitle } from '../data'

describe('Services', () => {
  it('renders the section title with blue underline bar and intro paragraph', () => {
    const { container } = render(<Services />)

    expect(screen.getByRole('heading', { name: servicesTitle })).toBeInTheDocument()
    const bar = container.querySelector('span[aria-hidden="true"]')!
    expect(bar.className).toContain('bg-accent')
    expect(bar.className).toContain('w-[180px]')
    expect(bar.className).toContain('h-[6px]')
    expect(screen.getByText(servicesIntro)).toBeInTheDocument()
  })

  it('renders four service cards with icon, title link and blurb in a staggered grid', () => {
    const { container } = render(<Services />)

    const articles = Array.from(container.querySelectorAll('article'))
    expect(articles).toHaveLength(4)

    articles.forEach((article, index) => {
      const service = services[index]!
      expect(within(article).getByRole('heading', { name: service.title })).toBeInTheDocument()
      expect(within(article).getByText(service.description)).toBeInTheDocument()
      expect(article.querySelector('svg')).not.toBeNull()
      // Even-indexed cards sit in the left column, odd ones are offset right.
      expect(article.className).toContain(index % 2 === 1 ? 'lg:col-start-7' : 'lg:col-span-5')
      if (index % 2 === 0) {
        expect(article.className).not.toContain('lg:col-start-7')
      }
    })
  })
})
