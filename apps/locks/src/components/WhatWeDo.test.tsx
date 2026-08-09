import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhatWeDo } from './WhatWeDo'

describe('WhatWeDo', () => {
  it('renders the heading and four cards on the dark band', () => {
    render(<WhatWeDo />)
    expect(screen.getByRole('heading', { name: /what we do/i })).toBeInTheDocument()
    for (const title of [
      'Hair Style',
      'Trimming',
      'Traditional Haircuts Mens',
      'Hair Style for Womens',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
