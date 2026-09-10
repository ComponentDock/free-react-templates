import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CarModels } from './CarModels'

describe('CarModels', () => {
  it('renders the heading and three car cards', () => {
    render(<CarModels />)

    expect(screen.getByText('Choose your Desired Car Model')).toBeInTheDocument()

    for (const name of ['Audi 3000 msi', 'BMW X5', 'Toyota Camry']) {
      expect(screen.getAllByRole('heading', { name }).length).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getAllByText('Book This Car Now').length).toBeGreaterThanOrEqual(3)
  })

  it('displays car prices and specs', () => {
    render(<CarModels />)

    expect(screen.getAllByText('$149/day').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('$199/day').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('$129/day').length).toBeGreaterThanOrEqual(1)

    expect(screen.getAllByText('Capacity: 4 Person').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Capacity: 5 Person').length).toBeGreaterThanOrEqual(1)
  })

  it('navigates the mobile carousel via dots', async () => {
    const user = userEvent.setup()
    render(<CarModels />)

    // First dot should be active by default
    const dots = screen.getAllByRole('button', { name: /Go to car/ })
    expect(dots).toHaveLength(3)
    expect(dots[0]).toHaveClass('bg-brand')
    expect(dots[1]).toHaveClass('bg-gray-300')

    // Click second dot
    await user.click(dots[1]!)
    expect(dots[1]).toHaveClass('bg-brand')
    expect(dots[0]).toHaveClass('bg-gray-300')
  })
})
