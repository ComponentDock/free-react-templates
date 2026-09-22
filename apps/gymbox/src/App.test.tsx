import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections with correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('GymBox — Fitness & Gym Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const headings = screen.getAllByRole('heading')
    expect(headings.length).toBeGreaterThan(5)
  })
})
