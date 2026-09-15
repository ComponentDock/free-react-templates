import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Repertoire — Portfolio Template')
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the hero section with heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<App />)

    expect(screen.getByText(/Hi! I'm a Creative Designer/)).toBeInTheDocument()
    expect(screen.getByText('Welcome & Introduce')).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<App />)

    expect(screen.getAllByText('What I do?').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Here are some of my expertise')).toBeInTheDocument()
    // 'Branding' appears in both Services and Portfolio — use getAllByText
    expect(screen.getAllByText('Branding').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Web Design').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the portfolio section', () => {
    render(<App />)

    expect(screen.getByText('My Work')).toBeInTheDocument()
    expect(screen.getByText('Recent Work')).toBeInTheDocument()
  })

  it('renders the blog section', () => {
    render(<App />)

    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
  })

  it('renders the CTA section', () => {
    render(<App />)

    expect(screen.getByText('Get in Touch!')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact me!' })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)

    const componentDockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(componentDockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the sidebar with navigation', () => {
    const { container } = render(<App />)

    const aside = container.querySelector('aside')
    expect(aside).toBeInTheDocument()

    const nav = within(aside as HTMLElement).getByRole('navigation', { name: 'Main navigation' })
    expect(nav).toBeInTheDocument()
  })
})
