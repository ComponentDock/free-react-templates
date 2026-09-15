import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Pandemic — Health Information Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /stay safe/i })).toBeInTheDocument()
    expect(screen.getByText('14,112,077')).toBeInTheDocument()
    expect(screen.getByText(/what is coronavirus/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /how to prevent/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /how to protect yourself/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^symptoms$/i, level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /news & articles/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^about$/i, level: 2 })).toBeInTheDocument()
  })
})
