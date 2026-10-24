import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders three teasers with the Apartment category and their counts', () => {
    render(<Blog />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
    expect(screen.getAllByText('Apartment', { exact: false })).toHaveLength(3)
    expect(screen.getByRole('heading', { name: /Lights without darkness that said good/ })).toBeInTheDocument()
    expect(screen.getByText('2 comment')).toBeInTheDocument()
    expect(screen.getAllByText('0 like')).toHaveLength(3)
    expect(screen.getByText(/March 20, 2019/)).toBeInTheDocument()
    expect(screen.getByText('our')).toBeInTheDocument()
    expect(screen.getByText('blog')).toBeInTheDocument()
  })
})
