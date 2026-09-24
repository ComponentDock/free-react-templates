import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QuickContact } from './QuickContact'

describe('QuickContact', () => {
  it('renders phone, email, and address contact items', () => {
    render(<QuickContact />)
    expect(screen.getByText('Give us a call')).toBeInTheDocument()
    expect(screen.getByText('1-999-123-4567')).toBeInTheDocument()
    expect(screen.getByText('Send us a message')).toBeInTheDocument()
    expect(screen.getByText('info@healnova.com')).toBeInTheDocument()
    expect(screen.getByText('Visit us')).toBeInTheDocument()
    expect(screen.getByText('2918 Medical Center Drive')).toBeInTheDocument()
  })
})
