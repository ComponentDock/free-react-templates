import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections with correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Scholarly — Education Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Scholarly University/)

    expect(screen.getByText('The Best University Of The State')).toBeInTheDocument()
    expect(screen.getAllByText('Campus Life').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Graduation')).toBeInTheDocument()
    expect(screen.getByText('Apply for Admission')).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
