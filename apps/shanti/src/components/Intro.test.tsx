import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the heading and five checklist benefits with mauve icons', () => {
    render(<Intro />)
    expect(screen.getByRole('heading', { name: 'Why You Should Go To Yoga' })).toBeInTheDocument()
    const items = screen.getAllByRole('listitem')
    expect(items.length).toBe(5)
    expect(screen.getByText('Yoga boosts brain power')).toBeInTheDocument()
    expect(screen.getByText('Yoga helps you to breathe better')).toBeInTheDocument()
    expect(screen.getByText('Yoga improves your strength')).toBeInTheDocument()
    expect(screen.getByText('Yoga helps you to focus')).toBeInTheDocument()
    expect(screen.getByText('Yoga helps give meaning to your day')).toBeInTheDocument()
  })

  it('uses a seeded cover background image', () => {
    render(<Intro />)
    const section = screen.getByRole('region', { name: /why you should/i })
    expect(section.className).toContain('bg-cover')
    expect(section.style.backgroundImage).toMatch(/picsum\.photos\/seed\/shanti-2\//)
  })
})
