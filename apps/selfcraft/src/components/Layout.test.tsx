import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Layout } from './Layout'

describe('Layout', () => {
  it('renders children and has translate transform when menu is open', () => {
    const { container } = render(
      <Layout menuOpen={true} currentView="bio">
        <div>Test content</div>
      </Layout>,
    )

    expect(screen.getByText('Test content')).toBeInTheDocument()

    const wrapper = container.querySelector('.-translate-x-\\[240px\\]')
    expect(wrapper).not.toBeNull()
  })

  it('does not have translate transform when menu is closed', () => {
    const { container } = render(
      <Layout menuOpen={false} currentView="bio">
        <div>Test content</div>
      </Layout>,
    )

    expect(screen.getByText('Test content')).toBeInTheDocument()

    // Should not have translate-x when closed
    const wrapper = container.querySelector('.transition-transform')
    expect(wrapper).not.toBeNull()
    expect(wrapper?.className).not.toContain('-translate-x')
  })

  it('renders profile images', () => {
    render(
      <Layout menuOpen={false} currentView="bio">
        <div>Content</div>
      </Layout>,
    )

    const profileImages = screen.getAllByRole('img', { name: 'Profile photo' })
    expect(profileImages.length).toBeGreaterThanOrEqual(1)
  })

  it('renders navigation buttons for all views', () => {
    render(
      <Layout menuOpen={false} currentView="bio">
        <div>Content</div>
      </Layout>,
    )

    expect(screen.getByRole('button', { name: 'Bio' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Portfolio' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Resume' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Contact' })).toBeInTheDocument()
  })

  it('highlights the current view in navigation', () => {
    render(
      <Layout menuOpen={false} currentView="portfolio">
        <div>Content</div>
      </Layout>,
    )

    const portfolioBtn = screen.getByRole('button', { name: 'Portfolio' })
    expect(portfolioBtn.getAttribute('aria-current')).toBe('page')
    expect(portfolioBtn.className).toContain('font-bold')

    const bioBtn = screen.getByRole('button', { name: 'Bio' })
    expect(bioBtn.getAttribute('aria-current')).toBeNull()
  })
})
