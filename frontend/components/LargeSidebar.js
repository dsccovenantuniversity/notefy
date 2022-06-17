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
    <aside className="navbar-large fixed top-0 left-0 hidden h-screen w-44 bg-slate-500 pl-3 pt-3">
      <div className="block">
        <FontAwesomeIcon className="mt-14 mr-8 inline" icon={faFolder} />
        <span>All notes</span>
      </div>
      <div className="block">
        <FontAwesomeIcon className="mt-10 mr-8" icon={faLock} />
        <span>Locked notes</span>
      </div>
      <div className="block">
        <FontAwesomeIcon className="mt-10 mr-8" icon={faUser} />
        <span>Shared notes</span>
      </div>
      <div className="block">
        <FontAwesomeIcon className="mt-10 mr-8" icon={faTrashCan} />
        <span>Recycle bin</span>
      </div>
      <div className="block">
        <FontAwesomeIcon className="mt-10 mr-8" icon={faGear} />
        <span>Settings</span>
      </div>
    </aside>
  )
}
