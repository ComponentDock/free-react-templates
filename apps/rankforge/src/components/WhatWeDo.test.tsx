import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhatWeDo } from './WhatWeDo'

describe('WhatWeDo', () => {
  it('renders the heading and three service cards', () => {
    render(<WhatWeDo />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'What We Will Do For Your Business' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'Link Building' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Content Marketing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'On Page SEO' })).toBeInTheDocument()

    const links = screen.getAllByRole('link', { name: /get started/i })
    expect(links).toHaveLength(3)
  })
})
