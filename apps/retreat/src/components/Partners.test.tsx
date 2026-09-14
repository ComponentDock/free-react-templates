import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Partners } from './Partners'

describe('Partners', () => {
  it('renders 5 partner logos', () => {
    render(<Partners />)
    expect(screen.getByText('Partner One')).toBeInTheDocument()
    expect(screen.getByText('Partner Two')).toBeInTheDocument()
    expect(screen.getByText('Partner Three')).toBeInTheDocument()
    expect(screen.getByText('Partner Four')).toBeInTheDocument()
    expect(screen.getByText('Partner Five')).toBeInTheDocument()
  })
})
