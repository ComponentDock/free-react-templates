import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the dark page shell with heading and table', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Table #6' })).toBeInTheDocument()
    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('renders the seven demo rows', () => {
    render(<App />)
    expect(screen.getAllByText('James Yates')).toHaveLength(1)
    expect(screen.getAllByText('Matthew Wasil')).toHaveLength(2)
    expect(screen.getAllByText('Sampson Murphy')).toHaveLength(2)
    expect(screen.getAllByText('Gaspar Semenov')).toHaveLength(2)
  })

  it('renders the dark plum-charcoal shell with light body weight and centered container', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('text-xl', 'font-medium', 'text-heading', 'mb-12')
    const shell = heading.closest('.min-h-screen')
    expect(shell).not.toBeNull()
    expect(shell).toHaveClass('bg-page', 'font-light')
    const main = screen.getByRole('main')
    expect(main).toHaveClass('py-28', 'max-w-[540px]', 'min-[1200px]:max-w-[1140px]')
  })

  it('renders the faint sub-blurb under every occupation', () => {
    render(<App />)
    const smalls = document.querySelectorAll('tbody small')
    expect(smalls).toHaveLength(7)
    for (const small of smalls) {
      expect(small).toHaveClass('block', 'text-faint', 'text-[0.8em]')
      expect(small.textContent).toBeTruthy()
    }
  })

  it('renders Component Dock footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Nightgrid — Dark Data Table Template')
  })
})
