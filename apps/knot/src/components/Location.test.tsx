import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Location } from './Location'
import {
  addressColumns,
  locationAddress,
  locationPhone,
  locationTitle,
  mapEmbedTitle,
} from '../data'

describe('Location', () => {
  it('renders the map embed and the venue card', () => {
    render(<Location />)
    expect(screen.getByRole('heading', { level: 2, name: locationTitle })).toBeInTheDocument()
    expect(screen.getByTitle(mapEmbedTitle)).toBeInTheDocument()
    expect(screen.getByText(locationAddress)).toBeInTheDocument()

    const phone = screen.getByRole('link', { name: locationPhone })
    const expectedHref = 'tel:' + locationPhone.replace(/[^\d+]/g, '')
    expect(phone).toHaveAttribute('href', expectedHref)
    expect(phone.className).toContain('text-brand')
  })

  it('renders the two address columns', () => {
    render(<Location />)
    for (const column of addressColumns) {
      expect(screen.getByRole('heading', { name: column.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('4:00p – 12:00p')).toHaveLength(2)
    expect(screen.getAllByText('The Secret Shrine Club')).toHaveLength(2)
  })
})
