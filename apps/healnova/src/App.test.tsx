import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Healnova — Medical Website Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getAllByRole('heading', { name: /We Provide High Solutions for Your Health/i }),
    ).toHaveLength(2)
    expect(screen.getByText('Give us a call')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /We Are Happy To Serve You!/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Health Services We Provided/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Dedicated Doctors/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Happy Patients/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /News & Updates/i })).toBeInTheDocument()
  })
})
