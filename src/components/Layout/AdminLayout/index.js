import HeaderAD from "../../HeaderAD";
import SideBarAD from "../../SideBarAD";
import "./AdminLayout.css"

function AdminLayout({children}) {
    return (
      <div className="wrapAD">
        <HeaderAD />
        <div className="wrapper-body">
          <div className="sidebarAD">
            <SideBarAD />
          </div>
          <div className="contentAD">{children}</div>
        </div>
      </div>
    );
}

export default AdminLayout;