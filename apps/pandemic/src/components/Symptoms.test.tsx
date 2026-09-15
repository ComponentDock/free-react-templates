import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Symptoms } from './Symptoms'

describe('Symptoms', () => {
  it('renders the heading', () => {
    render(<Symptoms />)
    expect(screen.getByRole('heading', { name: /symptoms/i })).toBeInTheDocument()
  })

  it('renders all four symptom cards', () => {
    render(<Symptoms />)
    expect(screen.getByText('High Fever')).toBeInTheDocument()
    expect(screen.getByText('Cough')).toBeInTheDocument()
    expect(screen.getByText('Sore Throat')).toBeInTheDocument()
    expect(screen.getByText('Headache')).toBeInTheDocument()
  })

  it('renders descriptions for each symptom', () => {
    render(<Symptoms />)
    expect(screen.getByText(/sustained fever/i)).toBeInTheDocument()
    expect(screen.getByText(/persistent dry cough/i)).toBeInTheDocument()
    expect(screen.getByText(/pain or irritation/i)).toBeInTheDocument()
    expect(screen.getByText(/recurring headaches/i)).toBeInTheDocument()
  })
})
