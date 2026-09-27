import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections with correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Daybreak — Portfolio Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    expect(screen.getByRole('group', { name: 'Portfolio filters' })).toBeInTheDocument()
    const portfolioList = screen.getByRole('list', { name: 'Portfolio items' })
    expect(portfolioList).toBeInTheDocument()
    expect(portfolioList.querySelectorAll('[role="listitem"]')).toHaveLength(6)

    expect(screen.getByRole('heading', { level: 2, name: 'The Story' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Dreamers' })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
