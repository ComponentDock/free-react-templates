import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Amber — Barber Shop Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Best Barber in your Town/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Experienced and Traditional Stylish Barber Shop/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /our service/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Gallery' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Watch the Video How we Work\?/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Cutter Masters' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'How to Find Us' })).toBeInTheDocument()
  })
})
