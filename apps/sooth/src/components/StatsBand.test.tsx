import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { StatsBand } from './StatsBand'

describe('StatsBand', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('shows all four counter labels', () => {
    render(<StatsBand />)
    expect(screen.getByText('Treatments Given')).toBeInTheDocument()
    expect(screen.getByText('Specialists')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Client Rating')).toBeInTheDocument()
  })

  it('animates counters up to their final formatted values', async () => {
    render(<StatsBand />)
    await waitFor(
      () => {
        expect(screen.getByText('20K+')).toBeInTheDocument()
        expect(screen.getByText('15+')).toBeInTheDocument()
        expect(screen.getByText('10+')).toBeInTheDocument()
        expect(screen.getByText('4.9')).toBeInTheDocument()
      },
      { timeout: 4000 },
    )
  })

  it('jumps straight to final values when requestAnimationFrame is unavailable', () => {
    vi.stubGlobal('requestAnimationFrame', undefined)
    render(<StatsBand />)
    expect(screen.getByText('20K+')).toBeInTheDocument()
    expect(screen.getByText('4.9')).toBeInTheDocument()
  })
})
