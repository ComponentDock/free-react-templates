import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Memoir — Lifestyle Blog')
  })

  it('composes the sidebar, blog list, pagination and widgets', () => {
    render(<App />)
    expect(screen.getByRole('complementary')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Memoir/i })).toBeInTheDocument()
    expect(screen.getAllByRole('article').length).toBe(12)
    expect(screen.getByRole('button', { name: 'Page 1' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Categories' })).toBeInTheDocument()
  })
})
