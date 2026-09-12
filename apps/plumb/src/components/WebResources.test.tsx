import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WebResources } from './WebResources'

describe('WebResources', () => {
  it('renders the heading and stats', () => {
    render(<WebResources />)

    expect(screen.getByRole('heading', { level: 2, name: 'Web Resources' })).toBeInTheDocument()
    expect(screen.getByText('99%')).toBeInTheDocument()
    expect(screen.getByText('20391')).toBeInTheDocument()
    expect(screen.getByText('Success rate')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
  })

  it('renders the checklist items', () => {
    render(<WebResources />)

    expect(screen.getByText('Far far away, behind the word mountains')).toBeInTheDocument()
    expect(screen.getByText('Separated they live in Bookmarksgrove')).toBeInTheDocument()
    expect(screen.getByText('Live the blind texts')).toBeInTheDocument()
  })

  it('renders the Contact us button', () => {
    render(<WebResources />)

    expect(screen.getByRole('link', { name: 'Contact us' })).toBeInTheDocument()
  })

  it('renders the illustration image', () => {
    render(<WebResources />)

    expect(screen.getByRole('img', { name: 'Web resources illustration' })).toBeInTheDocument()
  })
})
