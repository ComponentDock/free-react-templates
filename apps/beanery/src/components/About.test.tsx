import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { about, hoursBlocks } from '../data'

describe('About', () => {
  it('shows the serif headline, paragraph, signature and hours blocks', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { level: 2, name: /boutique and fun cafe/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(new RegExp(about.paragraph.slice(0, 30)))).toBeInTheDocument()
    expect(screen.getByText(about.signature)).toBeInTheDocument()

    for (const block of hoursBlocks) {
      expect(screen.getByRole('heading', { level: 3, name: block.title })).toBeInTheDocument()
      expect(screen.getByText(block.days)).toBeInTheDocument()
      expect(screen.getByText(block.time)).toBeInTheDocument()
    }
  })

  it('renders a full-width image below the text', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /guests with coffee/ })).toBeInTheDocument()
  })
})
