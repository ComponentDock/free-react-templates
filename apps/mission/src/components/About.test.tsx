import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { about } from '../data'
import { About } from './About'

describe('About', () => {
  it('renders the kicker, heading, paragraph, and Learn More button', () => {
    render(<About />)

    expect(screen.getByText(about.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: about.title })).toBeInTheDocument()
    expect(screen.getByText(about.paragraph)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })

  it('renders the red stat badge over the photo', () => {
    const { container } = render(<About />)

    expect(screen.getByText(about.badgeCaption)).toBeInTheDocument()
    expect(screen.getByText(about.badgeStat)).toBeInTheDocument()
    expect(screen.getByText(about.badgeFooter)).toBeInTheDocument()

    const badge = container.querySelector('.bg-brand')
    expect(badge).not.toBeNull()
    expect(container.querySelector('img')).toHaveAttribute('src', about.image)
  })

  it('sits on the light pink-gray section background', () => {
    const { container } = render(<About />)
    expect(container.querySelector('section')?.className).toContain('bg-mist')
  })

  it('does not navigate when Learn More is clicked', () => {
    render(<About />)
    fireEvent.click(screen.getByRole('link', { name: 'Learn More' }))
    expect(window.location.hash).toBe('')
  })
})
