import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Discover } from './Discover'

describe('Discover', () => {
  it('renders the Discover our App column with a Read more link', () => {
    render(<Discover />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Discover our App')
    expect(screen.getByRole('link', { name: 'Read more' })).toHaveAttribute('href', '#features')
  })

  it('renders the Do more with our app checklist with four items', () => {
    render(<Discover />)

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Do more with our app')
    for (const title of ['Communication', 'Scheduling', 'Messages', 'Live Chat']) {
      expect(screen.getByRole('heading', { level: 4, name: title })).toBeInTheDocument()
    }
  })
})
