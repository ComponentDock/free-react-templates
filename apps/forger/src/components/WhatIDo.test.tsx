import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhatIDo } from './WhatIDo'

describe('WhatIDo', () => {
  it('renders the heading', () => {
    render(<WhatIDo />)
    expect(
      screen.getByRole('heading', { name: /Strategy, design and a bit of magic/i }),
    ).toBeInTheDocument()
  })

  it('shows 3 service columns', () => {
    render(<WhatIDo />)
    expect(screen.getByRole('heading', { name: 'Explore' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Create' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Learn' })).toBeInTheDocument()
  })

  it('lists service items', () => {
    render(<WhatIDo />)
    expect(screen.getByText('Design Sprints')).toBeInTheDocument()
    expect(screen.getByText('UX/UI Design')).toBeInTheDocument()
    expect(screen.getByText('Prototyping')).toBeInTheDocument()
  })
})
