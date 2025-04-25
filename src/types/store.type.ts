export type currentUserType = {
  id: string;
  username: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
  avatar: string;
  provider: string;
  providerId: string;
} | null;

export interface userStoreType {
  currentUser: currentUserType;
  setCurrentUser: (val: currentUserType) => void;
}
