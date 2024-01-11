import { useState, useContext } from 'react';
import './Header.css';
import { useRouteMatch, useHistory } from 'react-router-dom';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { TiMediaPlayReverse } from 'react-icons/ti';
import ScanApplications from '../../pages/ScanApplications/ScanApplications';
import DateRange from '../DateRange/DateRange';
import { useUserDetails } from '../../hooks/useQueryHooks/useUserDetails';
import { TimeStateContext } from '../../App';
import banner from '../../assets/images/banner.svg';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {
  const { timeState, setTimeState } = useContext(TimeStateContext);
  const userId = localStorage.getItem('UserId');
  const { data: userData, status: userStatus } = useUserDetails(userId);
  const department = userData?.userData?.usersCstm.department;
  const userCM = userStatus === 'success' && department === 'cm';
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState();
  const [scanapplicationcm, setScanapplicationcm] = useState(false)

  const handleModalOpen = () => {
    setModalOpen(true);

  };

  const match = useRouteMatch({
    path: '/applications',
    strict: true,
    sensitive: true,
  });

  const matchApp = useRouteMatch({
    path: `/applications/:applicationNo/not_admin/edit`,
    strict: true,
    sensitive: true,
  });
  const matchApp1 = useRouteMatch({
    path: `/applications/:applicationNo/legal/edit`,
    strict: true,
    sensitive: true,
  });
  const matchApp2 = useRouteMatch({
    path: `/applications/:applicationNo/audit/edit`,
    strict: true,
    sensitive: true,
  });
  const matchApp3 = useRouteMatch({
    path: `/applications/:applicationNo/rcu/edit`,
    strict: true,
    sensitive: true,
  });
  const matchApp4 = useRouteMatch({
    path: `/applications/:applicationNo/technical/edit`,
    strict: true,
    sensitive: true,
  });
  const matchApp5 = useRouteMatch({
    path: `/applications/:applicationNo/ops/edit`,
    strict: true,
    sensitive: true,
  });
  const matchApp6 = useRouteMatch({
    path: `/applications/:applicationNo/deviator/edit`,
    strict: true,
    sensitive: true,
  });
  const matchApp7 = useRouteMatch({
    path: `/applications/:applicationNo/cm/edit`,
    strict: true,
    sensitive: true,
  });

  const matchApp9 = useRouteMatch({
    path: `/applications/:applicationNo/not_admin/view-only`,
    strict: true,
    sensitive: true,
  });
  const matchApp10 = useRouteMatch({
    path: `/applications/:applicationNo/legal/view-only`,
    strict: true,
    sensitive: true,
  });
  const matchApp11 = useRouteMatch({
    path: `/applications/:applicationNo/audit/view-only`,
    strict: true,
    sensitive: true,
  });
  const matchApp12 = useRouteMatch({
    path: `/applications/:applicationNo/rcu/view-only`,
    strict: true,
    sensitive: true,
  });
  const matchApp13 = useRouteMatch({
    path: `/applications/:applicationNo/technical/view-only`,
    strict: true,
    sensitive: true,
  });
  const matchApp14 = useRouteMatch({
    path: `/applications/:applicationNo/ops/view-only`,
    strict: true,
    sensitive: true,
  });
  const matchApp15 = useRouteMatch({
    path: `/applications/:applicationNo/deviator/view-only`,
    strict: true,
    sensitive: true,
  });
  const matchApp16 = useRouteMatch({
    path: `/applications/:applicationNo/cm/view-only`,
    strict: true,
    sensitive: true,
  });

  const username = localStorage.getItem('fullname');
  const history = useHistory();
  const renderTooltip = (props) => <Tooltip {...props}>{ }</Tooltip>;
  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-primary text-light mb-1 p-2">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex" id="navbarText">
            <div>
              {(matchApp || matchApp1 || matchApp2 || matchApp3 || matchApp4 || matchApp5 || matchApp6 || matchApp7
                || matchApp9 || matchApp10 || matchApp11 || matchApp12 || matchApp13 || matchApp14 || matchApp15 || matchApp16)
                ?.isExact && (
                  <button className="btn btn-primary rounded rounded-pill shadow-lg" onClick={history.goBack}>
                    <div><TiMediaPlayReverse /> Back</div>
                  </button>
                )}
            </div>

            <div className="d-flex" style={{ marginLeft: '40%' }}>
              <div><img src={banner} style={{ height: "5rem" }} /></div>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            {match?.isExact && userCM && (
              <button className="btn btn-light mx-5 text-primary rounded-5" onClick={() => { handleModalOpen(); setScanapplicationcm(true) }}>
                <DocumentScannerIcon /> <span className="mx-3 fw-bold">Scan Application</span>
              </button>
            )}
            {!(matchApp || matchApp1 || matchApp2 || matchApp3 || matchApp4 || matchApp5 || matchApp6 || matchApp7)
              ?.isExact && (
                <div className="rounded me-5 contain">
                  <span className="searchicon text-primary" style={{ pointerEvents: 'none' }}>
                    <FaRegCalendarAlt />
                  </span>
                  <DateRange timeState={timeState} setTimeState={setTimeState} />
                  <span className="searchicon-right text-primary" style={{ pointerEvents: 'none' }}>
                    <IoIosArrowDown />
                  </span>
                </div>
              )}
            <div className='colorback'>
              <p className='names'><b>Logged In As:</b> {username}</p>
              <p className='role11'><b> Current role:  </b>{department === "operations" ? "Maker" : department}</p>
            </div>

          </div>
        </div>
      </nav>

      <ScanApplications modalOpen={modalOpen} setModalOpen={setModalOpen} setValue={setValue} value={value} scanapplicationcm={scanapplicationcm} setScanapplicationcm={setScanapplicationcm} />
    </header>
  );
};

export default Header;
