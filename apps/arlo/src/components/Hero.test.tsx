import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders a level-1 heading and blurb', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /I design & build digital experiences/i,
    )
    expect(screen.getByText(/full-stack developer and designer/i)).toBeInTheDocument()
  })

  it('renders CTA buttons to projects and contact', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /view my work/i })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('link', { name: /let's talk/i })).toHaveAttribute('href', '#contact')
  })
})
