import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { introCategories, introTag, introText, introTitle, readMoreLabel } from '../data'
import { MagazineIntro } from './MagazineIntro'

describe('MagazineIntro', () => {
  it('renders the text panel with line, tag, headline, paragraph and Read More', () => {
    const { container } = render(<MagazineIntro />)

    expect(screen.getByRole('region', { name: 'Magazine intro' })).toBeInTheDocument()
    expect(screen.getByText(introTag)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: introTitle })).toBeInTheDocument()
    expect(screen.getByText(introText)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: readMoreLabel })).toBeInTheDocument()

    const line = container.querySelector('div[aria-hidden="true"]')
    expect(line).not.toBeNull()
  })

  it('renders the two photo cards with centered category boxes', () => {
    const { container } = render(<MagazineIntro />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(2)

    for (const category of introCategories) {
      const box = screen.getByText(category.title)
      expect(box.className).toContain('bg-ink')
      expect(box.className).toContain('hover:bg-accent')
    }
  })
})
