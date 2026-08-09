import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Defense } from './Defense'

describe('Defense', () => {
  it('renders the kicker, heading, blurb and six capability cards', () => {
    render(<Defense />)
    expect(screen.getByText('Solutions')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Complete Cyber Defense' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Endpoint Detection & Response' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Cloud Security' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Identity Protection' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Threat Intelligence' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Vulnerability Management' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Incident Response' })).toBeInTheDocument()
  })
})
