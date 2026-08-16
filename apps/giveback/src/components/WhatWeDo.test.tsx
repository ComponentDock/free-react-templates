import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhatWeDo } from './WhatWeDo'
import { whatWeDo } from '../data'

describe('WhatWeDo', () => {
  it('shows the label, heading, copy, and outline CTA', () => {
    render(<WhatWeDo />)
    expect(screen.getByText(whatWeDo.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: whatWeDo.title })).toBeInTheDocument()
    expect(screen.getByText(whatWeDo.paragraph)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: whatWeDo.cta })).toHaveAttribute('href', '#contact')
  })

  it('renders the section photo', () => {
    render(<WhatWeDo />)
    expect(screen.getByAltText(/volunteer helping/i)).toHaveAttribute('src', whatWeDo.image)
  })
})
