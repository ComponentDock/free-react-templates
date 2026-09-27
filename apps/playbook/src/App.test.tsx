import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Playbook — Portfolio & Creative Agency Template')

    expect(screen.getByRole('navigation')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/We are Playbook/)

    expect(screen.getByText('What We Do')).toBeInTheDocument()
    expect(screen.getByText('Recent Blog Posts')).toBeInTheDocument()
    expect(screen.getByText('Start a Project.')).toBeInTheDocument()
    expect(screen.getByText(/Playbook\. All rights reserved/)).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
