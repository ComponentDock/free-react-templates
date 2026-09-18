import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Automotive Manufacturing')).toBeInTheDocument()
    expect(screen.getByText('Heavy Industry Market')).toBeInTheDocument()
    expect(screen.getByText('Industry Analysis')).toBeInTheDocument()
  })

  it('renders arrow buttons for each service', () => {
    render(<Services />)
    const links = screen.getAllByRole('link', { name: /learn more/i })
    expect(links).toHaveLength(3)
  })
})
