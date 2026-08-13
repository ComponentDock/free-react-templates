import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesRow } from './ServicesRow'
import { services } from '../data'

describe('ServicesRow', () => {
  it('renders the three icon blocks with titles and blurbs', () => {
    render(<ServicesRow />)

    for (const service of services) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.text)).toBeInTheDocument()
    }
  })
})
