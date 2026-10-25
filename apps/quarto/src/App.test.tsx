import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page chrome: skip link, header, main and footer landmarks', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('walks the five bands in the reference order', () => {
    render(<App />)

    const headings = screen.getAllByRole('heading').map((node) => node.tagName)
    expect(headings).toEqual([
      'H1', // hero
      'H2', // notebook card
      'H2', // work
      'H3',
      'H3', // the two project cards
      'H2', // about
      'H2', // experience
      'H3',
      'H3',
      'H3', // the three timeline rows
      'H2', // contact
    ])
  })

  it('renders exactly one h1 and the notebook aside', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('complementary', { name: 'A few things about me' })).toBeInTheDocument()
  })
})
