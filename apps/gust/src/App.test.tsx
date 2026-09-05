import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the weather dropdown and footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Gust — Weather Dropdown Template')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Weather Forecast')
    expect(screen.getByRole('button', { name: /today's weather/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
