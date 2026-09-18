import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhatWeOffer } from './WhatWeOffer'

describe('WhatWeOffer', () => {
  it('renders section title', () => {
    render(<WhatWeOffer />)
    expect(screen.getByText('What We Offer')).toBeInTheDocument()
  })

  it('renders 3 service cards', () => {
    render(<WhatWeOffer />)
    expect(screen.getByText('Building Construction')).toBeInTheDocument()
    expect(screen.getByText('Project Planning')).toBeInTheDocument()
    expect(screen.getByText('House Renovation')).toBeInTheDocument()
  })

  it('renders service images', () => {
    render(<WhatWeOffer />)
    expect(screen.getByRole('img', { name: 'Building Construction' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Project Planning' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'House Renovation' })).toBeInTheDocument()
  })
})
