export default function ({ title, date }) {
  return (
    <div className="w-52 bg-slate-400 p-1 text-left">
      <p className="my-1 mr-32 inline text-2xl">{title}</p>
      <p className="mt-1.5 text-sm">{date}</p>
    </div>
  )
}
