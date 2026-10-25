import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Roles } from './Roles'
import { capabilityGroups, roles } from '../data'

describe('Roles', () => {
  it('renders the four role cards with their meta labels', () => {
    render(<Roles />)

    roles.forEach((role) => {
      expect(screen.getByRole('heading', { level: 3, name: role.title })).toBeInTheDocument()
      expect(screen.getByText(role.meta)).toBeInTheDocument()
    })
  })

  it('groups the capability matrix under the three documented headings', () => {
    render(<Roles />)

    const table = screen.getByRole('table')
    capabilityGroups.forEach((group) => {
      expect(within(table).getByText(group.name)).toBeInTheDocument()
    })
    expect(within(table).getByRole('caption')).toHaveTextContent(
      'What each role can do in Chalkline',
    )
  })

  it('uses four role columns in the reference order', () => {
    render(<Roles />)

    const headers = screen.getAllByRole('columnheader').map((node) => node.textContent)
    expect(headers.slice(0, 5)).toEqual([
      'Capability',
      'Learner',
      'Instructor',
      'Programme lead',
      'Administrator',
    ])
  })

  it('renders a check, a scoped label and a denial for the three cell kinds', () => {
    render(<Roles />)

    expect(screen.getAllByText('Full access').length).toBeGreaterThan(0)
    expect(screen.getAllByText('No access').length).toBeGreaterThan(0)
    expect(screen.getByText('logged, with reason')).toBeInTheDocument()
    expect(screen.getByText('two-person approval')).toBeInTheDocument()
  })

  it('defines all three cell states in the legend', () => {
    render(<Roles />)

    const legend = screen.getByText(/Scoped — the label states the limit/).closest('ul')!
    expect(within(legend).getByText('Full access')).toBeInTheDocument()
    expect(within(legend).getByText('No access')).toBeInTheDocument()
  })

  it('closes on the config-not-classes footnote', () => {
    render(<Roles />)

    expect(screen.getByText(/Roles are definitions in a config file/)).toBeInTheDocument()
  })
})
