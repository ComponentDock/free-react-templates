import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('Plano')).toBeInTheDocument()
    expect(screen.getByText(/Interior Design Solution/)).toBeInTheDocument()
    expect(screen.getByText('Our Works')).toBeInTheDocument()
    expect(screen.getByText('Professional and creative mind')).toBeInTheDocument()
    expect(screen.getByText('@Instagram')).toBeInTheDocument()
    expect(screen.getByText(/Have any project or query/)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Plano — Interior Design Landing')
  })
})
