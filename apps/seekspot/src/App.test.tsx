import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('SeekSpot — Search Form Bar Widget')
  })

  it('composes the search bar and footer', () => {
    render(<App />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Search Form\/Bar/)

    expect(screen.getByRole('textbox', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /clear search/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })

  it('has a light gray background', () => {
    const { container } = render(<App />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.className).toContain('bg-[#f5f5f5]')
  })
})
