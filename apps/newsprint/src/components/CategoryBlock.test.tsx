import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryBlock } from './CategoryBlock'
import { categoryBlocks } from '../data'

describe('CategoryBlock', () => {
  it('renders both category headings with their post rows', () => {
    render(<CategoryBlock />)

    for (const block of categoryBlocks) {
      expect(screen.getByRole('heading', { name: block.heading })).toBeInTheDocument()
      for (const post of block.posts) {
        expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
        expect(screen.getByText(post.date)).toBeInTheDocument()
      }
    }
  })
})
