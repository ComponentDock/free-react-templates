import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DarkAbout } from './DarkAbout'

describe('DarkAbout', () => {
  it('renders heading and text', () => {
    render(<DarkAbout />)
    expect(screen.getByText('Our Conference Provides Great Support')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support system')).toBeInTheDocument()
  })

  it('renders image', () => {
    render(<DarkAbout />)
    const img = screen.getByAltText('Conference event')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/forum-dark-about/600/400')
  })

  it('renders description text', () => {
    render(<DarkAbout />)
    expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument()
  })
})
