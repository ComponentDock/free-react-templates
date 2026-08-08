import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes all sections with the expected landmarks and title', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(document.title).toBe('Bastion — Architecture Template')
  })

  it('renders the full section set in order', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading').map((heading) => heading.textContent ?? '')
    const joined = headings.join(' | ')
    expect(joined).toMatch(/Exterior Building/)
    expect(screen.getByText('Finished Projects')).toBeInTheDocument()
    expect(joined).toMatch(/Services/)
    expect(joined).toMatch(/Get started/)
    expect(joined).toMatch(/Portfolio/)
    expect(joined).toMatch(/Clients Says/)
    expect(joined).toMatch(/Basic Plan/)
    expect(joined).toMatch(/Contact Us/)
  })
})
