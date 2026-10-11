import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtext, search form, and browse chips', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Exploreyour amazing city')
    expect(
      screen.getByText('Find great places to stay, eat, shop, or visit from local experts'),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Keyword search')).toHaveAttribute(
      'placeholder',
      'Ex: food, service, hotel',
    )
    expect(screen.getByLabelText('Where')).toHaveValue('San Francisco USA')
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByText('Or browse the highlights')).toBeInTheDocument()
    for (const chip of ['Restaurant', 'Hotel', 'Places', 'Shopping']) {
      expect(screen.getByText(chip)).toBeInTheDocument()
    }
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('reports the submitted keyword and destination', () => {
    render(<Hero />)
    fireEvent.change(screen.getByLabelText('Keyword search'), { target: { value: ' sushi ' } })
    fireEvent.change(screen.getByLabelText('Where'), { target: { value: 'Paris Italy' } })
    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByRole('status')).toHaveTextContent('Showing results for sushi in Paris Italy')
  })

  it('ignores a blank keyword submission', () => {
    render(<Hero />)
    fireEvent.change(screen.getByLabelText('Keyword search'), { target: { value: '   ' } })
    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})
