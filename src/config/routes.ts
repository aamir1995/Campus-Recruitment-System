import { Routes } from '@angular/router';

import { Containers, HomeContainer, SigninContainer, SignupContainer, RootContainer, ResumeContainer, JobsContainer, CandidatesContainer } from '../containers';
import { Components } from "../components";

// import AuthGuard service which will help to prevent users from entering homepage without authentication
import { AuthGuardService } from '../providers/index';

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  , { path: "home", component: HomeContainer, canActivate: [AuthGuardService] }
  , { path: "signin", component: SigninContainer }
  , { path: "signup", component: SignupContainer }
  , { path: "resume", component: ResumeContainer }
  , { path: "jobposting", component: JobsContainer }
  , { path: "appliedCandidates/:id", component: CandidatesContainer }
];

export const ApplicationComponents: any[] = [
  Containers
  , Components
];