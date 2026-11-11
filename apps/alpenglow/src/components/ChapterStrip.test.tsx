import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CHAPTERS, CHAPTERS_ID } from '../data/site'
import { ChapterStrip } from './ChapterStrip'

describe('ChapterStrip', () => {
  it('renders one numbered item per chapter on the anchor target', () => {
    render(<ChapterStrip />)

    const list = screen.getByRole('list', { name: 'Film chapters' })
    expect(list).toHaveAttribute('id', CHAPTERS_ID)

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(CHAPTERS.length)
    expect(items.map((item) => item.textContent)).toEqual([
      '01First light on the col',
      '02Storm over the saddle',
      '03The long descent',
    ])
  })

  it('sets every chapter number in its own span', () => {
    render(<ChapterStrip />)

    for (const [index, chapter] of CHAPTERS.entries()) {
      const number = screen.getAllByRole('listitem')[index]?.querySelector('span')
      expect(number).toHaveTextContent(chapter.number)
    }
  })
})
