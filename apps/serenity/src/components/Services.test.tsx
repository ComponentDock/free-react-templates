import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('shows the Services label', () => {
    render(<Services />)
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('renders the four service cards', () => {
    render(<Services />)
    for (const title of ['Aromatherapy', 'Skin Care', 'Herbal Spa', 'Body Massage']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
