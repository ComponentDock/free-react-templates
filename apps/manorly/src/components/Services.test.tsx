import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders four service cards, repeating Design & Build as the reference does', () => {
    render(<Services />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4)
    expect(screen.getAllByText('Design & Build')).toHaveLength(2)
    expect(screen.getByRole('heading', { name: 'House Planning' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'House Build' })).toBeInTheDocument()
    expect(screen.getByText('our')).toBeInTheDocument()
    expect(screen.getByText('services')).toBeInTheDocument()
  })
})
