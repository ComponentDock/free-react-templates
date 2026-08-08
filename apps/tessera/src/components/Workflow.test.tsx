import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Workflow } from './Workflow'

describe('Workflow', () => {
  it('shows the heading and the three steps', () => {
    render(<Workflow />)
    expect(screen.getByRole('heading', { level: 2, name: /Our Work Flow/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /Perfectly Design/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /Carefully Planned/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /Smartly Execute/ })).toBeInTheDocument()
  })
})
