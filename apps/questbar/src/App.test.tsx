import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the QuestBar heading and search component', () => {
    render(<App />)

    expect(document.title).toBe('QuestBar — Search Form Component')

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/QuestBar/)
  })

  it('renders the QuestBar search form', () => {
    render(<App />)

    expect(screen.getByRole('textbox', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
