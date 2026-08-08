import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the four metrics with their values', () => {
    render(<Stats />)

    expect(screen.getByText('1M+')).toBeInTheDocument()
    expect(screen.getByText('Developers')).toBeInTheDocument()
    expect(screen.getByText('50B+')).toBeInTheDocument()
    expect(screen.getByText('API Calls/mo')).toBeInTheDocument()
    expect(screen.getByText('99.999%')).toBeInTheDocument()
    expect(screen.getByText('Uptime')).toBeInTheDocument()
    expect(screen.getByText('200+')).toBeInTheDocument()
    expect(screen.getByText('SDKs')).toBeInTheDocument()
  })
})
