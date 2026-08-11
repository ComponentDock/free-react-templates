import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  blogHeading,
  coursesHeading,
  documentTitle,
  heroHeading,
  impressHeading,
  packagesHeading,
  skipLabel,
  teamHeading,
} from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe(documentTitle)
  })

  it('composes all sections in order with proper landmarks', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Navigation (desktop)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    // Hero
    expect(screen.getByRole('heading', { level: 1, name: heroHeading })).toBeInTheDocument()
    // Courses
    expect(screen.getByRole('heading', { level: 2, name: coursesHeading })).toBeInTheDocument()
    // Team
    expect(screen.getByRole('heading', { level: 2, name: teamHeading })).toBeInTheDocument()
    // Packages
    expect(screen.getByRole('heading', { level: 2, name: packagesHeading })).toBeInTheDocument()
    // Blog
    expect(screen.getByRole('heading', { level: 2, name: blogHeading })).toBeInTheDocument()
    // Impress CTA
    expect(screen.getByRole('heading', { level: 2, name: impressHeading })).toBeInTheDocument()
  })

  it('provides a skip link that jumps to the main landmark', async () => {
    const user = userEvent.setup()
    render(<App />)

    const skip = screen.getByRole('link', { name: skipLabel })
    expect(skip).toHaveAttribute('href', '#main')
    await user.tab()
    expect(skip).toHaveFocus()
  })
})
