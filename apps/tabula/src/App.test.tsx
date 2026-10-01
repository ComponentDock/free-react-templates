import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Tabula — Collapsible Data-Table Template')
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
    expect(shell.className).toContain('text-muted')
  })

  it('gives the content area 7em vertical padding inside a responsive container', () => {
    render(<App />)
    const section = screen.getByRole('main').querySelector('section')
    expect(section?.className).toContain('py-[7em]')
    const container = section?.querySelector('div')
    expect(container?.className).toContain('mx-auto')
    expect(container?.className).toContain('px-[15px]')
    expect(container?.className).toContain('min-[576px]:max-w-[540px]')
    expect(container?.className).toContain('min-[768px]:max-w-[720px]')
    expect(container?.className).toContain('min-[992px]:max-w-[960px]')
    expect(container?.className).toContain('min-[1200px]:max-w-[1140px]')
  })

  it('renders exactly one "Table #08" h2 at 28px regular weight in a centered half-width wrapper with 1.5rem margin', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings).toHaveLength(1)
    const heading = headings[0] as HTMLElement
    expect(heading).toHaveTextContent('Table #08')
    expect(heading.className).toContain('text-[28px]')
    expect(heading.className).toContain('font-normal')
    expect(heading.className).toContain('leading-[1.5]')
    expect(heading.className).toContain('text-heading')
    const wrapper = heading.parentElement as HTMLElement
    expect(wrapper.className).toContain('text-center')
    expect(wrapper.className).toContain('mb-6')
    expect(wrapper.className).toContain('min-[768px]:w-1/2')
    const row = wrapper.parentElement as HTMLElement
    expect(row.className).toContain('flex')
    expect(row.className).toContain('justify-center')
  })

  it('renders exactly one "Collapsible Table" h3 subheading at 20px regular weight with 1.5rem margin', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(1)
    const heading = headings[0] as HTMLElement
    expect(heading).toHaveTextContent('Collapsible Table')
    expect(heading.className).toContain('text-xl')
    expect(heading.className).toContain('font-normal')
    expect(heading.className).toContain('leading-[1.5]')
    expect(heading.className).toContain('text-heading')
    const wrapper = heading.parentElement as HTMLElement
    expect(wrapper.className).toContain('text-center')
    expect(wrapper.className).toContain('mb-6')
  })

  it('renders the product table and the Component Dock footer', () => {
    render(<App />)
    expect(screen.getByRole('table')).toBeInTheDocument()
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
