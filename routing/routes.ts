import { ROUTES } from './constants';

import Applications from '../pages/Applications/Applications';
import ApplicationById from '../pages/ApplicationById/ApplicationById';
import DeviationRequest from '../pages/Deviation/DeviationRequest';
import Approvers from '../pages/ApproverScreen/Approvers';
import PageRedirect from '../pages/PageRedirect';
import OPERATION from '../pages/Operation/Operation';
import TECHNICAL from '../pages/Technical/Technical';
import ADMIN from '../pages/AdminPanel/Admin';
import VIEW from '../pages/ViewOnly/ViewPage';
import RmdrouteAttachement from '../pages/ApproverScreen/RmdrouteAttachement';
import ExternalAudit from '../pages/ExternalAuditor/ExternalAudit';
export const routes = [
  {
    path: ROUTES.PAGEREDIRECT,
    Component: PageRedirect,
    exact: true,
  },

  {
    path: ROUTES.APPLICATIONS,
    Component: Applications,
    exact: true,
  },
  {
    path: ROUTES.APPLICATIONBYID,
    Component: ApplicationById,
    exact: true,
  },
  {
    path: ROUTES.APPROVERS,
    Component: Approvers,
    exact: true,
  },
  {
    path: ROUTES.DEVIATION,
    Component: DeviationRequest,
    exact: true,
  },
  {
    path: ROUTES.EXTERNALAUDIT,
    Component: ExternalAudit,
    exact: true,
  },
  {
    path: ROUTES.OPERATION,
    Component: OPERATION,
    exact: true,
  },
  {
    path: ROUTES.TECHNICAL,
    Component: TECHNICAL,
    exact: true,
  },
  {
    path: ROUTES.ADMIN,
    Component: ADMIN,
    exact: true,
  },
  {
    path: ROUTES.VIEW,
    Component: VIEW,
    exact: true,
  },

  {
    path: ROUTES.RMDROUTEATTACHEMENT,
    Component: RmdrouteAttachement,
    exact: true,
  },
];
