import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Expertise } from './Expertise'

describe('Expertise', () => {
  it('renders heading and all four service cards', () => {
    render(<Expertise />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('More Expertise')
    expect(screen.getByText('Labor and Employment')).toBeInTheDocument()
    expect(screen.getByText('Corporate & Civil Litigation')).toBeInTheDocument()
    expect(screen.getByText('Intellectual Property Law')).toBeInTheDocument()
    expect(screen.getByText('Criminal Prosecution and Defense')).toBeInTheDocument()
  })

  it('renders Learn More links for each card', () => {
    render(<Expertise />)

    const links = screen.getAllByText('Learn More')
    expect(links.length).toBeGreaterThanOrEqual(4)
  })
})
