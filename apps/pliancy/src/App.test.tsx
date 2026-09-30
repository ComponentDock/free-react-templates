import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Pliancy — Responsive Orders Table Template')
  })

  it('renders the gradient page shell with the spec geometry', () => {
    const { container } = render(<App />)
    const shell = container.firstElementChild as HTMLElement
    expect(shell.className).toContain('min-h-screen')
    expect(shell.className).toContain('flex')
    expect(shell.className).toContain('flex-col')
    // 45deg blue-violet → magenta diagonal gradient (design token)
    expect(shell.className).toContain('bg-[linear-gradient(45deg,#4158d0,#c850c0)]')
    // padding: 33px vertical / 30px horizontal (15px sides at ≤576px)
    expect(shell.className).toContain('py-[33px]')
    expect(shell.className).toContain('px-[30px]')
    expect(shell.className).toContain('max-[576px]:px-[15px]')
    // Open Sans drives all table typography
    expect(shell.className).toContain('font-open-sans')
  })

  it('centers a 1170px content column holding the orders table', () => {
    render(<App />)
    const main = screen.getByRole('main')
    expect(main.className).toContain('w-full')
    expect(main.className).toContain('max-w-[1170px]')
    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('renders the Component Dock footer attribution', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
