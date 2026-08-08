import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading, category filters, and all service cards with prices', () => {
    render(<Services />)

    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Service Menu' })).toBeInTheDocument()

    for (const filter of ['All', 'Haircuts', 'Beard', 'Coloring', 'Kids']) {
      expect(screen.getByRole('button', { name: filter })).toBeInTheDocument()
    }

    const expectedServices = [
      ['Classic Haircut', '$35'],
      ['Skin Fade', '$40'],
      ['Buzz Cut', '$25'],
      ['Long Hair Cut', '$45'],
      ['Beard Trim', '$25'],
      ['Hot Towel Shave', '$45'],
      ['Beard Design', '$35'],
      ['Grey Blending', '$50'],
      ['Full Color', '$75'],
      ['Kids Haircut (Under 12)', '$25'],
      ['Teen Cut (12-17)', '$30'],
    ]
    for (const [name, price] of expectedServices) {
      expect(screen.getByText(name!)).toBeInTheDocument()
      expect(screen.getAllByText(price!).length).toBeGreaterThan(0)
    }
  })

  it('filters the service list when a category is activated', async () => {
    const user = userEvent.setup()
    render(<Services />)

    await user.click(screen.getByRole('button', { name: 'Beard' }))
    expect(screen.getByText('Beard Trim')).toBeInTheDocument()
    expect(screen.getByText('Hot Towel Shave')).toBeInTheDocument()
    expect(screen.queryByText('Classic Haircut')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Kids' }))
    expect(screen.getByText('Kids Haircut (Under 12)')).toBeInTheDocument()
    expect(screen.queryByText('Skin Fade')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getByText('Classic Haircut')).toBeInTheDocument()
    expect(screen.getByText('Full Color')).toBeInTheDocument()
  })
})
