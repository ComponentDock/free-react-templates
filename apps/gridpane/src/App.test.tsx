import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page shell with heading and paneled table', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Table #5' })).toBeInTheDocument()
    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('renders the demo rows', () => {
    render(<App />)
    for (const name of ['James Yates', 'Matthew Wasil', 'Sampson Murphy', 'Gaspar Semenov']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders the WHITE page shell with light body weight and centered container', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('text-xl', 'font-medium', 'text-ink', 'mb-12')
    const shell = heading.closest('.min-h-screen')
    expect(shell).not.toBeNull()
    expect(shell).toHaveClass('bg-page', 'font-light')
    const main = screen.getByRole('main')
    expect(main).toHaveClass('py-28', 'max-w-[540px]', 'min-[1200px]:max-w-[1140px]')
  })

  it('renders the gray rounded panel wrapper around the table on the white page', () => {
    render(<App />)
    const panel = document.querySelector('.bg-panel')
    expect(panel).not.toBeNull()
    expect(panel).toHaveClass('rounded-[4px]', 'p-5', 'overflow-x-auto')
  })

  it('ships exactly one dimmed checked row on initial load (row 2)', () => {
    render(<App />)
    const dimmed = document.querySelectorAll('tbody tr.opacity-40')
    expect(dimmed).toHaveLength(1)
    expect(screen.getByRole('checkbox', { name: 'Select row Matthew Wasil' })).toBeChecked()
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
    expect(document.title).toBe('Gridpane — Data Table Template')
  })
})
