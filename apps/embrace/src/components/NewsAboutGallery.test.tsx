import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewsAboutGallery } from './NewsAboutGallery'

describe('NewsAboutGallery', () => {
  it('renders News heading', () => {
    render(<NewsAboutGallery />)
    expect(screen.getByRole('heading', { level: 3, name: 'News' })).toBeInTheDocument()
  })

  it('renders About Us heading', () => {
    render(<NewsAboutGallery />)
    expect(screen.getByRole('heading', { level: 3, name: 'About Us' })).toBeInTheDocument()
  })

  it('renders Gallery heading', () => {
    render(<NewsAboutGallery />)
    expect(screen.getByRole('heading', { level: 3, name: 'Gallery' })).toBeInTheDocument()
  })

  it('renders news items', () => {
    render(<NewsAboutGallery />)
    expect(screen.getByText('New School Opens in Rural Community')).toBeInTheDocument()
    expect(screen.getByText('Annual Fundraiser Exceeds Goal')).toBeInTheDocument()
  })

  it('renders View All News button', () => {
    render(<NewsAboutGallery />)
    expect(screen.getByRole('link', { name: /view all news/i })).toBeInTheDocument()
  })

  it('renders View All Gallery button', () => {
    render(<NewsAboutGallery />)
    expect(screen.getByRole('link', { name: /view all gallery/i })).toBeInTheDocument()
  })

  it('renders Learn More button in About section', () => {
    render(<NewsAboutGallery />)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })

  it('renders share and comment counts', () => {
    render(<NewsAboutGallery />)
    expect(screen.getByText('14')).toBeInTheDocument()
    expect(screen.getByText('7')).toBeInTheDocument()
  })
})
