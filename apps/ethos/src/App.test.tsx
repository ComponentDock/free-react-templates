import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Ethos — Education Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Find Online Courses That Suit You/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Welcome to Ethos' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Education is Life' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Popular Courses' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Teachers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe' })).toBeInTheDocument()
  })
})
