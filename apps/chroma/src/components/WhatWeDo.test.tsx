import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhatWeDo } from './WhatWeDo'

describe('WhatWeDo', () => {
  it('renders the heading and the six service cards', () => {
    render(<WhatWeDo />)

    expect(screen.getByRole('heading', { level: 2, name: 'What We Do' })).toBeInTheDocument()

    for (const title of [
      'Brand Identity',
      'Illustration',
      'Web Design',
      'Product Strategy',
      'UI/UX Design',
      'Mobile Development',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
