import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Works } from './Works'

describe('Works', () => {
  it('renders the heading, blurb and three horizontal cards', () => {
    render(<Works />)

    expect(screen.getByRole('heading', { level: 2, name: 'Works' })).toBeInTheDocument()
    expect(
      screen.getByText('View our works below to see our design and way of development.'),
    ).toBeInTheDocument()

    for (const title of ['Illustration', 'Application', 'Web Design']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    const portfolioLinks = screen.getAllByRole('link', { name: 'View Portfolio' })
    expect(portfolioLinks).toHaveLength(3)
    for (const link of portfolioLinks) {
      expect(link).toHaveAttribute('href', '#portfolio')
    }
  })

  it('renders an image per card', () => {
    render(<Works />)
    const section = screen.getByRole('region', { name: 'Works' })
    expect(section.querySelectorAll('img')).toHaveLength(3)
  })
})
