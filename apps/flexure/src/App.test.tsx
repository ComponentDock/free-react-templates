import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Flexure — Responsive Employee Directory Template')
  })

  it('renders the solid pale-periwinkle page shell with the spec geometry', () => {
    const { container } = render(<App />)
    const shell = container.firstElementChild as HTMLElement
    expect(shell.className).toContain('min-h-screen')
    expect(shell.className).toContain('bg-page')
    expect(shell.className).toContain('font-poppins')
    // SOLID #c4d3f6 page (not a gradient) — no small-viewport padding override
    expect(shell.className).not.toContain('max-[576px]')
  })

  it('centers a 960px rounded content column holding the employee grid', () => {
    render(<App />)
    const centering = screen.getByRole('main').parentElement as HTMLElement
    expect(centering.className).toContain('flex-1')
    expect(centering.className).toContain('items-center')
    expect(centering.className).toContain('justify-center')
    expect(centering.className).toContain('px-[30px]')
    expect(centering.className).toContain('py-[33px]')
    const main = screen.getByRole('main')
    expect(main.className).toContain('w-full')
    expect(main.className).toContain('max-w-[960px]')
    expect(main.className).toContain('rounded-[10px]')
    expect(main.className).toContain('overflow-hidden')
    expect(main.className).not.toContain('shadow')
    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('renders the Component Dock footer attribution', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
