import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes all sections with the expected landmarks and title', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(document.title).toBe('Schola — Education Landing Template')
  })

  it('renders the full section set', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading').map((heading) => heading.textContent ?? '')
    const joined = headings.join(' | ')
    expect(joined).toMatch(/Forge Your Future with Expert-Led Courses/)
    expect(joined).toMatch(/Browse by Category/)
    expect(joined).toMatch(/Featured Courses/)
    expect(joined).toMatch(/Everything You Need to Succeed/)
    expect(joined).toMatch(/Learn from Industry Leaders/)
    expect(joined).toMatch(/What Our Learners Say/)
    expect(joined).toMatch(/Choose Your Learning Path/)
    expect(joined).toMatch(/Ready to Start Your Learning Journey/)
  })
})
