import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Mission } from './Mission'
import {
  MISSION_COUNTERS,
  MISSION_HEADING,
  MISSION_PARAGRAPH_1,
  MISSION_PARAGRAPH_2,
  VIDEO_LABEL,
} from '../data'

describe('Mission', () => {
  it('renders the mission heading, paragraphs, and video popup link', () => {
    render(<Mission />)
    expect(screen.getByRole('heading', { level: 2, name: MISSION_HEADING })).toBeInTheDocument()
    expect(screen.getByText(MISSION_PARAGRAPH_1)).toBeInTheDocument()
    expect(screen.getByText(MISSION_PARAGRAPH_2)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: VIDEO_LABEL })).toBeInTheDocument()
  })

  it('renders all four stat counters with values and captions', () => {
    render(<Mission />)
    for (const counter of MISSION_COUNTERS) {
      expect(screen.getByText(counter.value)).toBeInTheDocument()
      expect(screen.getByText(counter.caption)).toBeInTheDocument()
    }
  })
})
