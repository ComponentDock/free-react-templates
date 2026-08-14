import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders the section title and two post cards', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: 'Latest News From Blog' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Footprints in Time is a Perfect House in Kurashiki' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Lessons From a Decade of Teaching Creative Skills' }),
    ).toBeInTheDocument()
  })

  it('renders date badges, categories and read-more links per post', () => {
    render(<BlogSection />)
    expect(screen.getByText('24')).toBeInTheDocument()
    expect(screen.getByText('18')).toBeInTheDocument()
    expect(screen.getAllByText('Now')).toHaveLength(2)
    expect(screen.getByText('Properties')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Read more/ })).toHaveLength(2)
  })

  it('renders post images with descriptive alt text', () => {
    render(<BlogSection />)
    expect(
      screen.getByRole('img', { name: 'Footprints in Time is a Perfect House in Kurashiki' }),
    ).toBeInTheDocument()
  })
})
