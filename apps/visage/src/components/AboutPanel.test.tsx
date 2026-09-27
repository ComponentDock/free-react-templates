import { render, screen } from '@testing-library/react'
import { AboutPanel } from './AboutPanel'

describe('AboutPanel', () => {
  it('renders the job title', () => {
    render(<AboutPanel />)
    expect(screen.getByText('HTML5 & CSS Developer')).toBeInTheDocument()
  })

  it('renders the name heading', () => {
    render(<AboutPanel />)
    expect(screen.getByText('Jeremy Smith')).toBeInTheDocument()
  })

  it('renders the description section', () => {
    render(<AboutPanel />)
    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(screen.getByText(/Passionate frontend developer/)).toBeInTheDocument()
  })

  it('renders skill loaders', () => {
    render(<AboutPanel />)
    expect(screen.getByText('Intuition')).toBeInTheDocument()
    expect(screen.getByText('Creativity')).toBeInTheDocument()
    expect(screen.getByText('Pure Luck')).toBeInTheDocument()
    expect(screen.getByText('Awesomeness')).toBeInTheDocument()
  })
})
