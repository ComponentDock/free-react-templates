import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { SERVICES } from '../data'

describe('Services', () => {
  it('renders the heading, paragraphs, photo, and full checklist', () => {
    render(<Services />)

    expect(screen.getByRole('region', { name: 'List Of Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(SERVICES.heading)
    for (const paragraph of SERVICES.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
    expect(screen.getByRole('img', { name: 'Legal services' })).toHaveAttribute(
      'src',
      SERVICES.photo,
    )
    for (const item of SERVICES.items) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('listitem').length).toBe(SERVICES.items.length)
  })
})