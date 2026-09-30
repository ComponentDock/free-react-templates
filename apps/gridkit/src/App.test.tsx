import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Gridkit — Minimal Data Table Template')
  })

  it('renders the light blue-gray page shell with body typography', () => {
    const { container } = render(<App />)
    const shell = container.firstElementChild as HTMLElement
    expect(shell.className).toContain('min-h-screen')
    expect(shell.className).toContain('bg-page')
    expect(shell.className).toContain('font-poppins')
    expect(shell.className).toContain('text-base')
    expect(shell.className).toContain('leading-[1.8]')
    expect(shell.className).toContain('font-normal')
    expect(shell.className).toContain('text-body-ink')
  })

  it('gives the content area 7em vertical padding inside a responsive container', () => {
    render(<App />)
    const section = screen.getByRole('main').querySelector('section')
    expect(section?.className).toContain('py-[7em]')
    const container = section?.querySelector('div')
    expect(container?.className).toContain('mx-auto')
    expect(container?.className).toContain('w-full')
    expect(container?.className).toContain('px-[15px]')
    expect(container?.className).toContain('min-[576px]:max-w-[540px]')
    expect(container?.className).toContain('min-[768px]:max-w-[720px]')
    expect(container?.className).toContain('min-[992px]:max-w-[960px]')
    expect(container?.className).toContain('min-[1200px]:max-w-[1140px]')
  })

  it('renders the centered "Table #01" heading at 28px regular weight', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Table #01')
    expect(heading.className).toContain('text-[28px]')
    expect(heading.className).toContain('font-normal')
    expect(heading.className).toContain('leading-[1.5]')
    expect(heading.className).toContain('text-heading')
    const wrapper = heading.parentElement as HTMLElement
    expect(wrapper.className).toContain('text-center')
    expect(wrapper.className).toContain('mb-12')
    expect(wrapper.className).toContain('min-[768px]:w-1/2')
  })

  it('renders the directory table and the Component Dock footer', () => {
    render(<App />)
    expect(screen.getByRole('table')).toBeInTheDocument()
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
