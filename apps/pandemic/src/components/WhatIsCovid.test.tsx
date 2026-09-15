import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhatIsCovid } from './WhatIsCovid'

describe('WhatIsCovid', () => {
  it('renders the heading and description', () => {
    render(<WhatIsCovid />)
    expect(screen.getByText(/what is coronavirus/i)).toBeInTheDocument()
    expect(screen.getByText(/infectious disease/i)).toBeInTheDocument()
  })

  it('renders all four tip cards', () => {
    render(<WhatIsCovid />)
    expect(screen.getByText('Protection')).toBeInTheDocument()
    expect(screen.getByText('Prevention')).toBeInTheDocument()
    expect(screen.getByText('Treatments')).toBeInTheDocument()
    expect(screen.getByText('Symptoms')).toBeInTheDocument()
  })

  it('renders descriptions for each tip', () => {
    render(<WhatIsCovid />)
    expect(screen.getByText(/protect yourself and your family/i)).toBeInTheDocument()
    expect(screen.getByText(/follow recommended prevention/i)).toBeInTheDocument()
    expect(screen.getByText(/available treatments/i)).toBeInTheDocument()
    expect(screen.getByText(/early symptoms/i)).toBeInTheDocument()
  })
})
