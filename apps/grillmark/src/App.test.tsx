import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Grillmark — Steakhouse Restaurant Template')
  })
})
