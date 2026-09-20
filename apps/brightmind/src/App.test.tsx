import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Brightmind — Education Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /No Nation Can Prosper In Life Without Education/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /I want to study/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Admission' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'What Our Students Says' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Experience Advisors' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Try our free trial course/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Courses' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent from Blog/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Latest Events' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Subscribe to our Newsletter/i }),
    ).toBeInTheDocument()
  })
})
