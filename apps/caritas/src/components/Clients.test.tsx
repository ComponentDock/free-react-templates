import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Clients } from './Clients'
import { CLIENT_NAMES, CLIENTS_TITLE } from '../data'

describe('Clients', () => {
  it('renders the centered title and 5 client wordmarks', () => {
    render(<Clients />)

    expect(screen.getByRole('region', { name: 'Clients' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: new RegExp(CLIENTS_TITLE) }),
    ).toBeInTheDocument()

    const items = screen.getByRole('list')
    expect(items.querySelectorAll('li')).toHaveLength(5)
    for (const name of CLIENT_NAMES) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
