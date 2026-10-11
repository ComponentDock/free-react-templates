import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the heading and the shared uppercase subtitle', () => {
    render(<SectionTitle title="Special offers" />)
    expect(screen.getByRole('heading', { level: 2, name: 'Special offers' })).toBeInTheDocument()
    expect(screen.getByText('take a look at these offers')).toBeInTheDocument()
  })
})
