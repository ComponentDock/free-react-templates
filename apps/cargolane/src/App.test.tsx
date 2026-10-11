import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in order with landmark semantics', () => {
    const { container } = render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We Make Shipping')
    const sections = container.querySelectorAll('main > section')
    expect(sections).toHaveLength(10)
    expect(sections[0]?.id).toBe('home')
    expect(sections[1]?.id).toBe('about')
    expect(sections[2]?.id).toBe('how-it-works')
    expect(sections[3]?.id).toBe('team')
    expect(sections[4]?.id).toBe('services')
    expect(sections[5]?.id).toBe('industries')
    expect(sections[6]?.id).toBe('video')
    expect(sections[7]?.id).toBe('testimonials')
    expect(sections[8]?.id).toBe('blog')
    expect(sections[9]?.id).toBe('contact')
    expect(document.title).toBe('Cargolane — Logistics & Freight Company')
  })
})
