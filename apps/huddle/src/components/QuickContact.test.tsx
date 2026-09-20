import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QuickContact } from './QuickContact'

describe('QuickContact', () => {
  it('renders Where, When, and Email sections', () => {
    render(<QuickContact />)
    expect(screen.getByText('Where')).toBeInTheDocument()
    expect(screen.getByText('When')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('renders contact details', () => {
    render(<QuickContact />)
    expect(screen.getByText('Vancouver, Canada')).toBeInTheDocument()
    expect(screen.getByText('April 17 – 21, 2025')).toBeInTheDocument()
    expect(screen.getByText('info@huddle.com')).toBeInTheDocument()
  })
})
