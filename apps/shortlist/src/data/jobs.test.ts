import { describe, expect, it } from 'vitest'
import { COMPONENT_DOCK_URL, JOBS, MODE_STYLES, initialSavedIds } from './jobs'

describe('jobs data', () => {
  it('ships four hiring notices with unique ids and hash targets', () => {
    expect(JOBS).toHaveLength(4)
    expect(new Set(JOBS.map((job) => job.id)).size).toBe(4)

    JOBS.forEach((job) => {
      expect(job.id).toMatch(/^job-[a-z-]+$/)
      expect(job.href).toBe(`#${job.id}`)
      expect(job.initials).toHaveLength(2)
      expect(job.logoColor).toMatch(/^#[0-9a-f]{6}$/)
      expect(job.skills.length).toBeGreaterThanOrEqual(3)
    })
  })

  it('opens with exactly one job already shortlisted', () => {
    expect(initialSavedIds()).toEqual(['job-product-manager-patient-app'])
  })

  it('names all three work modes and gives each a token pair', () => {
    expect(Object.keys(MODE_STYLES)).toEqual(['remote', 'hybrid', 'office'])
    expect(JOBS.map((job) => job.mode.variant)).toEqual(['remote', 'hybrid', 'remote', 'office'])
    expect(MODE_STYLES.remote).toBe('bg-lime text-lime-ink')
    expect(MODE_STYLES.hybrid).toBe('bg-hybrid text-hybrid-ink')
    expect(MODE_STYLES.office).toBe('bg-office text-office-ink')
  })

  it('keeps three annual ranges and one hourly rate, each with an en dash', () => {
    const hourly = JOBS.filter((job) => job.pay.suffix === '/ hour')
    expect(hourly).toHaveLength(1)
    expect(hourly[0]!.contract).toBe('Contract')
    expect(hourly[0]!.pay.amount).toBe('$65 – $80')

    JOBS.filter((job) => job.pay.suffix === '/ year').forEach((job) => {
      expect(job.pay.amount).toContain('–')
      expect(job.contract).toBe('Full-time')
    })

    expect(JOBS.map((job) => job.pay.amount)).toEqual([
      '€78k – €95k',
      '£70k – £85k',
      '$65 – $80',
      '€48k – €56k',
    ])
  })

  it('credits Component Dock at the canonical URL', () => {
    expect(COMPONENT_DOCK_URL).toBe('https://www.componentdock.com/')
  })
})
