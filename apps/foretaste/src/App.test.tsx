import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('titles the document and renders the poster', () => {
    render(<App />)

    expect(document.title).toBe('Foretaste — Almost Here')
    expect(screen.getByTestId('shell')).toBeInTheDocument()
  })
})
