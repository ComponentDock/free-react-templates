import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the sidebar', () => {
    render(<App />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  it('renders the gallery', () => {
    render(<App />)
    expect(screen.getByTestId('gallery')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
