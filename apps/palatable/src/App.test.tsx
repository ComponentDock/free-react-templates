import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    const palatableTexts = screen.getAllByText('Palatable')
    expect(palatableTexts.length).toBeGreaterThanOrEqual(1)
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByLabelText('Hero carousel')).toBeInTheDocument()
    expect(screen.getByLabelText('Top categories')).toBeInTheDocument()
    expect(screen.getByLabelText('Best recipes')).toBeInTheDocument()
    expect(screen.getByLabelText('Call to action')).toBeInTheDocument()
    expect(screen.getByLabelText('Small recipes list')).toBeInTheDocument()
    expect(screen.getByLabelText('Quote, newsletter and advertisement')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram gallery')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
