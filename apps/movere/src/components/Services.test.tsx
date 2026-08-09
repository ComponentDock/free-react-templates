import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and all six service cards', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { name: 'Moving Solutions for Every Need' }),
    ).toBeInTheDocument()
    for (const title of [
      'Local Moving',
      'Long Distance',
      'Commercial Moving',
      'Packing Services',
      'Storage Solutions',
      'Specialty Items',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
      expect(screen.getByText(new RegExp(`${title.slice(0, 4)}`))).toBeInTheDocument()
    }
  })
})
