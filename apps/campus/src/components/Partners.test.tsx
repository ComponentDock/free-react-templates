import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Partners } from './Partners'
import { partnerCount, partnerLabel, partnersLabel } from '../data'

describe('Partners', () => {
  it('renders five partner logo links', () => {
    render(<Partners />)

    expect(screen.getByRole('region', { name: partnersLabel })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(partnerCount)
    for (let index = 0; index < partnerCount; index += 1) {
      expect(screen.getByRole('link', { name: partnerLabel(index) })).toBeInTheDocument()
    }
  })

  it('uses the seeded placeholder images', () => {
    render(<Partners />)
    const images = document.querySelectorAll('img')
    expect(images).toHaveLength(partnerCount)
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/campus-partner-1/260/80')
  })
})
