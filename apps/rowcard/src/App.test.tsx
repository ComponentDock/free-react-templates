import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page shell with heading and table', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Table #4' })).toBeInTheDocument()
    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('renders the demo rows', () => {
    render(<App />)
    for (const name of ['Elena Marsh', 'Theo Brandt', 'Priya Nair', 'Marcus Webb']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders the gray page shell with light body weight and centered container', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('text-xl', 'font-medium', 'text-ink', 'mb-12')
    const shell = heading.closest('.min-h-screen')
    expect(shell).not.toBeNull()
    expect(shell).toHaveClass('bg-page', 'font-light')
    const main = screen.getByRole('main')
    expect(main).toHaveClass('py-28', 'max-w-[540px]', 'min-[1200px]:max-w-[1140px]')
  })

  it('renders a subtle blurb line under every occupation', () => {
    render(<App />)
    const smalls = document.querySelectorAll('tbody small')
    expect(smalls).toHaveLength(4)
    for (const small of smalls) {
      expect(small).toHaveClass('block', 'text-subtle', 'text-[0.8em]')
      expect(small.textContent).toBeTruthy()
    }
  })

  it('renders Component Dock footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Rowcard — Data Table Template')
  })
})
