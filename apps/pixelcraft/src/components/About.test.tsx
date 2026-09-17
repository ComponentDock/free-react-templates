import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section number and title', () => {
    render(<About />)
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText('Crafters')).toBeInTheDocument()
  })

  it('renders team member cards', () => {
    render(<About />)
    const names = ['Alex Morgan', 'Sarah Chen', 'Marcus Lee']
    for (const name of names) {
      expect(screen.getByRole('heading', { level: 4, name })).toBeInTheDocument()
    }
  })

  it('renders team positions', () => {
    render(<About />)
    expect(screen.getByText('Creative Director')).toBeInTheDocument()
    expect(screen.getByText('Lead Developer')).toBeInTheDocument()
    expect(screen.getByText('UX Designer')).toBeInTheDocument()
  })

  it('renders timeline years', () => {
    render(<About />)
    for (const year of ['2001', '2008', '2012', '2016']) {
      expect(screen.getByText(year)).toBeInTheDocument()
    }
  })

  it('renders about text content', () => {
    render(<About />)
    expect(screen.getByText(/We are a creative agency that believes/i)).toBeInTheDocument()
  })
})
