import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'

export default function ({ title, date }) {
  return (
    <div className="w-52 bg-slate-400 p-1">
      <p className="my-1 mr-32 inline text-2xl">{title}</p>
      <FontAwesomeIcon icon={faPen} className="mx-1" />
      <FontAwesomeIcon icon={faTrash} className="mx-1" />
      <p className="text-sm">{date}</p>
    </div>
  )
}
