import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DedicatedServer } from './DedicatedServer'

describe('DedicatedServer', () => {
  it('renders heading and description', () => {
    render(<DedicatedServer />)
    expect(screen.getByText(/Dedicated/)).toBeInTheDocument()
    expect(screen.getByText(/Secured Server/)).toBeInTheDocument()
    expect(screen.getByText(/Our dedicated servers/)).toBeInTheDocument()
  })
})
