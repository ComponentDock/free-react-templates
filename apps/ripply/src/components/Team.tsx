/* Four team member cards (source repeats the same name — varied here). */
const MEMBERS = [
  { name: 'ROBERTO PE', role: 'Developer', seed: 'ripply-team-1' },
  { name: 'AMELIA JONES', role: 'Designer', seed: 'ripply-team-2' },
  { name: 'LIAM CHEN', role: 'Marketer', seed: 'ripply-team-3' },
  { name: 'SOPHIA KIM', role: 'Support', seed: 'ripply-team-4' },
]

export function Team() {
  return (
    <section className="bg-white px-[15px] py-[100px]">
      <div className="mx-auto max-w-[1140px] text-center">
        <h2 className="font-display text-[30px] font-bold uppercase text-ink">Team Member</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-[14px] text-body">
          The people behind Ripply — passionate builders who care about your success.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-[1140px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {MEMBERS.map((member) => (
          <div key={member.name} className="text-center">
            <img
              src={`https://picsum.photos/seed/${member.seed}/400/450`}
              alt={member.name}
              className="mx-auto h-[300px] w-full rounded-[12px] object-cover"
            />
            <h4 className="mt-5 text-[18px] font-medium text-ink">{member.name}</h4>
            <p className="mt-1 text-[14px] text-body">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
