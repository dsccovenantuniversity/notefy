import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGear,
  faUser,
  faLock,
  faTrashCan,
  faFolder,
} from '@fortawesome/free-solid-svg-icons'

export default function () {
  return (
    <aside className="navbar-small fixed left-0 top-0 z-20 h-full w-12 bg-slate-500 pl-3 pt-3">
      <FontAwesomeIcon className="mt-14 block" icon={faFolder} />
      <FontAwesomeIcon className="mt-10 block" icon={faLock} />
      <FontAwesomeIcon className="mt-10 block" icon={faUser} />
      <FontAwesomeIcon className="mt-10 block" icon={faTrashCan} />
      <FontAwesomeIcon className="mt-10 block" icon={faGear} />
    </aside>
  )
}
