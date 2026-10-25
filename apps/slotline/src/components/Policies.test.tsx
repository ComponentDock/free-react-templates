import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Policies } from '../components/Policies'
import { policies } from '../content'

describe('Policies', () => {
  it('renders the four rungs in escalation order', () => {
    render(<Policies />)
    for (const rung of policies.rungs) {
      expect(screen.getByText(rung.pill)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: rung.title })).toBeInTheDocument()
      expect(screen.getByText(rung.body)).toBeInTheDocument()
    }
    expect(screen.getByText('Full price').className).toContain('bg-gray-900')
  })

  it('lists the six settings with their values', () => {
    render(<Policies />)
    for (const setting of policies.settings) {
      expect(screen.getByText(setting.label)).toBeInTheDocument()
      expect(screen.getByText(setting.value)).toBeInTheDocument()
    }
    expect(screen.getByText(policies.closing)).toBeInTheDocument()
  })
})
