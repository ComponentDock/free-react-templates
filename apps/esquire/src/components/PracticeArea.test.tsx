import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PracticeArea } from './PracticeArea'
import { PRACTICE_AREAS } from '../data'

describe('PracticeArea', () => {
  it('renders the section title and four practice cards', () => {
    const { container } = render(<PracticeArea />)

    expect(screen.getByRole('heading', { name: 'Practice Area' })).toBeInTheDocument()
    expect(container.querySelectorAll('img').length).toBe(PRACTICE_AREAS.length)

    for (const area of PRACTICE_AREAS) {
      expect(screen.getByRole('heading', { name: area.title })).toBeInTheDocument()
      expect(screen.getByText(area.copy)).toBeInTheDocument()
    }
  })

  it('renders a gold Learn More link inside each card overlay', () => {
    render(<PracticeArea />)

    const links = screen.getAllByRole('link', { name: 'Learn More' })
    expect(links.length).toBe(PRACTICE_AREAS.length)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#appointment')
      expect(link.className).toContain('text-brand')
    }
  })
})
