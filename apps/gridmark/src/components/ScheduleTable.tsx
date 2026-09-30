import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { days, scheduleRows } from '../data/schedule'

/** Shared footer-cell classes: 16px bold th, 12px padding, top-aligned, 1px grid border. */
const monthCell = 'border border-line p-3 text-center align-top text-[16px] font-bold'

/** Month-nav link: black 16px regular, salmon hover, keyboard focus ring. */
const monthLink =
  'inline text-[16px] font-normal text-heading transition-colors duration-300 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60'

interface ClassCardProps {
  seed: number
  title: string
  time: string
}

function ClassCard({ seed, title, time }: ClassCardProps) {
  return (
    <>
      <div
        className="mx-auto mb-2 h-[90px] w-[90px] rounded-full bg-cover bg-center"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/gridmark-${seed}/180/180)`,
        }}
      />
      <a
        href="#"
        className="block text-[12px] font-normal text-accent transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
      >
        <strong className="font-semibold text-label">{title}</strong>
        <br />
        {time}
      </a>
    </>
  )
}

export function ScheduleTable() {
  return (
    <div className="overflow-x-auto">
      <table className="mb-4 w-full min-w-[1000px] border-collapse border border-line bg-surface text-center text-ink shadow-[0_5px_12px_-12px_rgba(0,0,0,0.29)]">
        <thead>
          <tr>
            {days.map((day) => (
              <th
                key={day}
                scope="col"
                className="border-none p-[30px] text-center align-bottom text-[14px] font-bold text-heading"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {scheduleRows.map((row, rowIndex) => (
            <tr key={rowIndex} className="mb-[10px]">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border border-line bg-surface p-[30px] text-center align-middle text-[14px] transition-colors duration-500 hover:bg-hover motion-reduce:transition-none"
                >
                  {cell ? (
                    <ClassCard seed={cell.seed} title={cell.title} time={cell.time} />
                  ) : (
                    <X aria-hidden="true" size={12} className="text-mark" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th className={monthCell}>
              <a href="#" className={monthLink}>
                <ArrowLeft aria-hidden="true" size={12} className="mr-1 inline" />
                September
              </a>
            </th>
            {Array.from({ length: 5 }, (_, index) => (
              <th key={index} className={monthCell} />
            ))}
            <th className={monthCell}>
              <a href="#" className={monthLink}>
                November
                <ArrowRight aria-hidden="true" size={12} className="ml-1 inline" />
              </a>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
