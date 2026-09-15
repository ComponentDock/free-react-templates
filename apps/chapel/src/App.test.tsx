import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Chapel — Church Event Template')
  })
})
