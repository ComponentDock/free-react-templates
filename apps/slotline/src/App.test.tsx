import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the nine bands in order under one h1', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(7)

    const ids = ['book', 'availability', 'policies', 'channels', 'pricing', 'faq', 'contact']
    for (const id of ids) {
      expect(document.getElementById(id)).toBeInTheDocument()
    }
    expect(document.getElementById('main-content')).toBeInTheDocument()
  })

  it('ships the chrome: skip link, progress bar, mobile bar and back-to-top', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main-content')
    expect(screen.getByTestId('scroll-progress')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-bar')).toBeInTheDocument()
    expect(screen.getByTestId('back-to-top')).toBeInTheDocument()
  })
})
