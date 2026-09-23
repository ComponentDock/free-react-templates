import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero heading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /the greatest law firm/i }),
    ).toBeInTheDocument()
  })

  it('renders subtext', () => {
    render(<Hero />)
    expect(screen.getByText(/trusted team of legal professionals/i)).toBeInTheDocument()
  })

  it('renders Read More button', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /read more/i })
    expect(link).toHaveAttribute('href', '#practice-areas')
  })

  it('renders background image', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')!
    expect(section.style.backgroundImage).toContain('picsum.photos')
  })
})
