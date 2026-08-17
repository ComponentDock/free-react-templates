import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Hero } from './Hero'
import { CATEGORY_PILLS, HERO } from '../data'

describe('Hero', () => {
  it('renders the headline, subtext, and search fields', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: HERO.headline })).toBeInTheDocument()
    expect(screen.getByText(HERO.subtext)).toBeInTheDocument()
    expect(screen.getByLabelText('What?')).toBeInTheDocument()
    expect(screen.getByLabelText('Where?')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(HERO.whatPlaceholder)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(HERO.wherePlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('submits the search form without navigating', () => {
    const { container } = render(<Hero />)
    const form = container.querySelector('form')
    expect(form).not.toBeNull()
    fireEvent.submit(form as HTMLFormElement)
    // No navigation happened and the page still renders the hero
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the category pills with Home active', () => {
    render(<Hero />)
    const pills = screen.getAllByRole('button', { name: /Restaurant|Home|Party|Shopping|Hotel/ })
    expect(pills).toHaveLength(CATEGORY_PILLS.length)
    expect(pills[1]).toHaveAttribute('aria-pressed', 'true')
    expect(pills[1]?.className).toContain('bg-deep')
    expect(pills[0]?.className).toContain('bg-white/25')
  })

  it('switches the active pill on click', () => {
    render(<Hero />)
    const pills = screen.getAllByRole('button', { name: /Restaurant|Home|Party|Shopping|Hotel/ })
    fireEvent.click(pills[4] as HTMLButtonElement)
    expect(pills[4]).toHaveAttribute('aria-pressed', 'true')
    expect(pills[4]?.className).toContain('bg-deep')
    expect(pills[1]?.className).toContain('bg-white/25')
  })
})
