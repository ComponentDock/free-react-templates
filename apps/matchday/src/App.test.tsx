import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders every template section in order', () => {
    const { container } = render(<App />)
    expect(container.querySelector('header')).toBeInTheDocument()
    const main = container.querySelector('main')
    expect(main).toBeInTheDocument()
    const sections = Array.from(main!.querySelectorAll(':scope > section'))
    expect(sections.length).toBe(8)

    expect(screen.getByRole('link', { name: 'Matchday FC — home' })).toBeInTheDocument()
    expect(screen.getByTestId('countdown-days')).toHaveTextContent('2')
    expect(screen.getByText('Breaking News')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest results' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Upcoming events' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest games' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Team players' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Michael Brooks' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest news' })).toBeInTheDocument()
    expect(screen.getByText('football club?')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title and links Component Dock in the footer', () => {
    render(<App />)
    expect(document.title).toBe('Matchday — Football Club Template')
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
