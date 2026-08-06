import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and the three service cards', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { level: 2, name: /IT solutions for startup and enterprises/ }),
    ).toBeInTheDocument()
    for (const title of ['Managed IT services', 'Backup and recovery', 'Cyber security']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
