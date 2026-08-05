import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders a bordered strip with six client wordmarks', () => {
    render(<Brands />)

    const list = screen.getByRole('list', { name: 'Trusted by leading companies' })
    expect(within(list).getAllByRole('listitem')).toHaveLength(6)

    for (const name of ['Nexora', 'Vantum', 'Brightly', 'Orbitix', 'Lumina', 'Keystone']) {
      expect(within(list).getByText(name)).toBeInTheDocument()
    }
  })
})
