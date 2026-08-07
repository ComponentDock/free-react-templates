import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Work } from './Work'

describe('Work', () => {
  it('renders the heading, project cards, and View All Projects button', () => {
    render(<Work />)

    expect(screen.getByRole('heading', { name: /Our Done Projects/ })).toBeInTheDocument()
    const list = screen.getByRole('list')
    const items = within(list).getAllByRole('listitem')
    expect(items).toHaveLength(3)
    expect(items[0]).toHaveTextContent('California Mega Mall')
    expect(items[1]).toHaveTextContent('Commercial Building')
    expect(items[2]).toHaveTextContent('Miami Private Apartment')
    expect(screen.getByRole('link', { name: /View All Projects/ })).toBeInTheDocument()
  })
})
