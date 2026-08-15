import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { storyImage, storyLabel, storyParagraphs, storyTitle } from '../data'
import { Story } from './Story'

describe('Story', () => {
  it('renders the heading, two paragraphs, and one photo', () => {
    const { container } = render(<Story />)

    expect(screen.getByText(storyLabel)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: storyTitle })).toBeInTheDocument()
    expect(screen.getAllByRole('paragraph')).toHaveLength(storyParagraphs.length)
    for (const paragraph of storyParagraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(1)
    expect(images[0]).toHaveAttribute('src', storyImage)
  })
})
