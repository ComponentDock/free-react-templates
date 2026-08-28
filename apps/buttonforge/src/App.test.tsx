import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /button #05/i })).toBeInTheDocument()
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /dropdown buttons/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /group buttons/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /checkboxes/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /radios buttons/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /slide button/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /social buttons/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })

  it('renders solid buttons section', () => {
    render(<App />)
    const likeButtons = screen.getAllByRole('button', { name: /like/i })
    expect(likeButtons.length).toBeGreaterThanOrEqual(1)
  })

  it('renders outline buttons section', () => {
    render(<App />)
    const defaults = screen.getAllByRole('button', { name: /default/i })
    expect(defaults.length).toBeGreaterThanOrEqual(4)
  })

  it('renders action buttons', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /watch photos/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument()
  })
})
