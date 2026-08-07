import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders five brand placeholders', () => {
    render(<Clients />)

    expect(screen.getAllByRole('listitem')).toHaveLength(5)
    expect(screen.getByText('ARQ')).toBeInTheDocument()
    expect(screen.getByText('KOMO')).toBeInTheDocument()
  })
})
