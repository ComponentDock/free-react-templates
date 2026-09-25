import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and footer', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByText('Michel Smith')).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { name: 'Key Account Manager' }).length,
    ).toBeGreaterThanOrEqual(1)
  })

  it('renders all section headings', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Portfolio' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About me' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Work Experience' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
