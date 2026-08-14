import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Features } from './Features'
import { features } from '../data'

describe('Features', () => {
  it('renders the title and both feature blocks with Learn More links', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: "Consulting Agency It's Best" })).toBeInTheDocument()

    const blockHeadings = screen.getAllByRole('heading', { level: 3 })
    expect(blockHeadings).toHaveLength(2)
    expect(blockHeadings[0]!).toHaveTextContent('Web & Mobile Specialties')
    expect(blockHeadings[1]!).toHaveTextContent('Intuitive Thinkers')

    for (const block of features.blocks) {
      const heading = screen.getByRole('heading', { level: 3, name: block.title })
      expect(within(heading.parentElement!).getByText(block.text)).toBeInTheDocument()
    }

    const links = screen.getAllByRole('link', { name: /Learn More/ })
    expect(links).toHaveLength(2)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#contact')
    }
  })
})
