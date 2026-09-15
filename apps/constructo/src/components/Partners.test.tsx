import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Partners } from './Partners'

describe('Partners', () => {
  it('renders section title', () => {
    render(<Partners />)
    expect(screen.getByText('Our Partners')).toBeInTheDocument()
  })

  it('renders partner logos', () => {
    render(<Partners />)
    expect(screen.getByText('BuildCo')).toBeInTheDocument()
    expect(screen.getByText('StructPro')).toBeInTheDocument()
    expect(screen.getByText('ConcretePlus')).toBeInTheDocument()
    expect(screen.getByText('SteelWorks')).toBeInTheDocument()
    expect(screen.getByText('ArchDesign')).toBeInTheDocument()
  })
})
